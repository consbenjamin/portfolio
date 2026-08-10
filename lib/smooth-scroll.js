/* Con prefers-reduced-motion el navegador ignora el scroll suave nativo, tanto
   el de CSS (anclas) como el de window.scrollTo({behavior:"smooth"}), y salta
   de golpe. Estas funciones lo animan a mano solo en ese caso. */

export function prefersReducedMotion() {
  return typeof window !== "undefined"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function animateScrollTo(destino, duracion = 500) {
  const desde = window.scrollY;
  const recorrido = destino - desde;
  if (Math.abs(recorrido) < 2) return;

  const inicio = performance.now();
  let cancelado = false;
  const cancelar = () => { cancelado = true; };
  // si el usuario scrollea, no le peleamos el control
  window.addEventListener("wheel", cancelar, { passive: true, once: true });
  window.addEventListener("touchstart", cancelar, { passive: true, once: true });

  const limpiar = () => {
    window.removeEventListener("wheel", cancelar);
    window.removeEventListener("touchstart", cancelar);
  };

  const paso = (ahora) => {
    if (cancelado) return limpiar();
    const t = Math.min(1, (ahora - inicio) / duracion);
    const suave = 1 - Math.pow(1 - t, 3);
    // "instant" porque html tiene scroll-behavior: smooth y si no cada paso
    // dispararia su propio scroll suave encima de este
    window.scrollTo({ top: Math.round(desde + recorrido * suave), behavior: "instant" });
    if (t < 1) requestAnimationFrame(paso);
    else limpiar();
  };
  requestAnimationFrame(paso);
}

/* Intercepta los clicks en anclas internas (#about, #projects...) para
   desplazarlas a mano. Devuelve la funcion de limpieza. */
export function interceptAnchorScroll() {
  const onClick = (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!prefersReducedMotion()) return;

    const target = event.target;
    const link = target instanceof Element ? target.closest('a[href^="#"]') : null;
    if (!link) return;

    const hash = link.getAttribute("href");
    const destinoEl = hash === "#" ? null : document.querySelector(hash);
    if (hash !== "#" && !destinoEl) return;

    event.preventDefault();
    animateScrollTo(destinoEl ? destinoEl.getBoundingClientRect().top + window.scrollY : 0);
    // se mantiene el comportamiento del navegador con la URL
    if (hash !== "#") history.pushState(null, "", hash);
  };

  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}
