// /* ==========================================================================
//    1. BASE DE DADOS (ARRAY COM 10 RECEITAS PROFISSIONAIS)
//    ========================================================================== */
// const dadosReceitasIniciais = [
//   {
//     id: 1,
//     nome: "Strogonoff de Frango Suculento",
//     // ⬇️ ALTERE AQUI A URL OU O CAMINHO DA SUA IMAGEM DA RECEITA 1 ⬇️
//     imagem: "imagens/strogonoff-de-frango-1.jpg",
//     categoria: "Prato Principal",
//     tempoPreparo: "30 min",
//     nivelDificuldade: "Fácil",
//     resumoBeneficio: "Refeição clássica, rápida e perfeita para o almoço em família.",
//     alertaComplexidade: "Cuide para não deixar o creme de leite ferver para evitar que talhe.",
//     ingredientes: [
//       "500g de peito de frango em cubos",
//       "1 caixinha de creme de leite",
//       "2 colheres (sopa) de extrato de tomate",
//       "1 colher (sopa) de ketchup",
//       "1 colher (sopa) de mostarda",
//       "1/2 cebola picada",
//       "Alho, sal e pimenta-do-reino a gosto"
//     ],
//     modoPreparo: [
//       "Em uma panela, doure o alho e a cebola no azeite.",
//       "Adicione o frango em cubos e refogue até dourar.",
//       "Acrescente a mostarda, ketchup e o extrato de tomate. Misture bem.",
//       "Desligue o fogo e adicione o creme de leite, mexendo até incorporar.",
//       "Sirva quente com arroz e batata palha."
//     ]
//   },
//   {
//     id: 2,
//     nome: "Mousse de Limão Rápida",
//     imagem: "imagens/mousse-de-limao.jpeg",
//     categoria: "Sobremesa",
//     tempoPreparo: "15 min (+ 2h geladeira)",
//     nivelDificuldade: "Fácil",
//     resumoBeneficio: "Refrescante, leva apenas 3 ingredientes e fica pronta em minutos.",
//     alertaComplexidade: "Use limões frescos. Evite bater excessivamente o suco para não amargar.",
//     ingredientes: [
//       "1 lata de leite condensado",
//       "1 caixinha de creme de leite",
//       "1/2 xícara de suco de limão espremido na hora",
//       "Raspas de limão para decorar"
//     ],
//     modoPreparo: [
//       "No liquidificador, bata o leite condensado e o creme de leite por 1 minuto.",
//       "Com o liquidificador ligado, adicione o suco de limão aos poucos até engrossar.",
//       "Despeje em taças e leve à geladeira por pelo menos 2 horas.",
//       "Decore com raspas de limão antes de servir."
//     ]
//   },
//   {
//     id: 3,
//     nome: "Risoto de Cogumelos Shimeji",
//     imagem: "imagens/risoto.webp",
//     categoria: "Prato Principal",
//     tempoPreparo: "45 min",
//     nivelDificuldade: "Médio",
//     resumoBeneficio: "Prato sofisticado com textura aveludada e sabor marcante.",
//     alertaComplexidade: "Adicione o caldo quente aos poucos e mexe continuamente para soltar o amido.",
//     ingredientes: [
//       "200g de arroz arbóreo",
//       "200g de cogumelos shimeji frescos",
//       "1 litro de caldo de legumes quente",
//       "1/2 xícara de vinho branco seco",
//       "1/2 cebola picada",
//       "2 colheres (sopa) de manteiga gelada",
//       "50g de queijo parmesão ralado"
//     ],
//     modoPreparo: [
//       "Em uma frigideira, salteie os cogumelos na manteiga e reserve.",
//       "Em uma panela, refogue a cebola e adicione o arroz arbóreo.",
//       "Adicione o vinho branco e mexe até evaporar totalmente.",
//       "Vá adicionando o caldo de legumes aos poucos, mexendo sempre até o arroz ficar al dente.",
//       "Desligue o fogo, adicione os cogumelos, o parmesão e a manteiga gelada. Misture vigorosamente."
//     ]
//   },
//   {
//     id: 4,
//     nome: "Guacamole Tradicional Mexicana",
//     imagem: "imagens/guacamole.jpg",
//     categoria: "Entrada",
//     tempoPreparo: "15 min",
//     nivelDificuldade: "Fácil",
//     resumoBeneficio: "Entrada leve, highly nutritiva e repleta de gorduras boas.",
//     alertaComplexidade: "O abacate deve estar maduro. Consuma logo após o preparo para não oxidar.",
//     ingredientes: [
//       "2 abacates maduros (ou 4 avocados)",
//       "1 tomate sem sementes picado",
//       "1/2 cebola roxa bem picada",
//       "Coentro picado a gosto",
//       "Suco de 1 limão",
//       "Azeite, sal e pimenta a gosto"
//     ],
//     modoPreparo: [
//       "Amasse os abacates com um garfo em uma tigela, mantendo alguns pedaços.",
//       "Adicione o tomate, a cebola roxa e o coentro.",
//       "Regue com o suco de limão e azeite.",
//       "Tempere com sal e pimenta e misture bem. Sirva com nachos."
//     ]
//   },
//   {
//     id: 5,
//     nome: "Panqueca Americana Fofinha",
//     // imagem: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80",
//     imagem: "imagens/panqueca.webp",
//     categoria: "Lanche",
//     tempoPreparo: "20 min",
//     nivelDificuldade: "Fácil",
//     resumoBeneficio: "Opção perfeita e aconchegante para um café da manhã especial.",
//     alertaComplexidade: "Não misture a massa em excesso; bolinhas são normais e deixam a panqueca macia.",
//     ingredientes: [
//       "1 e 1/2 xícara de farinha de trigo",
//       "1 xícara de leite",
//       "1 ovo",
//       "2 colheres (sopa) de açúcar",
//       "1 colher (sopa) de fermento em pó",
//       "1 pitada de sal"
//     ],
//     modoPreparo: [
//       "Misture os ingredientes secos em uma tigela.",
//       "Em outro recipiente, bata o ovo com o leite e adicione aos secos.",
//       "Misture delicadamente apenas até incorporar.",
//       "Aaqueça uma frigideira untada e despeje uma concha de massa.",
//       "Quando surgirem bolhas, vire e doure o outro lado."
//     ]
//   },
//   {
//     id: 6,
//     nome: "Petit Gâteau de Chocolate",
//     // imagem: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
//     imagem: "imagens/petit_gateau.jpg",
//     categoria: "Sobremesa",
//     tempoPreparo: "25 min",
//     nivelDificuldade: "Difícil",
//     resumoBeneficio: "Sobremesa clássica de restaurante com recheio cremoso irresistível.",
//     alertaComplexidade: "O tempo de forno precisa ser exato; se assar demais, vira um bolo comum.",
//     ingredientes: [
//       "200g de chocolate meio amargo",
//       "2 colheres de manteiga",
//       "2 ovos e 2 gemas",
//       "1/2 xícara de açúcar",
//       "2 colheres (sopa) de farinha de trigo"
//     ],
//     modoPreparo: [
//       "Derreta o chocolate com a manteiga em banho-maria.",
//       "Bata os ovos, as gemas e o açúcar até obter uma mistura clara.",
//       "Junte o chocolate derretido e adicione a farinha peneirada.",
//       "Despeje em forminhas untadas e enfarinhadas.",
//       "Asse em forno pré-aquecido a 200°C por exatamente 8 a 10 minutos."
//     ]
//   },
//   {
//     id: 7,
//     nome: "Tapioca Recheada de Queijo e Presunto",
//     // imagem: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
//     imagem: "imagens/tapioca.webp",
//     categoria: "Lanche",
//     tempoPreparo: "10 min",
//     nivelDificuldade: "Fácil",
//     resumoBeneficio: "Lanche sem glúten, extremamente rápido e prático.",
//     alertaComplexidade: "A frigideira deve estar quente antes de espalhar a goma de tapioca.",
//     ingredientes: [
//       "4 colheres (sopa) de goma de tapioca hidratada",
//       "2 fatias de queijo muçarela",
//       "2 fatias de presunto",
//       "Orégano a gosto"
//     ],
//     modoPreparo: [
//       "Peneire a goma de tapioca diretamente em uma frigideira antiaderente aquecida.",
//       "Modelos a massa com as costas de uma colher até cobrir o fundo.",
//       "Quando a massa unir, coloque o queijo, o presunto e o orégano em uma das metades.",
//       "Dobre a tapioca ao meio e deixe o queijo derreter ligeiramente."
//     ]
//   },
//   {
//     id: 8,
//     nome: "Sopa Creme de Abóbora com Gengibre",
//     // imagem: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=600&q=80",
//     imagem: "imagens/sopa.webp",
//     categoria: "Entrada",
//     tempoPreparo: "35 min",
//     nivelDificuldade: "Fácil",
//     resumoBeneficio: "Confortante, termogênica e perfeita para dias frios.",
//     alertaComplexidade: "Cuidado com a quantidade de gengibre para não se sobrepor ao sabor da abóbora.",
//     ingredientes: [
//       "500g de abóbora cabotiá descascada e picada",
//       "1 colher (chá) de gengibre ralado",
//       "1 cebola picada",
//       "2 dentes de alho",
//       "750ml de água ou caldo vegetal",
//       "Azeite, sal e pimenta a gosto"
//     ],
//     modoPreparo: [
//       "Refogue a cebola, o alho e o gengibre no azeite.",
//       "Adicione a abóbora e o caldo de legumes. Cozinhe até a abóbora amaciar.",
//       "Bata tudo no liquidificador (ou mixer) até obter um creme liso.",
//       "Volte à panela, ajuste o sal e sirva bem quente."
//     ]
//   },
//   {
//     id: 9,
//     nome: "Lasanha à Bolonhesa Clássica",
//     // imagem: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=600&q=80",
//     imagem: "imagens/lasanha.webp",
//     categoria: "Prato Principal",
//     tempoPreparo: "1h 15 min",
//     nivelDificuldade: "Médio",
//     resumoBeneficio: "Prato farto e reconfortante, ideal para almoços de domingo.",
//     alertaComplexidade: "Garanta que o molho fique bem suculento para cozinhar a massa no forno.",
//     ingredientes: [
//       "500g de massa para lasanha",
//       "500g de carne moída",
//       "2 saches de molho de tomate",
//       "300g de queijo muçarela fatiado",
//       "300g de presunto fatiado",
//       "Alho, cebola, sal e manjericão a gosto"
//     ],
//     modoPreparo: [
//       "Prepare o molho bolonhesa refogando alho, cebola, carne moída e o molho de tomate.",
//       "Em um refratário, monte camadas: molho, massa, presunto, queijo.",
//       "Repita o processo finalizando com bastante queijo por cima.",
//       "Leve ao forno pré-aquecido a 180°C por 30 a 40 minutos até gratinar."
//     ]
//   },
//   {
//     id: 10,
//     nome: "Smoothie de Frutas Vermelhas",
//     // imagem: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
//     imagem: "imagens/smoothie.jpg",
//     categoria: "Lanche",
//     tempoPreparo: "5 min",
//     nivelDificuldade: "Fácil",
//     resumoBeneficio: "Bebida antioxidante, gelada e muito rápida.",
//     alertaComplexidade: "Utilize frutas congeladas para garantir a consistência cremosa ideal.",
//     ingredientes: [
//       "1 xícara de frutas vermelhas congeladas (morango, amora, mirtilo)",
//       "1 banana madura congelada",
//       "200ml de leite ou bebida vegetal",
//       "1 colher (sopa) de mel (opcional)"
//     ],
//     modoPreparo: [
//       "Coloque todos os ingredientes no liquidificador.",
//       "Bata em velocidade alta até obter uma mistura homogênea e espessa.",
//       "Sirva imediatamente em um copo alto."
//     ]
//   }
// ];

