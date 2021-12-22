window.onload = function(){
    getBoardData();
}

function getBoardData(){
    const search = location.search;
    const param = new URLSearchParams(search);
    const getId = param.get('id');

    let url = `http://172.16.11.230/data/?ct=Data&at=viewbbs&id=${getId}`
    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            document.getElementById("post_title").innerText = res.Subject;
            document.getElementById("post_content").innerText = res.Contents;
        })
}