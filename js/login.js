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

function login(){
    const form = document.login_form;
    // const promise = new Promise((resolve, reject) =>{
    
    // })
    // promise
    //     .then((value) => {

    //     })
    //     .catch(error => {
    //         alert(error)
    //     })
    // if(checkId(form) && checkPassword(form)){
    //     alert("로그인 성공");
    // }
}