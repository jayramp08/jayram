// ======================
// HAMBURGER MENU
// ======================

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// ======================
// SMOOTH SCROLL
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

        const menu =
        document.getElementById("menu");

        if(menu){
            menu.classList.remove("active");
        }

    });

});

// ======================
// ANIMATED COUNTERS
// ======================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter,20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// ======================
// DARK MODE
// ======================

function toggleDarkMode(){

    document.body.classList.toggle(
        "dark-mode"
    );

    if(
        document.body.classList.contains(
            "dark-mode"
        )
    ){
        localStorage.setItem(
            "theme",
            "dark"
        );
    } else {
        localStorage.setItem(
            "theme",
            "light"
        );
    }

}

// Load Saved Theme

window.addEventListener("load", () => {

    const theme =
    localStorage.getItem("theme");

    if(theme === "dark"){

        document.body.classList.add(
            "dark-mode"
        );

    }

});

// ======================
// GALLERY LIGHTBOX
// ======================

const galleryImages =
document.querySelectorAll(
    ".gallery img"
);

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const lightbox =
        document.createElement("div");

        lightbox.style.position =
        "fixed";

        lightbox.style.top = "0";

        lightbox.style.left = "0";

        lightbox.style.width = "100%";

        lightbox.style.height = "100%";

        lightbox.style.background =
        "rgba(0,0,0,0.9)";

        lightbox.style.display =
        "flex";

        lightbox.style.alignItems =
        "center";

        lightbox.style.justifyContent =
        "center";

        lightbox.style.cursor =
        "pointer";

        lightbox.style.zIndex =
        "9999";

        const img =
        document.createElement("img");

        img.src = image.src;

        img.style.maxWidth = "90%";

        img.style.maxHeight = "90%";

        img.style.borderRadius =
        "12px";

        lightbox.appendChild(img);

        document.body.appendChild(
            lightbox
        );

        lightbox.addEventListener(
            "click",
            () => {

                lightbox.remove();

            }
        );

    });

});

// ======================
// WELCOME MESSAGE
// ======================

window.addEventListener(
    "load",
    () => {

        console.log(
            "Welcome to Jayram Phadtare Website 🚀"
        );

    }
);
