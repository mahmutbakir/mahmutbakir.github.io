const publicationData = [
    {
        year: "2026",
        title: "A comprehensive data-driven MCDM approach to determine the best single objective function for the aircraft sequencing and scheduling problem",
        journal: "Expert Systems with Applications",
        url: "https://doi.org/10.1016/j.eswa.2025.129172"
    },
    {
        year: "2025",
        title: "Relationships between service quality and customer satisfaction in airlines: Evidence from SEM and ANN based on AIRQUAL model",
        journal: "European Journal of Tourism Research",
        url: "https://doi.org/10.54055/ejtr.v41i.4066"
    },
    {
        year: "2025",
        title: "Charting the landscape of customer experience research in the business field: a bibliometric exploration",
        journal: "ESIC Market",
        url: "https://doi.org/10.7200/esicm.56.379"
    },
    {
        year: "2025",
        title: "Service quality and repurchase intentions in the airline industry: a multiple mediation analysis through customer citizenship behaviour",
        journal: "Current Issues in Tourism",
        url: "https://doi.org/10.1080/13683500.2024.2410935"
    },
    {
        year: "2024",
        title: "Modelling Behavioural Factors Affecting Consumers' Intention to Adopt Electric Aircraft: A Multi-Method Investigation",
        journal: "Sustainability",
        url: "https://doi.org/10.3390/su16198467"
    },
    {
        year: "2022",
        title: "A bibliometric analysis of airport service quality",
        journal: "Journal of Air Transport Management",
        url: "https://doi.org/10.1016/j.jairtraman.2022.102273"
    }
];

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

const publicationYears = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"],
    values: [3, 5, 6, 4, 5, 5, 4, 5, 7, 1]
};

const themeData = {
    labels: [
        "Service Quality",
        "Consumer Behavior",
        "Sustainable Aviation",
        "Decision Analysis",
        "Bibliometrics",
        "Airline Marketing"
    ],
    values: [10, 8, 6, 7, 5, 8]
};

function renderPublications() {
    const list = document.getElementById("publicationList");
    if (!list) return;

    list.innerHTML = publicationData.map((item) => `
        <li>
            <strong>${item.year}</strong> | ${item.title}
            <br>
            <em>${item.journal}</em>
            <br>
            <a href="${item.url}" target="_blank" rel="noreferrer">DOI</a>
        </li>
    `).join("");
}

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

function createCharts() {
    if (typeof Chart === "undefined") return;

    const textColor = getComputedStyle(document.body).getPropertyValue("--text").trim();
    const softColor = getComputedStyle(document.body).getPropertyValue("--text-soft").trim();
    const accent = getComputedStyle(document.body).getPropertyValue("--accent").trim();
    const accentStrong = getComputedStyle(document.body).getPropertyValue("--accent-strong").trim();

    Chart.defaults.color = softColor;
    Chart.defaults.borderColor = "rgba(148, 163, 184, 0.18)";

    const yearChart = document.getElementById("yearChart");
    if (yearChart) {
        new Chart(yearChart, {
            type: "bar",
            data: {
                labels: publicationYears.labels,
                datasets: [{
                    label: "Articles",
                    data: publicationYears.values,
                    borderRadius: 10,
                    backgroundColor: [
                        "rgba(196, 91, 49, 0.88)",
                        "rgba(196, 91, 49, 0.84)",
                        "rgba(196, 91, 49, 0.80)",
                        "rgba(196, 91, 49, 0.76)",
                        "rgba(196, 91, 49, 0.72)",
                        "rgba(196, 91, 49, 0.68)",
                        "rgba(196, 91, 49, 0.64)",
                        "rgba(196, 91, 49, 0.60)",
                        "rgba(196, 91, 49, 0.56)",
                        "rgba(196, 91, 49, 0.52)"
                    ]
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.raw} article(s)`
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: { color: textColor }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0
                        }
                    }
                }
            }
        });
    }

    const themeChart = document.getElementById("themeChart");
    if (themeChart) {
        new Chart(themeChart, {
            type: "radar",
            data: {
                labels: themeData.labels,
                datasets: [{
                    label: "Research intensity",
                    data: themeData.values,
                    fill: true,
                    backgroundColor: "rgba(196, 91, 49, 0.18)",
                    borderColor: accent,
                    pointBackgroundColor: accentStrong,
                    pointBorderColor: "#ffffff",
                    pointRadius: 4
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    r: {
                        suggestedMin: 0,
                        suggestedMax: 10,
                        pointLabels: {
                            color: textColor,
                            font: { size: 12 }
                        },
                        ticks: {
                            backdropColor: "transparent",
                            color: softColor
                        },
                        grid: {
                            color: "rgba(148, 163, 184, 0.18)"
                        },
                        angleLines: {
                            color: "rgba(148, 163, 184, 0.18)"
                        }
                    }
                }
            }
        });
    }
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
        window.location.reload();
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

renderPublications();
renderProjects();
setupThemeToggle();
setupMobileNav();
createCharts();
