
const apiKey = '4d2b174d193f15853ca84dcbefff35ab';

async function getWeather (city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
 
  const response = await fetch(url)
  const json = await response.json()

  return json
  }
  