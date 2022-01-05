import User from '/js/main.js';

(function main(){
    const user = getUserObj();
    showUserData(user);
    addEventToBtns(user);
})();

function getUserObj(){
    const userInfo = JSON.parse(sessionStorage.getItem('currentLogin'));
    if(checkLoggedIn(userInfo)){
        const user = new User(userInfo);
        return user;
    }
}

function addEventToBtns(user){
    const withdrawBtn = document.getElementById('withdraw_btn');
    const changePwdBtn = document.getElementById('change_password_btn');

    withdrawBtn.addEventListener('click', event => {
        withdraw(user);
    })
    changePwdBtn.addEventListener('click', event => {
        changePassword(user);
        location.href = "login.html";
    })
}

(function activateModalBtns(){
    const modal = document.getElementById("modal")
    const openModalBtn = document.getElementById("modal_btn")
    const closeModalBtn = document.querySelector(".modal-close");

    openModalBtn.addEventListener("click", event => {
        modal.style.display = "flex"
    })
    closeModalBtn.addEventListener("click", event => {
        modal.style.display = "none"
    })
})();

function checkLoggedIn(userInfo){
    if(userInfo === null){
        alert("잘못된 경로입니다. 로그인을 해주세요.");
        location.href = "login.html";
        return false;
    }

    return true;
}

function showUserData(user){
    document.querySelector(".user-name").innerText = user.name;
    document.querySelector(".user-id").innerText = user.userId;
    document.querySelector(".user-email").innerText = user.email;
}

function withdraw(user){
    console.log(user);
    const xhr = new XMLHttpRequest();
    const url = '';
    const method = 'POST';
    const data = { "userId" : user.userId }

    xhr.onreadystatechange = () => {
        if(xhr.readyState === xhr.DONE && xhr.status >= 200 && xhr.status <= 400){
            if(xhr.response === true){
                alert('회원탈퇴가 완료되었습니다.');
            } else {
                alert('서버에 문제가 발생하였습니다.');
            }
        } else {
            alert('데이터를 전송하는데에 문제가 발생하였습니다.');
            console.log(`HTTP Status : ${xhr.status}`);
        }
    }
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}

function changePassword(){
    const form = document.change_form;
    const xhr = new XMLHttpRequest();
    const url = '';
    const method = 'POST';
    const data = { 
        "userId" : userInfo.userId,
        "password" : userInfo.password,
        "newPassword" : form.newPassword.value
    }

    xhr.onreadystatechange = () => {
        if(xhr.readyState === xhr.DONE && xhr.status >= 200 && xhr.status <= 400){
            if(xhr.response === true){
                alert('비밀번호 변경이 완료되었습니다.');
            } else {
                alert('서버에 문제가 발생하였습니다.');
            }
        } else {
            alert('데이터를 전송하는데에 문제가 발생하였습니다.');
            console.log(`HTTP Status : ${xhr.status}`);
        }
    }
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}