# Weather App

A modern weather application that displays current weather and 5-day forecast for any city.

# Deployed Project Link

- Frontend
  https://afford-gamma.vercel.app

- Backend
  https://afforbackend.onrender.com

## Features

- Real-time weather data
- 5-day weather forecast
- Beautiful UI with weather-specific gradients
- Responsive design
- Error handling and loading states

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add your OpenWeather API key:

   ```
   API_KEY=your_openweather_api_key
   ```

4. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:4000`

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

## Project Structure

```
weather-app/
├── backend/
│   ├── app.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── app/
    ├── components/
    ├── utils/
    └── package.json
```

## API Endpoints

- `POST /getCurrentWeather/:city` - Get current weather for a city
- `POST /getFiveDaysWeather/:city` - Get 5-day forecast for a city

## Technologies Used

- Frontend:

  - Next.js
  - React
  - TypeScript
  - Shadcn
  - Tailwind CSS
  - Axios

- Backend:
  - Node.js
  - Express
  - OpenWeather API
