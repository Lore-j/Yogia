/* =========================================================
   YOGIA - main.js
   - Año automático en el footer
   - Links de WhatsApp (placeholder)
========================================================= */

(function () {
  // 1) Año automático en el footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2) WhatsApp (PLACEHOLDER)
  // Cuando tengas el número, reemplaza "519XXXXXXXX" por tu número real.
  // Perú: 51 + número (sin +, sin espacios). Ej: 51987654321
  const phone = "51995736378";

  // Mensaje inicial (puedes editarlo cuando quieras)
  const defaultMsg =
    "Hola 😊 Quiero pedir un YOGIA (yogurt helado con fruta). ¿Me compartes el menú y precios?";

  // Arma el link WA
  function buildWhatsAppLink(message = defaultMsg) {
    const text = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${text}`;
  }

  // Lista de botones / enlaces WA (IDs definidos en el index.html)
  const waIds = [
    "btnWhatsAppTop",
    "btnWhatsAppHero",
    "btnWhatsAppLocation",
    "btnWhatsAppFloat"
  ];

  // Si todavía no hay número real, evitamos links rotos
  const phoneIsPlaceholder = phone.includes("X");

  waIds.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    if (phoneIsPlaceholder) {
      // comportamiento mientras no haya número
      el.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Aún falta configurar el número de WhatsApp 😊");
      });
      el.setAttribute("href", "#");
      el.setAttribute("title", "Falta configurar WhatsApp");
    } else {
      // cuando ya tengas número
      el.setAttribute("href", buildWhatsAppLink());
      el.setAttribute("title", "Pedir por WhatsApp");
    }
  });
})();
