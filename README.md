# АвтоВикуп Харків

Сучасний сайт сервісу термінового викупу автомобілів у Харкові та області. Допомагає швидко залишити заявку на оцінку авто, ознайомитися з послугами та знайти відповіді на поширені запитання.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-087ea4?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)

## Можливості

- Головна сторінка з формою швидкої оцінки автомобіля.
- Окремі сторінки послуг: терміновий викуп, авто після ДТП, нерозмитнені авто та викуп на розбирання.
- Сторінки «Чому ми», блог, FAQ та контакти.
- Адаптивний інтерфейс для телефонів, планшетів і комп’ютерів.
- SEO-метадані та оптимізовані зображення.

## Технології

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide](https://lucide.dev/) — іконки

## Запуск локально

Потрібен [Node.js](https://nodejs.org/) 20.9 або новіший.

```bash
npm install
npm run dev
```

Після запуску сайт буде доступний за адресою [http://localhost:3000](http://localhost:3000).

## Команди

```bash
npm run dev    # локальна розробка
npm run lint   # перевірка коду
npm run build  # production-збірка
npm run start  # запуск production-збірки
```

## Структура проєкту

```text
src/
├── app/          # сторінки, маршрути та глобальні стилі
└── components/   # повторно використовувані компоненти інтерфейсу
public/           # статичні файли
```

## Публікація

Проєкт можна розгорнути на [Vercel](https://vercel.com/new): підключте GitHub-репозиторій, і платформа автоматично виконає збірку після кожного push у основну гілку.
