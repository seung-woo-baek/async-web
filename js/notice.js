window.onload = function(){
    getData();
    // getAllData();
}

let baseURI = `https://127.0.0.1:5050/notice.html/`
function addBoardList(item){
    const boardList = document.querySelector('.board-items');
    if(document.querySelector('.board-item') != null){
        boardList.insertAdjacentHTML('beforeend', `<li class="board-item board-body" id="no${item.boardseq}">
                <p class="notice-idx">${item.boardseq}</p>
                <p class="notice-title">${item.subject}</p>
                <p class="notice-reg">${item.regday}</p>
                <p class="notice-readcnt">${item.readcnt}</p>
            </li>`)
    } else {
        boardList.insertAdjacentHTML('beforeend', `<li class="board-item board-body">
                <p class="notice-title">등록된 공지사항이 없습니다.</p>
            </li>`)

    }
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
        .catch(error => {
            alert("데이터를 불러오는데에 오류가 발생했습니다.")
            console.log(error);
        })
}

function addLinkForList(item){
    const noticeLinkBtn = document.getElementById(`no${item.boardseq}`)
    noticeLinkBtn.addEventListener('click', (event) => {
        location.href = "/notice_view.html?id=" + item.boardseq;
    })
}

function getAllData(){
    let url = `http://172.16.11.230/data/?ct=Data&at=listbbs&per=&on1=`
    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res);
        })
}