// /* ==========================================================================
//    2. ESTADO DA APLICAÇÃO E LOCALSTORAGE
//    ========================================================================== */
// let receitas = [];
// let favoritos = [];

// function inicializarDados() {
//   const receitasSalvas = localStorage.getItem("receitas_db");
//   const favsSalvos = localStorage.getItem("receitas_favoritas");

//   if (receitasSalvas) {
//     receitas = JSON.parse(receitasSalvas);
//   } else {
//     receitas = dadosReceitasIniciais;
//     localStorage.setItem("receitas_db", JSON.stringify(receitas));
//   }

//   if (favsSalvos) {
//     favoritos = JSON.parse(favsSalvos);
//   }
// }

// /* ==========================================================================
//    3. ELEMENTOS DO DOM (INTERAÇÃO)
//    ========================================================================== */
// const recipesGrid = document.getElementById("recipesGrid");
// const quickPills = document.getElementById("quickPills");
// const searchInput = document.getElementById("searchInput");
// const categoryFilter = document.getElementById("categoryFilter");
// const difficultyFilter = document.getElementById("difficultyFilter");
// const emptyState = document.getElementById("emptyState");
// const resetFavoritesBtn = document.getElementById("resetFavoritesBtn");

// /* ==========================================================================
//    4. FUNÇÕES DE RENDERIZAÇÃO
//    ========================================================================== */

