const baseURL = "https://seregirl.github.io/wdd230/";
const linksURL = "https://seregirl.github.io/wdd230/data/links.json";
const activities = document.getElementById("activity-links");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  }

getLinks()


function displayLinks(weeks) {
    weeks.forEach(wk => {
        const li = document.createElement("li");
        li.textContent = `${wk.week}: `;
        wk.links.forEach((link, i) => {
            const a = document.createElement("a");
            a.textContent = link.title;
            a.setAttribute('href', link.url);
            if (i > 0) li.appendChild(document.createTextNode(' | '));
            li.appendChild(a)
        });

        activities.appendChild(li);
    });
}