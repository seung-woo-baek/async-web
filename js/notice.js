(function getData(){
    let url = `http://172.16.11.230/data/?ct=Data&at=listbbs&per=0&on1=10`;

    fetch(url)
        .then(res => res.json())
        .then(res => {
            res.forEach(item => {
                const idx =res.indexOf(item);
                if(res.length > 0){
                    addBoardList(item, idx);
                } else {
                    addEmptyBoardList();
                }
                addLinkForList(item);
            })
        })
        .catch(error => {
            alert("네트워크에 오류가 발생했습니다.")
            console.log(error);
        })
})();

function addBoardList(item, idx){
    const boarditem = document.querySelector(`.board-item:nth-child(${idx + 2})`)
    boarditem.setAttribute('id', `no${item.boardseq}`);
    document.querySelector(`.board-item:nth-child(${idx + 2}) .notice-idx`).innerHTML = item.boardseq;
    document.querySelector(`.board-item:nth-child(${idx + 2}) .notice-title`).innerHTML = item.subject;
    document.querySelector(`.board-item:nth-child(${idx + 2}) .notice-reg`).innerHTML = item.regday;
    document.querySelector(`.board-item:nth-child(${idx + 2}) .notice-readcnt`).innerHTML = item.readcnt;
    
}

function addEmptyBoardList(){
    const board = document.querySelector('.board-items')
    board.insertAdjacentHTML('beforeend', `<li class="board-empty">
            <p>등록된 공지사항이 없습니다.</p>
        </li>`);
}

function addLinkForList(item){
    const noticeLinkBtn = document.getElementById(`no${item.boardseq}`)
    noticeLinkBtn.addEventListener('click', event => {
        location.href = `notice_view.html?id=${item.boardseq}`;
    })
}