/*
  Todo el contenido de productos y familias está acá.
  Para cambiar un texto, una foto o un precio, editá este archivo y recargá la página.
  Las familias y sus historias son inventadas para el trabajo práctico.
*/

// Ingredientes: de quién viene cada uno. "familia" es el id de una familia; "aliado" es para lo que no se produce en el país.
const INGREDIENTES = {
  avena:    { nombre: "Avena",              familia: "etcheverry" },
  girasol:  { nombre: "Semillas de girasol", familia: "etcheverry" },
  arveja:   { nombre: "Proteína de arveja", familia: "etcheverry" },
  mani:     { nombre: "Maní",               familia: "ferreyra" },
  garbanzo: { nombre: "Garbanzo tostado",   familia: "ferreyra" },
  chia:     { nombre: "Semillas de chía",   familia: "ferreyra" },
  quinoa:   { nombre: "Quinoa",             familia: "zerpa" },
  manzana:  { nombre: "Manzana",            familia: "bianchi" },
  pasas:    { nombre: "Pasas de uva",       familia: "quiroga" },
  almendra: { nombre: "Almendras",          familia: "quiroga" },
  nuez:     { nombre: "Nueces",             familia: "quiroga" },
  datil:    { nombre: "Dátil",  aliado: "Cooperativa de comercio justo, Túnez" },
  cacao:    { nombre: "Cacao",  aliado: "Cooperativa de comercio justo, Perú" },
  coco:     { nombre: "Coco",   aliado: "Cooperativa de comercio justo, Brasil" }
};

const PRODUCTOS = [
  {
    id: "original",
    tipo: "barra",
    nombre: "Terra Viva Original",
    corto: "Avena, maní, dátil y semillas. La energía de la tierra.",
    descripcion: "La barra con la que empezó todo: ingredientes enteros, 100 % vegetal y nada que no puedas nombrar. Un snack simple para el día a día.",
    imagen: "img/original-frente.jpg",
    dorso: "img/original-dorso.jpg",
    alt: "Envase de Terra Viva Original junto a la barra de avena, maní y semillas",
    peso: "40 g",
    precio: 2190,
    ingredientes: ["avena", "mani", "datil", "girasol", "chia"],
    atributos: ["Vegana", "Sin TACC", "Sin aditivos", "Envase home compostable"],
    alergenos: "Contiene maní.",
    funcional: "Energía natural para el día a día.",
    emocional: "Comer simple y sin culpa.",
    esencia: "La energía de la tierra."
  },
  {
    id: "proteica",
    tipo: "barra",
    nombre: "Terra Viva Proteica",
    corto: "Proteína de arveja, garbanzo, maní y cacao. Fuerza que regenera.",
    descripcion: "Pensada para después de entrenar: proteína vegetal de legumbres y cacao, sin resignar tus valores por el camino.",
    imagen: "img/proteica-frente.jpg",
    dorso: "img/proteica-dorso.jpg",
    alt: "Envase de Terra Viva Proteica junto a la barra de cacao y garbanzo",
    peso: "40 g",
    precio: 2690,
    ingredientes: ["arveja", "garbanzo", "mani", "cacao"],
    atributos: ["Vegana", "Sin TACC", "Sin aditivos", "Envase home compostable"],
    alergenos: "Contiene maní.",
    funcional: "Recuperación muscular después de entrenar.",
    emocional: "Sentirte fuerte y activo sin resignar valores.",
    esencia: "Fuerza que regenera."
  },
  {
    id: "keto",
    tipo: "barra",
    nombre: "Terra Viva Keto",
    corto: "Almendras, nueces, coco y semillas. Sin azúcar agregada.",
    descripcion: "Frutos secos enteros y coco para quienes comen con pocos carbohidratos. Sacia, y no le pide nada al sabor.",
    imagen: "img/keto-frente.jpg",
    dorso: "img/keto-dorso.jpg",
    alt: "Envase de Terra Viva Keto junto a la barra de almendras, nueces y coco",
    peso: "40 g",
    precio: 3490,
    ingredientes: ["almendra", "nuez", "coco", "girasol", "chia"],
    atributos: ["Vegana", "Sin TACC", "Sin azúcar agregada", "Envase home compostable"],
    alergenos: "Contiene frutos secos.",
    funcional: "Saciedad con bajo contenido de carbohidratos.",
    emocional: "Cuidarte sin renunciar al sabor.",
    esencia: "Equilibrio consciente."
  },
  {
    id: "frutal",
    tipo: "barra",
    nombre: "Terra Viva Frutal",
    corto: "Quinoa, manzana y pasas de uva. El sabor de nuestra tierra.",
    descripcion: "Un snack liviano y dulce, hecho con la fruta de las economías regionales. También les gusta a los más chicos.",
    imagen: "img/frutal-frente.jpg",
    dorso: "img/frutal-dorso.jpg",
    alt: "Envase de Terra Viva Frutal junto a la barra de quinoa, manzana y pasas",
    peso: "40 g",
    precio: 2090,
    ingredientes: ["quinoa", "manzana", "pasas"],
    atributos: ["Vegana", "Sin TACC", "Sin aditivos", "Envase home compostable"],
    alergenos: "",
    funcional: "Un snack liviano, dulce y natural.",
    emocional: "Disfrutar los sabores de las economías regionales.",
    esencia: "El sabor de nuestra tierra."
  },
  {
    id: "pack",
    tipo: "caja",
    nombre: "Pack x6",
    corto: "Seis barras de la variante que elijas, para toda la semana.",
    descripcion: "Seis barras de una misma variante en una caja de cartón reciclado impresa con tintas vegetales. Para la compra semanal y para quienes ya tienen su favorita.",
    imagen: "img/pack-x6.jpg",
    alt: "Caja de cartón Pack x6 de Terra Viva",
    peso: "6 x 40 g",
    desde: 11290,
    precios: [["Original", 11790], ["Proteica", 14490], ["Keto", 18790], ["Frutal", 11290]],
    contenido: ["original", "proteica", "keto", "frutal"],
    contenidoTexto: "Elegís una de estas variantes:",
    atributos: ["10 % menos que por unidad", "Cartón reciclado", "Tintas vegetales"]
  },
  {
    id: "cosecha",
    tipo: "caja",
    nombre: "Caja Cosecha x12",
    corto: "Tres barras de cada variante. Para conocer toda la línea o regalar.",
    descripcion: "La línea completa en una sola caja: doce barras, tres de cada variante. Sirve para probarlas todas y también como regalo corporativo.",
    imagen: "img/caja-cosecha.jpg",
    alt: "Caja Cosecha abierta con doce barras de cuatro colores",
    peso: "12 x 40 g",
    precio: 26690,
    contenido: ["original", "proteica", "keto", "frutal"],
    contenidoTexto: "Trae 3 barras de cada una:",
    atributos: ["15 % menos que por unidad", "Cartón reciclado", "Tintas vegetales", "También por suscripción mensual: $24.990"]
  }
];

