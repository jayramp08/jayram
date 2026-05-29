// ======================================
// PREMIUM WEBSITE EFFECTS BY JAYRAM
// ======================================

// Dynamic CSS Injection
const style = document.createElement("style");

style.innerHTML = `

/* Glowing Profile Ring */
#home img{
    animation: profileGlow 3s infinite alternate;
}

@keyframes profileGlow{
    0%{
        box-shadow:
        0 0 20px #38bdf8,
        0 0 40px #38bdf8;
    }
    100%{
        box-shadow:
        0 0 35px #38bdf8,
        0 0 70px #38bdf8,
        0 0 100px #38bdf8;
    }
}

/* Heading Animation */
#home h1{
    animation: headingPulse 2s infinite;
}

@keyframes headingPulse{
    0%{
        transform:scale(1);
    }

    50%{
        transform:scale(1.05);
    }

    100%{
        transform:scale(1);
    }
}

/* Floating Cards */
article,
#skills div div{
    transition:all .4s ease;
}

article:hover,
#skills div div:hover{
    transform:
    translateY(-10px)
    scale(1.03);
}

/* Mouse Glow */
.glow-cursor{
    position:fixed;
    width:20px;
    height:20px;
    border-radius:50%;
    background:#38bdf8;
    pointer-events:none;
    z-index:9999;
    filter:blur(10px);
    opacity:.8;
}
`;

document.head.appendChild(style);


// ======================================
// CURSOR GLOW
// ======================================

const cursor = document.createElement("div");

cursor.classList.add("glow-cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";

});


// ======================================
// TYPING EFFECT
// ======================================

const words = [
    "Student",
    "Digital Creator",
    "Future Engineer",
    "Web Developer",
    "Video Editor",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let typing = true;

const typingElement =
document.getElementById("typing-text");

function animateTyping(){

    if(!typingElement) return;

    const currentWord =
    words[wordIndex];

    if(typing){

        typingElement.textContent =
        currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex===currentWord.length){

            typing=false;

            setTimeout(
                animateTyping,
                1500
            );

            return;
        }

    }else{

        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex-1
        );

        charIndex--;

        if(charIndex===0){

            typing=true;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(
        animateTyping,
        typing ? 120 : 60
    );

}

animateTyping();


// ======================================
// SCROLL REVEAL
// ======================================

const reveals =
document.querySelectorAll(
    "section"
);

function reveal(){

    reveals.forEach((el)=>{

        const top =
        el.getBoundingClientRect().top;

        if(top < window.innerHeight-120){

            el.style.opacity="1";
            el.style.transform=
            "translateY(0px)";

        }

    });

}

reveals.forEach((el)=>{

    el.style.opacity="0";

    el.style.transform=
    "translateY(60px)";

    el.style.transition=
    "all 0.8s ease";

});

window.addEventListener(
    "scroll",
    reveal
);

reveal();


// ======================================
// RANDOM PARTICLES
// ======================================

for(let i=0;i<30;i++){

    const particle =
    document.createElement("div");

    particle.style.position="fixed";

    particle.style.width="4px";

    particle.style.height="4px";

    particle.style.borderRadius="50%";

    particle.style.background="#38bdf8";

    particle.style.left=
    Math.random()*100+"vw";

    particle.style.top=
    Math.random()*100+"vh";

    particle.style.opacity=".2";

    particle.style.pointerEvents=
    "none";

    particle.style.zIndex="-1";

    document.body.appendChild(
        particle
    );

}
