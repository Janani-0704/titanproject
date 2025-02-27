let heart = document.querySelectorAll(".sale-heart img")
console.log(heart);

heart.forEach((item)=>{
    item.addEventListener("dblclick",()=>{
        heart.style.backgroundColor = "red"
    })
})

