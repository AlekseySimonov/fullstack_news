# Проект: Fullstack News

Проект на **React + TypeScript + Webpack** для фронтенда и **Node.js + Express + SQLite** для бэкенда.  
Состоит из двух независимых сервисов:

- **frontend** — пользовательский интерфейс, сборка через Webpack.  
- **backend** — REST API на Express с MongoDB (через Mongoose).

---

## 📁 Структура проекта

```
news/
│
├─ frontend/          # React + TypeScript приложение
│  ├─ src/
│  │  ├─ app/                # лобальные конфиги, провайдеры store, маршруты
│  │  ├─ pages/              # страницы приложения (например, `ArticlesPage`)
│  │  ├─ layouts/            # обёртки страниц, header, footer, sidebar
│  │  ├─ modules/            # конкретные фичи, которые могут содержать UI, логику и api
│  │  ├─ components/         # переиспользуемые UI-компоненты (кнопки, карточки, списки)
│  │  ├─ shared/             # общие типы, утилиты, иконки, изображения, константы
│  │  └─ index.ts            # исходный код фронтенда
│  ├─ public/                # статические файлы (index.html, favicon и др.)
│  ├─ __config__/            # конфигурационные файлы приложения
│  ├─ webpack.config.js
│  ├─ package.json
│  ├─ tsconfig.json
│  └─ .env                   # конфигурация окружения
│
└─ backend/                  # Node.js + Express API (TypeScript)
   ├─ src/
   │  ├─ controllers/        # контроллеры API
   │  ├─ middlewares/        # глобальные и кастомные middleware
   │  ├─ models/             # mongoose-модели
   │  ├─ routes/             # маршруты Express
   │  ├─ services/           # бизнес-логика, работа с данными
   │  ├─ types/              # общие типы и интерфейсы
   │  ├─ utils/              # вспомогательные утилиты
   │  ├─ validators/         # express-validator схемы
   │  └─ index.ts            # точка входа в приложение
   │
   ├─ __config__/            # конфигурация (eslint, prettier, jest, nodemon)
   ├─ dist/                  # собранные JS-файлы после компиляции
   ├─ package.json
   ├─ tsconfig.json
   └─ .env                   # переменные окружения

```


---

## ⚡ Frontend

### Технологии

- React 19 + TypeScript  
- SCSS Modules для стилей  
- Webpack 5, ts-loader  
- React Router 7  
- HMR (Hot Module Replacement)  

### Установка зависимостей

```bash
cd frontend
npm install
```

### Скрипты 

| Команда              | Описание                                          |
| -------------------- | ------------------------------------------------- |
| `npm start`          | Запуск локального dev-сервера с HMR на порту 3000 |
| `npm run build:dev`  | Сборка фронтенда в development режиме             |
| `npm run build:prod` | Сборка фронтенда в production режиме              |
| `npm test`           | Тестовая команда (заглушка)                       |

### Описание
- `src/index.tsx `— точка входа приложения
- `webpack.config.js` — конфигурация сборки (TS + SCSS + React). Конфигурация разбита на модули и находятся в `__config__/webpack`
- Публичные файлы находятся в `public/`

---

## ⚡ Backend

### Технологии
- Node.js 20
- Express 5
- MongoDB + Mongoose
- express-validator
- Jest + ts-jest для тестов

### Конфигурация 
Для работы бэкенда создайте файл `.env` в папке `backend`
```env
PORT=4000
DB_URL=mongodb://localhost:27017/fullstack_news # ссылка у разработчиков
SERVER_URL = http://localhost
```

### Установка зависимостей
```bash
cd backend
npm install
```

### Скрипты 

| Команда              | Описание                                          |
| -------------------- | ------------------------------------------------- |
| `npm start`          | Запуск собранного сервера (dist/index.js)         |
| `npm run dev`        | Запуск с nodemon + ts-node (автоперезапуск)       |
| `npm run lint`       | Проверка кода ESLint                              |
| `npm run format`     | Форматирование Prettier                           |
| `npm run test`       | Запуск тестов (Jest + ts-jest)                    |

### Возможности API
- Получение списка статей с пагинацией и фильтрацией
- Получение статьи по ID
- Создание, обновление и удаление статьи
- Управление тегами, категориями и авторами
- Валидация входящих данных через express-validator
- Единая обработка ошибок через errorHandler