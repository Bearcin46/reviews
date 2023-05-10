const reviews=[
    {
        id:1,
        name:"Sushanika",
        job:"Web Developer",
        img:"images\istockphoto-637233964-612x612.jpg ",
        text:"I really enjoyed the process of learning, today when I look back it's a great experience.I'm grateful for the wonderful moments and experience, Anyone can try it"

    },
    {
        id:2,
        name:"Judlin Smith",
        job:"Web Designer",
        img: "images\istockphoto-1124239071-612x612.jpg ",
        text:"I really enjoyed the process of learning, today when I look back it's a great experience.I'm grateful for the wonderful moments and experience, Anyone can try it"


    },
    {
        id:3,
        name:"Sinterella Monica",
        job:"Itern",
        img:"images\istockphoto-1354842602-612x612.jpg " ,
        text:"I really enjoyed the process of learning, today when I look back it's a great experience.I'm grateful for the wonderful moments and experience, Anyone can try it"


    },
    {
        id:4,
        name:"Havertiya Iver",
        job:"Software Developer",
        img: "images\istockphoto-1366226640-612x612.jpg ",
        text:"I really enjoyed the process of learning, today when I look back it's a great experience.I'm grateful for the wonderful moments and experience, Anyone can try it"


    }
]

const img=document.getElementById("person-img")
const author=document.getElementById("author")
const job=document.getElementById("job")
const info=document.getElementById("info")
const prevBtn=document.querySelector(".prev-btn")
const nextBtn=document.querySelector(".next-btn")
const randomBtn=document.querySelector(".random-btn")

//set starting item

let currentItem=0;

//load initial item

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem)
})

//show person on item
function showPerson(person){
const items= reviews[person];
img.src=items.img;
author.textContent=items.name;
job.textContent=items.job;
info.textContent=items.text;
}
//show next person

prevBtn.addEventListener("click", ()=> {
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem)
})

//show prev person

nextBtn.addEventListener("click", ()=>{
    currentItem--;
    if(currentItem <0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem)
})

//show random person

randomBtn.addEventListener("click", ()=>{
    currentItem=Math.floor(Math.random()*reviews.length)
    showPerson()
})