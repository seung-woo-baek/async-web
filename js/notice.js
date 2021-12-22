window.onload = function(){
    getData();
    getAllData();
}

let baseURI = `https://127.0.0.1:5050/notice.html/`
function addBoardList(item){
    const boardList = document.querySelector('.board-items');
    boardList.insertAdjacentHTML('beforeend', `<li class="board-item board-body">
                <p class="notice-idx">${item.boardseq}</p>
                <p class="notice-title">${item.subject}</p>
                <p class="notice-reg">${item.regday}</p>
                <p class="notice-readcnt">${item.readcnt}</p>
            </li>`)
}

function getData(){
    let url = `http://172.16.11.230/data/?ct=Data&at=listbbs&per=0&on1=10`;

    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            for(let i = 0; i < res.length; i++){
                addBoardList(res[i]);
                addLinkForList(res[i]);
            }
        })
}

function addLinkForList(item){
    const noticeLinkBtns = document.querySelectorAll('.board-item.board-body')
    for(let i = 0; i < noticeLinkBtns.length; i++){
        noticeLinkBtns[i].addEventListener('click', (event) => {
            location.href = "/notice_view.html?id=" + item.boardseq;
        })
    }
}

function getAllData(){
    let url = `http://172.16.11.230/data/?ct=Data&at=listbbs&per=&on1=`
    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res);
        })
}