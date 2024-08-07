let col = document.querySelectorAll(".col");
let msg = document.getElementById("msg");
let reset = document.getElementById("reset");

let turn = "X";
const arr = Array(9).fill(null);
function winner(){
    if (
      (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
      (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
      (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
      (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
      (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
      (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
      (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
      (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {
        msg.innerText = `Winner is ${turn}`;
        msg.classList.add("display");
        col.forEach((val)=>{
            val.classList.add("dis-con")
        })
        
    }
    else{
        if(!(arr.some(v=>v===null))){
            msg.classList.add("draw");
            msg.innerText = `Match Draw😍`;
        }
    }
}
function hello(e){
    let id = e.id;
    if(arr[id]!=null) return;
    arr[id]=turn;
    e.innerText = turn;
    winner();
    turn = turn==="X"?"O":"X";
}

reset.addEventListener("click",()=>{
    turn = "X"
    arr.fill(null)
    col.forEach((v)=>{
        v.innerText = ""
        v.classList.remove("dis-con");
    })
    msg.classList.remove("display")
    msg.classList.remove("draw")
    msg.innerText = "Tic Tac Toe";
})