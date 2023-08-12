(function(){
    const sliders = [...document.querySelectorAll('.sponsor__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentSponsor = document.querySelector('.sponsor__body--show').dataset.id;
        value = Number(currentSponsor);
        value+= add;
        
        sliders[Number(currentSponsor)-1].classList.remove('sponsor__body--show');
        if(value === sliders.length + 1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }        
        
        sliders[value-1].classList.add('sponsor__body--show');
    }

    console.log(sliders);
})(); 