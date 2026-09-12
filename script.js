(function(){
    'use strict';
    const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
    const toast=$('#toast');
    function showToast(message){
        if(!toast) return;
        toast.textContent=message;
        toast.classList.add('show');
        setTimeout(()=>toast.classList.remove('show'),3500)
    }

    const menu=$('#menu'), nav=$('#navLinks');
    if(menu && nav){
        menu.addEventListener('click',()=>{
            const open=nav.classList.toggle('open');
            menu.setAttribute('aria-expanded',String(open))
        });
        nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
            nav.classList.remove('open');
            menu.setAttribute('aria-expanded','false')
        }));
    }

    $$('.amount').forEach(btn=>btn.addEventListener('click',()=>{
        $$('.amount').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        const customAmount = $('#customAmount');
        if(customAmount) customAmount.value = btn.dataset.amount
    }));

    const supportForm = $('#supportForm');
    if(supportForm){
        supportForm.addEventListener('submit', e=>{
            e.preventDefault();
            showToast('Thank you. Your support request has been captured.You will get a feedback via Email.');
            e.target.reset()
            //  Connect this form to the foundation email or CRM to receive submissions.
        });
    }

    const contactForm = $('#contactForm');
    if(contactForm){
        contactForm.addEventListener('submit', e=>{
            e.preventDefault();
            showToast('Thank you. Your message is ready to be connected to the foundation email service.');
            e.target.reset()
        });
    }

    const donateForm = $('#donateForm');
    if(donateForm){
        donateForm.addEventListener('submit', e=>{
            e.preventDefault();
            showToast('Donation flow ready. Connect the foundation payment provider to accept donations securely.')
        });
    }

    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add('visible')
    }),{threshold:.12});
    $$('.reveal').forEach(el=>observer.observe(el));
})();

// =========================
// FOUNDER VIDEO
// =========================

const youtubeScript = document.createElement("script");
youtubeScript.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(youtubeScript);

let founderPlayer;

window.onYouTubeIframeAPIReady = function () {
    const videoEl = document.getElementById("founderVideo");
    if (!videoEl) return;

    founderPlayer = new YT.Player("founderVideo", {
        events: {
            onReady: onFounderPlayerReady,
            onStateChange: onFounderPlayerStateChange
        }
    });
};

function onFounderPlayerReady() {
    const watchBtn = document.getElementById("watchStory");
    const overlay = document.getElementById("videoOverlay");
    if (!watchBtn || !overlay) return;

    watchBtn.addEventListener("click", () => {
        document.getElementById("founderVideo").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
        founderPlayer.playVideo();
        overlay.classList.add("hidden");
    });
}

function onFounderPlayerStateChange(event) {
    const overlay = document.getElementById("videoOverlay");
    if (!overlay) return;

    if (event.data === YT.PlayerState.PLAYING) {
        overlay.classList.add("hidden");
    }

    if (
        event.data === YT.PlayerState.PAUSED ||
        event.data === YT.PlayerState.ENDED
    ) {
        overlay.classList.remove("hidden");
    }
}

// =========================
// BENEFICIARY STORY MODAL
// =========================

const storyModal = document.getElementById("storyModal");
const storyModalClose = document.getElementById("storyModalClose");

const storyLinks = document.querySelectorAll(".read-story");
const fullStories = document.querySelectorAll(".full-story");


// =========================
// OPEN STORY
// =========================

storyLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        // Which story did the user click?
        const storyId = this.getAttribute("data-story");


        // Hide every story
        fullStories.forEach(story => {
            story.classList.remove("active");
        });


        // Show ONLY the selected story
        const selectedStory = document.getElementById(storyId);

        if (selectedStory) {
            selectedStory.classList.add("active");
        }


        // Open popup
        storyModal.classList.add("active");


        // Stop main page from scrolling
        document.body.style.overflow = "hidden";

    });

});


// =========================
// CLOSE STORY
// =========================

function closeStoryModal() {

    storyModal.classList.remove("active");

    // Give scrolling back to the main page
    document.body.style.overflow = "";

}


// Close with X button

storyModalClose.addEventListener("click", closeStoryModal);


// =========================
// CLOSE BY CLICKING OUTSIDE
// =========================

storyModal.addEventListener("click", function (event) {

    if (event.target === storyModal) {
        closeStoryModal();
    }

});


// =========================
// CLOSE WITH ESCAPE KEY
// =========================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeStoryModal();
    }

});

