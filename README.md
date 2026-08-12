# АвтоВикуп Харків

Адаптивний сайт сервісу термінового викупу автомобілів у Харкові та області. Користувач може ознайомитися з послугами, прочитати корисні статті, залишити заявку на оцінку та одразу зателефонувати з мобільного пристрою.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-087ea4?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=white)

## Можливості

- Адаптивна головна сторінка та навігація для телефонів, планшетів і ноутбуків.
- Каталог із шістьма напрямами автовикупу та окремими сторінками послуг.
- SEO-блог із динамічними сторінками статей.
- Форма оцінки авто з клієнтською і серверною валідацією.
- Надсилання нових заявок у Telegram через App Router Route Handler.
- Інформативне Telegram-повідомлення з джерелом заявки та кнопкою копіювання номера.
- Стани завантаження, помилки й анімоване повідомлення про успішне надсилання форми.
- Власні сторінки 404, 500 і глобальної помилки.
- Плаваюча кнопка дзвінка, клікабельний номер, Telegram, WhatsApp і TikTok.
- Сторінка політики конфіденційності та посилання «На головну» у внутрішніх розділах.
- Оптимізація зовнішніх зображень Unsplash через `next/image` із візуальним fallback.

## Технології

- [Next.js 16](https://nextjs.org/) з App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) для іконок
- Telegram Bot API для отримання заявок

## Локальний запуск

Потрібен Node.js 20.9 або новіший та npm. Рекомендовано використовувати актуальну LTS-версію Node.js.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Після запуску сайт буде доступний за адресою [http://localhost:3000](http://localhost:3000).

## Змінні середовища

Заповніть у корені проєкту файл `.env.local`:

```dotenv
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

- `TELEGRAM_BOT_TOKEN` — токен, отриманий у `@BotFather`.
- `TELEGRAM_CHAT_ID` — ID користувача, групи або каналу, куди бот надсилатиме заявки.

Для групи додайте бота до групи та надайте йому право надсилати повідомлення. Після зміни локальних змінних перезапустіть `npm run dev`.

> Не додавайте `.env.local` або реальні ключі до Git. У репозиторії має зберігатися лише `.env.example` з безпечними заглушками.

## Команди

```bash
npm run dev       # локальна розробка
npm run lint      # ESLint
npm run typecheck # перевірка TypeScript
npm run build     # production-збірка через Webpack
npm run start     # запуск готової production-збірки
npm run check     # усі перевірки перед деплоєм
```

## Основні маршрути

| Маршрут | Призначення |
| --- | --- |
| `/` | Головна сторінка |
| `/posluhy` | Каталог послуг |
| `/posluhy/[slug]` | Сторінки окремих послуг |
| `/blog` | Список статей |
| `/blog/[slug]` | Повний текст статті |
| `/chomu-my` | Переваги та відгуки |
| `/faq` | Часті запитання |
| `/kontakty` | Контакти, карта та форма |
| `/privacy` | Політика конфіденційності |
| `/api/lead` | POST endpoint для надсилання заявки в Telegram |

## Структура проєкту

```text
src/
├── app/                  # сторінки, layout, Route Handler і error UI
│   ├── api/lead/         # серверне надсилання заявки в Telegram
│   ├── blog/             # каталог і динамічні сторінки статей
│   └── posluhy/          # каталог і сторінки послуг
├── components/           # форми, header, footer та спільні UI-компоненти
└── data/                 # дані блогу й централізовані контакти
```

## Перевірка перед деплоєм

```bash
npm ci
npm run check
```

Після успішної збірки за потреби перевірте production-режим локально командою `npm run start`. Окремо протестуйте:

- усі посилання та мобільне меню;
- дзвінок через `tel:` на телефоні;
- завантаження картинок послуг;
- валідну й невалідну форму;
- отримання тестової заявки в потрібному Telegram-чаті;
- сторінку 404 через неіснуючий URL.

## Деплой на Vercel

1. Імпортуйте Git-репозиторій у Vercel як Next.js-проєкт.
2. У **Project Settings → Environment Variables** додайте `TELEGRAM_BOT_TOKEN` і `TELEGRAM_CHAT_ID` для Production та Preview.
3. Залиште стандартні команди: Build Command — `npm run build`, Install Command — `npm install` або `npm ci`.
4. Запустіть деплой і після публікації відправте тестову заявку.

Сайт не можна публікувати як повністю статичний export, оскільки `/api/lead` потребує серверного середовища для безпечної роботи з Telegram-токеном.
