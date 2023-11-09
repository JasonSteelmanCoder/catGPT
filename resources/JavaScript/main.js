const hamburger = document.querySelector("#menu button");
const dropdownMenu = document.getElementById('dropdown-menu');
const menuLinks = document.querySelectorAll('.dropdown-item');
const docMain = document.querySelectorAll('main, #logo, #call-to-action')

const prompts = document.querySelectorAll('.prompt-card');
const moreIdeasButton = document.querySelector('#more-ideas-button')
const belowTheFoldItems = document.querySelectorAll('.below-the-fold');

hamburger.addEventListener('click', () => {
    if (dropdownMenu.className === 'collapsed') {
        dropdownMenu.className = 'expanded';
    } else {
        dropdownMenu.className = 'collapsed';
    }
})

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => {
        dropdownMenu.className = 'collapsed';
    })
}

moreIdeasButton.addEventListener('click', () => {
    if (moreIdeasButton.innerHTML === 'More Ideas...') {
        for (let i = 0; i < belowTheFoldItems.length; i++) {
            belowTheFoldItems[i].style.display = 'block';
        }
        moreIdeasButton.innerHTML = 'Fewer Ideas';
    } else {
        for (let i = 0; i< belowTheFoldItems.length; i++) {
            belowTheFoldItems[i].style.display = 'none';
        }
        moreIdeasButton.innerHTML = 'More Ideas...';
    }    
})

for (let i = 0; i < prompts.length; i++) {

    let prompt = prompts[i];

    prompt.addEventListener('mouseover', () => {
        prompt.style.border = '1px solid white';
        prompt.style.fontSize = '17px';
    });

    prompt.addEventListener('mouseout', () => {
        prompt.style.border = '1px solid black';
        prompt.style.fontSize = '16px';
    });
}

for (let i = 0; i < docMain.length; i++) {
    let element = docMain[i];
    element.addEventListener('click', () => {
        if (dropdownMenu.className === 'expanded') {
            dropdownMenu.className = 'collapsed';
        }
    })
}