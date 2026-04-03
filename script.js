const app = document.getElementById("app");

const iconSvgs = {
  gmail: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3.2V9.6L12 13l4.8-3.4V20H20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 3.5-8 5.7-8-5.7V6l8 5.7L20 6v1.5z"/>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  `,
  resume: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
    </svg>
  `,
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  `
};

const socialConfig = [
  { key: "linkedin", label: "LinkedIn" },
  { key: "resume", label: "Resume" },
  { key: "github", label: "GitHub" }
];

const skillLabels = {
  backend: "Backend",
  frontend: "Frontend",
  database: "Database",
  tools: "Tools",
  methodologies: "Methodologies"
};

const gridEffectConfig = {
  spacing: 23,
  dotRadius: 1,
  baseAlpha: 0.16,
  hoverRadius: 145,
  rippleRadius: 158,
  maxDotRadius: 2.6,
  rippleDuration: 1320,
  hoverThrottleMs: 90,
  pointerLerp: 0.14,
  globalChargeDuration: 980,
  globalChargeTailDuration: 460,
  holdStartDelay: 180,
  holdReleaseFadeDuration: 520,
  maxDevicePixelRatio: 1.5
};

function parseMarkdownEmail(emailValue) {
  const match = /^\[(.+?)\]\((mailto:.+?)\)$/.exec(emailValue || "");
  if (!match) {
    return {
      text: emailValue || "",
      href: emailValue?.startsWith("mailto:") ? emailValue : `mailto:${emailValue || ""}`
    };
  }

  return {
    text: match[1],
    href: match[2]
  };
}

function createSocialIconLink(key, label, href) {
  const link = document.createElement("a");
  link.className = "icon-btn";
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.setAttribute("aria-label", label);
  link.innerHTML = iconSvgs[key];
  return link;
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const highlights = project.highlights
    .map((highlight) => `<li>${highlight}</li>`)
    .join("");

  const projectHref = project.link || project.caseStudyLink || "#portfolio";
  const projectLabel = project.linkLabel || "Case Study ->";
  const hasDemoLink = Boolean(project.demoLink);
  const demoMarkup = hasDemoLink
    ? `<a class="project-card__link project-card__link--secondary" href="${project.demoLink}" target="_blank" rel="noreferrer">${project.demoLabel || "View Demo"}</a>`
    : "";
  const iconMarkup = typeof project.icon === "object"
    ? `<span class="${project.icon.type}" aria-hidden="true">${project.icon.name}</span>`
    : `<span>${project.icon || project.title.charAt(0)}</span>`;

  article.innerHTML = `
    <div class="project-card__icon">${iconMarkup}</div>
    <h3 class="project-card__title">${project.title}</h3>
    <p class="project-card__service">${project.service || project.tech.join(" | ")}</p>
    <div class="project-card__divider"></div>
    <div class="project-card__body">
      <p>${project.description}</p>
      <ul class="project-card__list">${highlights}</ul>
    </div>
    <div class="project-card__footer">
      <a class="project-card__link" href="${projectHref}" target="_blank" rel="noreferrer">${projectLabel}</a>
      ${demoMarkup}
    </div>
  `;

  return article;
}

function createSkillLine(category, values) {
  const line = document.createElement("div");
  line.className = "skill-line";
  const tags = values
    .map((value) => `<span class="skill-tag">${value}</span>`)
    .join("");

  line.innerHTML = `<strong>${skillLabels[category]}:</strong><span class="skill-tags">${tags}</span>`;
  return line;
}

function createFooterTextLink(label, href) {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = label;
  return link;
}

function createContactAction(action) {
  const link = document.createElement("a");
  link.className = "contact-action";
  link.href = action.href;
  link.setAttribute("aria-label", action.label);

  if (!action.href.startsWith("mailto:")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }

  link.innerHTML = `
    <span class="contact-action__icon">${iconSvgs[action.type]}</span>
    <span class="contact-action__label">${action.label}</span>
  `;

  return link;
}

