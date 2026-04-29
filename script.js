document.addEventListener("DOMContentLoaded", () => {
  const btnTrabalhos = document.getElementById("btnTrabalhos");
  const subBotoes = document.getElementById("subBotoes");
  const sectionCapa = document.getElementById("capa");
  const sectionSite = document.getElementById("site");
  const btnVoltarCapa = document.getElementById("voltarCapa");
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  // Mostrar sub-botões ao clicar em Trabalhos
  btnTrabalhos.addEventListener("click", () => {
    subBotoes.classList.toggle("hidden");
  });

  // Entrar no site e mostrar a aba correspondente
  document.querySelectorAll(".btn-sub").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      sectionCapa.classList.add("hidden");
      sectionSite.classList.remove("hidden");
      showTab(target);
    });
  });

  // Voltar para a capa
  btnVoltarCapa.addEventListener("click", () => {
    sectionSite.classList.add("hidden");
    sectionCapa.classList.remove("hidden");
    subBotoes.classList.add("hidden");
  });

  // Alternar entre abas
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");
      showTab(target);
    });
  });

  function showTab(tabId) {
    tabs.forEach(t => {
      t.classList.toggle("active", t.getAttribute("data-tab") === tabId);
    });
    tabContents.forEach(content => {
      content.classList.toggle("active", content.id === tabId);
    });
  }

  // Exemplo de dados para a galeria (Pode ser expandido)
  const quadrosData = [
    { src: "quadro1.jpg", titulo: "Lar Sobre Rodas", ano: "2019", autor: "Diogo Fernandes", numero: "01", comp: "17cm", larg: "13cm", esp: "2cm", desc: "Placa em madeira com gravação manual, representando de forma esquemática uma habitação com cobertura inclinada e chaminé, acompanhada por um veículo ligeiro de transporte de mercadorias. O conjunto é enquadrado por elementos decorativos laterais de traço simples. Trata-se do primeiro exemplar produzido, evidenciando um estilo inicial, com linhas rudimentares e caráter artesanal."},
    { src: "quadro2.jpg", titulo: "A Flor que Ganha Vida", ano: "2019", autor: "Diogo Fernandes", numero: "02", comp: "15.5cm", larg: "13cm", esp: "1cm", desc: "Placa em madeira com gravação manual, representando de forma esquemática uma flor com características de um ser humano. Trata-se do segundo exemplar produzido, evidenciando um estilo inicial, com linhas rudimentares e caráter artesanal." },
    { src: "quadro3.jpg", titulo: "Sonhos ao Vento", ano: "2019", autor: "Diogo Fernandes", numero: "03", comp: "15.5cm", larg: "13cm", esp: "1cm", desc: "Placa em madeira com gravação manual, representando de forma esquemática um menino a agarrar num balão que representa o seu sonho. Trata-se do terceiro exemplar produzido, evidenciando um estilo inicial, com linhas um pouco mais preciosas e caráter artesanal." },
    { src: "quadro4.jpg", titulo: "Missão em Altura", ano: "2020", autor: "Diogo Fernandes", numero: "04", comp: "13cm", larg: "19.5cm", esp: "1cm", desc: "Placa em madeira com gravação manual de um camião de trabalhos em altura, com representação técnica dos principais elementos do equipamento. Trata-se do quarto projeto produzido, evidenciando um estilo inicial, com linhas um pouco mais preciosas e caráter artesanal." },
    { src: "quadro5.jpg", titulo: "Vila Nova do Ceira Terra Fixe", ano: "2020", autor: "Diogo Fernandes", numero: "05", comp: "13cm", larg: "19.5cm", esp: "1cm", desc: "Placa em madeira com gravação manual alusiva a Vila Nova do Ceira, com composição textual e simbólica associada à localidade. Estilo simples e direto. Trata-se do quinto projeto produzido, evidenciando um estilo inicial, com linhas um pouco mais preciosas e caráter artesanal." },
    { src: "quadro6.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro7.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro8.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro9.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro10.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadr11.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro12.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro13.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro14.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro15.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro16.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro17.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro18.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro19.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro20.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro21.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro22.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro23.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro24.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro25.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro26.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro27.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro28.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro29.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro30.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    // Adicione mais quadros aqui
  ];

  const imansData = [
    { src: "imane1.jpeg", titulo: "Íman 1", ano: "2023", autor: "DF", numero: "01", comp: "5cm", larg: "5cm", esp: "0.5cm", desc: "Descrição do íman 1." },
    { src: "imane 2.jpeg", titulo: "Íman 1", ano: "2023", autor: "DF", numero: "01", comp: "5cm", larg: "5cm", esp: "0.5cm", desc: "Descrição do íman 1." },
    { src: "iman1.jpg", titulo: "Íman 1", ano: "2023", autor: "DF", numero: "01", comp: "5cm", larg: "5cm", esp: "0.5cm", desc: "Descrição do íman 1." },
    // Adicione mais ímanes aqui
  ];

  function renderGaleria(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    data.forEach(item => {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.titulo;
      img.addEventListener("click", () => openModal(item));
      container.appendChild(img);
    });
  }

  renderGaleria(quadrosData, "listaQuadros");
  renderGaleria(imansData, "listaImans");

  // Modal
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const modalTitulo = document.getElementById("modalTitulo");
  const modalAno = document.getElementById("modalAno");
  const modalAutor = document.getElementById("modalAutor");
  const modalNumero = document.getElementById("modalNumero");
  const modalComp = document.getElementById("modalComp");
  const modalLarg = document.getElementById("modalLarg");
  const modalEsp = document.getElementById("modalEsp");
  const modalDesc = document.getElementById("modalDesc");
  const closeModal = document.querySelector(".close");

  function openModal(item) {
    modalImg.src = item.src;
    modalTitulo.textContent = item.titulo;
    modalAno.textContent = item.ano;
    modalAutor.textContent = item.autor;
    modalNumero.textContent = item.numero;
    modalComp.textContent = item.comp;
    modalLarg.textContent = item.larg;
    modalEsp.textContent = item.esp;
    modalDesc.textContent = item.desc;
    modal.classList.remove("hidden");
  }

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
});
