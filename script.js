let productImg = document.getElementById("productImg")
let btn = document.getElementsByClassName("btn")

btn[0].onclick = function(){
    productImg.src = "front.png"

    for(bt of btn){
        bt.classList.remove("active")

    }
    this.classList.add("active")
}
btn[1].onclick = function(){
    productImg.src = "back.png"
    for(bt of btn){
        bt.classList.remove("active")

    }
    this.classList.add("active")
}
btn[2].onclick = function(){
    productImg.src = "last.png"
    for(bt of btn){
        bt.classList.remove("active")

    }
    this.classList.add("active")
}