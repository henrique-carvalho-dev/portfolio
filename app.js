// Monta o portfólio a partir de dados.js e controla o visor de imagens.
(function () {
  const D = window.PORTFOLIO;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const galeria = []; // imagens navegáveis no visor

  function peca(p, extra = '') {
    if (!p.img) {
      if (p.forma) extra += ' f-' + p.forma;
      return `<div class="peca reservado ${extra}"><div class="peca-img"><span>Arte em produção</span></div><span class="peca-titulo">${esc(p.titulo)}</span></div>`;
    }
    const i = galeria.push({ src: p.img, legenda: p.titulo }) - 1;
    if (p.forma) extra += ' f-' + p.forma;
    return `<button class="peca ${extra}" type="button" data-i="${i}"><span class="peca-img"><img src="${esc(p.img)}" alt="${esc(p.titulo)}" decoding="async"></span><span class="peca-titulo">${esc(p.titulo)}${p.ano ? ` <span class="peca-ano">${esc(p.ano)}</span>` : ''}</span></button>`;
  }

  document.getElementById('lista-kv').innerHTML = D.keyVisuals.map(kv => `
    <article class="kv" id="kv-${kv.id}">
      <div class="kv-chave">${peca(kv.chave)}</div>
      <div class="kv-info">
        <span class="kv-num" aria-hidden="true">${kv.numero}</span>
        <h3>${esc(kv.titulo)}</h3>
        <p>${esc(kv.resumo)}</p>
        <div class="kv-pecas${kv.pecas.some(p => p.forma === 'h') ? ' misto' : ''}">${kv.pecas.map(p => peca(p)).join('')}</div>
      </div>
    </article>`).join('');

  document.getElementById('grade-outros').innerHTML = D.outros.map(p => peca(p, p.largo ? 'largo' : '')).join('');

  // Contatos e Behance
  const c = D.contato, links = [];
  if (D.behance) links.push(`<a class="botao botao-azul" href="${esc(D.behance)}" target="_blank" rel="noopener">Ver portfólio no Behance</a>`);
  links.push(`<a class="botao botao-linha" href="mailto:${esc(c.email)}">${esc(c.email)}</a>`);
  links.push(`<a class="botao botao-linha" href="https://wa.me/${esc(c.whatsapp)}" target="_blank" rel="noopener">WhatsApp</a>`);
  links.push(`<a class="botao botao-linha" href="${esc(c.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`);
  document.getElementById('contatos').innerHTML = links.map(l => `<li>${l}</li>`).join('');
  document.querySelectorAll('.js-behance').forEach(a => {
    if (D.behance) { a.href = D.behance; a.target = '_blank'; a.rel = 'noopener'; }
    else { a.textContent = 'Contato'; a.classList.add('so-celular'); }
  });

  // Visor
  const visor = document.getElementById('visor'), img = document.getElementById('visor-img'), leg = document.getElementById('visor-legenda');
  let atual = 0;
  function mostrar(i) {
    atual = (i + galeria.length) % galeria.length;
    img.src = galeria[atual].src; img.alt = galeria[atual].legenda; leg.textContent = galeria[atual].legenda;
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('button.peca');
    if (b) { mostrar(+b.dataset.i); visor.showModal(); return; }
    const a = e.target.closest('[data-acao]');
    if (!a) return;
    if (a.dataset.acao === 'fechar') visor.close();
    if (a.dataset.acao === 'anterior') mostrar(atual - 1);
    if (a.dataset.acao === 'proximo') mostrar(atual + 1);
  });
  visor.addEventListener('click', e => { if (e.target === visor) visor.close(); });
  visor.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') mostrar(atual - 1);
    if (e.key === 'ArrowRight') mostrar(atual + 1);
  });
})();
