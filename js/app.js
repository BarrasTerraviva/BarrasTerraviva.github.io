/* Arma el catálogo, las fichas de producto y las páginas de familias a partir de datos.js */

const $ = (selector) => document.querySelector(selector);
const parametro = (nombre) => new URLSearchParams(location.search).get(nombre);
const pesos = (n) => "$" + n.toLocaleString("es-AR");
const familiaPorId = (id) => FAMILIAS.find((f) => f.id === id);

// Qué productos llevan un ingrediente dado
const productosCon = (ing) => PRODUCTOS.filter((p) => (p.ingredientes || []).includes(ing));

// Qué familias participan en un producto
function familiasDe(producto) {
  const ids = (producto.ingredientes || []).map((i) => INGREDIENTES[i].familia).filter(Boolean);
  return FAMILIAS.filter((f) => ids.includes(f.id));
}

/* ---------- Productos ---------- */
function tarjetaProducto(p) {
  const precio = p.precio ? pesos(p.precio) : "desde " + pesos(p.desde);
  return `
    <a class="tarjeta" href="producto.html?id=${p.id}">
      <img src="${p.imagen}" alt="${p.alt}" loading="lazy">
      <div class="tarjeta__cuerpo">
        <h3>${p.nombre}</h3>
        <p>${p.corto}</p>
        <div class="tarjeta__pie"><span>${p.peso}</span><span>${precio}</span></div>
      </div>
    </a>`;
}

function pintarCatalogo() {
  const lista = $("#catalogo");
  if (!lista) return;
  const mostrar = (tipo) => {
    lista.innerHTML = PRODUCTOS.filter((p) => tipo === "todos" || p.tipo === tipo).map(tarjetaProducto).join("");
    document.querySelectorAll(".filtro").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.tipo === tipo)));
  };
  document.querySelectorAll(".filtro").forEach((b) => b.addEventListener("click", () => mostrar(b.dataset.tipo)));
  mostrar("todos");
}

function filaIngrediente(id) {
  const ing = INGREDIENTES[id];
  if (ing.aliado) return `<tr><td>${ing.nombre}</td><td>${ing.aliado}</td><td>No se produce a escala en el país</td></tr>`;
  const f = familiaPorId(ing.familia);
  return `<tr><td>${ing.nombre}</td><td><a href="familia.html?id=${f.id}">${f.nombre}</a></td><td>${f.lugar}</td></tr>`;
}

function fichaBarra(p) {
  return `
    <section class="seccion seccion--crema">
      <div class="contenedor">
        <span class="volanta">De qué está hecha</span>
        <h2>Cada ingrediente tiene nombre y apellido</h2>
        <table class="traza">
          <thead><tr><th>Ingrediente</th><th>Quién lo produce</th><th>De dónde viene</th></tr></thead>
          <tbody>${p.ingredientes.map(filaIngrediente).join("")}</tbody>
        </table>
        <div class="botones" style="margin-top:24px">
          <a class="boton" href="familias.html?barra=${p.id}">Conocé a las familias de esta barra</a>
        </div>
      </div>
    </section>
    <section class="seccion">
      <div class="contenedor">
        <span class="volanta">Para qué sirve</span>
        <h2>${p.esencia}</h2>
        <div class="ladder">
          <div><h3>Qué te da</h3><p>${p.funcional}</p></div>
          <div><h3>Cómo te hace sentir</h3><p>${p.emocional}</p></div>
          <div><h3>Información nutricional</h3><p>Está en el dorso del envase. Los valores se completan con el análisis de laboratorio de cada receta.</p></div>
        </div>
      </div>
    </section>`;
}

function fichaCaja(p) {
  const incluidas = PRODUCTOS.filter((x) => p.contenido.includes(x.id));
  const precios = p.precios ? `
    <table class="traza">
      <thead><tr><th>Variante</th><th>Precio</th></tr></thead>
      <tbody>${p.precios.map(([n, v]) => `<tr><td>${n}</td><td>${pesos(v)}</td></tr>`).join("")}</tbody>
    </table>` : "";
  return `
    <section class="seccion seccion--crema">
      <div class="contenedor">
        <span class="volanta">Qué trae</span>
        <h2>${p.contenidoTexto}</h2>
        <div class="catalogo">${incluidas.map(tarjetaProducto).join("")}</div>
        ${precios}
      </div>
    </section>`;
}

