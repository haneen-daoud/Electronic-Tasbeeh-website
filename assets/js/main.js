let btns = document.querySelectorAll('button')
const arr=[0,0,0,0,0,0]
btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let num=btn.id.substring(3,4)
        let count =document.getElementById(`count${num}`)
       ++arr[num-1]
        count.innerHTML =arr[num-1]
        if(arr[num-1]==100){
           arr[num-1] =0
           audiobell.play()
        }
    })
})
function reset(){
for(let i=1;i<7;i++){
document.getElementById(`count${i}`).innerHTML='0'
}
}

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{

        audio.play();
})})

