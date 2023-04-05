import i18Obj from './translate.js'

const portfolio_btn = document.querySelectorAll('.portfolio__btn');
const portfolioImgs = document.querySelectorAll('.portfolio__img');
const ruLanguage = document.querySelector('.RU');
const engLanguage = document.querySelector('.EN');

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

