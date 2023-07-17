const dataUrl = 'data/members.json';
const memberCards = document.querySelector('#members');

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

async function displaySpotlightMembers(){
  const response = await fetch(dataUrl);
  const data = await response.json();
  const members = data.members.filter((member) => {
     level = member.level;
     if (level === "Gold Membership" || level === "Silver Membership") {
       return true;
     } else {
       return false;
     }
   })
   
 
   const i = Math.floor(Math.random() * members.length);
   const member1 = members[i];
   members.splice(i,1);
   const member2 = members[Math.floor(Math.random() * members.length)];
    displayMembers([member1, member2]);
 }

 displaySpotlightMembers();
