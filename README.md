# 🌦️ React Weather Dashboard

A modern weather dashboard built with **React**, **Redux Toolkit**, and **Tailwind CSS** that fetches and processes real-time weather data from the **Open-Meteo API**.

This app allows users to search for any location, converts it into geographic coordinates, and displays:

- Current weather conditions  
- Hourly forecasts  
- Daily forecasts  
- Calculated averages for:
  - Feels-like temperature
  - Humidity
  - Wind speed
  - Precipitation  

---

## 🚀 Features

✅ Location-based weather search  
✅ Real-time weather updates  
✅ Hourly & daily forecasts  
✅ Dark mode toggle (saved in localStorage)  
✅ Redux state management  
✅ Derived weather metrics (averages & totals)  

---

## 📦 Tech Stack

- React  
- Redux Toolkit  
- Tailwind CSS  
- Axios  
- Open-Meteo Weather API  

---

## 📊 Weather Data Handling

The app retrieves weather data and computes useful metrics such as:

```js
Feels Like (average)
Humidity (average)
Wind Speed (current)
Precipitation (total)
