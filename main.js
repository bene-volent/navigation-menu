const NAVIGATION = {
    navButton: document.querySelector(".nav-button"),
    navList: document.querySelector(".nav-list"),
};

function handleNavigationButtonEvent() {
    NAVIGATION.navButton.toggleAttribute("opened");
    if (NAVIGATION.navButton.hasAttribute("opened")) {
        NAVIGATION.navButton.innerHTML = "close";
        NAVIGATION.navList.setAttribute("aria-hidden", false);
    } else {
        NAVIGATION.navButton.innerHTML = "menu";
        NAVIGATION.navList.setAttribute("aria-hidden", true);
    }
}

NAVIGATION.navButton.addEventListener("click", handleNavigationButtonEvent);

document.addEventListener("click", (e) => {
    if (
        e.target != NAVIGATION.navButton &&
        NAVIGATION.navButton.hasAttribute("opened") &&
        e.target != NAVIGATION.navList
    ) {
        handleNavigationButtonEvent();
    }
});
