import rainy from "../assets/images/icon-rain.webp";
import fog from "../assets/images/icon-fog.webp";
import storm from "../assets/images/icon-storm.webp";   
import sunny from "../assets/images/icon-sunny.webp";
import snow from "../assets/images/icon-snow.webp";
import partlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import drizzle from "../assets/images/icon-drizzle.webp";
import overcast from "../assets/images/icon-overcast.webp";

export function getTempImage(weatherCode) {
   if (weatherCode >= 0 && weatherCode <= 1) {
        return "sunny";
   } else if (weatherCode === 2 ) {
        return "partly cloudy";
   } else if (weatherCode <= 3) {
        return "over cast";
   } else if (weatherCode >= 45 && weatherCode <= 48) {
        return "fog";
   } else if (weatherCode >= 51 && weatherCode <= 55) {
        return "drizzle";
   } else if ((weatherCode >= 61 && weatherCode <= 65) || weatherCode === 80) {
        return "rainy";
   } else if (weatherCode >= 71 && weatherCode <= 75) {
        return "snow";
   } else if (weatherCode === 95) {
        return "stormy";
   }
}

export const weatherMap = [
    ["sunny", sunny],
    ["stormy", storm],
    ["rainy", rainy],
    ["partly cloudy", partlyCloudy],
    ["over cast", overcast],
    ["fog", fog],
    ["drizzle", drizzle],
    ["snow", snow],
];

export function mapTempImage(weather, array) {
   const weatherImgArray = array.filter((item) => item[0] === weather);
   if (weatherImgArray.length === 0) {
    console.log("Weather not found in array");
    return sunny;
   }
   console.log("Weather Image Array:", weatherImgArray);
   if (!("1" in weatherImgArray[0])) {
    console.log("not in weatherArray[0]");
    return;
   }
   return weatherImgArray[0][1];
}