function pintarProducto() {
  const destino = $("#producto");
  if (!destino) return;
  const p = PRODUCTOS.find((x) => x.id === parametro("id"));
  if (!p) {
    destino.innerHTML = `<section class="seccion"><div class="contenedor"><h1>No encontramos ese producto</h1><a class="boton" href="productos.html">Ver el catálogo</a></div></section>`;
    return;
  }
  document.title = p.nombre + " | Terra Viva";
  const precio = p.precio ? pesos(p.precio) : "desde " + pesos(p.desde);
  const botones = p.dorso ? `
    <div class="galeria__botones">
      <button class="filtro" type="button" data-foto="${p.imagen}" aria-pressed="true">Frente</button>
      <button class="filtro" type="button" data-foto="${p.dorso}" aria-pressed="false">Dorso</button>
    </div>` : "";
  destino.innerHTML = `
    <section class="seccion">
      <div class="contenedor">
        <p class="miga"><a href="productos.html">← Volver al catálogo</a></p>
        <div class="ficha">
          <div class="galeria">
            <img id="foto-producto" src="${p.imagen}" alt="${p.alt}">
            ${botones}
          </div>
          <div>
            <h1>${p.nombre}</h1>
            <p class="bajada">${p.descripcion}</p>
            <ul class="etiquetas">${p.atributos.map((a) => `<li>${a}</li>`).join("")}</ul>
            <p class="precio">${precio}</p>
            <p class="nota">${p.peso}. Las barras se consiguen en dietéticas y tiendas healthy.</p>
            ${p.alergenos ? `<p class="nota"><strong>${p.alergenos}</strong></p>` : ""}
          </div>
        </div>
      </div>
    </section>
    ${p.tipo === "barra" ? fichaBarra(p) : fichaCaja(p)}`;

  document.querySelectorAll("[data-foto]").forEach((b) => b.addEventListener("click", () => {
    $("#foto-producto").src = b.dataset.foto;
    document.querySelectorAll("[data-foto]").forEach((o) => o.setAttribute("aria-pressed", String(o === b)));
  }));
}

/* ---------- Familias ---------- */
function pintarFamilias() {
  const lista = $("#familias");
  if (!lista) return;
  // Quien escanea el QR de una barra llega acá con ?barra=original y ve solo sus familias
  const barra = PRODUCTOS.find((p) => p.id === parametro("barra") && p.tipo === "barra");
  const mostradas = barra ? familiasDe(barra) : FAMILIAS;
  if (barra) {
    $("#aviso-barra").innerHTML = `
      <div class="aviso-qr">
        <strong>Tu ${barra.nombre} viene de estas familias.</strong>
        <a href="familias.html" style="color:#fff">Ver todas</a>
      </div>`;
  }
  lista.innerHTML = mostradas.map((f) => `
    <a class="familia-fila" href="familia.html?id=${f.id}">
      <img src="${f.foto}" alt="${f.alt}" loading="lazy">
      <div>
        <p class="lugar">${f.lugar}</p>
        <h2>${f.nombre}</h2>
        <p>${f.resumen}</p>
        <p class="nota">Cosechan ${f.ingredientes.map((i) => INGREDIENTES[i].nombre.toLowerCase()).join(", ")} · desde ${f.desde}</p>
      </div>
    </a>`).join("");
}

function pintarFamilia() {
  const destino = $("#familia");
  if (!destino) return;
  const f = familiaPorId(parametro("id"));
  if (!f) {
    destino.innerHTML = `<section class="seccion"><div class="contenedor"><h1>No encontramos esa familia</h1><a class="boton" href="familias.html">Ver todas las familias</a></div></section>`;
    return;
  }
  document.title = f.nombre + " | Terra Viva";
  const barras = [...new Set(f.ingredientes.flatMap(productosCon))];
  destino.innerHTML = `
    <img class="foto-familia" src="${f.foto}" alt="${f.alt}">
    <section class="seccion">
      <div class="contenedor">
        <p class="miga"><a href="familias.html">← Todas las familias</a></p>
        <p class="lugar">${f.lugar}</p>
        <h1>${f.nombre}</h1>
        <dl class="ficha-datos">
          <div><dt>Cosecha principal</dt><dd>${f.cosechador}</dd></div>
          <div><dt>Cosechan desde</dt><dd>${f.desde}</dd></div>
          <div><dt>Superficie</dt><dd>${f.hectareas}</dd></div>
          <div><dt>Quiénes son</dt><dd>${f.integrantes}</dd></div>
        </dl>
        <div class="dos-columnas" style="align-items:start">
          <div>
            <blockquote class="cita">“${f.cita}”<footer>${f.cosechador}</footer></blockquote>
            ${f.historia.map((t) => `<p>${t}</p>`).join("")}
          </div>
          <div>
            <h3>La familia</h3>
            <ul class="nombres">${f.miembros.map(([n, r]) => `<li><strong>${n}</strong> <span>· ${r}</span></li>`).join("")}</ul>
            <h3 style="margin-top:28px">Cómo cuidan la tierra</h3>
            <ul class="lista-simple">${f.practicas.map((t) => `<li>${t}</li>`).join("")}</ul>
          </div>
        </div>
      </div>
    </section>
    <section class="seccion seccion--crema">
      <div class="contenedor">
        <span class="volanta">Lo que nos dan</span>
        <h2>${f.ingredientes.map((i) => INGREDIENTES[i].nombre).join(", ")}</h2>
        <p class="bajada">Lo vas a encontrar en estas barras:</p>
        <div class="catalogo">${barras.map(tarjetaProducto).join("")}</div>
      </div>
    </section>`;
}

pintarCatalogo();
pintarProducto();
pintarFamilias();
pintarFamilia();
