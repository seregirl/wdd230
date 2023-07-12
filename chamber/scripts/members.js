const url = 'data/members.json';
const memberCards = document.querySelector('#members');
const gridViewBtn = document.querySelector('.grid-view');
const listViewBtn = document.querySelector('.list-view');

const toggleView = () => {
  memberCards.classList.toggle('list');
  gridViewBtn.classList.toggle('active');
  listViewBtn.classList.toggle('active');
}

gridViewBtn.addEventListener('click', toggleView);
listViewBtn.addEventListener('click', toggleView);

const getMembersData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members){
  members.forEach((member) => {
    const card = document.createElement('section');
    const biz = document.createElement('h2');
    const membership = document.createElement('h3');
    const phone = document.createElement('p');
    const address = document.createElement('p');
    const image = document.createElement('img');
    const infoWrapper = document.createElement('div');
    const titleWrapper = document.createElement('div');
    const contactWrapper = document.createElement('div');
    biz.textContent = member.name;
    membership.textContent = member.level;
    phone.innerHTML = `&#128222; ${member.phone} <br> <a href="${member.website}">${member.website}</a>`;
    address.textContent = `${member.address}`;
    image.setAttribute('src', member.imageUrl);
    image.setAttribute('alt', member.name);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '200');
    image.setAttribute('height', '180');
    infoWrapper.setAttribute('id', 'members-info')
    contactWrapper.appendChild(phone);
    contactWrapper.appendChild(address);
    titleWrapper.appendChild(biz);
    titleWrapper.appendChild(membership);
    infoWrapper.appendChild(titleWrapper)
    infoWrapper.appendChild(contactWrapper)
    card.appendChild(infoWrapper);
    card.appendChild(image);
    memberCards.appendChild(card);
  });
}

getMembersData();