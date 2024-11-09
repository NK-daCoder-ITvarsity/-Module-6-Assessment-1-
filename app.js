const mobileNavMenu = document.getElementById("mobile-nav-items");
const burgerMenuBtn = document.getElementById("burger-menu");
const mobileCancleNavButton = document.getElementById("cancle-menu-button");

const desktopNavCancleBtn = document.getElementById("nav-close-btn-desktop");
const discoveryBtn = document.getElementById("discovery-btn");

const discoverySubBtns = document.querySelectorAll(".discovery-sub-btns");
const discoverySubBtnsDropdown = document.querySelectorAll(".discovery-sub-btn-dropdown");

document.addEventListener("DOMContentLoaded", () => {
    console.log("Eveything is working");

    burgerMenuBtn.addEventListener("click", () => {
        burgerMenuBtn.classList.remove("grid");
        burgerMenuBtn.classList.add("hidden");
        
        mobileCancleNavButton.classList.remove("hidden");
        mobileCancleNavButton.classList.add("grid");
        mobileNavMenu.classList.remove("-left-96");
        mobileNavMenu.classList.add("left-0");
    });

    mobileCancleNavButton.addEventListener(("click"), () => {
        mobileCancleNavButton.classList.remove("hidden");
        mobileNavMenu.classList.add("-left-96");
        mobileNavMenu.classList.remove("left-0");
        mobileCancleNavButton.classList.add("hidden");
        burgerMenuBtn.classList.remove("hidden");
        burgerMenuBtn.classList.add("grid");
    });

    desktopNavCancleBtn.addEventListener("click", () => {
        document.getElementById("discover-ul-desktop").classList.add("hidden");
        desktopNavCancleBtn.classList.add("hidden");
    });

    discoveryBtn.addEventListener("click", () => {
        document.getElementById("discover-ul-desktop").classList.remove("hidden");
        desktopNavCancleBtn.classList.remove("hidden");
    });

    // getting discovery and experience buttons
    document.querySelectorAll(".main-nav-btn").forEach(btns => {
        btns.addEventListener("click", () => {
            const dropDownTarget = btns.getAttribute("data-page");

            document.querySelectorAll(".main-dropdown").forEach(mainDropdown => {
                if (mainDropdown.id === dropDownTarget) {
                    if (mainDropdown.classList.contains("h-auto")) {
                        mainDropdown.classList.add("h-0");
                        mainDropdown.classList.remove("h-auto");
                    }
                    else {
                        mainDropdown.classList.remove("h-0");
                        mainDropdown.classList.add("h-auto");
                    }
                }
                else {
                    // Close any other open dropdowns
                    mainDropdown.classList.add("h-0");
                    mainDropdown.classList.remove("h-32");
                }

            })
        });
    });

    
    // Loop through each button
    discoverySubBtns.forEach((dropdownBtn) => {
        dropdownBtn.addEventListener("click", () => {
            const dropdownBtnTarget = dropdownBtn.getAttribute("data-page");
    
            discoverySubBtnsDropdown.forEach((dropdownSection) => {
                // recreating the toggle 
                // Check if this dropdown section matches the clicked button
                if (dropdownSection.id === dropdownBtnTarget) {
                    // Toggle between open and closed states
                    if (dropdownSection.classList.contains("h-32")) {
                        // Close if already open
                        dropdownSection.classList.add("h-0");
                        dropdownSection.classList.remove("h-32");
                    } else {
                        // Open if currently closed
                        dropdownSection.classList.remove("h-0");
                        dropdownSection.classList.add("h-32");
                    }
                } 
                else {
                    // Close any other open dropdowns
                    dropdownSection.classList.add("h-0");
                    dropdownSection.classList.remove("h-32");
                }
            });
        });
    });
    
});