// function renderizarPilulasNav(lista) {
//   quickPills.innerHTML = "";
//   lista.forEach(receita => {
//     const pill = document.createElement("button");
//     pill.className = "pill-btn";
//     pill.textContent = receita.nome;
//     pill.addEventListener("click", () => rolarParaReceita(receita.id));
//     quickPills.appendChild(pill);
//   });
// }

// function renderizarReceitas(lista) {
//   recipesGrid.innerHTML = "";

//   if (lista.length === 0) {
//     emptyState.classList.remove("hidden");
//     return;
//   } else {
//     emptyState.classList.add("hidden");
//   }

//   for (let i = 0; i < lista.length; i++) {
//     const receita = lista[i];
//     const isFav = favoritos.includes(receita.id);

//     const card = document.createElement("article");
//     card.className = "recipe-card";
//     card.id = `recipe-${receita.id}`;

//     const ingredientesHTML = receita.ingredientes.map(ing => `<li>${ing}</li>`).join("");
//     const passosHTML = receita.modoPreparo.map(passo => `<li>${passo}</li>`).join("");

//     card.innerHTML = `
//       <div>
//         <!-- Imagem da Receita Renders Dinamicamente -->
//         <div class="card-image-container">
//           <img src="${receita.imagem}" alt="${receita.nome}" class="card-image">
//         </div>

//         <div class="card-header">
//           <div class="badge-group">
//             <span class="badge badge-cat">${receita.categoria}</span>
//             <span class="badge badge-${receita.nivelDificuldade}">${receita.nivelDificuldade}</span>
//           </div>
//           <h2 class="recipe-title">
//             ${receita.nome}
//             <button class="btn-favorite" onclick="alternarFavorito(${receita.id})" title="Favoritar">
//               ${isFav ? "❤️" : "🤍"}
//             </button>
//           </h2>
//           <span class="prep-time">⏱️ ${receita.tempoPreparo}</span>
//         </div>

//         <div class="info-block">
//           <p class="benefit-text"><strong>Por que fazer:</strong> ${receita.resumoBeneficio}</p>
//           <div class="alert-box">
//             <strong>⚠️ Atenção:</strong> ${receita.alertaComplexidade}
//           </div>
//         </div>

//         <div class="details-container" id="details-${receita.id}">
//           <h3 class="section-title">🛒 Ingredientes</h3>
//           <ul class="ingredients-list">
//             ${ingredientesHTML}
//           </ul>

//           <h3 class="section-title">👩‍🍳 Modo de Preparo</h3>
//           <ol class="steps-list">
//             ${passosHTML}
//           </ol>
//         </div>
//       </div>

//       <button class="btn-toggle" onclick="alternarExpansaoCard(${receita.id})">
//         Ver Receita Completa
//       </button>
//     `;

//     recipesGrid.appendChild(card);
//   }
// }

// /* ==========================================================================
//    5. LÓGICA DE INTERAÇÃO E EVENTOS
//    ========================================================================== */

// function alternarExpansaoCard(id) {
//   const card = document.getElementById(`recipe-${id}`);
//   const btn = card.querySelector(".btn-toggle");

//   card.classList.toggle("expanded");

//   if (card.classList.contains("expanded")) {
//     btn.textContent = "Ocultar Receita";
//   } else {
//     btn.textContent = "Ver Receita Completa";
//   }
// }

// function rolarParaReceita(id) {
//   const card = document.getElementById(`recipe-${id}`);
//   if (card) {
//     card.scrollIntoView({ behavior: "smooth", block: "center" });
//     card.classList.add("highlight");
//     setTimeout(() => {
//       card.classList.remove("highlight");
//     }, 2000);
//   }
// }

// function alternarFavorito(id) {
//   const index = favoritos.indexOf(id);

//   if (index === -1) {
//     favoritos.push(id);
//   } else {
//     favoritos.splice(index, 1);
//   }

