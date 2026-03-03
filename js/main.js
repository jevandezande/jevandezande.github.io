// Footnote tooltips with HTML support
document.querySelectorAll('.footnote-reference').forEach(sup => {
    const link = sup.querySelector('a');
    const id = link.getAttribute('href').slice(1);
    const def = document.getElementById(id);
    if (def) {
        // Get HTML content (skip the label)
        const p = def.querySelector('p');
        const html = p ? p.innerHTML : def.innerHTML;

        // Create tooltip element as sibling to link
        const tooltip = document.createElement('span');
        tooltip.className = 'footnote-tooltip';
        tooltip.innerHTML = html;
        sup.appendChild(tooltip);

        // Prevent default only on the footnote number itself
        link.addEventListener('click', e => {
            if (e.target === link) {
                e.preventDefault();
            }
        });
    }
});
// Hide footnote definitions at bottom
document.querySelectorAll('.footnote-definition').forEach(def => def.style.display = 'none');

// TOC toggle functionality
document.querySelectorAll('.toc-toggle').forEach(toggle => {
    const stored = localStorage.getItem('toc-collapsed');
    const isCollapsed = stored === null ? true : stored === 'true';

    toggle.setAttribute('aria-expanded', !isCollapsed);

    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !expanded);
        localStorage.setItem('toc-collapsed', expanded);
    });
});
