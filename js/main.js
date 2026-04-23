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

const recentStudies = [
    {
        year: "2026",
        details: "<strong>Mkedder N., Bak&#305;r M.</strong> Mapping the Metaverse in Tourism and Hospitality: Systematic Review of Theory, Method, and Research Frontiers. <em>Journal of Travel Research</em>. <a href=\"https://doi.org/10.1177/00472875261441565\" target=\"_blank\" rel=\"noreferrer\">DOI</a>",
        quartile: "Q1"
    },
    {
        year: "2026",
        details: "<strong>Bak&#305;r M.</strong> Sustainability article details pending from DOI record. <em>Sustainability (Switzerland)</em>, 18(8), 3972. <a href=\"https://doi.org/10.3390/su18083972\" target=\"_blank\" rel=\"noreferrer\">DOI</a>",
        quartile: "Q1"
    },
    {
        year: "2026",
        details: "<strong>D&#246;nmez K., Bak&#305;r M., &#199;e&#231;en R. K.</strong> A comprehensive data-driven MCDM approach to determine the best single objective function for the aircraft sequencing and scheduling problem. <em>Expert Systems with Applications</em>, 296. <a href=\"https://doi.org/10.1016/j.eswa.2025.129172\" target=\"_blank\" rel=\"noreferrer\">DOI</a>",
        quartile: "Q1"
    },
    {
        year: "2025",
        details: "<strong>Bak&#305;r M., Atal&#305;k &#214;., Itani N.</strong> Service quality and repurchase intentions in the airline industry: a multiple mediation analysis through customer citizenship behaviour. <em>Current Issues in Tourism</em>, 28(24), 4025-4046. <a href=\"https://doi.org/10.1080/13683500.2024.2410935\" target=\"_blank\" rel=\"noreferrer\">DOI</a>",
        quartile: "Q1"
    },
    {
        year: "2025",
        details: "<strong>Mkedder N., Bak&#305;r M., Das M.</strong> Motivational Theory Perspective of Factors Influencing MOBA In-game Items Purchase: A Fuzzy DEMATEL Approach. <em>International Journal of Information Technology and Decision Making</em>. <a href=\"https://doi.org/10.1142/S0219622026500057\" target=\"_blank\" rel=\"noreferrer\">DOI</a>",
        quartile: "Q2"
    },
    {
        year: "2025",
        details: "<strong>Bak&#305;r M., Akan &#350;., Afaneh &#304;. N. Y., Kurt M.</strong> Relationships between service quality and customer satisfaction in airlines: Evidence from SEM and ANN based on AIRQUAL model. <em>European Journal of Tourism Research</em>, 41. <a href=\"https://doi.org/10.54055/ejtr.v41i.4066\" target=\"_blank\" rel=\"noreferrer\">DOI</a>",
        quartile: "Q2"
    },
    {
        year: "2025",
        details: "<strong>Mkedder N., Das M., Bak&#305;r M., Lachachi A., Al-Dhabyani Y.</strong> Buying local: how functional values, social identity and gender shape consumer preferences in developed and emerging markets. <em>International Journal of Emerging Markets</em>. <a href=\"https://doi.org/10.1108/IJOEM-05-2024-0873\" target=\"_blank\" rel=\"noreferrer\">DOI</a>",
        quartile: "Q1"
    },
    {
        year: "2025",
        details: "<strong>Bak&#305;r M., Akan &#350;., &#214;zdemir E., Han H.</strong> Mapping the intellectual and thematic evolution of airline service quality research: a bibliometric analysis (1981-2024). <em>Journal of Travel and Tourism Marketing</em>, 42(6), 785-813. <a href=\"https://doi.org/10.1080/10548408.2025.2495572\" target=\"_blank\" rel=\"noreferrer\">DOI</a>",
        quartile: "Q1"
    },
    {
        year: "2025",
        details: "<strong>Zungur N., Orhan G., Bak&#305;r M.</strong> Exploring intention to travel with eco-friendly airlines: A dual-stage SEM-ANN approach. <em>Case Studies on Transport Policy</em>, 19, 101347. <a href=\"https://doi.org/10.1016/j.cstp.2024.101347\" target=\"_blank\" rel=\"noreferrer\">DOI</a>",
        quartile: "Q1"
    },
    {
        year: "2024",
        details: "<strong>Yazgan B., Do&#287;an &#214;., Bak&#305;r M., Gun D.</strong> Sustainable Passenger Services and Child-Friendly Airport Experience: A Case Study of Istanbul Airport. <em>Sustainability (Switzerland)</em>, 16(23), 10513. <a href=\"https://doi.org/10.3390/su162310513\" target=\"_blank\" rel=\"noreferrer\">DOI</a>",
        quartile: "Q1"
    },
    {
        year: "2024",
        details: "<strong>Bak&#305;r M., Atal&#305;k &#214;.</strong> Examining cross-cultural patterns in customer citizenship behavior: A cross-cultural exploration between Turkish and British airline passengers. <em>Travel Behaviour and Society</em>, 37, 100859. <a href=\"https://doi.org/10.1016/j.tbs.2024.100859\" target=\"_blank\" rel=\"noreferrer\">DOI</a>",
        quartile: "Q1"
    },
    {
        year: "2024",
        details: "<strong>Bak&#305;r M., Itani N.</strong> Modelling Behavioural Factors Affecting Consumers' Intention to Adopt Electric Aircraft: A Multi-Method Investigation. <em>Sustainability (Switzerland)</em>, 16(19), 8467. <a href=\"https://doi.org/10.3390/su16198467\" target=\"_blank\" rel=\"noreferrer\">DOI</a>",
        quartile: "Q1"
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

function renderRecentStudies() {
    const tableBody = document.querySelector(".publication-table tbody");
    if (!tableBody) return;

    tableBody.innerHTML = recentStudies.map((study) => `
        <tr>
            <td>${study.year}</td>
            <td>${study.details}</td>
            <td><span class="quartile">${study.quartile}</span></td>
        </tr>
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
renderRecentStudies();
setupThemeToggle();
setupMobileNav();
