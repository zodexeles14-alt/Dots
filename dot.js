document.addEventListener("DOMContentLoaded", () => {
  // Rich dataset mapping details for each specific service index
  const serviceDetails = {
    "01": {
      title: "Website Design & Development",
      description: "We craft custom, conversion-focused websites engineered for speed, search visibility, and flawless brand representation.",
      deliverables: ["Custom Headless & Jamstack Architectures", "Core Web Vitals Optimization (100/100 targets)", "CMS Integration (Sanity, Strapi, WordPress)", "Localization & Multi-language Support"],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Vercel"]
    },
    "02": {
      title: "Web Application Development",
      description: "Complex, web-based applications designed to automate business operations and deliver SaaS solutions.",
      deliverables: ["Role-Based Access Control Systems", "Real-time Dashboards & Data Visualization", "Complex Workflow Automation Engine", "Payment Gateway & Subscription Pipelines"],
      stack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"]
    },
    "03": {
      title: "Mobile App Development",
      description: "High-performance iOS and Android applications built natively or cross-platform to capture mobile engagements.",
      deliverables: ["Offline-First Architecture", "Biometric Authentication Integration", "Push Notification Pipelines", "App Store & Play Store Deployment"],
      stack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
    },
    "04": {
      title: "UI/UX Design",
      description: "Human-centered design systems and interactive interfaces grounded in user research and interaction data.",
      deliverables: ["Interactive High-Fidelity Prototypes", "Comprehensive Design Systems & Tokens", "Usability Testing & Heatmap Analysis", "Accessibility Compliance Audit (WCAG 2.1 AAA)"],
      stack: ["Figma", "Rive", "Storybook", "Framer", "Zeroheight"]
    },
    "05": {
      title: "Backend Systems",
      description: "Scalable server architectures capable of handling heavy concurrent loads and high-frequency data processing.",
      deliverables: ["Microservices Orchestration", "High-throughput gRPC & REST APIs", "Database Sharding & Query Optimization", "Event-Driven Message Queues"],
      stack: ["Go", "Python", "Apache Kafka", "Kubernetes", "AWS"]
    },
    "06": {
      title: "System Management & Maintenance",
      description: "Proactive infrastructure monitoring, automated security compliance patching, and site reliability engineering.",
      deliverables: ["Automated CI/CD Deployment Pipelines", "Zero-downtime Patch Releases", "Log Aggregation & Anomaly Detection", "Disaster Recovery & Backup Automation"],
      stack: ["Datadog", "Terraform", "Prometheus", "Grafana", "Ansible"]
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
  };

  const closeDrawer = () => {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
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

  closeBtn.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);
});
    
