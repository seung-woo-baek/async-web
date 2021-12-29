(function main(){
    const userInfo = JSON.parse(sessionStorage.getItem('currentLogin'));
    if(sessionStorage.getItem('currentLogin') != null){
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "flex";
        document.getElementById("user_id").innerText = userInfo.userId + "님 반갑습니다."
        addEventLogout();
    }
})();

function addEventLogout(){
    const logoutLink = document.getElementById('logout_link')
    logoutLink.addEventListener('click', event => {
        event.preventDefault();
        sessionStorage.removeItem('currentLogin');
        location.href = 'login.html';
    })
}