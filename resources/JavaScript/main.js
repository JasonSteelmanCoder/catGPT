const hamburger = document.querySelector("#menu button");
const dropdownMenu = document.getElementById('dropdown-menu');
const menuLinks = document.querySelectorAll('.dropdown-item');
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
        dropdownMenu.class = 'collapsed';
        dropdownMenu.style.display = 'none';
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
