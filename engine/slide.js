/* Engine layer (DO NOT EDIT in normal work) */

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function getSlides() {
  return Array.from(document.querySelectorAll(".slide"));
}

function setActive(idx) {
  const slides = getSlides();
  const i = clamp(idx, 0, Math.max(0, slides.length - 1));
  slides.forEach((s, n) => s.classList.toggle("is-active", n === i));
  const counter = document.querySelector("[data-slide-counter]");
  if (counter) counter.textContent = `${i + 1}/${slides.length}`;
  const hash = `#${i + 1}`;
  if (location.hash !== hash) history.replaceState(null, "", hash);
  return i;
}

function currentIndexFromHash() {
  const m = location.hash.match(/^#(\d+)$/);
  if (!m) return 0;
  const n = parseInt(m[1], 10);
  if (!Number.isFinite(n)) return 0;
  return clamp(n - 1, 0, Math.max(0, getSlides().length - 1));
}

function fit() {
  const viewport = document.querySelector(".viewport");
  if (!viewport) return;
  const vw = Number(getComputedStyle(document.documentElement).getPropertyValue("--slide-w")) || 1280;
  const vh = Number(getComputedStyle(document.documentElement).getPropertyValue("--slide-h")) || 720;

  const pad = 24;
  const scale = Math.min(
    (window.innerWidth - pad * 2) / vw,
    (window.innerHeight - pad * 2) / vh
  );
  viewport.style.transform = `scale(${Math.max(0.1, scale)})`;
}

function toggleFullscreen() {
  const el = document.documentElement;
  if (!document.fullscreenElement) {
    el.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

function printPdf() {
  window.print();
}

function initNav() {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  nav.querySelector("[data-prev]")?.addEventListener("click", () => {
    window.__slideIndex = setActive((window.__slideIndex ?? 0) - 1);
  });
  nav.querySelector("[data-next]")?.addEventListener("click", () => {
    window.__slideIndex = setActive((window.__slideIndex ?? 0) + 1);
  });
  nav.querySelector("[data-pdf]")?.addEventListener("click", () => printPdf());
}

function initKeys() {
  window.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const key = e.key;
    if (key === "ArrowRight" || key === "ArrowDown" || key === " ") {
      e.preventDefault();
      window.__slideIndex = setActive((window.__slideIndex ?? 0) + 1);
    } else if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      window.__slideIndex = setActive((window.__slideIndex ?? 0) - 1);
    } else if (key === "f" || key === "F") {
      e.preventDefault();
      toggleFullscreen();
    }
  });
}

function init() {
  fit();
  window.addEventListener("resize", fit);
  window.__slideIndex = setActive(currentIndexFromHash());
  window.addEventListener("hashchange", () => {
    window.__slideIndex = setActive(currentIndexFromHash());
  });
  initNav();
  initKeys();
}

document.addEventListener("DOMContentLoaded", init);