const FAMILIAS = [
  {
    id: "etcheverry",
    nombre: "Familia Etcheverry",
    lugar: "Tres Arroyos, Buenos Aires",
    foto: "img/etcheverry.jpg",
    alt: "Susana Etcheverry con su hijo, su nuera y su nieto en un campo de girasol y avena",
    cosechador: "Susana Etcheverry",
    desde: "2003",
    hectareas: "120 ha",
    integrantes: "4 personas, 3 generaciones",
    resumen: "Susana dejó de alquilar su campo a un pool de siembra cuando vio que la tierra ya no era la misma.",
    historia: [
      "Durante años, el campo de los Etcheverry estuvo alquilado para sembrar soja, campaña tras campaña. En 2003, cuando murió su marido, Susana decidió no renovar el contrato y trabajarlo ella. Lo primero que notó fue que el suelo se había vuelto duro y que después de una lluvia el agua se quedaba arriba.",
      "En 2014 empezó a pasar el campo a un manejo regenerativo, por franjas: avena, girasol y arveja se turnan con cultivos de cobertura, y el suelo ya no queda nunca desnudo. Hoy trabaja con su hijo Joaquín y su nuera Belén, y su nieto Benicio ya los acompaña a recorrer los lotes."
    ],
    cita: "Tardamos años en ver el cambio. Ahora agarrás un puñado de tierra y huele a tierra de nuevo.",
    miembros: [["Susana", "cosechadora principal"], ["Joaquín", "su hijo, a cargo de la maquinaria"], ["Belén", "su nuera, lleva la administración"], ["Benicio", "su nieto, 3 años"]],
    practicas: ["Rotación por franjas de avena, girasol y arveja", "Cultivos de cobertura todo el año", "Sin agroquímicos, solo abonos naturales"],
    ingredientes: ["avena", "girasol", "arveja"]
  },
  {
    id: "ferreyra",
    nombre: "Familia Ferreyra",
    lugar: "General Villegas, Buenos Aires",
    foto: "img/ferreyra.jpg",
    alt: "Néstor y Graciela Ferreyra con sus dos hijos frente a su campo",
    cosechador: "Néstor Ferreyra",
    desde: "1998",
    hectareas: "85 ha",
    integrantes: "4 personas, 2 generaciones",
    resumen: "Una chacra del noroeste bonaerense que eligió seguir siendo chica y sembrar variado.",
    historia: [
      "Néstor empezó en 1998 con una parte del campo de su padre y un tractor que todavía funciona. Mientras los vecinos unían lotes para sembrar lo mismo, él y Graciela se quedaron con lo que podían trabajar en familia.",
      "Sus hijos Tomás y Lucas volvieron de estudiar agronomía en Junín con ganas de probar otra cosa. Hoy alternan maní, garbanzo y chía con gramíneas que dejan rastrojo, para que el suelo arenoso de la zona no se vuele con el viento."
    ],
    cita: "El viento acá se lleva lo que dejás suelto. Por eso la tierra siempre tiene que estar tapada.",
    miembros: [["Néstor", "cosechador principal"], ["Graciela", "a cargo de la clasificación y la venta"], ["Tomás", "su hijo, agrónomo"], ["Lucas", "su hijo, agrónomo"]],
    practicas: ["Rotación de maní, garbanzo y chía con gramíneas", "Rastrojo sobre el suelo contra la erosión", "Intercambio de semillas con vecinos"],
    ingredientes: ["mani", "garbanzo", "chia"]
  },
  {
    id: "zerpa",
    nombre: "Familia Zerpa",
    lugar: "Uspallata, Mendoza",
    foto: "img/zerpa.jpg",
    alt: "Doña Elsa Zerpa con su hijo, su nuera y su nieta en un campo de quinoa al pie de la cordillera",
    cosechador: "Elsa Zerpa",
    desde: "1994",
    hectareas: "6 ha",
    integrantes: "4 personas, 3 generaciones",
    resumen: "Al pie de la cordillera, doña Elsa guarda las semillas de quinoa que heredó de su madre.",
    historia: [
      "Cuando Elsa empezó a sembrar quinoa en 1994, casi nadie en el valle la plantaba. Las semillas se las había guardado su madre en una lata, y de esa lata salió todo lo que hay hoy.",
      "Con su hijo Walter y su nuera Nélida trabajan seis hectáreas regadas con agua de deshielo, que baja por acequias desde la cordillera. Su nieta Ayelén está anotando en un cuaderno qué semilla da mejor en cada parcela, y las familias vecinas vienen a intercambiar las suyas."
    ],
    cita: "La semilla no se compra, se cuida y se comparte. Así llegó hasta nosotros.",
    miembros: [["Elsa", "cosechadora principal"], ["Walter", "su hijo, a cargo del riego"], ["Nélida", "su nuera, a cargo de la trilla"], ["Ayelén", "su nieta, lleva el registro de semillas"]],
    practicas: ["Semillas criollas e intercambio con vecinos", "Riego por acequia con agua de deshielo", "Abono natural de sus propias cabras"],
    ingredientes: ["quinoa"]
  },
  {
    id: "quiroga",
    nombre: "Hermanos Quiroga",
    lugar: "Tupungato, Mendoza",
    foto: "img/quiroga.jpg",
    alt: "Los cuatro hermanos Quiroga entre nogales y viñedos, con la cordillera de fondo",
    cosechador: "Ramón Quiroga",
    desde: "1987",
    hectareas: "18 ha",
    integrantes: "4 hermanos",
    resumen: "Cuatro hermanos que heredaron una finca y se repartieron el trabajo: uno sabe de nogales, otra de uvas.",
    historia: [
      "La finca la plantó su abuelo al pie de la cordillera. Cuando su padre se enfermó, en 1987, Ramón dejó el trabajo en la ciudad y volvió para cosechar. Con los años se sumaron Hugo, Marta y Daniel, y entre los cuatro se dividieron la finca por lo que cada uno sabe hacer.",
      "Los nogales, los almendros y las parras comparten la tierra. Entre las hileras crecen plantas de cobertura, las ovejas de un vecino comen el pasto en invierno y la poda vuelve al suelo como compost. Las pasas se secan al sol, como lo hacía su abuelo."
    ],
    cita: "Somos cuatro y discutimos todo. Pero en algo nunca hubo discusión: a la tierra no se la aprieta.",
    miembros: [["Ramón", "cosechador principal, nogales"], ["Hugo", "almendros"], ["Marta", "parras y secado de pasas"], ["Daniel", "riego y maquinaria"]],
    practicas: ["Nogales, almendros y parras en la misma finca", "Plantas de cobertura y pastoreo de invierno", "Compost con los restos de poda"],
    ingredientes: ["nuez", "almendra", "pasas"]
  },
  {
    id: "bianchi",
    nombre: "Familia Bianchi",
    lugar: "Tunuyán, Mendoza",
    foto: "img/bianchi.jpg",
    alt: "Aldo Bianchi con su hija y su yerno sosteniendo un cajón de manzanas en su chacra",
    cosechador: "Aldo Bianchi",
    desde: "1961",
    hectareas: "12 ha",
    integrantes: "3 personas, 2 generaciones",
    resumen: "Tres generaciones de manzanas en el Valle de Uco, y una hija que volvió para cambiar la forma de cuidarlas.",
    historia: [
      "El padre de Aldo llegó al Valle de Uco y plantó sus primeras manzanas en 1961, protegidas del viento por los mismos álamos que siguen en pie. Aldo aprendió el oficio de chico y nunca se fue.",
      "Su hija Carla volvió al valle con su marido, Martín, y fue ella quien propuso dejar los químicos. Hoy las plagas se controlan con insectos benéficos y feromonas, y entre las filas crece un manto verde. La fruta que no llega a góndola por su tamaño es la que termina, deshidratada, en la barra Frutal."
    ],
    cita: "Mi viejo decía que la manzana fea es la más rica. Tenía razón, y ahora además tiene destino.",
    miembros: [["Aldo", "cosechador principal"], ["Carla", "su hija, a cargo del manejo del monte"], ["Martín", "su yerno, a cargo del deshidratado"]],
    practicas: ["Control biológico con insectos benéficos y feromonas", "Cobertura verde entre las filas", "Aprovechamiento de la fruta sin calibre comercial"],
    ingredientes: ["manzana"]
  }
];
