document.addEventListener("DOMContentLoaded", () => {
  const serviceDetails = {
    "01": {
      title: "Website Design & Development",
      description: "Modern, responsive, and ultra-high-performing web architectures engineered to maximize conversions.",
      deliverables: [
        "Headless & Jamstack Implementations",
        "Core Web Vitals Optimization",
        "CMS Integration & Setup",
        "Responsive & Accessible UI/UX"
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"]
    },
    "02": {
      title: "Web Application Development",
      description: "Custom software platforms built to power complex enterprise workflows and high-concurrency users.",
      deliverables: [
        "Role-Based Access Control",
        "Real-time Dashboards",
        "Workflow Automation",
        "Third-Party API Integrations"
      ],
      stack: ["React", "Node.js", "PostgreSQL", "Docker"]
    },
    "03": {
      title: "Mobile App Development",
      description: "Native-performance iOS and Android applications optimized for seamless offline-first experiences.",
      deliverables: [
        "Cross-Platform Native Builds",
        "Offline Data Syncing",
        "Push Notification Pipelines",
        "App Store Publishing"
      ],
      stack: ["React Native", "Flutter", "Firebase"]
    },
    "04": {
      title: "UI/UX Design",
      description: "Data-driven visual identities, interactive prototypes, and accessible interface designs.",
      deliverables: [
        "Interactive Prototypes",
        "Design System Creation",
        "User Journey Mapping",
        "Accessibility Compliance"
      ],
      stack: ["Figma", "Rive", "Storybook"]
    },
    "05": {
      title: "Backend Systems",
      description: "Distributed backend services, microservices architecture, and ultra-fast REST/gRPC APIs.",
      deliverables: [
        "REST & GraphQL API Engine",
        "Database Architecture & Indexing",
        "Authentication Systems",
        "Scalable Microservices"
      ],
      stack: ["Java", "C#", "Python", "SQL", "Redis"]
    },
    "06": {
      title: "System Management & Maintenance",
      description: "24/7 uptime monitoring, automated patch deployment, and automated infrastructure health checks.",
      deliverables: [
        "CI/CD Pipeline Automation",
        "Uptime Monitoring & Alerts",
        "Automated Security Audits",
        "Database Backup Management"
      ],
      stack: ["Docker", "GitHub Actions", "Linux", "AWS"]
    }
  };

  const cards = document.querySelectorAll(".service-card");
  const drawer = document.getElementById("serviceDrawer");
  const overlay = document.getElementById("drawerOverlay");
  const closeBtn = document.getElementById("drawerClose");

  const dNum = document.getElementById("drawerNum");
  const dTitle = document.getElementById("drawerTitle");
  const dDesc = document.getElementById("drawerDesc");
  const dDeliverables = document.getElementById("drawerDeliverables");
  const dStack = document.getElementById("drawerStack");

  const openDrawer = (serviceId) => {
    const data = serviceDetails[serviceId];
    if (!data) return;

    dNum.textContent = serviceId;
    dTitle.textContent = data.title;
    dDesc.textContent = data.description;

    dDeliverables.innerHTML = data.deliverables.map(item => `<li>${item}</li>`).join("");
    dStack.innerHTML = data.stack.map(tech => `<span class="tag">${tech}</span>`).join("");

    drawer.classList.add("active");
    overlay.classList.add("active");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const serviceId = card.getAttribute("data-service");
      openDrawer(serviceId);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const serviceId = card.getAttribute("data-service");
        openDrawer(serviceId);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("active")) {
      closeDrawer();
    }
  });
});
        
