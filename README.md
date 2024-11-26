# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Bookmark-landing-page/blob/main/screenshot/Bookmark%20landing%20page-mobile.png).
![screenshot mobile-menu](https://github.com/Lo-Deck/Bookmark-landing-page/blob/main/screenshot/Bookmark%20landing%20page-mobile-menu.png).
![screenshot desktop](https://github.com/Lo-Deck/Bookmark-landing-page/blob/main/screenshot/Bookmark%20landing%20page-desktop.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Bookmark-landing-page).
- Live Site URL: [Website](https://lo-deck.github.io/Bookmark-landing-page/).

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learned how to display a menu with a listener `btnMenu.addEventListener`. 
Display different text and start animation depending on the user's click.
 
```js
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

	...

    });

});

```

And finally validate a `form` using valildity API.

```js

myForm.addEventListener('submit', (event) => {

    event.preventDefault();

    if(!email.validity.valid){
		
    ...

```

### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
