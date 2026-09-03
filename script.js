(function(){
    'use strict';
    const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
    const toast=$('#toast');
    function showToast(message){toast.textContent=message;toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'),3500)
}
    const menu=$('#menu'),nav=$('#navLinks');
    menu.addEventListener('click',()=>{
        const open=nav.classList.toggle('open');
        menu.setAttribute('aria-expanded',String(open))
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');
        menu.setAttribute('aria-expanded','false')
    }));
    $$('.amount').forEach(btn=>btn.addEventListener('click',()=>{$$('.amount').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        $('#customAmount').value=btn.dataset.amount
    }));
    $('#supportForm').addEventListener('submit',e=>{e.preventDefault();
        showToast('Thank you. Your support request has been captured.You will get a feedback via Email.');e.target.reset()  
        //  Connect this form to the foundation email or CRM to receive submissions.
    });
    $('#contactForm').addEventListener('submit',e=>{e.preventDefault();
        showToast('Thank you. Your message is ready to be connected to the foundation email service.');e.target.reset()
    });
    $('#donateForm').addEventListener('submit',e=>{e.preventDefault();
        showToast('Donation flow ready. Connect the foundation payment provider to accept donations securely.')});
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});
    $$('.reveal').forEach(el=>observer.observe(el));
})();


/* =========================
   FOUNDER VIDEO
========================= */

const founderVideo = document.getElementById("founderVideo");
const playButton = document.getElementById("playButton");
const watchStory = document.getElementById("watchStory");
const videoOverlay = document.getElementById("videoOverlay");
const pauseButton = document.getElementById("pauseButton");


function playFounderVideo() {

  founderVideo.play();

  videoOverlay.classList.add("hidden");

  watchStory.innerHTML = `
    <span>❚❚</span>
    Pause Her Story
  `;
}


function pauseFounderVideo() {

  founderVideo.pause();

  videoOverlay.classList.remove("hidden");

  watchStory.innerHTML = `
    <span>▶</span>
    Watch Her Story
  `;
}


/* Main play button */

playButton.addEventListener("click", function () {

  playFounderVideo();

});


/* Watch/Pause button */

watchStory.addEventListener("click", function () {

  if (founderVideo.paused) {

    playFounderVideo();

  } else {

    pauseFounderVideo();

  }

});


/* Small pause button */

pauseButton.addEventListener("click", function () {

  pauseFounderVideo();

});


/* When video finishes */

founderVideo.addEventListener("ended", function () {

  videoOverlay.classList.remove("hidden");

  watchStory.innerHTML = `
    <span>▶</span>
    Watch Her Story
  `;

});


