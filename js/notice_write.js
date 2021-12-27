const writeBtn = document.getElementById('write_btn');
writeBtn.addEventListener('click', sendPostData);


function getPostData() {
    const form = document.notice_form;
    let contentValue = form.notice_write_content.value;
    contentValue = contentValue.replace(/(\n|\r\n)/g, '<br/>')
    let post = new FormData();
    post.append('title' ,form.notice_title.value);
    post.append('cont123', contentValue);
    return post;
}

function sendPostData() {
    const data = getPostData();
    const url = `http://172.16.11.230/data/?ct=Data&at=insertbbs&title=${data.get("title")}&cont123=${data.get("cont123")}`;
    fetch(url).then(res => {
        if(res.ok){
            alert("등록이 완료되었습니다.");
            location.href = "/notice.html";
        } else {
            alert("등록에 실패하였습니다.")
            console.error(`HTTP Status Code : ${res.status}`);
            console.log(res);
        }
    }).catch(error => {
        console.log(error);
    })
}

function countBytesOfUrl(url) {
    var stringByteLength = 0;
    stringByteLength = (function(s,b,i,c){
        for(b=i=0;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
        return b
    })(url);
    console.log(stringByteLength + " Bytes");
}