//   localStorage.setItem("receitas_favoritas", JSON.stringify(favoritos));
//   aplicarFiltros();
// }

// function aplicarFiltros() {
//   const termoBusca = searchInput.value.toLowerCase().trim();
//   const catSelecionada = categoryFilter.value;
//   const difSelecionada = difficultyFilter.value;

//   const receitasFiltradas = receitas.filter(receita => {
//     const bateuNome = receita.nome.toLowerCase().includes(termoBusca);
//     let bateuIngrediente = false;

//     let k = 0;
//     while (k < receita.ingredientes.length) {
//       if (receita.ingredientes[k].toLowerCase().includes(termoBusca)) {
//         bateuIngrediente = true;
//         break;
//       }
//       k++;
//     }

//     const bateuTexto = bateuNome || bateuIngrediente;
//     const bateuCategoria = (catSelecionada === "todas" || receita.categoria === catSelecionada);
//     const bateuDificuldade = (difSelecionada === "todas" || receita.nivelDificuldade === difSelecionada);

//     return bateuTexto && bateuCategoria && bateuDificuldade;
//   });

//   renderizarReceitas(receitasFiltradas);
// }

// /* ==========================================================================
//    6. INICIALIZAÇÃO
//    ========================================================================== */
// function iniciar() {
//   inicializarDados();
//   renderizarPilulasNav(receitas);
//   renderizarReceitas(receitas);

//   searchInput.addEventListener("input", aplicarFiltros);
//   categoryFilter.addEventListener("change", aplicarFiltros);
//   difficultyFilter.addEventListener("change", aplicarFiltros);

//   resetFavoritesBtn.addEventListener("click", () => {
//     favoritos = [];
//     localStorage.removeItem("receitas_favoritas");
//     aplicarFiltros();
//   });
// }

// document.addEventListener("DOMContentLoaded", iniciar);



/* ==========================================================================
   1. ESTRUTURA DE DADOS INICIAIS (PADRÃO)
   ========================================================================== */
