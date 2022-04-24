/*=============== SHOW SIDEBAR ===============*/
const navMenu=document.getElementById('sidebar'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navToggle){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== SKILLS TABS ===============*/
const tabs=document.querySelectorAll('[data-target]'),
      tabContent=document.querySelectorAll('[data-content]')

      tabs.forEach(tab=>{
          tab.addEventListener("click",()=>{
              const target=document.querySelector(tab.dataset.target)

              tabContent.forEach(tabContents=>{
                  tabContents.classList.remove("skills__active")
              })

              target.classList.add('skills__active')

            tabs.forEach(tab =>{
                tab.classList.remove("skills__active")
            })

            tab.classList.add('skills__active')

          })
      })

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortafolio=mixitup('.work__container',{
    selectors:{
        target:'.work__card'
    },
    animation:{
        duration:300
    }
});

/*===== Link Active Work =====*/
const linkWork=document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=>l.classList.remove('active__work'))
    this.classList.add('active__work')
}
linkWork.forEach(l=> l.addEventListener("click",activeWork))

/*===== Work Popup =====*/

document.addEventListener("click",(e)=>{
    if(e.target.classList=="work__button"){
        togglePortafolioPopup();
        portafolioDetails(e.target.parentElement);
    }
  
    
})
function togglePortafolioPopup(){
    document.querySelector(".portafolio__popup").classList.toggle("open")
}

document.querySelector(".portafolio__popup-close").addEventListener("click",togglePortafolioPopup)//

function portafolioDetails(portafolioitem){
    document.querySelector(".pp__thumbnail img").src=portafolioitem.querySelector(".work__img").src;
    document.querySelector(".portafolio__popup-subtitle span").innerHTML=portafolioitem.querySelector(".work__title").innerHTML;
   document.querySelector(".portafolio__popup-body").innerHTML=portafolioitem.querySelector(".portafolio__item-details").innerHTML;
    console.log(portafolioitem)
}
/*=============== SERVICES MODAL ===============*/
const modalViews=document.querySelectorAll('.services__modal'),
    modelBtns=document.querySelectorAll('.services__button'),
    modalCloses=document.querySelectorAll('.services__modal-close')

let modal=function(modalClick){
    modalViews[modalClick].classList.add('active__modal')
}
modelBtns.forEach((modelBtn,i)=>{
    modelBtn.addEventListener('click',()=>{
        modal(i)
    })
})    

modalCloses.forEach((modalclose)=>{
    modalclose.addEventListener("click",()=>{
        modalViews.forEach((modalview)=>{
            modalview.classList.remove('active__modal')
        })
    })
})

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/
const inputs= document.querySelectorAll(".input");

function focusfunc(){
    let parent=this.parentNode;
    parent.classList.add("focus");
}

function blurfunc(){
    let parent=this.parentNode;
    if(this.value==""){
        parent.classList.remove("focus")
    }

}

inputs.forEach((input)=>{
    input.addEventListener("focus",focusfunc);
    input.addEventListener("blur",blurfunc)
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
 const sections=document.querySelectorAll("section[id]");

window.addEventListener("scroll",navHighligther);

 function navHighligther(){
     let scrollY=window.pageYOffset;

     sections.forEach(current=>{
         const sectionHeigth=current.offsetHeight;
         const sectionTop=current.offsetTop -50,
         sectionId=current.getAttribute("id");

     if(scrollY>sectionTop && scrollY <=sectionTop+sectionHeigth)
     {
         document.querySelector('.nav__menu a[href*='+sectionId+"]").classList.add("active-link")
     }   
     else{
        document.querySelector('.nav__menu a[href*='+sectionId+"]").classList.remove("active-link")
     }
     })
 }

/*=============== SHOW SCROLL UP ===============*/
