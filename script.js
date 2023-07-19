function onOpen() {
  var navbar = document.getElementById("navbar");
  navbar.classList.add("show");
}

function onClose() {
  var navbar = document.getElementById("navbar");
  navbar.classList.remove("show");
}

gsap.from(".logo", { y: "-100%", duration: 1, ease: "power2.out" });

gsap.from(".logo-title", {
  delay: 1,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.from("#card-right", { x: "-100%", duration: 1, ease: "power2.out" });

gsap.from("#card-left", { x: "100%", duration: 1, ease: "power2.out" });

gsap.from("#card", { scale: 0, duration: 1, ease: "power2.out" });

gsap.set(".card", { transformOrigin: "center center" });

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    gsap.to(this, { scale: 1.1, duration: 0.3 });
  });

  card.addEventListener("mouseleave", function () {
    gsap.to(this, { scale: 1, duration: 0.3 });
  });
});

gsap.from(".about-us-section", { scale: 0, duration: 1, ease: "power2.out" });
