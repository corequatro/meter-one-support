// Replace this placeholder to update every contact link and visible email address site-wide.
const CONTACT_EMAIL = "meteronesupport@gmail.com";

document.documentElement.classList.add("js-enabled");

function applyContactEmail() {
  const mailto = `mailto:${CONTACT_EMAIL}`;

  document.querySelectorAll("[data-email-link]").forEach((link) => {
    link.setAttribute("href", mailto);

    if (link.dataset.emailLabel === "address") {
      link.textContent = CONTACT_EMAIL;
    }
  });
}

function activateLanguage(root, language) {
  const shell = root.closest(".language-shell") || document;
  const panels = shell.querySelectorAll("[data-lang-panel]");
  const buttons = root.querySelectorAll("[data-lang-button]");

  panels.forEach((panel) => {
    panel.hidden = panel.dataset.langPanel !== language;
  });

  buttons.forEach((button) => {
    const isActive = button.dataset.langButton === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setupLanguageSwitchers() {
  document.querySelectorAll("[data-language-switcher]").forEach((switcher) => {
    const buttons = switcher.querySelectorAll("[data-lang-button]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        activateLanguage(switcher, button.dataset.langButton);
      });
    });

    activateLanguage(switcher, "en");
  });
}

applyContactEmail();
setupLanguageSwitchers();
