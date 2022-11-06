const NAVIGATION = {
    'navButton': document.querySelector(".nav-button"),
    'navList' : document.querySelector('.nav-list')
}
NAVIGATION.navButton.addEventListener("click", () => {
    NAVIGATION.navButton.toggleAttribute('opened')
    NAVIGATION.navButton.innerHTML = NAVIGATION.navButton.hasAttribute('opened')?'close':'menu'
});

document.addEventListener('click',(e)=>{
    if (e.target!=NAVIGATION.navButton && NAVIGATION.navButton.hasAttribute("opened") && e.target!=NAVIGATION.navList){
        NAVIGATION.navButton.toggleAttribute("opened")
    }
})