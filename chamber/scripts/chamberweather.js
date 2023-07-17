const wthr= document.querySelector('#weather');
wthr.innerHTML = "Loading weather ...";
const lat = 6.30
const lon = 5.62
const apiKey = "1e5deba6eaa6418a1b2a4113fe60a3ca";


const url = `https://api.openweathermap.org/data/2.5/forecast?&units=imperial&lat=${lat}&lon=${lon}&appid=${apiKey}`;

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
    wthr.innerHTML = "";
    let previousDateString = "";
    let count = 1;
    data.list.forEach((weather) => {
        const dateString = weather.dt_txt.slice(0,10);
        if (count <= 3 && dateString !== previousDateString) {
            const h4 = document.createElement("h4");
            const icon = document.createElement('img');
            const p = document.createElement("p");
            const temp = document.createElement("span");
            const desc = document.createElement("span");
            const humidity = document.createElement("span");
            const wind = document.createElement("span");

            const iconsrc = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;

            h4.textContent = `${new Date(dateString).toDateString()}`;
            icon.setAttribute('src', iconsrc);
            icon.setAttribute('alt', 'weather icon');
            h4.appendChild(icon);

            temp.innerHTML = `${weather.main.temp} &deg;F`;
            desc.textContent = `, ${weather.weather[0].description}`;
            humidity.textContent = `, humidity: ${weather.main.humidity}%`;
            wind.textContent = `, wind speed: ${weather.wind.speed} km/h.`;
            p.appendChild(temp);
            p.appendChild(desc);
            p.appendChild(humidity);
            p.appendChild(wind);
            

            wthr.appendChild(h4);
            wthr.appendChild(p);

            count ++;
        }
        previousDateString = dateString;
        
    });
    
  }