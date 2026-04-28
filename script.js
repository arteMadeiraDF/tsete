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
    { src: "quadro1.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro2.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro3.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro4.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro5.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro6.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro7.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro8.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro9.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro10.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
    { src: "quadro11.jpg", titulo: "Quadro 1", ano: "2023", autor: "DF", numero: "01", comp: "50cm", larg: "40cm", esp: "2cm", desc: "Descrição do quadro 1." },
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
