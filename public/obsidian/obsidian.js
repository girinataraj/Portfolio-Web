(() => {
  const root = document.documentElement;
  const system = document.querySelector(".signal-system");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
  const motionButton = document.querySelector(".motion-toggle");
  let userPaused = false;
  let frame = 0;
  let bounds = null;
  const quiet = () => userPaused || reduced.matches;
  const resetDepth = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    system.classList.remove("is-tracking");
    for (const property of ["--rx", "--ry", "--px", "--py"])
      system.style.removeProperty(property);
  };
  function updateMotion() {
    root.dataset.motion = quiet() ? "reduced" : "full";
    motionButton.setAttribute("aria-pressed", String(quiet()));
    motionButton.querySelector("span").textContent = quiet() ? "off" : "on";
    motionButton.setAttribute(
      "aria-label",
      reduced.matches
        ? "Motion off — system reduced motion preference"
        : userPaused
          ? "Motion off — resume decorative motion"
          : "Motion on — pause decorative motion",
    );
    if (quiet()) resetDepth();
  }
  motionButton.addEventListener("click", () => {
    userPaused = !userPaused;
    updateMotion();
  });
  reduced.addEventListener("change", updateMotion);
  finePointer.addEventListener("change", resetDepth);
  updateMotion();
  system.addEventListener("pointerenter", () => {
    if (finePointer.matches && !quiet())
      bounds = system.getBoundingClientRect();
  });
  system.addEventListener("pointermove", (event) => {
    if (!finePointer.matches || quiet() || !bounds) return;
    const x = Math.max(
      -0.5,
      Math.min(0.5, (event.clientX - bounds.left) / bounds.width - 0.5),
    );
    const y = Math.max(
      -0.5,
      Math.min(0.5, (event.clientY - bounds.top) / bounds.height - 0.5),
    );
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      system.classList.add("is-tracking");
      system.style.setProperty("--rx", `${-y * 5}deg`);
      system.style.setProperty("--ry", `${x * 6}deg`);
      system.style.setProperty("--px", `${x * 9}px`);
      system.style.setProperty("--py", `${y * 7}px`);
    });
  });
  system.addEventListener("pointerleave", () => {
    bounds = null;
    resetDepth();
  });
  window.addEventListener(
    "resize",
    () => {
      bounds = null;
      resetDepth();
    },
    { passive: true },
  );
  const layers = {
    interface: [
      "React · TypeScript",
      "Clear interfaces. Thoughtful interactions.",
    ],
    services: [
      "Node.js · Python",
      "APIs, shared state and dependable workflows.",
    ],
    intelligence: [
      "RAG · MCP",
      "Retrieval, grounded answers and connected tools.",
    ],
  };
  document.querySelectorAll(".layer-controls button").forEach((button) => {
    button.addEventListener("click", () => {
      const layer = button.dataset.layer;
      system.dataset.layer = layer;
      document
        .querySelectorAll(".layer-controls button")
        .forEach((control) =>
          control.setAttribute("aria-pressed", String(control === button)),
        );
      document.querySelector(".layer-key").textContent = layers[layer][0];
      document.querySelector(".layer-description").textContent =
        layers[layer][1];
    });
  });
  const image = document.querySelector("#queue-screen");
  document.querySelectorAll(".view-controls button").forEach((button) => {
    button.addEventListener("click", () => {
      const view = button.dataset.view;
      document
        .querySelectorAll(".view-controls button")
        .forEach((control) =>
          control.setAttribute("aria-pressed", String(control === button)),
        );
      image.src = `/projects/v2/queue-${view}-desktop.webp`;
      image.alt = `Original QueueLess ${view === "staff" ? "staff console" : "customer ticket"} development screenshot, showing synthetic demonstration data`;
      image.height = view === "staff" ? 1067 : 1198;
      if (!quiet())
        image.animate([{ opacity: 0.45 }, { opacity: 0.95 }], {
          duration: 420,
          easing: "ease-out",
        });
    });
  });
  if ("IntersectionObserver" in window) {
    const reveals = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!quiet()) entry.target.classList.add("is-revealed");
            reveals.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => reveals.observe(element));
    const ambient = new IntersectionObserver(
      ([entry]) => {
        root.dataset.inView = String(entry.isIntersecting);
      },
      { threshold: 0.05 },
    );
    ambient.observe(system);
  }
  document.addEventListener("visibilitychange", () => {
    root.dataset.hidden = String(document.hidden);
    if (document.hidden) resetDepth();
  });
  document.querySelectorAll('a[href^="#"]').forEach((link) =>
    link.addEventListener("click", () => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target && !target.hasAttribute("tabindex"))
        target.setAttribute("tabindex", "-1");
      target?.focus({ preventScroll: true });
    }),
  );
})();