const receitasPadrao = [
  {
    id: 1,
    nome: "Strogonoff de Frango Suculento",
    imagem: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
    categoria: "Prato Principal",
    tempoPreparo: "30 min",
    nivelDificuldade: "Fácil",
    resumoBeneficio: "Refeição clássica, rápida e perfeita para o almoço em família.",
    alertaComplexidade: "Cuide para não deixar o creme de leite ferver para evitar que talhe.",
    ingredientes: ["500g de peito de frango em cubos", "1 caixinha de creme de leite", "2 colheres (sopa) de extrato de tomate", "1 colher (sopa) de ketchup", "1/2 cebola picada"],
    modoPreparo: ["Doure o alho e a cebola no azeite.", "Adicione o frango e refogue até dourar.", "Acrescente a mostarda, ketchup e extrato de tomate.", "Desligue o fogo e misture o creme de leite."],
    autor: "sistema",
    privada: false
  },
  {
    id: 2,
    nome: "Mousse de Limão Rápida",
    imagem: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=600&q=80",
    categoria: "Sobremesa",
    tempoPreparo: "15 min (+ 2h geladeira)",
    nivelDificuldade: "Fácil",
    resumoBeneficio: "Refrescante, leva apenas 3 ingredientes e fica pronta em minutos.",
    alertaComplexidade: "Use limões frescos. Evite bater excessivamente o suco para não amargar.",
    ingredientes: ["1 lata de leite condensado", "1 caixinha de creme de leite", "1/2 xícara de suco de limão"],
    modoPreparo: ["Bata o leite condensado e creme de leite por 1 min.", "Adicione o suco de limão aos poucos até engrossar.", "Leve à geladeira por 2 horas."],
    autor: "sistema",
    privada: false
  },
  {
    id: 3,
    nome: "Risoto de Cogumelos Shimeji",
    imagem: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80",
    categoria: "Prato Principal",
    tempoPreparo: "45 min",
    nivelDificuldade: "Médio",
    resumoBeneficio: "Prato sofisticado com textura aveludada e sabor marcante.",
    alertaComplexidade: "Adicione o caldo quente aos poucos e mexe continuamente para soltar o amido.",
    ingredientes: ["200g de arroz arbóreo", "200g de cogumelos shimeji", "1 litro de caldo de legumes", "1/2 xícara de vinho branco"],
    modoPreparo: ["Salteie os cogumelos na manteiga.", "Refogue o arroz e adicione o vinho.", "Vá adicionando o caldo quente aos poucos mexendo sempre."],
    autor: "sistema",
    privada: false
  },
  {
    id: 4,
    nome: "Guacamole Tradicional Mexicana",
    imagem: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    categoria: "Entrada",
    tempoPreparo: "15 min",
    nivelDificuldade: "Fácil",
    resumoBeneficio: "Entrada leve, altamente nutritiva e repleta de gorduras boas.",
    alertaComplexidade: "O abacate deve estar maduro. Consuma logo após o preparo para não oxidar.",
    ingredientes: ["2 abacates maduros", "1 tomate picado", "1/2 cebola roxa picada", "Suco de 1 limão"],
    modoPreparo: ["Amasse os abacates com garfo.", "Adicione tomate, cebola e coentro.", "Regue com limão, azeite e sal."],
    autor: "sistema",
    privada: false
  },
  {
    id: 5,
    nome: "Panqueca Americana Fofinha",
    imagem: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80",
    categoria: "Lanche",
    tempoPreparo: "20 min",
    nivelDificuldade: "Fácil",
    resumoBeneficio: "Opção perfeita e aconchegante para um café da manhã especial.",
    alertaComplexidade: "Não misture a massa em excesso; bolinhas são normais e deixam a panqueca macia.",
    ingredientes: ["1 e 1/2 xícara de farinha de trigo", "1 xícara de leite", "1 ovo", "1 colher (sopa) de fermento"],
    modoPreparo: ["Misture os secos.", "Adicione ovo e leite misturando levemente.", "Doure em frigideira untada."],
    autor: "sistema",
    privada: false
  },
  {
    id: 6,
    nome: "Petit Gâteau de Chocolate",
    imagem: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    categoria: "Sobremesa",
    tempoPreparo: "25 min",
    nivelDificuldade: "Difícil",
    resumoBeneficio: "Sobremesa clássica de restaurante com recheio cremoso irresistível.",
    alertaComplexidade: "O tempo de forno precisa ser exato; se assar demais, vira um bolo comum.",
    ingredientes: ["200g de chocolate meio amargo", "2 colheres de manteiga", "2 ovos e 2 gemas", "2 colheres de farinha"],
    modoPreparo: ["Derreta chocolate com manteiga.", "Bata ovos e açúcar até clarear.", "Misture tudo e asse a 200°C por 8-10 min."],
    autor: "sistema",
    privada: false
  },
  {
    id: 7,
    nome: "Tapioca de Queijo e Presunto",
    imagem: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
    categoria: "Lanche",
    tempoPreparo: "10 min",
    nivelDificuldade: "Fácil",
    resumoBeneficio: "Lanche sem glúten, extremamente rápido e prático.",
    alertaComplexidade: "A frigideira deve estar quente antes de espalhar a goma de tapioca.",
    ingredientes: ["4 colheres de goma de tapioca", "2 fatias de queijo", "2 fatias de presunto"],
    modoPreparo: ["Peneire a goma na frigideira quente.", "Adicione recheio quando a massa unir e dobre ao meio."],
    autor: "sistema",
    privada: false
  },
  {
    id: 8,
    nome: "Sopa Creme de Abóbora",
    imagem: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=600&q=80",
    categoria: "Entrada",
    tempoPreparo: "35 min",
    nivelDificuldade: "Fácil",
    resumoBeneficio: "Confortante, termogênica e perfeita para dias frios.",
    alertaComplexidade: "Cuidado com o gengibre para não se sobrepor ao sabor da abóbora.",
    ingredientes: ["500g de abóbora cabotiá", "1 colher (chá) de gengibre", "1 cebola", "750ml de caldo vegetal"],
    modoPreparo: ["Refogue cebola e gengibre.", "Cozinhe a abóbora no caldo e bata tudo no liquidificador."],
    autor: "sistema",
    privada: false
  },
  {
    id: 9,
    nome: "Lasanha à Bolonhesa",
    imagem: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=600&q=80",
    categoria: "Prato Principal",
    tempoPreparo: "1h 15 min",
    nivelDificuldade: "Médio",
    resumoBeneficio: "Prato farto e reconfortante, ideal para almoços de domingo.",
    alertaComplexidade: "Garanta que o molho fique bem suculento para cozinhar a massa no forno.",
    ingredientes: ["500g de massa de lasanha", "500g de carne moída", "2 molhos de tomate", "300g muçarela"],
    modoPreparo: ["Faça o molho bolonhesa.", "Monte camadas de molho, massa e queijo.", "Asse a 180°C por 35 min."],
    autor: "sistema",
    privada: false
  },
  {
    id: 10,
    nome: "Smoothie de Frutas Vermelhas",
    imagem: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    categoria: "Lanche",
    tempoPreparo: "5 min",
    nivelDificuldade: "Fácil",
    resumoBeneficio: "Bebida antioxidante, gelada e muito rápida.",
    alertaComplexidade: "Utilize frutas congeladas para garantir a consistência cremosa ideal.",
    ingredientes: ["1 xícara de frutas vermelhas congeladas", "1 banana congelada", "200ml de leite"],
    modoPreparo: ["Coloque tudo no liquidificador.", "Bata em alta velocidade e sirva imediatamente."],
    autor: "sistema",
    privada: false
  }
];

/* ==========================================================================
   2. ESTADO GLOBAL DA APLICAÇÃO
   ========================================================================== */
let usuarios = [];
let usuarioLogado = null; // Guardará o objeto do usuário logado
let receitas = [];
let favoritos = [];

/* ==========================================================================
   3. INICIALIZAÇÃO & LOCALSTORAGE
   ========================================================================== */
function inicializarAplicacao() {
  // Carregar Usuários
  const usuariosSalvos = localStorage.getItem("app_receitas_usuarios");
  usuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

  // Carregar Sessão do Usuário
  const sessaoSalva = localStorage.getItem("app_receitas_sessao");
  if (sessaoSalva) {
    usuarioLogado = JSON.parse(sessaoSalva);
  }

  // Carregar Receitas (Unir Padrão + Usuários)
  const receitasSalvas = localStorage.getItem("app_receitas_db");
  if (receitasSalvas) {
    receitas = JSON.parse(receitasSalvas);
  } else {
    receitas = receitasPadrao;
    localStorage.setItem("app_receitas_db", JSON.stringify(receitas));
  }

  // Carregar Favoritos
  const favsSalvos = localStorage.getItem("app_receitas_favoritas");
  favoritos = favsSalvos ? JSON.parse(favsSalvos) : [];

  // Configurar Ouvintes de Eventos
  configurarEventos();
  
  // Renderizar Interface Inicial
  atualizarInterfaceUsuario();
  aplicarFiltros();
}

/* ==========================================================================
   4. SISTEMA DE AUTENTICAÇÃO
   ========================================================================== */