function createMailtoUrl(emailHref, subject, message) {
  const recipient = emailHref.replace(/^mailto:/, "");
  const params = new URLSearchParams();

  if (subject.trim()) {
    params.set("subject", subject.trim());
  }

  if (message.trim()) {
    params.set("body", message.trim());
  }

  const query = params.toString();
  return query ? `mailto:${recipient}?${query}` : `mailto:${recipient}`;
}

function setupGridRippleEffect() {
  const existingCanvas = document.querySelector(".grid-ripple-canvas");

  if (existingCanvas) {
    existingCanvas.remove();
  }

  const canvas = document.createElement("canvas");
  canvas.className = "grid-ripple-canvas";
  document.body.appendChild(canvas);

  const context = canvas.getContext("2d");
  const ripples = [];
  const globalCharges = [];
  let activeHoldCharge = null;
  let gridPoints = [];
  const pointer = {
    active: false,
    displayActive: false,
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    lastTrigger: 0
  };

  function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, gridEffectConfig.maxDevicePixelRatio);
    canvas.width = Math.floor(window.innerWidth * ratio);
    canvas.height = Math.floor(window.innerHeight * ratio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    rebuildGrid();
  }

  function rebuildGrid() {
    const points = [];
    const spacing = gridEffectConfig.spacing;

    for (let y = 0; y <= window.innerHeight + spacing; y += spacing) {
      for (let x = 0; x <= window.innerWidth + spacing; x += spacing) {
        points.push({ x, y });
      }
    }

    gridPoints = points;
  }

  function getNearestGridPoint(x, y) {
    const spacing = gridEffectConfig.spacing;
    return {
      x: Math.round(x / spacing) * spacing,
      y: Math.round(y / spacing) * spacing
    };
  }

  function addRipple(x, y, strength = 1) {
    const point = getNearestGridPoint(x, y);

    ripples.push({
      x: point.x,
      y: point.y,
      start: performance.now(),
      strength
    });
  }

  function drawDot(x, y, alpha, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(147, 197, 253, ${alpha})`;
    context.fill();
  }

  function getInfluence(distance, radius) {
    if (distance >= radius) {
      return 0;
    }

    const normalized = distance / radius;
    return (1 - normalized) ** 2;
  }

  function getInfluenceFromSquared(distanceSquared, radius) {
    const radiusSquared = radius * radius;

    if (distanceSquared >= radiusSquared) {
      return 0;
    }

    const normalized = Math.sqrt(distanceSquared) / radius;
    return (1 - normalized) ** 2;
  }

  function renderFrame(now) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    if (activeHoldCharge?.releasing) {
      const elapsed = now - activeHoldCharge.releaseStart;
      const progress = Math.min(elapsed / gridEffectConfig.holdReleaseFadeDuration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      activeHoldCharge.releaseProgress = easedProgress;
      activeHoldCharge.fade = (1 - progress) ** 2;

      if (progress >= 1) {
        activeHoldCharge = null;
      }
    }

    const activeRipples = [];

    for (let index = ripples.length - 1; index >= 0; index -= 1) {
      const ripple = ripples[index];
      const elapsed = now - ripple.start;
      const progress = elapsed / gridEffectConfig.rippleDuration;

      if (progress >= 1) {
        ripples.splice(index, 1);
        continue;
      }

      activeRipples.push({
        x: ripple.x,
        y: ripple.y,
        radius: 24 + progress * gridEffectConfig.rippleRadius * ripple.strength,
        strength: (1 - progress) * ripple.strength
      });
    }

    const activeGlobalCharges = [];

    for (let index = globalCharges.length - 1; index >= 0; index -= 1) {
      const charge = globalCharges[index];
      const elapsed = now - charge.start;
      const totalDuration = gridEffectConfig.globalChargeDuration + gridEffectConfig.globalChargeTailDuration;
      const progress = elapsed / totalDuration;

      if (progress >= 1) {
        globalCharges.splice(index, 1);
        continue;
      }

      activeGlobalCharges.push({
        x: charge.x,
        y: charge.y,
        progress,
        coreProgress: Math.min(elapsed / gridEffectConfig.globalChargeDuration, 1),
        maxDistance: charge.maxDistance,
        strength: charge.strength
      });
    }

    pointer.x += (pointer.targetX - pointer.x) * gridEffectConfig.pointerLerp;
    pointer.y += (pointer.targetY - pointer.y) * gridEffectConfig.pointerLerp;

    if (!pointer.active) {
      const dx = pointer.targetX - pointer.x;
      const dy = pointer.targetY - pointer.y;

      if (Math.hypot(dx, dy) < 0.8) {
        pointer.displayActive = false;
      }
    } else {
      pointer.displayActive = true;
    }

    const pointerActive = pointer.displayActive;
    const pointerX = pointer.x;
    const pointerY = pointer.y;
    const hoverRadius = gridEffectConfig.hoverRadius;
    const baseAlpha = gridEffectConfig.baseAlpha;
    const baseRadius = gridEffectConfig.dotRadius;
    const maxDotRadius = gridEffectConfig.maxDotRadius;

    context.shadowBlur = 0;
    context.shadowColor = "rgba(0, 0, 0, 0)";

    for (let i = 0; i < gridPoints.length; i += 1) {
      const point = gridPoints[i];
      let alpha = baseAlpha;
      let radius = baseRadius;
      let glowStrength = 0;

      if (pointerActive) {
        const dx = point.x - pointerX;
        const dy = point.y - pointerY;
        const hoverInfluence = getInfluenceFromSquared(dx * dx + dy * dy, hoverRadius);

        if (hoverInfluence > 0) {
          alpha += hoverInfluence * 0.48;
          radius += hoverInfluence * 1.2;
          glowStrength += hoverInfluence * 0.52;
        }
      }

      if (activeHoldCharge) {
        const dx = point.x - activeHoldCharge.x;
        const dy = point.y - activeHoldCharge.y;
        const distanceSquared = dx * dx + dy * dy;
        const speedBoost = 1 + activeHoldCharge.progress;
        const maxHoldRadius = 20 + activeHoldCharge.progress * (gridEffectConfig.rippleRadius * 5.28) * speedBoost;
        const releaseProgress = activeHoldCharge.releaseProgress ?? 0;
        const activeRadius = activeHoldCharge.releasing
          ? maxHoldRadius * (1 - releaseProgress)
          : maxHoldRadius;
        const edgeBand = 28 + activeHoldCharge.progress * 28;
        const holdFade = activeHoldCharge.fade ?? 1;

        if (distanceSquared < (activeRadius + edgeBand) * (activeRadius + edgeBand)) {
          const distance = Math.sqrt(distanceSquared);
          const holdCharge = distance <= activeRadius
            ? 1 - Math.min(Math.max((distance - (activeRadius - edgeBand)) / edgeBand, 0), 1) * 0.35
            : 0;
          const holdEdge = Math.max(0, 1 - Math.abs(distance - activeRadius) / edgeBand) ** 2;

          alpha += (holdCharge * 0.28 + holdEdge * 0.16) * holdFade;
          radius += (holdCharge * 0.78 + holdEdge * 0.28) * holdFade;
          glowStrength += (holdCharge * 0.34 + holdEdge * 0.16) * holdFade;
        }
      }

      for (let j = 0; j < activeGlobalCharges.length; j += 1) {
        const charge = activeGlobalCharges[j];
        const dx = point.x - charge.x;
        const dy = point.y - charge.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const normalizedDistance = charge.maxDistance > 0 ? distance / charge.maxDistance : 0;
        const fadeFront = 1 - charge.coreProgress;
        const life = 1 - charge.progress;
        const retention = 1 - Math.min(Math.max((normalizedDistance - fadeFront) / 0.18, 0), 1);
        const chargeBoost = 0.48 * retention * charge.strength * life;
        const waveRadius = 18 + charge.coreProgress * (gridEffectConfig.rippleRadius * 1.55);
        const waveBand = 44 + charge.strength * 16;

        alpha += chargeBoost;
        radius += chargeBoost * 1.25;
        glowStrength += chargeBoost * 0.65;

        if (distance < waveRadius + waveBand && distance > waveRadius - waveBand) {
          const waveDelta = Math.abs(distance - waveRadius);
          const waveInfluence = Math.max(0, 1 - waveDelta / waveBand) ** 2;

          alpha += waveInfluence * 0.16 * charge.strength * life;
          radius += waveInfluence * 0.4 * charge.strength * life;
          glowStrength += waveInfluence * 0.24 * charge.strength * life;
        }
      }

      for (let j = 0; j < activeRipples.length; j += 1) {
        const ripple = activeRipples[j];
        const dx = point.x - ripple.x;
        const dy = point.y - ripple.y;
        const rippleInfluence = getInfluenceFromSquared(dx * dx + dy * dy, ripple.radius);

        if (rippleInfluence > 0) {
          alpha += rippleInfluence * 0.34 * ripple.strength;
          radius += rippleInfluence * 0.8 * ripple.strength;
          glowStrength += rippleInfluence * 0.35 * ripple.strength;
        }
      }

      const finalRadius = Math.min(radius, maxDotRadius);
      const finalAlpha = Math.min(alpha, 0.9);

      if (glowStrength > 0.02) {
        context.shadowBlur = 8 + glowStrength * 18;
        context.shadowColor = `rgba(147, 197, 253, ${Math.min(glowStrength * 0.45, 0.22)})`;
      } else {
        context.shadowBlur = 0;
      }

      drawDot(point.x, point.y, finalAlpha, finalRadius);
    }

    window.requestAnimationFrame(renderFrame);
  }

  function handlePointerMove(event) {
    pointer.active = true;
    pointer.displayActive = true;
    pointer.targetX = event.clientX;
    pointer.targetY = event.clientY;

    if (pointer.x === 0 && pointer.y === 0) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    }

    if (event.timeStamp - pointer.lastTrigger > gridEffectConfig.hoverThrottleMs) {
      addRipple(pointer.targetX, pointer.targetY, 0.48);
      pointer.lastTrigger = event.timeStamp;
    }
  }

  function handlePointerLeave() {
    pointer.active = false;
  }

  function handleTouchStart(event) {
    const touch = event.touches[0];

    if (!touch) {
      return;
    }

    pointer.active = true;
    pointer.displayActive = true;
    pointer.targetX = touch.clientX;
    pointer.targetY = touch.clientY;
    pointer.x = touch.clientX;
    pointer.y = touch.clientY;
    addRipple(pointer.x, pointer.y, 1.1);
  }

  function handleTouchEnd() {
    pointer.active = false;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("pointermove", handlePointerMove);
  window.addEventListener("pointerleave", handlePointerLeave);
  window.addEventListener("click", (event) => addRipple(event.clientX, event.clientY, 1));
  window.addEventListener("touchstart", handleTouchStart, { passive: true });
  window.addEventListener("touchend", handleTouchEnd, { passive: true });
  document.addEventListener("title-charge-hold-start", (event) => {
    activeHoldCharge = {
      x: event.detail.x,
      y: event.detail.y,
      progress: 0,
      fade: 1,
      releasing: false,
      releaseStart: 0,
      releaseProgress: 0
    };
  });
  document.addEventListener("title-charge-hold-update", (event) => {
    if (!activeHoldCharge) {
      activeHoldCharge = {
        x: event.detail.x,
        y: event.detail.y,
        progress: event.detail.progress,
        fade: 1,
        releasing: false,
        releaseStart: 0,
        releaseProgress: 0
      };
      return;
    }

    activeHoldCharge.x = event.detail.x;
    activeHoldCharge.y = event.detail.y;
    activeHoldCharge.progress = event.detail.progress;
    activeHoldCharge.fade = 1;
    activeHoldCharge.releasing = false;
    activeHoldCharge.releaseProgress = 0;
  });
  document.addEventListener("title-charge-hold-end", () => {
    if (!activeHoldCharge) {
      return;
    }

    activeHoldCharge.releasing = true;
    activeHoldCharge.releaseStart = performance.now();
  });
  document.addEventListener("title-charge-release", (event) => {
      globalCharges.push({
        x: event.detail.x,
        y: event.detail.y,
        start: performance.now(),
        strength: event.detail.intensity,
        maxDistance: Math.max(
          Math.hypot(event.detail.x, event.detail.y),
          Math.hypot(window.innerWidth - event.detail.x, event.detail.y),
          Math.hypot(event.detail.x, window.innerHeight - event.detail.y),
          Math.hypot(window.innerWidth - event.detail.x, window.innerHeight - event.detail.y)
        )
      });
      addRipple(event.detail.x, event.detail.y, event.detail.intensity);
    });
  window.requestAnimationFrame(renderFrame);
}

function renderPortfolio(data) {
  const { profile, skills, projects, achievements, socialLinks, navigation, sections, hero } = data;
  const email = parseMarkdownEmail(profile.email);

  app.innerHTML = `
    <header class="topbar">
      <div class="container topbar__inner">
        <a class="brand" href="#top" aria-label="Home">
          <div class="brand__mark"></div>
          <span class="brand__name"></span>
        </a>

        <nav class="nav" aria-label="Primary"></nav>

        <div class="actions" aria-label="Social links"></div>
      </div>
    </header>

    <main id="top">
      <section class="hero container">
        <div class="hero__eyebrow"></div>
        <h1 class="hero__title"></h1>
        <div class="hero__subtitle"></div>
        <p class="hero__copy"></p>
        <div class="hero__cta"></div>
      </section>

      <section id="portfolio" class="section container">
        <div class="section__head">
          <h2 class="section__title"></h2>
          <div class="section__meta"></div>
        </div>
        <div class="projects"></div>
      </section>

      <section id="about" class="section container">
        <div class="section__head">
          <h2 class="section__title"></h2>
          <div class="section__meta"></div>
        </div>

        <div class="stack-grid">
          <div class="panel skills" aria-label="Skills"></div>
          <div class="panel about">
            <p></p>
            <ul class="about__bullets"></ul>
          </div>
        </div>
      </section>

      <section id="contact" class="section container">
        <div class="section__head">
          <h2 class="section__title"></h2>
          <div class="section__meta"></div>
        </div>

        <div class="contact-grid">
          <div class="panel contact-copy">
            <p></p>
            <div class="contact-copy__actions"></div>
          </div>

          <form class="panel contact-form">
            <label class="contact-form__field">
              <span></span>
              <input type="text" name="subject">
            </label>

            <label class="contact-form__field">
              <span></span>
              <textarea name="message" rows="6"></textarea>
            </label>

            <button type="submit" class="btn btn--primary"></button>
          </form>
        </div>
      </section>

      <footer class="footer">
        <div class="container footer__inner">
          <a class="footer__email"></a>
          <div class="footer__links"></div>
        </div>
      </footer>
    </main>
  `;

  const brandMark = app.querySelector(".brand__mark");
  const brandName = app.querySelector(".brand__name");
  const nav = app.querySelector(".nav");
  const actions = app.querySelector(".actions");
  const heroEyebrow = app.querySelector(".hero__eyebrow");
  const heroTitle = app.querySelector(".hero__title");
  const heroSubtitle = app.querySelector(".hero__subtitle");
  const heroCopy = app.querySelector(".hero__copy");
  const heroCta = app.querySelector(".hero__cta");
  const projectTitle = app.querySelector("#portfolio .section__title");
  const projectMeta = app.querySelector("#portfolio .section__meta");
  const projectsContainer = app.querySelector(".projects");
  const aboutTitle = app.querySelector("#about .section__title");
  const aboutMeta = app.querySelector("#about .section__meta");
  const skillsPanel = app.querySelector(".skills");
  const aboutCopy = app.querySelector(".about p");
  const achievementsList = app.querySelector(".about__bullets");
  const contactTitle = app.querySelector("#contact .section__title");
  const contactMeta = app.querySelector("#contact .section__meta");
  const contactCopy = app.querySelector(".contact-copy p");
  const contactActions = app.querySelector(".contact-copy__actions");
  const contactForm = app.querySelector(".contact-form");
  const subjectLabel = app.querySelector('.contact-form input[name="subject"]').previousElementSibling;
  const subjectInput = app.querySelector('.contact-form input[name="subject"]');
  const messageLabel = app.querySelector('.contact-form textarea[name="message"]').previousElementSibling;
  const messageInput = app.querySelector('.contact-form textarea[name="message"]');
  const submitButton = app.querySelector(".contact-form button");
  const footerEmail = app.querySelector(".footer__email");
  const footerLinks = app.querySelector(".footer__links");

  brandMark.textContent = profile.brandMark;
  brandName.textContent = profile.brandName;
    navigation.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    nav.appendChild(link);
  });

  socialConfig.forEach(({ key, label }) => {
    actions.appendChild(createSocialIconLink(key, label, profile.links[key]));
  });

  heroEyebrow.textContent = hero.eyebrow;
  heroTitle.textContent = profile.name;
  setupTitleChargeEffect(heroTitle);
  heroSubtitle.textContent = profile.title;
  heroCopy.textContent = profile.tagline;

  hero.actions.forEach((action) => {
    const link = document.createElement("a");
    const variantClass = {
      primary: "btn--primary",
      ghost: "btn--ghost",
      success: "btn--success"
    }[action.variant] || "btn--primary";

    link.className = `btn ${variantClass}`;
    link.href = action.href;
    if (!action.href.startsWith("#")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    link.textContent = action.label;
    heroCta.appendChild(link);
  });

  projectTitle.textContent = sections.projects.title;
  projectMeta.textContent = sections.projects.meta;
  projects.forEach((project) => {
    projectsContainer.appendChild(createProjectCard(project));
  });

  aboutTitle.textContent = sections.about.title;
  aboutMeta.textContent = sections.about.meta;

  Object.entries(skills).forEach(([category, values]) => {
    skillsPanel.appendChild(createSkillLine(category, values));
  });

  aboutCopy.textContent = sections.about.copy;
  achievements.forEach((achievement) => {
    const item = document.createElement("li");
    item.textContent = achievement;
    achievementsList.appendChild(item);
  });

  contactTitle.textContent = sections.contact.title;
  contactMeta.textContent = sections.contact.meta;
  contactCopy.textContent = sections.contact.copy;
  sections.contact.actions.forEach((action) => {
    contactActions.appendChild(createContactAction(action));
  });
  subjectLabel.textContent = sections.contact.form.subjectLabel;
  subjectInput.placeholder = sections.contact.form.subjectPlaceholder;
  messageLabel.textContent = sections.contact.form.messageLabel;
  messageInput.placeholder = sections.contact.form.messagePlaceholder;
  submitButton.textContent = sections.contact.form.submitLabel;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = createMailtoUrl(email.href, subjectInput.value, messageInput.value);
  });

  footerEmail.href = email.href;
  footerEmail.textContent = email.text;

  socialLinks.forEach((linkData, index) => {
    footerLinks.appendChild(createFooterTextLink(linkData.label, linkData.href));

    if (index < socialLinks.length - 1) {
      const divider = document.createElement("span");
      divider.className = "divider-dot";
      footerLinks.appendChild(divider);
    }
  });
}

function setupTitleChargeEffect(titleElement) {
  let holdStart = 0;
  let holdFrame = 0;
  let isHolding = false;
  let holdActivated = false;
  let releaseTimeout = 0;
  let holdPoint = null;

  function clearReleaseState() {
    window.clearTimeout(releaseTimeout);
    titleElement.classList.remove("hero__title--release");
  }

  function updateCharge() {
    if (!isHolding) {
      return;
    }

    const progress = Math.min((performance.now() - holdStart) / 900, 1);
    titleElement.style.setProperty("--charge-progress", progress.toFixed(3));
    titleElement.classList.add("hero__title--charging");
    if (!holdActivated && performance.now() - holdStart >= gridEffectConfig.holdStartDelay) {
      holdActivated = true;
      if (holdPoint) {
        document.dispatchEvent(new CustomEvent("title-charge-hold-start", {
          detail: { x: holdPoint.x, y: holdPoint.y }
        }));
      }
    }

    if (holdActivated && holdPoint) {
      document.dispatchEvent(new CustomEvent("title-charge-hold-update", {
        detail: { x: holdPoint.x, y: holdPoint.y, progress }
      }));
    }

    if (progress < 1) {
      holdFrame = window.requestAnimationFrame(updateCharge);
    }
  }

  function releaseCharge() {
    if (!isHolding && !titleElement.classList.contains("hero__title--charging")) {
      return;
    }

    isHolding = false;
    window.cancelAnimationFrame(holdFrame);
    if (holdActivated) {
      document.dispatchEvent(new CustomEvent("title-charge-hold-end"));
    }

    const progress = Number.parseFloat(
      getComputedStyle(titleElement).getPropertyValue("--charge-progress") || "0"
    );
    const rect = titleElement.getBoundingClientRect();
    const centerX = holdPoint?.x ?? (rect.left + rect.width / 2);
    const centerY = holdPoint?.y ?? (rect.top + rect.height / 2);

    clearReleaseState();
    titleElement.classList.remove("hero__title--charging");
    titleElement.classList.add("hero__title--release");
    titleElement.style.setProperty("--charge-progress", "0");
    releaseTimeout = window.setTimeout(() => {
      titleElement.classList.remove("hero__title--release");
    }, 700);

    const intensity = Math.max(0.72, 0.7 + progress * 0.7);
    document.dispatchEvent(new CustomEvent("title-charge-release", {
      detail: { x: centerX, y: centerY, intensity }
    }));
    holdPoint = null;
    holdActivated = false;
  }

  function startCharge(event) {
    if (event.button !== undefined && event.button !== 0) {
      return;
    }

    clearReleaseState();
    isHolding = true;
    holdActivated = false;
    holdStart = performance.now();
    titleElement.style.setProperty("--charge-progress", "0");
    holdPoint = {
      x: event.clientX ?? (event.touches?.[0]?.clientX),
      y: event.clientY ?? (event.touches?.[0]?.clientY)
    };
    holdFrame = window.requestAnimationFrame(updateCharge);
  }

  titleElement.addEventListener("pointerdown", startCharge);
  titleElement.addEventListener("pointerup", releaseCharge);
  titleElement.addEventListener("pointerleave", releaseCharge);
  titleElement.addEventListener("pointercancel", releaseCharge);
  titleElement.addEventListener("touchstart", startCharge, { passive: true });
  titleElement.addEventListener("touchend", releaseCharge, { passive: true });
}

renderPortfolio(portfolioData);
setupGridRippleEffect();

document.addEventListener("click", (event) => {
  const anchor = event.target.closest('a[href^="#"]');

  if (!anchor) {
    return;
  }

  const target = document.querySelector(anchor.getAttribute("href"));

  if (!target) {
    return;
  }

  event.preventDefault();

  const topbar = document.querySelector(".topbar");
  const topbarHeight = topbar ? topbar.offsetHeight : 0;
  const offset = 20;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - topbarHeight - offset;

  window.scrollTo({
    top: targetTop,
    behavior: "smooth"
  });
});
