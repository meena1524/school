
const cards = document.querySelectorAll(".card");
const card = document.querySelectorAll(".card-body-2");
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        cards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("active");
    });
});


card.forEach(card => {
    let scrollAmount = 0;
    let interval;

    function startScroll() {
        interval = setInterval(() => {
            scrollAmount++;
            card.scrollTop = scrollAmount;

            if (card.scrollTop + card.clientHeight >= card.scrollHeight) {
                scrollAmount = 0;
            }
        }, 50);
    }

    function stopScroll() {
        clearInterval(interval);
    }

    startScroll();

    card.addEventListener("mouseenter", stopScroll);
    card.addEventListener("mouseleave", startScroll);
});

let images = [
  "/images/2024-04-28.webp",
  "/images/WhatsApp Image 2026-02-08 at 1.09.53 PM.jpeg",
  "https://files.yappe.in/place/full/m-m-bright-future-sr-sec-school-gorakhpur-bhuna-fatehabad-haryana-hbse-affiliated-best-school-in-gorakhpur-8062417.webp",
   "/images/2024-04-28.webp",
];

let index = 0;
let slider = document.getElementById("slider_image");

setInterval(() => {
  index++;
  if(index >= images.length){
    index = 1;
  }
  slider.src = images[index];
}, 3000); 