function cadastrarUsuario(nome, username, senha, confirmarSenha) {
  if (senha !== confirmarSenha) {
    exibirToast("As senhas não conferem!", "error");
    return;
  }

  const jaExiste = usuarios.some(u => u.username.toLowerCase() === username.toLowerCase());
  if (jaExiste) {
    exibirToast("Nome de usuário já está em uso!", "error");
    return;
  }

  const novoUsuario = { nome, username, senha };
  usuarios.push(novoUsuario);
  localStorage.setItem("app_receitas_usuarios", JSON.stringify(usuarios));

  // Logar automaticamente após o cadastro
  fazerLogin(username, senha);
  fecharModal("authModal");
  exibirToast("Conta criada com sucesso!", "success");
}

function fazerLogin(username, senha) {
  const user = usuarios.find(u => u.username.toLowerCase() === username.toLowerCase() && u.senha === senha);
  
  if (!user) {
    exibirToast("Usuário ou senha incorretos!", "error");
    return;
  }

  usuarioLogado = { nome: user.nome, username: user.username };
  localStorage.setItem("app_receitas_sessao", JSON.stringify(usuarioLogado));

  fecharModal("authModal");
  atualizarInterfaceUsuario();
  aplicarFiltros();
  exibirToast(`Bem-vindo(a), ${user.nome}!`, "success");
}

function fazerLogout() {
  usuarioLogado = null;
  localStorage.removeItem("app_receitas_sessao");
  atualizarInterfaceUsuario();
  aplicarFiltros();
  exibirToast("Você saiu da conta.", "success");
}

function atualizarInterfaceUsuario() {
  const container = document.getElementById("userActionArea");
  container.innerHTML = "";

  if (usuarioLogado) {
    container.innerHTML = `
      <div class="user-badge">
        <span class="user-name">👤 ${usuarioLogado.nome}</span>
        <button class="btn-primary" onclick="abrirModalNovaReceita()">+ Nova Receita</button>
        <button class="btn-danger-outline" onclick="fazerLogout()">Sair</button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <button class="btn-primary" onclick="abrirModal('authModal')">🔑 Entrar / Cadastrar</button>
    `;
  }
}

/* ==========================================================================
   5. GESTÃO DE RECEITAS (CRIAR, EDITAR, EXCLUIR, PRIVACIDADE)
   ========================================================================== */
function salvarReceita(e) {
  e.preventDefault();

  if (!usuarioLogado) {
    exibirToast("Você precisa estar logado para salvar receitas.", "error");
    return;
  }

  const idEdit = document.getElementById("recipeEditId").value;
  const nome = document.getElementById("recNome").value.trim();
  const imagem = document.getElementById("recImagem").value.trim();
  const categoria = document.getElementById("recCategoria").value;
  const nivelDificuldade = document.getElementById("recDificuldade").value;
  const tempoPreparo = document.getElementById("recTempo").value.trim();
  const resumoBeneficio = document.getElementById("recBeneficio").value.trim();
  const alertaComplexidade = document.getElementById("recAlerta").value.trim();
  const privada = document.getElementById("recPrivada").checked;

  // Obter Ingredientes Dinâmicos
  const ingInputs = document.querySelectorAll("#dynamicIngredientsList input");
  const ingredientes = Array.from(ingInputs).map(inp => inp.value.trim()).filter(v => v !== "");

  // Obter Passos Dinâmicos
  const stepInputs = document.querySelectorAll("#dynamicStepsList input");
  const modoPreparo = Array.from(stepInputs).map(inp => inp.value.trim()).filter(v => v !== "");

  if (ingredientes.length === 0 || modoPreparo.length === 0) {
    exibirToast("Adicione pelo menos um ingrediente e um passo de preparo.", "error");
    return;
  }

  if (idEdit) {
    // Modo Edição
    const index = receitas.findIndex(r => r.id === parseInt(idEdit));
    if (index !== -1) {
      receitas[index] = {
        ...receitas[index],
        nome, imagem, categoria, nivelDificuldade, tempoPreparo,
        resumoBeneficio, alertaComplexidade, ingredientes, modoPreparo, privada
      };
      exibirToast("Receita atualizada com sucesso!", "success");
    }
  } else {
    // Modo Criação
    const novaReceita = {
      id: Date.now(),
      nome, imagem, categoria, nivelDificuldade, tempoPreparo,
      resumoBeneficio, alertaComplexidade, ingredientes, modoPreparo, privada,
      autor: usuarioLogado.username
    };
    receitas.unshift(novaReceita);
    exibirToast("Nova receita salva com sucesso!", "success");
  }

  localStorage.setItem("app_receitas_db", JSON.stringify(receitas));
  fecharModal("recipeModal");
  aplicarFiltros();
}

function excluirReceita(id) {
  const receita = receitas.find(r => r.id === id);
  if (!receita) return;

  if (!usuarioLogado || receita.autor !== usuarioLogado.username) {
    exibirToast("Você só pode excluir suas próprias receitas.", "error");
    return;
  }

  if (confirm(`Tem certeza que deseja excluir a receita "${receita.nome}"?`)) {
    receitas = receitas.filter(r => r.id !== id);
    localStorage.setItem("app_receitas_db", JSON.stringify(receitas));
    aplicarFiltros();
    exibirToast("Receita excluída.", "success");
  }
}

