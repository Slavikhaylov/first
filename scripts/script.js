const parent = document.querySelector('.page-6')
const  icon = document.querySelector(".phone-icon")
icon.addEventListener("click", (event)=> {
    document.querySelector(".phone").classList.add("phone_activ")
    document.querySelector(".phone-number").classList.add("activ")
    document.querySelector(".close").classList.add("activ")
})
document.querySelector(".close").addEventListener('click',(event)=>{
    document.querySelector(".phone").classList.remove("phone_activ")
    document.querySelector(".phone-number").classList.remove("activ")
    document.querySelector(".close").classList.remove("activ")
})





function spoiler(parent,titleSelector,arrow){
   const titles = parent.querySelectorAll(titleSelector) 
    parent.addEventListener('click',function(e){
        let checkTitle = e.target.closest(titleSelector)
        
        if(! checkTitle.nextElementSibling.closest('.level-active')){
            
            for (let i = 0; i < titles.length; i++) {
                const element = titles[i];
                element.nextElementSibling.classList.remove('level-active')
                element.querySelector(arrow).classList.remove('transform')
                
            }
        }
        if(checkTitle){
            checkTitle.nextElementSibling.classList.toggle('level-active')
            if(arrow){
                checkTitle.querySelector(arrow).classList.toggle('transform')
            }
        }



    })

}

document.querySelector('.page-6').addEventListener('click' , function(e){
    if(e.target.classList[0] ==  'level-list-item'){
        e.target.classList.toggle('level-active')
    }
    
})







function sliderFunction(slider,sliderItemSelector){
    
    let s 
    if(window.innerWidth > 1400 ){
        s = 4
        
    }else if(window.innerWidth >430){
        s = 3
    }else s = 1
    let position = 0
    slider.addEventListener('click', function(e){
        if(e.target.closest('.left')){
            
            sliderItems = e.currentTarget.querySelectorAll(sliderItemSelector)
            if(position != 0){
               
                if(s === 1){
                    position -= window.innerWidth 
                }else position -= 415
            }
        
            for (let index = 0; index < sliderItems.length; index++) {
                const sliderItem = sliderItems[index];
                sliderItem.style.transform = `translateX(-${position}px)` 
                
            }
            
        }
        if(e.target.closest('.right')){
            
            
            sliderItems = e.currentTarget.querySelectorAll(sliderItemSelector)
        if( position < (sliderItems.length -s)  * 420 && s > 1 || s === 1 && position < ((sliderItems.length -s)  * window.innerWidth )){
            
            if(s === 1){
                position += window.innerWidth  
            }else position += 415   
        }
        for (let index = 0; index < sliderItems.length; index++) {
                let element = sliderItems[index];
                element.style.transform = `translateX(-${position}px)`     
            }
        }
    })


}


spoiler(parent , '.level','.arrow')

document.querySelectorAll('.slider').forEach(slider => {
    sliderFunction(slider,'.slider-item')
})









