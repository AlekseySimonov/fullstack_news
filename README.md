# Проект: Fullstack News

Проект на **React + TypeScript + Webpack** для фронтенда и **Node.js + Express + SQLite** для бэкенда.  
Состоит из двух независимых сервисов:

- **frontend** — пользовательский интерфейс, сборка через Webpack.  
- **backend** — REST API на Express, хранение данных в SQLite.

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
└─ backend/           # Node.js + Express API
   ├─ index.js        # точка входа приложения
   ├─ package.json
   └─ db.sqlite       # база данных SQLite

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
- SQLite3 для хранения данных
- body-parser для обработки JSON

### Установка зависимостей
```bash
cd backend
npm install
```

### Скрипты 

| Команда              | Описание                                          |
| -------------------- | ------------------------------------------------- |
| `npm start`          | Запуск сервера на Node.js                         |

### Описание 
- Точка входа — `index.js`
- Подключение базы SQLite через `sqlite3`
- API возвращает новости и позволяет добавлять записи