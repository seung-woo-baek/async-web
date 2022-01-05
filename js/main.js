(function main(){
    const userInfo = JSON.parse(sessionStorage.getItem('currentLogin'));
    if (userInfo !== null){
        const user = new User(userInfo);
        user.welcome();
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

export default function User(userInfo) {
    this.name = userInfo.name;
    this.userId = userInfo.userId;
    this.email = userInfo.email;
    this.welcome = function(){
        if(sessionStorage.getItem('currentLogin') != null){
            document.getElementById("login").style.display = "none";
            document.getElementById("logout").style.display = "flex";
            document.getElementById("user_id").innerText = userInfo.userId + "님 반갑습니다."
            addEventLogout();
        }
    }
}