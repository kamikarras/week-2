let flys=[];
let count=0;


const butt = document.querySelector('.hole-opener');

const expandButt = document.createElement('button');
expandButt.innerText ="expand hole"
expandButt.classList.add("hole-opener")

let hole= document.createElement("div");
hole.classList.add('hole');

let flyGirl = document.createElement("img")
flyGirl.src="assets/flygirl.svg"
flyGirl.classList.add("fly-girl")
flyGirl.classList.add("shrink")

let suck =false;

butt.addEventListener("click",()=>{


    document.body.appendChild(hole);
    suckin()
    suck=true
    butt.classList.add("hide")
    document.body.appendChild(expandButt)
    expandButt.classList.add("show")
    expandButt.style.opacity = 0
})

expandButt.addEventListener("click",()=>{
    if(flys){

        for(i=0;i<flys.length;i++){
            document.body.removeChild(flys[i])
        }
    }
    hole.classList.add("growHole")
    
    expandButt.classList.remove("show")
    
    setTimeout(()=>{
        hole.classList.add("hide")
        document.body.appendChild(flyGirl)
    }, 1000)
    expandButt.classList.add("hide")
    
})

const makeFlys =()=>{
    for(e=0;e<window.innerHeight;e+=80){
    
        for(i=0;i<window.innerWidth;i+=80){
            let fly = document.createElement("img");
            fly.src="./assets/fly.svg"
            fly.style.width="40px"
            fly.style.position="absolute"
            fly.style.left=i+"px"
            fly.style.top=e+"px"
            document.body.appendChild(fly);
            flys.push(fly)
        }
    }
}
const rotateFlys = ()=>{
    count++
    flys.forEach(fly=>{
            fly.style.transform = `rotate(${count*Math.random()*.01}deg)`;
})
    window.requestAnimationFrame(rotateFlys)
}


makeFlys()
if(!suck){
    window.addEventListener("resize",()=>{
        flys.forEach(fly=>{
            document.body.removeChild(fly);
        })
        flys=[];
      makeFlys()
    
    })

}

rotateFlys()




const suckin = ()=>{
    for(i=0;i<flys.length;i++){
        let fly= flys[i]

        let leftPos = (fly.style.left.substring(0,fly.style.left.length-2))
        let topPos = (fly.style.top.substring(0,fly.style.top.length-2))
        let leftTarget =(window.innerWidth/10)*8.5
        let bottomTarget =(window.innerHeight/10)*7
        if (leftPos<leftTarget){
            leftPos++
            leftPos++
            leftPos++
    
            fly.style.left =leftPos+"px"
        } else if(leftPos>leftTarget){
            leftPos--
            leftPos--
            leftPos--
            fly.style.left =leftPos+"px"
        }
        if (topPos<bottomTarget){
            topPos++
            topPos++
            topPos++
            fly.style.top =topPos+"px"
        } else if(topPos>bottomTarget){
            topPos--
            topPos--
            topPos--
            fly.style.top =topPos+"px"
        }

    }


     window.requestAnimationFrame(suckin)
} 

if(suck){
    window.requestAnimationFrame(suckin)
}