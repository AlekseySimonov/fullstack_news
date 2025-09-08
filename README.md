# Проект: Fullstack News

Проект на **React + TypeScript + Webpack** для фронтенда и **Node.js + Express + SQLite** для бэкенда.  
Состоит из двух независимых сервисов:

- **frontend** — пользовательский интерфейс, сборка через Webpack.  
- **backend** — REST API на Express с MongoDB (через Mongoose).

---

## 📁 Структура проекта

```
news/
├─ frontend/          # React + TypeScript приложение
│  ├─ src/            # исходный код фронтенда
│  ├─ public/         # статические файлы (index.html, favicon и др.)
│  ├─ __config__/     # конфигурационные файлы приложения
│  ├─ webpack.config.js
│  ├─ package.json
│  └─ tsconfig.json
└─ backend/            # Node.js + Express API
   ├─ server.js        # точка входа
   ├─ package.json
   ├─ controllers/     # контроллеры API
   ├─ models/          # mongoose-модели
   └─ router/          # маршруты API
   └─ .env             # конфигурация окружения

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

### Конфигурация 
Для работы бэкенда создайте файл `.env` в папке `backend`
```env
PORT=4000
DB_URL=mongodb://localhost:27017/fullstack_news # ссылка у разработчиков
```

### Установка зависимостей
```bash
cd backend
npm install
npm run dev   # запуск с nodemon
npm start     # обычный запуск
```

### Скрипты 

| Команда              | Описание                                          |
| -------------------- | ------------------------------------------------- |
| `npm start`          | Запуск сервера на Node.js                         |
| `npm run dev`        | Запуск сервера с nodemon (автоперезапуск)         |

### Описание 
- `server.js` — точка входа
- `controllers/` — обработчики логики API
- `models/` — mongoose-модели данных
- `router/` — маршруты Express

### Возможности API
- Получение списка статей с пагинацией, фильтрацией и поиском
- Добавление новых статей
- Загрузка файлов (через express-fileupload)
- Управление тегами, категориями, авторами