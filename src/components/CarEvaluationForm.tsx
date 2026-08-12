"use client";

import {
  ArrowRight,
  Banknote,
  Check,
  CircleAlert,
  LoaderCircle,
  PhoneCall,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import Link from "next/link";
import { type CSSProperties, type FormEvent, useEffect, useRef, useState } from "react";
import { PHONE_HREF } from "../data/contact";

type FormValues = {
  car: string;
  year: string;
  phone: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

type Notification = {
  type: "success" | "error";
  title: string;
  message: string;
};

const initialValues: FormValues = {
  car: "",
  year: "",
  phone: "",
};

function validateField(field: keyof FormValues, value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    const messages: Record<keyof FormValues, string> = {
      car: "Ой, вкажіть марку та модель автомобіля.",
      year: "Будь ласка, вкажіть рік випуску авто.",
      phone: "Залиште номер телефону, щоб ми могли вам зателефонувати.",
    };
    return messages[field];
  }

  if (field === "year" && !/^\d{4}$/.test(trimmedValue)) {
    return "Вкажіть рік чотирма цифрами, наприклад 2018.";
  }

  if (field === "phone" && trimmedValue.replace(/\D/g, "").length < 10) {
    return "Перевірте номер — схоже, у ньому не вистачає цифр.";
  }

  return undefined;
}

function validateForm(values: FormValues) {
  return (Object.keys(values) as Array<keyof FormValues>).reduce<FieldErrors>(
    (errors, field) => {
      const fieldError = validateField(field, values[field]);
      if (fieldError) errors[field] = fieldError;
      return errors;
    },
    {},
  );
}

export default function CarEvaluationForm({ title = "Швидка оцінка авто" }: { title?: string }) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!notification) return;

    const timeout = window.setTimeout(
      () => setNotification(null),
      notification.type === "success" ? 6500 : 8500,
    );

    return () => window.clearTimeout(timeout);
  }, [notification]);

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleBlur = (field: keyof FormValues) => {
    const fieldError = validateField(field, values[field]);
    setFieldErrors((current) => ({ ...current, [field]: fieldError }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      const firstInvalidField = Object.keys(validationErrors)[0];
      formRef.current?.querySelector<HTMLInputElement>(`[name="${firstInvalidField}"]`)?.focus();
      return;
    }

    setLoading(true);
    setNotification(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          source: window.location.pathname,
        }),
      });
      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.error || "Не вдалося надіслати заявку. Спробуйте ще раз.");
      }

      setValues(initialValues);
      setFieldErrors({});
      setNotification({
        type: "success",
        title: "Заявка вже у менеджера!",
        message: "Дякуємо! Ми отримали дані авто та зателефонуємо вам протягом 5 хвилин.",
      });
    } catch (submitError) {
      const isNetworkError = submitError instanceof TypeError;
      setNotification({
        type: "error",
        title: "Упс, заявка не відправилась",
        message: isNetworkError
          ? "Схоже, немає зв’язку із сервером. Ваші дані залишилися у формі — перевірте інтернет і спробуйте ще раз."
          : submitError instanceof Error
            ? submitError.message
            : "Схоже, сервер тимчасово недоступний. Дані збережено — спробуйте ще раз.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        id="оцінка"
        className="scroll-mt-24 rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-2xl shadow-black/25 sm:p-6"
      >
        <div className="mb-5 flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-slate-950">
            <Banknote className="size-5" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="mt-0.5 text-sm text-slate-400">Зателефонуємо протягом 5 хвилин</p>
          </div>
        </div>

        <form ref={formRef} className="space-y-3" onSubmit={handleSubmit} noValidate>
          <FormField
            label="Марка та модель"
            name="car"
            value={values.car}
            placeholder="Марка / Модель"
            error={fieldErrors.car}
            disabled={loading}
            onChange={(value) => updateField("car", value)}
            onBlur={() => handleBlur("car")}
          />
          <FormField
            label="Рік випуску"
            name="year"
            value={values.year}
            placeholder="Рік випуску"
            error={fieldErrors.year}
            disabled={loading}
            inputMode="numeric"
            onChange={(value) => updateField("year", value)}
            onBlur={() => handleBlur("year")}
          />
          <FormField
            label="Ваш телефон"
            name="phone"
            value={values.phone}
            placeholder="Ваш телефон"
            error={fieldErrors.phone}
            disabled={loading}
            inputMode="tel"
            autoComplete="tel"
            onChange={(value) => updateField("phone", value)}
            onBlur={() => handleBlur("phone")}
          />
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-orange-400 disabled:cursor-wait disabled:bg-orange-500/70"
          >
            {loading ? (
              <>
                <LoaderCircle className="size-4 animate-spin" /> Надсилання...
              </>
            ) : (
              <>
                Отримати оцінку <ArrowRight className="size-4" />
              </>
            )}
          </button>
        </form>

        <p className="mt-3 text-center text-xs leading-4 text-slate-500">
          Натискаючи кнопку, ви погоджуєтесь із{" "}
          <Link
            href="/privacy"
            className="underline decoration-slate-600 underline-offset-2 transition hover:text-orange-400"
          >
            політикою конфіденційності
          </Link>
          .
        </p>
      </section>

      {notification && (
        <div
          className="lead-toast fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-md sm:inset-x-auto sm:bottom-6 sm:right-6 sm:mx-0 sm:w-full"
          role={notification.type === "error" ? "alert" : "status"}
          aria-live={notification.type === "error" ? "assertive" : "polite"}
          style={
            {
              "--toast-exit-delay": notification.type === "success" ? "6200ms" : "8200ms",
            } as CSSProperties
          }
        >
          <div
            className={`relative overflow-hidden rounded-2xl border p-5 shadow-2xl backdrop-blur-xl sm:p-6 ${
              notification.type === "success"
                ? "border-emerald-400/30 bg-slate-900/95 shadow-emerald-950/50"
                : "border-red-400/30 bg-slate-900/95 shadow-red-950/50"
            }`}
          >
            <div
              className={`absolute inset-x-0 top-0 h-1 ${
                notification.type === "success" ? "bg-emerald-400" : "bg-red-400"
              }`}
            >
              <span
                className={`lead-toast-progress block h-full w-full origin-left ${
                  notification.type === "success" ? "bg-emerald-200" : "bg-red-200"
                }`}
                style={{ animationDuration: notification.type === "success" ? "6.5s" : "8.5s" }}
              />
            </div>

            <button
              type="button"
              onClick={() => setNotification(null)}
              aria-label="Закрити повідомлення"
              className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X className="size-4" />
            </button>

            <div className="flex items-start gap-4 pr-6">
              <span
                className={`lead-toast-icon relative flex size-14 shrink-0 items-center justify-center rounded-2xl ${
                  notification.type === "success"
                    ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                    : "bg-red-500 text-white shadow-lg shadow-red-500/20"
                }`}
              >
                {notification.type === "success" ? (
                  <Check className="size-7" strokeWidth={3} />
                ) : (
                  <CircleAlert className="size-7" />
                )}
              </span>
              <div className="min-w-0 pt-0.5">
                <p
                  className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] ${
                    notification.type === "success" ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {notification.type === "success" ? (
                    <Sparkles className="size-3.5" />
                  ) : (
                    <CircleAlert className="size-3.5" />
                  )}
                  {notification.type === "success" ? "Успішно" : "Помилка надсилання"}
                </p>
                <h3 className="mt-2 text-lg font-bold text-white">{notification.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-300">{notification.message}</p>

                {notification.type === "error" && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setNotification(null);
                        formRef.current?.querySelector<HTMLInputElement>("input")?.focus();
                      }}
                      className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-3.5 py-2 text-xs font-bold text-slate-950 transition hover:bg-orange-400"
                    >
                      <Send className="size-3.5" /> Спробувати ще раз
                    </button>
                    <a
                      href={PHONE_HREF}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-xs font-bold text-white transition hover:border-orange-400 hover:text-orange-300"
                    >
                      <PhoneCall className="size-3.5" /> Зателефонувати
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

type FormFieldProps = {
  label: string;
  name: keyof FormValues;
  value: string;
  placeholder: string;
  error?: string;
  disabled: boolean;
  inputMode?: "numeric" | "tel";
  autoComplete?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
};

function FormField({
  label,
  name,
  value,
  placeholder,
  error,
  disabled,
  inputMode,
  autoComplete = "off",
  onChange,
  onBlur,
}: FormFieldProps) {
  const errorId = `${name}-error`;

  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        disabled={disabled}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`form-input disabled:cursor-not-allowed disabled:opacity-60 ${
          error ? "form-input-error" : ""
        }`}
      />
      {error && (
        <span id={errorId} className="mt-1.5 flex items-start gap-1.5 px-1 text-xs leading-4 text-red-300">
          <CircleAlert className="mt-px size-3.5 shrink-0" />
          {error}
        </span>
      )}
    </label>
  );
}
