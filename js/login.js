(function addEventToBtns(){
    const loginBtn = document.querySelector('#submit_btn');
    loginBtn.addEventListener('click', login)
    // loginBtn.addEventListener('click', loginXhr)
})();

function checkId(form) {
    if (form.id.value == "") {
        alert("아이디를 입력해주세요.");
        return false;
    }

    return true;
}

function checkPassword(form) {
    if (form.pwd.value == "") {
        alert("비밀번호를 입력해주세요.");
        return false;
    }

    return true;
}

function getUserData(){
    const url = 'data/user.json'
    return fetch(url)
        .then(res => res.json())
        .then(res => res.users)
        .catch(error => console.log(error))
}

async function login(){
    const form = document.login_form;
    const userData = await getUserData();

    if (!(checkId(form) && checkPassword(form))){
        return;
    }

    let loginMatch = '';
    userData.forEach(item => {
        if(item.userId === form.id.value && item.password === form.pwd.value){
            sessionStorage.setItem('currentLogin', JSON.stringify(item));
            loginMatch += 'matched';
            return;
        } 
    })

    if(loginMatch === "matched"){
        location.href = 'index.html';
    } else {
        alert("아이디와 비밀번호를 확인해주세요.");
    }
}

function loginXhr(){
    const xhr = new XMLHttpRequest();
    const url = 'data/user.json';
    const method = 'GET';

    xhr.onreadystatechange = () => {
        if(xhr.readyState === xhr.DONE && xhr.status >= 200 && xhr.status <= 400){
            // let userInfos = JSON.parse(xhr.response.users);
            console.log(typeof xhr.response);
        } else {
            alert('데이터를 전송하는데에 문제가 발생하였습니다.');
            console.log(`HTTP Status : ${xhr.status}`);
        }
    }
    xhr.open(method, url);
    xhr.send();
} //로컬 실행 시 CORS 문제 발생