const weather = document.querySelector('#weather');

const lat = 49.75;
const lon = 6.64;
const apiKey = "1e5deba6eaa6418a1b2a4113fe60a3ca";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(data) {
    const img = document.createElement("img");
    const span = document.createElement("span");

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    img.setAttribute('src', iconsrc);
    img.setAttribute('alt', desc);
    span.innerHTML = `${data.main.temp}&deg;F - ${desc}`;
    weather.appendChild(img);
    weather.appendChild(span);
  }