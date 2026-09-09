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

const watchStoryBtn = document.getElementById("watchStory");

if (watchStoryBtn) {
    watchStoryBtn.addEventListener("click", () => {
        const video = document.getElementById("founderVideo");
        if (video) {
            video.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
                                     }
watchStoryBtn.addEventListener("click", () => {
    document.getElementById("founderVideo").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});
