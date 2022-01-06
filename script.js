let images = document.querySelectorAll(".containImages img")
let next= document.getElementById("next")
let previous = document.getElementById("previous")

let index = 0

next.addEventListener("click",()=>{
    images.forEach((img,i)=>{
        img.className="lastSlide"
        if(index ===i){
            img.className="activeSlide"
        }else if(index >= images.length){
            index=1
            
            console.log(true)
        }
       
    })


    index++;
})
previous.addEventListener("click",()=>{
    images.forEach((img,i)=>{
        img.className="lastSlide"
        if(index ===i){
            img.className="activeSlide"
        }else if(index <= 0){
            index=images.length
           
            console.log(true)
        }
       
    })


    index--;
})