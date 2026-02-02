// script.js
gsap.from("header", {duration: 1, y: -50, opacity: 0, ease: "power2.out"});
gsap.from(".project-card", {duration: 0.8, opacity: 0, y: 30, stagger: 0.2, ease: "power2.out"});
// Aadhar card flip animation
const cardWrapper = document.querySelector('.card-wrapper');

cardWrapper.addEventListener('click', function() {
  gsap.to(cardWrapper, {
    duration: 1,
    rotationY: cardWrapper.style.transform === 'rotateY(180deg)' ? 0 : 180,
    ease: "power2.out",
  });
});


