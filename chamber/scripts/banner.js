const banner = document.querySelector("#chamber-banner");
const bannerBtn = document.querySelector("#chamber-banner button");

bannerBtn.addEventListener('click', ()=> {
    banner.style.display = 'none';
})


const date = new Date();
const day = date.getDay();

if (day == 1 || day == 2 || day == 3) {
    banner.style.display = 'flex';
}
else {
    banner.style.display = 'none';
}
