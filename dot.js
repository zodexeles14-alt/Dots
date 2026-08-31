document.addEventListener("DOMContentLoaded", () => {

  const services = document.querySelectorAll(".service-item");

  services.forEach(service => {

    // Click to activate a service
    service.addEventListener("click", () => {

      const isActive = service.classList.contains("active");

      services.forEach(item => {
        item.classList.remove("active");
      });

      if (!isActive) {
        service.classList.add("active");
      }
    });


    // Keyboard accessibility
    service.setAttribute("tabindex", "0");

    service.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        service.click();
      }
    });

  });


  // Scroll reveal animation
  const observer = new IntersectionObserver(
    entries => {

      entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

          const items = entry.target.querySelectorAll(".service-item");

          items.forEach((item, i) => {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, i * 80);
          });

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.15
    }
  );


  const servicesList = document.querySelector(".services-list");

  if (servicesList) {

    const items = servicesList.querySelectorAll(".service-item");

    items.forEach(item => {
      item.style.opacity = "0";
      item.style.transform = "translateY(25px)";
      item.style.transition =
        "opacity 0.7s ease, transform 0.7s ease, background 0.5s ease, padding 0.5s ease";
    });

    observer.observe(servicesList);
  }

});
