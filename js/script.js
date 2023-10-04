import i18Obj from './translate.js'

const portfolio_btn = document.querySelectorAll('.portfolio__btn');
const portfolioImgs = document.querySelectorAll('.portfolio__img');
const ruLanguage = document.querySelector('.RU');
const engLanguage = document.querySelector('.EN');
const themeSwitcherBtn = document.querySelector('.toggle-btn')
const hoverImage =document.querySelectorAll('.hover');




hoverImage.forEach(element=>{
    const hoverImageSrc = element.dataset.hover
    
    element.addEventListener('mouseover',function(){
        
        element.src=hoverImageSrc;
        
    })

    element.addEventListener('mouseout',()=>{
        element.src=element.dataset.src;
        
    })
})


ruLanguage.addEventListener('click',function(){
    getTranslate('ru')
    
})

engLanguage.addEventListener('click',function(){
    getTranslate('en')
})

portfolio_btn.forEach(function(element){
    element.addEventListener('click',function(){
        switch(element.textContent){
            case 'Winter': case'Зима':
                portfolio_btn.forEach(el=>{
                    el.classList.remove('active')
                })
                element.classList.add('active')
                portfolioImgs.forEach((item,i)=>{
                    item.src = `/img/portfolio-image/winter/${i+1}.jpg`
                }) 
                break;
                
            case 'Spring': case'Весна':
                portfolio_btn.forEach(el=>{
                    el.classList.remove('active')
                })
                element.classList.add('active')
                portfolioImgs.forEach((item,i)=>{
                    item.src = `/img/portfolio-image/spring/${i+1}.jpg`
                })
                break;
            case 'Summer':case'Лето':
                portfolio_btn.forEach(el=>{
                    el.classList.remove('active')
                })
                element.classList.add('active')
                portfolioImgs.forEach((item,i)=>{
                    item.src = `/img/portfolio-image/summer/${i+1}.jpg`
                })
                break;
            case 'Autumn':case 'Осень':
                portfolio_btn.forEach(el=>{
                    el.classList.remove('active')
                })
                element.classList.add('active')
                portfolioImgs.forEach((item,i)=>{
                    item.src = `/img/portfolio-image/autumn/img${i+1}.jpg`
                })
                break;
        }
    })
})

//translating

function getTranslate(lang){
    document.querySelectorAll(['[data-i101]']).forEach((el)=>{
        const attributeName = el.getAttribute('data-i101')
        el.textContent=i18Obj[lang][attributeName];  
        if(el.placeholder){ // if elements contains placeholder then change him
            el.placeholder=i18Obj[lang][attributeName];
            el.textContent=''
        }
    })
}


//theme switcher

const classesForChange = [
    '.skills',
    '.portfolio',
    '.video',
    '.price',
    '.skills__title',
    '.contact',
    '.price__item-title',
    '.price__item-text',
    '.portfolio__title',
    '.price__title',
    '.skills__item-title',
    '.skills_item-text',
    '.video__title']



themeSwitcherBtn.addEventListener('click',(e)=>{
    if(e.target.checked){
        classesForChange.forEach(item=>{
            document.querySelector(item).classList.add('light__theme');
             
        })
    }
    else{
        classesForChange.forEach(item=>{
            document.querySelector(item).classList.remove('light__theme');

        })
    }
        
})


//nav menu smooth scroll

const links = document.querySelectorAll('.menu__item-link');
console.log(links)
links.forEach((item)=>{
    item.addEventListener('click',(event)=>{
        event.preventDefault();
        const id = item.getAttribute('href'); // get link id
        document.querySelector(id).scrollIntoView({
            behavior:'smooth',
            block:'start'
        })

    })
})

