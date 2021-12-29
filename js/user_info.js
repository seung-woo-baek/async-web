window.addEventListener('load', () => {
    const userInfo = JSON.parse(sessionStorage.getItem('currentLogin'));

    if(checkLoggedIn(userInfo)){
        showUserData(userInfo);
    }
})

(function addEventToBtns(){
    const withdrawBtn = document.getElementById('withdraw_btn');
    const changePwdBtn = document.getElementById('change_password_btn');

    withdrawBtn.addEventListener('click', event => {
        withdraw(userInfo);
    })
    changePwdBtn.addEventListener('click', event => {
        changePassword(userInfo);
        location.href = "login.html";
    })
})();

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

function showUserData(userInfo){
    document.querySelector(".user-name").innerText = userInfo.name;
    document.querySelector(".user-id").innerText = userInfo.userId;
    document.querySelector(".user-email").innerText = userInfo.email;
}

function withdraw(userInfo){
    const xhr = new XMLHttpRequest();
    const url = '';
    const method = 'POST';
    const data = { "userId" : userInfo.userId }

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

function changePassword(userInfo){
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