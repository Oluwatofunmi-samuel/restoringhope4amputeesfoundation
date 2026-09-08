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

document.addEventListener('DOMContentLoaded', function () {
// =========================
// FOUNDER VIDEO OVERLAY
// =========================

(function () {

    const overlay = document.getElementById('videoOverlay');
    const iframe = document.getElementById('founderVideo');

    if (!overlay || !iframe) {
        console.log('Founder video elements not found.');
        return;
    }

    let player;

    // Create YouTube API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    document.head.appendChild(tag);

    // YouTube calls this when its API is ready
    window.onYouTubeIframeAPIReady = function () {

        console.log('YouTube API is ready.');

        player = new YT.Player('founderVideo', {

            events: {

                onStateChange: function (event) {

                    console.log('YouTube state:', event.data);

                    // PLAYING
                    if (event.data === YT.PlayerState.PLAYING) {

                        console.log('VIDEO IS PLAYING - HIDING OVERLAY');

                        overlay.classList.add('hidden');
                    }

                    // PAUSED
                    else if (event.data === YT.PlayerState.PAUSED) {

                        console.log('VIDEO PAUSED');

                        overlay.classList.remove('hidden');
                    }

                    // ENDED
                    else if (event.data === YT.PlayerState.ENDED) {

                        console.log('VIDEO ENDED');

                        overlay.classList.remove('hidden');
                    }
                }
            }
        });
    };

})();
