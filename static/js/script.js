const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
    backTop.classList.toggle("show", window.scrollY > 500);
});

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
});

backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const testimonials = [
    {
        text: "“Um atendimento muito acolhedor. Saí me sentindo renovada e com a sensação de que realmente tirei um tempo para mim.”",
        name: "CLIENTE ESPECIAL"
    },
    {
        text: "“Adorei cada detalhe. Fui muito bem recebida e o atendimento foi feito com muito cuidado e atenção.”",
        name: "CLIENTE ESPECIAL"
    },
    {
        text: "“Uma experiência leve, delicada e muito cuidadosa. Com certeza quero voltar.”",
        name: "CLIENTE ESPECIAL"
    }
];

let testimonialIndex = 0;
const testimonialText = document.getElementById("testimonialText");
const testimonialName = document.getElementById("testimonialName");

function updateTestimonial(index) {
    testimonialText.style.opacity = "0";
    testimonialName.style.opacity = "0";
    setTimeout(() => {
        testimonialText.textContent = testimonials[index].text;
        testimonialName.textContent = testimonials[index].name;
        testimonialText.style.opacity = "1";
        testimonialName.style.opacity = "1";
    }, 160);
}

document.getElementById("prevTestimonial").addEventListener("click", () => {
    testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(testimonialIndex);
});

document.getElementById("nextTestimonial").addEventListener("click", () => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    updateTestimonial(testimonialIndex);
});

testimonialText.style.transition = "opacity .2s";
testimonialName.style.transition = "opacity .2s";
