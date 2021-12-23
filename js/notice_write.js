const writeBtn = document.getElementById('write_btn');
writeBtn.addEventListener('click', sendPostData);


function getPostData() {
    const form = document.notice_form;
    let post = new FormData();
    post.append('title' ,form.notice_title.value);
    post.append('cont123', form.notice_write_content);
    
    return post;
}

function sendPostData() {
    const data = getPostData();
    const form = document.notice_form;
    console.log(form.notice_title.value);
    console.log(data);
}