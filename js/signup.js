function checkName(form) {
    if (form.name.value == "") {
        document.getElementById('warnning_name').innerText = "필수 입력사항입니다.";
        return false;
    }

    return true;
}
function checkId(form) {
    if (form.id.value == "") {
        document.getElementById('warnning_id').innerText = "필수 입력사항입니다.";
        return false;
    }

    return true;
}

function checkDuplication(){
    const form = document.signup_form;
    const existUsers = Object.keys(localStorage);

    for(let i = 0; i < existUsers.length; i++){
        const key = existUsers[i];
        const userInfo = JSON.parse(localStorage[key]);
        if(userInfo.userId == form.id.value){
            document.getElementById('warnning_id').innerText = "중복된 아이디가 있습니다.";
            return false;
        } else if (userInfo.email == form.email.value) {
            document.getElementById('warnning_email').innerText = "중복된 이메일이 있습니다.";
            return false;
        } else {
            document.getElementById('warnning_id').innerText = "";
            document.getElementById('warnning_email').innerText = "";
        }
    }

    return true;
}

function checkPassword(form) {
    if (form.pwd.value == "") {
        document.getElementById('warnning_pwd').innerText = "필수 입력사항입니다.";
        return false;
    }

    const password = form.pwd.value;

    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g.test(password)) {
        document.getElementById('warnning_pwd').innerText = "영문, 숫자, 특수문자를 최소 1자 이상, 최소 8자 이상 사용해주세요.";
        return false;
    } else if (password.search(/\s/) > -1) {
        document.getElementById('warnning_pwd').innerText = "공백이 포함될 수 없습니다.";
        return false;
    }

    return true;
}

function checkPasswordConfirm(form) {
    if (form.pwd_conf.value == "") {
        document.getElementById('warnning_pwd_conf').innerText = "필수 입력사항입니다.";
        return false;
    }

    if (form.pwd.value !== form.pwd_conf.value) {
        document.getElementById('warnning_pwd_conf').innerText = "패스워드가 일치하지 않습니다.";
        return false;
    }

    return true;
}

function checkEmail(form) {
    if (form.email.value == "") {
        document.getElementById('warnning_email').innerText = "필수 입력사항입니다.";
        return false;
    }

    const emailForm = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (emailForm.test(form.email.value) === false){
        document.getElementById('warnning_email').innerText = "이메일 형식이 잘못되었습니다.";
        return false;
    }

    return true;
}

function checkAllValue(form){
    if (checkName(form)){
        document.getElementById('warnning_name').innerText = "";
    }
    if (checkId(form)){
        document.getElementById('warnning_id').innerText = "";
    }
    if (checkPassword(form)){
        document.getElementById('warnning_pwd').innerText = "";
    }
    if (checkPasswordConfirm(form)){
        document.getElementById('warnning_pwd_conf').innerText = "";
    }
    if (checkEmail(form)){
        document.getElementById('warnning_email').innerText = "";
    }
}

function makeUserData(form){
    param = {
        "idx" : localStorage.length+1,
        "name" : form.name.value,
        "userId" : form.id.value,
        "password" : form.pwd.value,
        "email" : form.email.value
    }

    return param;
}

function signup() {
    const form = document.signup_form;
    checkAllValue(form);
    const obj = makeUserData(form);

    if (checkName(form) && checkId(form) && checkPassword(form) && checkPasswordConfirm(form) && checkEmail(form) && checkDuplication()){
        document.querySelector(".signup-box").style.display = "none";
        document.querySelector(".signup-complete-box").style.display = "flex";
        localStorage.setItem(obj.idx, JSON.stringify(obj));
    }
}