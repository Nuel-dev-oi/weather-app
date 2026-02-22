export function celsiusToFahrenheitToFixed(celsius) {
  return ((celsius * 9) / 5 + 32).toFixed(2);
}

export function fahrenheitToCelsiusToFixed(fahrenheit) {
  return (((fahrenheit - 32) * 5) / 9).toFixed(2);
}

export function mphToKmhToFixed(mph) {
  return (mph * 1.60934).toFixed(2);
}

export function kmhToMphToFixed(kmh) {
  return (kmh * 0.621371).toFixed(2);
}

export function mmToCmToFixed(mm) {
  return (((mm / 10) * 100) / 100).toFixed(2);
}

export function cmToMmToFixed(cm) {
  return (cm * 10).toFixed(2);
}

export default function convertImperialUnits(
  temperature,
  windSpeed,
  precipitation,
) {
  const unitFunc = [];
  if (temperature) {
    switch (temperature) {
      case "Fahrenheit (°F)":
        unitFunc.push(celsiusToFahrenheitToFixed);
        break;
      default:
        unitFunc.push(fahrenheitToCelsiusToFixed);
    }
  }
  if (windSpeed) {
    switch (windSpeed) {
      case "mph":
        unitFunc.push(kmhToMphToFixed);
        break;
      default:
        unitFunc.push(mphToKmhToFixed);
    }
  }
  if (precipitation) {
    switch (precipitation) {
      case "Centimeters (cm)":
        unitFunc.push(mmToCmToFixed);
        break;
      default:
        unitFunc.push(cmToMmToFixed);
    }
  }
  return unitFunc;
}
