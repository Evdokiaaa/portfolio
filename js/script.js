const portfolio_btn = document.querySelectorAll('.portfolio__btn');
const portfolioImgs = document.querySelectorAll('.portfolio__img');

portfolio_btn.forEach(function(element){
    element.addEventListener('click',function(){
        switch(element.textContent){
            case 'Winter':
                portfolio_btn.forEach(el=>{
                    el.classList.remove('active')
                })
                element.classList.add('active')
                portfolioImgs.forEach((item,i)=>{
                    item.src = `/img/portfolio-image/winter/${i+1}.jpg`
                }) 
                break;
                
            case 'Spring':
                portfolio_btn.forEach(el=>{
                    el.classList.remove('active')
                })
                element.classList.add('active')
                portfolioImgs.forEach((item,i)=>{
                    item.src = `/img/portfolio-image/spring/${i+1}.jpg`
                })
                break;
            case 'Summer':
                portfolio_btn.forEach(el=>{
                    el.classList.remove('active')
                })
                element.classList.add('active')
                portfolioImgs.forEach((item,i)=>{
                    item.src = `/img/portfolio-image/summer/${i+1}.jpg`
                })
                break;
            case 'Autumn':
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