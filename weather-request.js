const API_KEY = "304c4b5fc3f93c05226f7da64727aba9";

const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast';

const getWeather = async (city) => {
  const http = new slhttp();
  const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;
// console.log(54);
  try {
    const res = await http.get(url);
    return {
      state: 'success',
      weatherInfo: res,
    };
  } catch (e) {
    return {
      state: 'error',
      weatherInfo: null,
    };
  }
};

getWeather('Goa')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
