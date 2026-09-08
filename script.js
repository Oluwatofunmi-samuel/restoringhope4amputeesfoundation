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

// =========================
// FOUNDER VIDEO
// =========================

// Load YouTube IFrame Player API
const youtubeScript = document.createElement("script");
youtubeScript.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(youtubeScript);

let founderPlayer;

function onYouTubeIframeAPIReady() {
    founderPlayer = new YT.Player("founderVideo", {
        events: {
            onStateChange: function(event) {

                // Video is playing
                if (event.data === YT.PlayerState.PLAYING) {
                    document
                        .getElementById("videoOverlay")
                        .classList.add("hidden");
                }

                // Video is paused or stopped
                if (
                    event.data === YT.PlayerState.PAUSED ||
                    event.data === YT.PlayerState.ENDED
                ) {
                    document
                        .getElementById("videoOverlay")
                        .classList.remove("hidden");
                }
            }
        }
    });
}
