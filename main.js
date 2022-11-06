const NAVIGATION = {
    'navButton': document.querySelector(".nav-button"),
    'navList' : document.querySelector('.nav-list')
}
NAVIGATION.navButton.addEventListener("click", () => {
    NAVIGATION.navButton.toggleAttribute('opened')
    if (NAVIGATION.navButton.hasAttribute('opened')){
        NAVIGATION.navButton.innerHTML = 'close'
        NAVIGATION.navButton.toggleAttribute("aria-hidden",false)
    }
    else{
            NAVIGATION.navButton.innerHTML = 'menu'
            NAVIGATION.navButton.toggleAttribute("aria-hidden",true)
    }
});

document.addEventListener('click',(e)=>{
    
    if (e.target!=NAVIGATION.navButton && NAVIGATION.navButton.hasAttribute("opened") && (e.target!=NAVIGATION.navList )){
        NAVIGATION.navButton.toggleAttribute("opened")
    }
})