function editarReceita(id) {
  const receita = receitas.find(r => r.id === id);
  if (!receita) return;

  document.getElementById("recipeModalTitle").textContent = "Editar Receita";
  document.getElementById("recipeEditId").value = receita.id;
  document.getElementById("recNome").value = receita.nome;
  document.getElementById("recImagem").value = receita.imagem;
  document.getElementById("recCategoria").value = receita.categoria;
  document.getElementById("recDificuldade").value = receita.nivelDificuldade;
  document.getElementById("recTempo").value = receita.tempoPreparo;
  document.getElementById("recBeneficio").value = receita.resumoBeneficio;
  document.getElementById("recAlerta").value = receita.alertaComplexidade;
  document.getElementById("recPrivada").checked = receita.privada;

  // Preencher dinamicos
  const ingList = document.getElementById("dynamicIngredientsList");
  ingList.innerHTML = "";
  receita.ingredientes.forEach(ing => adicionarCampoIngrediente(ing));

  const stepList = document.getElementById("dynamicStepsList");
  stepList.innerHTML = "";
  receita.modoPreparo.forEach(passo => adicionarCampoPasso(passo));

  abrirModal("recipeModal");
}

/* ==========================================================================
   6. PORTABILIDADE (EXPORTAR E IMPORTAR VIA BASE64)
   ========================================================================== */
function exportarReceitaCodigo(id) {
  const receita = receitas.find(r => r.id === id);
  if (!receita) return;

  // Criar cópia para exportar sem o ID original
  const receitaExport = { ...receita, id: undefined, autor: undefined, privada: false };
  const jsonStr = JSON.stringify(receitaExport);
  const base64Code = btoa(unescape(encodeURIComponent(jsonStr)));

  navigator.clipboard.writeText(base64Code).then(() => {
    exibirToast("Código de compartilhamento copiado para a área de transferência!", "success");
  }).catch(() => {
    prompt("Copie seu código de compartilhamento:", base64Code);
  });
}

function importarReceitaPorCodigo(e) {
  e.preventDefault();
  const code = document.getElementById("importCodeInput").value.trim();

  if (!code) return;

  try {
    const jsonStr = decodeURIComponent(escape(atob(code)));
    const receitaObj = JSON.parse(jsonStr);

    if (!receitaObj.nome || !receitaObj.ingredientes || !receitaObj.modoPreparo) {
      throw new Error("Formato inválido");
    }

    // Criar como nova receita importada
    const novaReceita = {
      ...receitaObj,
      id: Date.now(),
      autor: usuarioLogado ? usuarioLogado.username : "importada",
      privada: false
    };

    receitas.unshift(novaReceita);
    localStorage.setItem("app_receitas_db", JSON.stringify(receitas));

    fecharModal("importModal");
    document.getElementById("importCodeInput").value = "";
    aplicarFiltros();
    exibirToast(`Receita "${novaReceita.nome}" importada com sucesso!`, "success");

  } catch (err) {
    exibirToast("Código de compartilhamento inválido ou corrompido.", "error");
  }
}

/* ==========================================================================
   7. REGRAS DE EXIBIÇÃO E RENDERIZAÇÃO
   ========================================================================== */
function aplicarFiltros() {
  const termo = document.getElementById("searchInput").value.toLowerCase().trim();
  const cat = document.getElementById("categoryFilter").value;
  const dif = document.getElementById("difficultyFilter").value;

  // Regra de Privacidade Inteligente
  const receitasVisiveis = receitas.filter(r => {
    // 1. Filtragem de Privacidade
    if (r.privada) {
      if (!usuarioLogado || r.autor !== usuarioLogado.username) {
        return false; // Esconde se for privada e o usuário não for o dono
      }
    }

    // 2. Filtro por Busca de Texto
    const bateuNome = r.nome.toLowerCase().includes(termo);
    const bateuIngrediente = r.ingredientes.some(i => i.toLowerCase().includes(termo));
    const bateuTexto = bateuNome || bateuIngrediente;

    // 3. Filtro de Categoria e Dificuldade
    const bateuCat = (cat === "todas" || r.categoria === cat);
    const bateuDif = (dif === "todas" || r.nivelDificuldade === dif);

    return bateuTexto && bateuCat && bateuDif;
  });

  renderizarPilulasNav(receitasVisiveis);
  renderizarGrid(receitasVisiveis);
}

function renderizarGrid(lista) {
  const grid = document.getElementById("recipesGrid");
  const empty = document.getElementById("emptyState");
  grid.innerHTML = "";

  if (lista.length === 0) {
    empty.classList.remove("hidden");
    return;
  } else {
    empty.classList.add("hidden");
  }

  lista.forEach(receita => {
    const isFav = favoritos.includes(receita.id);
    const isOwner = usuarioLogado && receita.autor === usuarioLogado.username;

    const card = document.createElement("article");
    card.className = "recipe-card";
    card.id = `recipe-${receita.id}`;

    const ingredientesHTML = receita.ingredientes.map(i => `<li>${i}</li>`).join("");
    const passosHTML = receita.modoPreparo.map(p => `<li>${p}</li>`).join("");

    card.innerHTML = `
      <div>
        <div class="card-image-container">
          <img src="${receita.imagem}" alt="${receita.nome}" class="card-image" onerror="this.src='https://via.placeholder.com/600x400?text=Sem+Imagem'">
        </div>

        <div class="badge-group">
          <span class="badge badge-cat">${receita.categoria}</span>
          <span class="badge badge-${receita.nivelDificuldade}">${receita.nivelDificuldade}</span>
          ${receita.privada ? `<span class="badge badge-private">🔒 Privada</span>` : ''}
        </div>

        <h2 class="recipe-title">
          ${receita.nome}
          <button class="btn-favorite" onclick="alternarFavorito(${receita.id})">
            ${isFav ? "❤️" : "🤍"}
          </button>
        </h2>
        <span class="prep-time">⏱️ ${receita.tempoPreparo}</span>

        <div class="info-block">
          <p><strong>Por que fazer:</strong> ${receita.resumoBeneficio}</p>
          <div class="alert-box">
            <strong>⚠️ Atenção:</strong> ${receita.alertaComplexidade}
          </div>
        </div>

        <!-- Ações do Proprietário/Exportação -->
        <div class="card-owner-actions">
          <button class="btn-card-action" onclick="exportarReceitaCodigo(${receita.id})" title="Copiar Código de Compartilhamento">
            🔗 Compartilhar
          </button>

          ${isOwner ? `
            <button class="btn-card-action" onclick="editarReceita(${receita.id})">✏️ Editar</button>
            <button class="btn-card-action danger" onclick="excluirReceita(${receita.id})">🗑️ Excluir</button>
          ` : ''}
        </div>

        <div class="details-container">
          <h3 class="section-title">🛒 Ingredientes</h3>
          <ul class="ingredients-list">${ingredientesHTML}</ul>

          <h3 class="section-title">👩‍🍳 Modo de Preparo</h3>
          <ol class="steps-list">${passosHTML}</ol>
        </div>
      </div>

      <button class="btn-toggle" onclick="alternarExpansaoCard(${receita.id})">
        Ver Receita Completa
      </button>
    `;

    grid.appendChild(card);
  });
}

