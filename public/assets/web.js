document.addEventListener('DOMContentLoaded', () => {
    // Initialize application
});
/* ==========================================
   FreshiFy - Main JavaScript
   Intelligent Food Shelf-Life Monitoring System
   ========================================== */

/* ======== MOBILE NAV TOGGLE ======== */
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const toggle = document.getElementById("menuToggle");

    navLinks.classList.toggle("active");
    toggle.classList.toggle("active");
}

/* ======== SECTION SWITCHING ======== */
function showSection(sectionId) {
    const sections = document.querySelectorAll(".section-content");
    const links = document.querySelectorAll(".nav-links a");

    // Hide all sections
    sections.forEach(sec => sec.classList.add("hidden"));

    // Show selected section
    document.getElementById(sectionId).classList.remove("hidden");

    // Remove active class from all nav links
    links.forEach(link => link.classList.remove("active"));

    // Add active class to clicked link
    const activeLink = [...links].find(a => a.innerText.trim().toLowerCase() === sectionId);
    if (activeLink) activeLink.classList.add("active");

    // Close mobile menu after click
    document.getElementById("navLinks").classList.remove("active");
    document.getElementById("menuToggle").classList.remove("active");
}

/* ======== NAVBAR SCROLL EFFECT + PROGRESS BAR ======== */
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);

    const progress = document.getElementById("progressBar");
    let scroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progress.style.width = (scroll / height) * 100 + "%";
});

/* ======== PARTICLES BACKGROUND ======== */
function createParticles() {
    const container = document.getElementById("particles");
    const count = 50;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.width = Math.random() * 6 + 4 + "px";
        particle.style.height = particle.style.width;
        particle.style.animationDuration = 10 + Math.random() * 20 + "s";
        particle.style.animationDelay = Math.random() * 5 + "s";
        container.appendChild(particle);
    }
}

/* ======== CURSOR TRAIL ======== */
document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("cursorTrail");
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

/* ======== MILESTONES DROPDOWN ======== */
const milestones = {
    proposal: {
        title: "📋 Project Proposal",
        date: "January 2024",
        mark: "18 / 20",
        description: "Concept, Scope, Research Gap and Proposed Methodology."
    },
    progress1: {
        title: "📊 Progress Presentation 1",
        date: "May 2024",
        mark: "16 / 20",
        description: "Design Phase, Architecture and Prototype Demo."
    },
    progress2: {
        title: "📈 Progress Presentation 2",
        date: "October 2024",
        mark: "18 / 20",
        description: "Implementation, Testing and ML Integration."
    },
    final: {
        title: "🎓 Final Assessment",
        date: "August 2025",
        mark: "Pending",
        description: "System Validation, Evaluation and Final Submission."
    },
    viva: {
        title: "🎤 Viva Voce",
        date: "August 2025",
        mark: "Pending",
        description: "Final Defense and Q&A Session."
    }
};

function showMilestone() {
    const selected = document.getElementById("milestoneDropdown").value;
    const content = document.getElementById("milestoneContent");

    if (!selected) {
        content.innerHTML = "";
        return;
    }

    const data = milestones[selected];
    content.innerHTML = `
        <div class="milestone-details">
            <h3>${data.title}</h3>
            <div class="milestone-info">
                <div class="info-item">
                    <div class="info-label">Date</div>
                    <div class="info-value">${data.date}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Marks</div>
                    <div class="info-value">${data.mark}</div>
                </div>
            </div>
            <p style="margin-top:2rem; font-size:1.1rem;">${data.description}</p>
        </div>
    `;
}

/* ======== CONTACT FORM ======== */
function handleSubmit() {
    alert("✅ Message sent successfully! (Demo mode — backend email not connected yet)");
}

/* ======== INIT ON PAGE LOAD ======== */
document.addEventListener("DOMContentLoaded", () => {
    createParticles();
    showSection("home"); // Load Home by default
});
