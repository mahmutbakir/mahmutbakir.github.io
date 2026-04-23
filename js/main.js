const projectData = [
    {
        label: "TUBITAK 1001",
        title: "Urban Air Mobility in the Turkish Aviation Sector",
        text: "Research project on the challenges, requirements, and development potential of urban air mobility in the Turkish aviation sector.",
        meta: "2023-2027"
    },
    {
        label: "Officially Funded Project",
        title: "Project Writing Training for PhD Students",
        text: "Training project focused on project development capacity in civil aviation management, management, organization, and marketing.",
        meta: "2021"
    }
];

function renderProjects() {
    const grid = document.getElementById("projectGrid");
    if (!grid) return;

    grid.innerHTML = projectData.map((item) => `
        <article class="card">
            <span class="label">${item.label}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <p class="muted">${item.meta}</p>
        </article>
    `).join("");
}

function setupThemeToggle() {
    const themeBtn = document.getElementById("themeBtn");
    const savedTheme = localStorage.getItem("site-theme");

    if (savedTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
    }

    themeBtn?.addEventListener("click", () => {
        const isDark = document.body.getAttribute("data-theme") === "dark";
        const nextTheme = isDark ? "light" : "dark";

        if (nextTheme === "light") {
            document.body.removeAttribute("data-theme");
        } else {
            document.body.setAttribute("data-theme", "dark");
        }

        localStorage.setItem("site-theme", nextTheme);
    });
}

function setupMobileNav() {
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn?.addEventListener("click", () => {
        navLinks?.classList.toggle("open");
    });

    navLinks?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });
    });
}

renderProjects();
setupThemeToggle();
setupMobileNav();
