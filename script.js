const btnMenu = document.querySelector('.button-menu');
const menu = document.querySelector('.menu');
const btnChoice1 = document.querySelector('.choice-1');
const btnChoice2 = document.querySelector('.choice-2');
const btnChoice3 = document.querySelector('.choice-3');
const myForm = document.querySelector('#myForm');


/*DISPLAY MENU*/

let isClickedMenu = false;

btnMenu.addEventListener('click', () => {

    isClickedMenu = !isClickedMenu;

    if(isClickedMenu){
        menu.style.display = 'block';
        btnMenu.children[0].src =  './images/icon-close.svg';
        document.querySelector('.background-menu').style.display = 'block';
        document.querySelector('.header-container > svg path:nth-child(1)').style.fill = '#fff';
        document.querySelector('.header-container > svg circle').style.fill = '#fff';
        document.querySelector('.header-container > svg circle + path').style.fill = 'hsla(229, 67%, 8%, 0.9)';
    }
    else{
        menu.style.display = '';
        btnMenu.children[0].src =  './images/icon-hamburger.svg';
        document.querySelector('.background-menu').style.display = 'none';
        document.querySelector('.header-container > svg path:nth-child(1)').style.fill = '#242A45';
        document.querySelector('.header-container > svg circle').style.fill = '#5267DF';
        document.querySelector('.header-container > svg circle + path').style.fill = '#fff';
    }

});


/*FEATURES*/

const title = document.querySelector('.display-feature .minor-title');
const text = document.querySelector('.display-feature .text');


const displayText = (position) => {

    switch(position){

        case 0:
            title.textContent = `Bookmark in one click`;
            text.textContent = `Organize your bookmarks however you like. Our simple drag-and-drop interface 
                gives you complete control over how you manage your favourite sites.`;
            document.querySelector('.image-feature').src = './images/illustration-features-tab-1.svg';
            break;
    
        case 1:
            title.textContent = `Intelligent search`;
            text.textContent = `Our powerful search feature will help you find saved sites in no time at all. 
                No need to trawl through all of your bookmarks.`;
            document.querySelector('.image-feature').src = './images/illustration-features-tab-2.svg';
            break;
    
        case 2:
            title.textContent = `Share your bookmarks`;
            text.textContent = `Easily share your bookmarks and collections with others. Create a shareable 
                link that you can send at the click of a button.`;
            document.querySelector('.image-feature').src = './images/illustration-features-tab-3.svg';
            break;
    
    }

};


/*QUESTIONS*/

const choices = document.querySelectorAll('.li-choice span');

console.log(choices);

choices.forEach( (item, index) => {

    item.addEventListener('click', () => {

        console.log(index);

        for(let i = 0; i < choices.length; i++){

            if(i === index){
                item.style.color = '#242A45';
                item.classList.add('choice');
            }
            else{
                choices[i].style.color = '#9194A2';
                choices[i].classList.remove('choice');
            }

        }
        
        title.classList.add('anim-text');
        text.classList.add('anim-text');

        setTimeout( () => {
    
            title.classList.remove('anim-text');
            text.classList.remove('anim-text');

            document.querySelector('.image-feature').classList.remove('anim-image');

        }, 1200);


        setTimeout( () => {

            displayText(index);

            document.querySelector('.image-feature').classList.add('anim-image');

        }, 200);

    });

});



document.querySelectorAll('.li-question').forEach( (item, index) => {

    item.addEventListener('click', () => {

        if(!item.children[1].style.display){

            document.querySelectorAll('.response')[index].classList.add('anim-height');

            setTimeout( () => {
                document.querySelectorAll('.response')[index].style.display = 'block';
            }, 200)

            item.children[0].children[1].style.transform = 'rotateX(180deg)';
            document.querySelectorAll('.li-question svg path')[index].style.stroke = '#FA5959';

        }
        else{

            document.querySelectorAll('.response')[index].classList.remove('anim-height');

            document.querySelectorAll('.response')[index].style.display = '' ;

            item.children[0].children[1].style.transform = 'rotate(0)';
            document.querySelectorAll('.li-question svg path')[index].style.stroke = '#5267DF';

        }

    });

});


/*FORM*/

myForm.addEventListener('submit', (event) => {

    event.preventDefault();

    if(!email.validity.valid){
   
        document.querySelector('.input').style.border = '0.2rem solid #FA5959';

        const spanError = document.createElement('span');
        spanError.textContent = `Whoops, make sure it's an email`;
        spanError.classList.add('error');

        if( !document.querySelector('.input').nextElementSibling.classList.contains('error') ){
            document.querySelector('.input').insertAdjacentElement('afterend', spanError);            
        }

    }

    else{

        if( document.querySelector('.input').nextElementSibling.classList.contains('error') ){
            document.querySelector('.input').style.border = '';
            document.querySelector('.input').nextElementSibling.remove();
        }

    }

});

