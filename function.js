

function formFun(name, email, username) {

    name.style.border=(name.value=='') ? '1px solid red' : '1px solid #ddd';
    email.style.border=(email.value=='') ? '1px solid red' : '1px solid #ddd';
    userName.style.border=(userName.value=='') ? '1px solid red' : '1px solid #ddd';

    msg.innerHTML = (name.value=='' || email.value=='' || userName.value=='') ? `<p class="alert alert-danger">All fields are required</p>` : `<p class="alert alert-success">Data stable!</p>`;
}

function ageCal(Name, year) {
    let date = new Date();
    let age  = date.getFullYear() - ageYear.value;

    ageName.style.border = (ageName.value=='') ? '1px solid red' : '1px solid #ddd';
    ageYear.style.border = (ageYear.value=='') ? '1px solid red' : '1px solid #ddd';

    outputResult.innerHTML = (ageName.value=='' || ageYear.value=='') ? `<p class="alert alert-danger font-weight-bold">All fields are required</p>` : `<p class="alert alert-success font-weight-bold">Hi! ${ageName.value}. You are ${age} years old.</p>`;
}

function currCon(curr) {
    if (curr=='') {
        taka.innerHTML=`Empty`
    } else {
        taka.innerHTML=`${curr.value*usd.value}`
    }
}

function marriage(name, gender, age) {
    let date = new Date();
    let maage = date.getFullYear() - mAge.value;

    function ageCom(age) {
        if (maage <= 7) {
            return`You are a baby. So not fit for marriage.`
        } else if (maage > 7 && maage <= 18 && (mGender.value=='Female' || mGender.value=='female')) {
            return`Not fit for marriage`
        } else if (maage > 18 && (mGender.value=='Female' || mGender.value=='female')) {
            return`You are a fit for marriage`
        } else if (maage > 7 && maage <= 23 && (mGender.value=='Male' || mGender.value=='male')) {
            return`Not fit for marriage`
        } else if (maage > 23 && (mGender.value=='Male' || mGender.value=='male')) {
            return`You are a fit for marriage`
        }
    }

    mName.style.border = (mName.value=='') ? '1px solid red' : '1px solid #ddd';
    mGender.style.border = (mGender.value=='') ? '1px solid red' : '1px solid #ddd';
    mAge.style.border = (mAge.value=='') ? '1px solid red' : '1px solid #ddd';

    mResult.innerHTML = (mName.value =='' || mGender.value =='' || mAge.value =='') ? `<p class="alert alert-danger text-center">All fields are required</p>` : `<p class="alert alert-success">Hi! ${mName.value}. You are ${maage} years old. ${ageCom(age)}</p>`
}