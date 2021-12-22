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

const checkDuplicationBtn = document.querySelector(".duplication-btn");
let cntDuplication = 0;
checkDuplicationBtn.addEventListener('click', checkDuplication);
function checkDuplication(){
    const form = document.signup_form;
    const existUsers = Object.keys(localStorage);

    for(let i = 0; i < existUsers.length; i++){
        const key = existUsers[i];
        const userInfo = JSON.parse(localStorage[key]);
        if(userInfo.userId == form.id.value){
            document.getElementById('warnning_id').innerText = "중복된 아이디가 있습니다.";
            document.getElementById('warnning_id').style.color = "red";
            return false;
        } else if(form.id.value == "") {
            document.getElementById('warnning_id').innerText = "아이디를 입력해주세요.";
        }else {
            document.getElementById('warnning_id').innerText = "사용 가능한 아이디입니다.";
            document.getElementById('warnning_id').style.color = "#1a73e8";
            cntDuplication++;
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

let cntCheckedValue = 0;
function checkAllValue(form){
    if (checkName(form)){
        document.getElementById('warnning_name').innerText = "";
        cntCheckedValue++;
    }
    if (checkId(form)){
        document.getElementById('warnning_id').innerText = "";
        cntCheckedValue++;
    }
    if (checkPassword(form)){
        document.getElementById('warnning_pwd').innerText = "";
        cntCheckedValue++;
    }
    if (checkPasswordConfirm(form)){
        document.getElementById('warnning_pwd_conf').innerText = "";
        cntCheckedValue++;
    }
    if (checkEmail(form)){
        document.getElementById('warnning_email').innerText = "";
        cntCheckedValue++;
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

const signupBtn = document.getElementById("submit_btn");
signupBtn.addEventListener("click", signup);
function signup() {
    const form = document.signup_form;
    checkAllValue(form);
    const obj = makeUserData(form);
    if (cntDuplication === 0 && form.id.value !== "") {
        document.getElementById('warnning_id').innerText = "중복 검사를 해주세요.";
    }
    if (cntCheckedValue === 5 && cntDuplication > 0) {
        document.querySelector(".signup-box").style.display = "none";
        document.querySelector(".signup-complete-box").style.display = "flex";
        localStorage.setItem(obj.idx, JSON.stringify(obj));
    } else {
        return;
    }
}