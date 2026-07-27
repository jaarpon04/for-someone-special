/* ======================================
   CONFESSION
======================================*/

// ==========================
// DOM
// ==========================

const loader = document.getElementById("loader");
const loadingFill = document.getElementById("loadingFill");

const hero = document.getElementById("hero");
const envelopeSection = document.getElementById("envelopeSection");
const reasons = document.getElementById("reasons");
const gallery = document.getElementById("gallery");
const question = document.getElementById("question");
const celebration = document.getElementById("celebration");

const startBtn = document.getElementById("startBtn");
const envelope = document.getElementById("envelope");
const typingText = document.getElementById("typingText");

const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const readAgainBtn = document.getElementById("readAgainBtn");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const envelopeSound = document.getElementById("envelopeSound");

const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");
const petals = document.getElementById("petals");


// ======================================
// Loading Screen
// ======================================

let progress = 0;

const loading = setInterval(() => {

    progress++;

    loadingFill.style.width = progress + "%";

    if(progress >= 100){

        clearInterval(loading);

        setTimeout(()=>{

            loader.style.opacity="0";

            setTimeout(()=>{

                loader.style.display="none";

            },1000);

        },300);

    }

},25);


// ======================================
// Music
// ======================================

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(playing){

        music.pause();

        musicBtn.innerHTML="🎵";

    }

    else{

        music.play();

        musicBtn.innerHTML="⏸️";

    }

    playing=!playing;

});


// ======================================
// Start Button
// ======================================

startBtn.addEventListener("click",()=>{

    envelopeSection.classList.remove("hidden");

    envelopeSection.scrollIntoView({

        behavior:"smooth"

    });

});


// ======================================
// Envelope
// ======================================

let opened=false;

envelope.addEventListener("click",()=>{

    if(opened) return;

    opened=true;

    envelope.classList.add("open");

    envelopeSound.currentTime = 0;

    envelopeSound.play();

    setTimeout(()=>{

        typeWriter();

    },1200);

});
for(let j=0;j<35;j++){

    setTimeout(()=>{
    
    const s=document.createElement("div");
    
    s.className="sparkle";
    
    s.innerHTML=Math.random()>0.5?"✨":"💖";
    
    s.style.left=(Math.random()*300)+"px";
    
    s.style.top=(Math.random()*200)+"px";
    
    envelope.appendChild(s);
    
    setTimeout(()=>{
    
    s.remove();
    
    },2000);
    
    },j*40);
    
    }


// ======================================
// Love Letter
// ======================================

const message = `

Hi Jade.

I've wanted to tell you this for quite some time.

Every lunch break became something I looked forward to.

Not because of the food...

But because there was a chance I'd get to see you.

And Every Saturday and Sunday i looked forward.

Because there's a chance i can be a bagger for you.

Sometimes our conversations were short.

Sometimes we only exchanged a few words.

But even those small moments became the best part of my day.

I don't know what the future holds.

I only know that meeting you made ordinary days feel special.

Thank you for being someone who unknowingly made me smile.

And today...

I simply wanted to be honest
about how I feel.

If you're open to it,
I'd really like to keep getting to know you.

Thank you for reading this. ❤️

`;

let i=0;

function typeWriter(){

    if(i<message.length){

        typingText.innerHTML+=message.charAt(i);

        typingText.parentElement.scrollTop = typingText.parentElement.scrollHeight;

        i++;

        setTimeout(typeWriter,35);

    }

    else{

        revealSections();

    }

}


// ======================================
// Reveal
// ======================================

function revealSections(){

    reasons.classList.remove("hidden");

    // gallery.classList.remove("hidden"); <-- uncomment this line once you have real photos to add

    question.classList.remove("hidden");

}


// ======================================
// Stars
// ======================================

for(let i=0;i<180;i++){

    const star=document.createElement("div");

    star.style.position="absolute";

    star.style.width="2px";

    star.style.height="2px";

    star.style.borderRadius="50%";

    star.style.background="white";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.opacity=Math.random();

    star.style.animation=`twinkle ${2+Math.random()*4}s infinite`;

    stars.appendChild(star);

}


// ======================================
// Hearts
// ======================================

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="absolute";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=(15+Math.random()*20)+"px";

    heart.style.transition="8s linear";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-120vh)";

    },100);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,500);


// ======================================
// Petals
// ======================================

function createPetal(){

    const petal=document.createElement("div");

    petal.innerHTML="🌸";

    petal.style.position="absolute";

    petal.style.left=Math.random()*100+"vw";

    petal.style.top="-30px";

    petal.style.fontSize="22px";

    petal.style.transition="10s linear";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.style.transform="translateY(120vh) rotate(720deg)";

    },50);

    setTimeout(()=>{

        petal.remove();

    },10000);

}

setInterval(createPetal,700);


// ======================================
// Maybe Button
// ======================================

maybeBtn.addEventListener("mouseenter",()=>{

    const x=Math.random()*(window.innerWidth-150);

    const y=Math.random()*(window.innerHeight-80);

    maybeBtn.style.position="fixed";

    maybeBtn.style.left=x+"px";

    maybeBtn.style.top=y+"px";

});


// ======================================
// Yes Button
// ======================================

yesBtn.addEventListener("click",()=>{

    celebration.classList.remove("hidden");

    launchConfetti();

});


// ======================================
// Read Again Button
// ======================================

readAgainBtn.addEventListener("click",()=>{

    celebration.classList.add("hidden");

    envelopeSection.scrollIntoView({

        behavior:"smooth"

    });

});


// ======================================
// Confetti
// ======================================

function launchConfetti(){

    for(let i=0;i<12;i++){
    
    setTimeout(()=>{
    
    const x=Math.random()*window.innerWidth;
    
    const y=Math.random()*window.innerHeight/2;
    
    for(let j=0;j<40;j++){
    
    const dot=document.createElement("div");
    
    dot.style.position="fixed";
    
    dot.style.left=x+"px";
    
    dot.style.top=y+"px";
    
    dot.style.width="8px";
    
    dot.style.height="8px";
    
    dot.style.borderRadius="50%";
    
    dot.style.background=`hsl(${Math.random()*360},100%,60%)`;
    
    dot.style.transition="1.5s ease-out";
    
    document.body.appendChild(dot);
    
    const angle=Math.random()*360;
    
    const distance=Math.random()*180;
    
    setTimeout(()=>{
    
    dot.style.transform=
    `translate(
    ${Math.cos(angle)*distance}px,
    ${Math.sin(angle)*distance}px)`;
    
    dot.style.opacity="0";
    
    },50);
    
    setTimeout(()=>{
    
    dot.remove();
    
    },1600);
    
    }
    
    },i*300);
    
    }
    
    }
/* ===========================
   Shooting Stars
=========================== */

const shooting=document.getElementById("shootingStars");

function createShootingStar(){

const star=document.createElement("div");

star.className="shooting";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top=Math.random()*250+"px";

shooting.appendChild(star);

setTimeout(()=>{

star.remove();

},2000);

}

setInterval(createShootingStar,5000);

    function lantern(){

        const l=document.createElement("div");
        
        l.className="lantern";
        
        l.innerHTML="🏮";
        
        l.style.left=Math.random()*100+"vw";
        
        l.style.bottom="-50px";
        
        document.body.appendChild(l);
        
        setTimeout(()=>{
        
        l.remove();
        
        },12000);
        
        }
        
        setInterval(lantern,4000);