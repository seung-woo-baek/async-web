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
function checkPassword(form) {
    if (form.pwd.value == "") {
        document.getElementById('warnning_pwd').innerText = "필수 입력사항입니다.";
        return false;
    }

    const password = form.pwd.value;
    const pwNumber = password.search(/[0-9]/g);
    console.log(pwNumber);
    const pwCharacter = password.search(/[a-z]/ig);
    const pwSpecial = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if (password.length < 8) {
        document.getElementById('warnning_pwd').innerText = "비밀번호는 최소 8자 이상이어야 합니다";
        return false;
    } else if (password.search(/\s/) > -1) {
        document.getElementById('warnning_pwd').innerText = "공백이 포함될 수 없습니다.";
        return false;
    } else if (pwNumber < 0 && pwCharacter < 0 && pwSpecial < 0) {
        document.getElementById('warnning_pwd').innerText = "영문, 숫자, 특수문자를 최소 1자 이상 사용해주세요.";
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

function signup(){
    const form = document.signup_form;
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

    if (checkName(form) && checkId(form) && checkPassword(form) && checkPasswordConfirm(form) && checkEmail(form)){
        alert("모든 조건에 충족했습니다.")
    }
}