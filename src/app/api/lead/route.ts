type LeadPayload = {
  car: string;
  year: string;
  phone: string;
  source: string;
};

type TelegramResponse = {
  ok?: boolean;
  description?: string;
};

function getLeadPayload(value: unknown): LeadPayload | null {
  if (!value || typeof value !== "object") return null;

  const body = value as Record<string, unknown>;
  const car = typeof body.car === "string" ? body.car.trim() : "";
  const year = typeof body.year === "string" ? body.year.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const source = typeof body.source === "string" ? body.source.trim() : "";

  if (!car || !phone) return null;
  if (car.length > 120 || year.length > 20 || phone.length > 50 || source.length > 200) {
    return null;
  }

  return { car, year, phone, source };
}

function escapeMarkdown(value: string) {
  return value.replace(/([\\_*[\]()`])/g, "\\$1");
}

function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, "");

  if (digits.length === 12 && digits.startsWith("380")) return `+${digits}`;
  if (digits.length === 10 && digits.startsWith("0")) return `+38${digits}`;
  if (digits.length === 9) return `+380${digits}`;

  return value.startsWith("+") ? `+${digits}` : value;
}

function formatPhone(value: string) {
  const match = value.match(/^\+380(\d{2})(\d{3})(\d{2})(\d{2})$/);

  if (!match) return value;
  return `+38 (0${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
}

function getSourceLabel(source: string) {
  const labels: Record<string, string> = {
    "/": "Головна сторінка",
    "/blog": "Блог",
    "/chomu-my": "Чому ми",
    "/faq": "FAQ",
    "/kontakty": "Контакти",
    "/posluhy": "Каталог послуг",
  };

  if (labels[source]) return `${labels[source]} (${source})`;
  if (source.startsWith("/blog/")) return `Стаття блогу (${source})`;
  if (source.startsWith("/posluhy/")) return `Сторінка послуги (${source})`;
  return source || "Не визначено";
}

export async function POST(request: Request) {
  let requestBody: unknown;

  try {
    requestBody = await request.json();
  } catch {
    return Response.json({ error: "Некоректний формат запиту." }, { status: 400 });
  }

  const lead = getLeadPayload(requestBody);

  if (!lead) {
    return Response.json(
      { error: "Вкажіть марку автомобіля та номер телефону." },
      { status: 400 },
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Telegram lead handler: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing.");
    return Response.json(
      { error: "Сервіс надсилання тимчасово не налаштований." },
      { status: 500 },
    );
  }

  const normalizedPhone = normalizePhone(lead.phone);
  const formattedPhone = formatPhone(normalizedPhone);
  const submittedAt = new Intl.DateTimeFormat("uk-UA", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Kyiv",
  }).format(new Date());
  const leadId = Date.now().toString(36).toUpperCase();

  const message = [
    "🚘 *НОВА ЗАЯВКА НА АВТОВИКУП*",
    `🆔 *Номер заявки:* #${leadId}`,
    "━━━━━━━━━━━━━━━━━━",
    "",
    "🚗 *АВТОМОБІЛЬ*",
    `▫️ *Марка / модель:* ${escapeMarkdown(lead.car)}`,
    `▫️ *Рік випуску:* ${escapeMarkdown(lead.year || "Не вказано")}`,
    "",
    "👤 *КОНТАКТНІ ДАНІ*",
    `📞 *Телефон:* ${escapeMarkdown(formattedPhone)}`,
    `🔗 *Номер для дзвінка:* ${escapeMarkdown(normalizedPhone)}`,
    "",
    "📍 *ДЕТАЛІ ЗАЯВКИ*",
    `🕒 *Отримано:* ${escapeMarkdown(submittedAt)}`,
    `🌐 *Джерело:* ${escapeMarkdown(getSourceLabel(lead.source))}`,
    "",
    "━━━━━━━━━━━━━━━━━━",
    "⚡ _Клієнт очікує на дзвінок протягом 5 хвилин._",
  ].join("\n");

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "📋 Скопіювати номер",
                  copy_text: { text: normalizedPhone },
                },
              ],
            ],
          },
        }),
        cache: "no-store",
      },
    );

    const telegramResult = (await telegramResponse
      .json()
      .catch(() => null)) as TelegramResponse | null;

    if (!telegramResponse.ok || telegramResult?.ok === false) {
      console.error(
        "Telegram lead handler error:",
        telegramResult?.description ?? telegramResponse.statusText,
      );
      return Response.json(
        { error: "Не вдалося надіслати заявку. Спробуйте ще раз." },
        { status: 500 },
      );
    }

    return Response.json({ success: true });
  } catch {
    console.error("Telegram lead handler request failed.");
    return Response.json(
      { error: "Не вдалося надіслати заявку. Спробуйте ще раз." },
      { status: 500 },
    );
  }
}