function renderizarPilulasNav(lista) {
  const container = document.getElementById("quickPills");
  container.innerHTML = "";
  lista.forEach(r => {
    const pill = document.createElement("button");
    pill.className = "pill-btn";
    pill.textContent = r.nome;
    pill.onclick = () => {
      const el = document.getElementById(`recipe-${r.id}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("highlight");
        setTimeout(() => el.classList.remove("highlight"), 2000);
      }
    };
    container.appendChild(pill);
  });
}

/* ==========================================================================
   8. FUNÇÕES AUXILIARES & DINÂMICAS
   ========================================================================== */
function alternarExpansaoCard(id) {
  const card = document.getElementById(`recipe-${id}`);
  const btn = card.querySelector(".btn-toggle");
  card.classList.toggle("expanded");
  btn.textContent = card.classList.contains("expanded") ? "Ocultar Receita" : "Ver Receita Completa";
}

function alternarFavorito(id) {
  const idx = favoritos.indexOf(id);
  if (idx === -1) favoritos.push(id);
  else favoritos.splice(idx, 1);

  localStorage.setItem("app_receitas_favoritas", JSON.stringify(favoritos));
  aplicarFiltros();
}

function adicionarCampoIngrediente(valor = "") {
  const list = document.getElementById("dynamicIngredientsList");
  const div = document.createElement("div");
  div.className = "dynamic-item";
  div.innerHTML = `
    <input type="text" placeholder="Ex: 1 xícara de açúcar" value="${valor}" required>
    <button type="button" class="btn-remove-item" onclick="this.parentElement.remove()">&times;</button>
  `;
  list.appendChild(div);
}

function adicionarCampoPasso(valor = "") {
  const list = document.getElementById("dynamicStepsList");
  const div = document.createElement("div");
  div.className = "dynamic-item";
  div.innerHTML = `
    <input type="text" placeholder="Ex: Misture a farinha com o fermento" value="${valor}" required>
    <button type="button" class="btn-remove-item" onclick="this.parentElement.remove()">&times;</button>
  `;
  list.appendChild(div);
}

function abrirModalNovaReceita() {
  document.getElementById("recipeModalTitle").textContent = "Nova Receita";
  document.getElementById("recipeEditId").value = "";
  document.getElementById("formRecipe").reset();
  
  document.getElementById("dynamicIngredientsList").innerHTML = "";
  document.getElementById("dynamicStepsList").innerHTML = "";
  adicionarCampoIngrediente();
  adicionarCampoPasso();

  abrirModal("recipeModal");
}

function abrirModal(id) { document.getElementById(id).classList.remove("hidden"); }
function fecharModal(id) { document.getElementById(id).classList.add("hidden"); }

function alternarAbaAuth(aba) {
  const formLogin = document.getElementById("formLogin");
  const formReg = document.getElementById("formRegister");
  const tabL = document.getElementById("tabLoginBtn");
  const tabR = document.getElementById("tabRegisterBtn");

  if (aba === 'login') {
    formLogin.classList.remove("hidden");
    formReg.classList.add("hidden");
    tabL.classList.add("active");
    tabR.classList.remove("active");
  } else {
    formLogin.classList.add("hidden");
    formReg.classList.remove("hidden");
    tabL.classList.remove("active");
    tabR.classList.add("active");
  }
}

function exibirToast(msg, tipo = "info") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${tipo}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

function configurarEventos() {
  document.getElementById("searchInput").addEventListener("input", aplicarFiltros);
  document.getElementById("categoryFilter").addEventListener("change", aplicarFiltros);
  document.getElementById("difficultyFilter").addEventListener("change", aplicarFiltros);

  document.getElementById("formLogin").addEventListener("submit", (e) => {
    e.preventDefault();
    fazerLogin(
      document.getElementById("loginUsername").value.trim(),
      document.getElementById("loginPassword").value.trim()
    );
  });

  document.getElementById("formRegister").addEventListener("submit", (e) => {
    e.preventDefault();
    cadastrarUsuario(
      document.getElementById("regFullName").value.trim(),
      document.getElementById("regUsername").value.trim(),
      document.getElementById("regPassword").value.trim(),
      document.getElementById("regConfirmPassword").value.trim()
    );
  });

  document.getElementById("formRecipe").addEventListener("submit", salvarReceita);
  document.getElementById("btnImportModal").addEventListener("click", () => abrirModal("importModal"));
  document.getElementById("formImport").addEventListener("submit", importarReceitaPorCodigo);

  document.getElementById("resetFavoritesBtn").addEventListener("click", () => {
    favoritos = [];
    localStorage.removeItem("app_receitas_favoritas");
    aplicarFiltros();
    exibirToast("Lista de favoritos limpa.", "info");
  });
}

document.addEventListener("DOMContentLoaded", inicializarAplicacao);