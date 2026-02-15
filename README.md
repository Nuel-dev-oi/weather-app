# 🌤️ Weather Dashboard

A robust React application designed to provide real-time weather insights. This project utilizes **Redux** for global state management and features a persistent Dark/Light theme toggle.

## 📡 Data Integration

**I am handling data from the Open Metro API.**

The application fetches raw weather data and processes it client-side to derive meaningful metrics for the user. The data handling logic ensures that hourly data points are aggregated correctly to provide accurate "Current" conditions.

## ⚙️ Core Logic & Features

Based on the `App.js` architecture, the application performs the following key operations:

### 1. Advanced Data Processing
Instead of simply displaying raw values, the application utilizes `useEffect` hooks to process the Open Metro API response:
* **Average Calculation:** Calculates the average `apparent_temperature` and `relativehumidity_2m` from the hourly data array to determine "Feels Like" and "Humidity" metrics.
* **Precipitation Aggregation:** Sums up the total hourly precipitation to give a comprehensive daily view.
* **Real-time Wind:** extracts the current wind speed directly from the weather object.

### 2. Theme Persistence
The application features a smart theming engine:
* **State Management:** Uses Redux (`themeSlice`) to toggle modes.
* **Local Storage:** Automatically saves the user's preference (`"theme"`) to `localStorage`.
* **Auto-Load:** On page reload, the app checks the saved settings to prevent theme flashing, ensuring the user's preference (Dark/Light) remains consistent across sessions.

### 3. Component Architecture
The app is structured around a modular layout:
* **Forecasting:** Dedicated components for `DailyForecast` and `HourForcast`.
* **Responsive Layout:** Wrapped in a main `<Layout />` component for consistent styling.

## 🛠️ Tech Stack

* **Frontend:** React
* **State Management:** Redux Toolkit
* **API:** Open Metro API
* **Styling:** Tailwind CSS (Dark mode support)