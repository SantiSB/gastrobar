/**
 * Carta interactivity — lightweight vanilla JS (no framework):
 *   1. Kitchen scroll-spy (highlights the active tab as you scroll).
 *   2. Client-side search filter over the whole carta.
 *   3. Photo lightbox via a native <dialog>.
 */

/* ---- 1. Kitchen scroll-spy -------------------------------- */
const tabs = Array.from(document.querySelectorAll<HTMLElement>('[data-kitchen-tab]'));
const kitchens = Array.from(document.querySelectorAll<HTMLElement>('.carta-kitchen'));

function setActiveTab(id: string): void {
  for (const t of tabs) t.classList.toggle('is-active', t.dataset.kitchenTab === id);
}

if (tabs.length && kitchens.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = (entry.target as HTMLElement).dataset.kitchen;
          if (id) setActiveTab(id);
        }
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );
  for (const k of kitchens) observer.observe(k);
}

/* ---- 2. Search filter ------------------------------------- */
const search = document.querySelector<HTMLInputElement>('#carta-search');
const items = Array.from(document.querySelectorAll<HTMLElement>('.menu-item'));
const categories = Array.from(document.querySelectorAll<HTMLElement>('.carta-category'));
const empty = document.querySelector<HTMLElement>('#carta-empty');

if (search) {
  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    let anyVisible = false;

    for (const item of items) {
      const match = q === '' || (item.dataset.search ?? '').includes(q);
      item.hidden = !match;
      if (match) anyVisible = true;
    }
    // Collapse categories and kitchens that ended up empty.
    for (const cat of categories) {
      cat.hidden = cat.querySelectorAll('.menu-item:not([hidden])').length === 0;
    }
    for (const k of kitchens) {
      k.hidden = k.querySelectorAll('.menu-item:not([hidden])').length === 0;
    }
    if (empty) empty.hidden = anyVisible;
  });
}

/* ---- 3. Lightbox ------------------------------------------ */
const dialog = document.querySelector<HTMLDialogElement>('#carta-lightbox');
const lightboxImg = document.querySelector<HTMLImageElement>('#carta-lightbox-img');
const closeBtn = document.querySelector<HTMLButtonElement>('#carta-lightbox-close');

if (dialog && lightboxImg) {
  document.addEventListener('click', (e) => {
    const trigger = (e.target as HTMLElement).closest<HTMLElement>('.lightbox-trigger');
    if (trigger?.dataset.full) {
      lightboxImg.src = trigger.dataset.full;
      lightboxImg.alt = trigger.dataset.alt ?? '';
      dialog.showModal();
    }
  });

  const close = () => dialog.close();
  closeBtn?.addEventListener('click', close);
  // Click on the backdrop (the dialog element itself) closes it.
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) close();
  });
}
