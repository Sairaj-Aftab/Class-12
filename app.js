// .....Form............//

const form = document.querySelector('#form');
const msg = document.querySelector('#msg');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const userName = document.querySelector('#username');
// const namePattern = /^[a-z A-Z]{3,20}$/;
// const emailPattern = /^[a-z0-9-_]*@[a-z-_0-9]*\.[a-z]{2,6}$/;
// const userNamePattern = /^[a-z0-9-_]{5,20}$/;

// ...............Age Calculator............//

const age = document.querySelector('#age');
const ageName = document.querySelector('#ageName');
const ageYear = document.querySelector('#ageYear');
const result = document.querySelector('#result');
const outputResult = document.querySelector('#outputResult');

// .............Currency Converter...............//

const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');
const gbp = document.querySelector('#gbp');
const cad = document.querySelector('#cad');
const ban = document.querySelector('#ban');
const curr = document.querySelector('#curr');
const taka = document.querySelector('#taka');

// ............Marriage Age Checker................//

const mButton = document.querySelector('#mbutton');
const mName = document.querySelector('#mname');
const mAge = document.querySelector('#mage');
const mGender = document.querySelector('#mgender');
const mForm = document.querySelector('#mform');
const mResult = document.querySelector('#mresult');


form.onsubmit = ((e)=>{
    e.preventDefault();

    formFun(name, email, username);
})

age.onsubmit = ((e)=>{
    e.preventDefault();

    ageCal(ageName, age);
})

// curr.addEventListener('keyup', ()=>{
//     currCon(curr);
// })
usd.onclick = (()=>{
    taka.innerHTML = curr.value * usd.value;
})
cad.onclick = (()=>{
    taka.innerHTML = curr.value * cad.value;
})
gbp.onclick = (()=>{
    taka.innerHTML = curr.value * gbp.value;
})
eur.onclick = (()=>{
    taka.innerHTML = curr.value * eur.value;
})

mForm.onsubmit = ((e) => {
    e.preventDefault();

    marriage(name, age);
})