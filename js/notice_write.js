(function addEventWrite(){
    const writeBtn = document.getElementById('write_btn');
    writeBtn.addEventListener('click', send);
})();

function getPostData() {
    const form = document.notice_form;
    let contentValue = form.notice_write_content.value;
    contentValue = contentValue.replace(/(\n|\r\n)/g, '<br/>')
    let post = {
        'title' : form.notice_title.value,
        'content' :contentValue
    }
    return post;
}

function fetchData() {
    const data = getPostData();
    const url = `http://172.16.11.230/data/?ct=Data&at=insertbbs&title=${data.title}&cont123=${data.content}`;
    return fetch(url).then(res => {
        if(res.ok){
            alert("등록이 완료되었습니다.");
            
        } else {
            alert("등록에 실패하였습니다.")
            console.error(`HTTP Status Code : ${res.status}`);
            console.log(res);
        }
    }).catch(error => {
        console.log(error);
    })
}

function checkEmpty(){
    const form = document.notice_form;
    if(form.notice_title.value == '' || form.notice_write_content.value == ''){
        alert("제목과 내용은 필수 입력 사항입니다.");
        return false;
    }

    return true;
}

async function send(){
    const noticeData = await fetchData();
    console.log(noticeData);
    if(checkEmpty() && noticeData){
        location.href = "notice.html";
    }
}