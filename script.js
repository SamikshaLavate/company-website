/* ---------------------------------------------
   SMOOTH SCROLL FOR INTERNAL LINKS
--------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* ---------------------------------------------
   MOBILE NAV (if needed later)
--------------------------------------------- */
const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector("nav ul");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
}

/* ---------------------------------------------
   POPUP / MODAL HANDLING
--------------------------------------------- */
function openPopup(contentId) {
    const popup = document.getElementById("popup");
    const popupBody = document.getElementById("popup-body");

    popup.style.display = "flex";

    // Load dynamic content
    if (contentId === "start") {
        popupBody.innerHTML = `
            <h2>Get Started</h2>
            <p>Please fill out the form below.</p>
            <input type="text" placeholder="Your Name">
            <input type="email" placeholder="Email Address">
            <textarea placeholder="Your Message"></textarea>
            <button class="btn">Submit</button>
        `;
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

window.onclick = function (e) {
    const popup = document.getElementById("popup");
    if (e.target === popup) popup.style.display = "none";
};

/* ---------------------------------------------
   SCROLL TO TOP BUTTON
--------------------------------------------- */
const toTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        toTop.style.display = "flex";
    } else {
        toTop.style.display = "none";
    }
});

if (toTop) {
    toTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* ---------------------------------------------
   SIMPLE FORM HANDLER (placeholder)
--------------------------------------------- */
function sendForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    alert("Your message has been sent successfully!");
    form.reset();
}
