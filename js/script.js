document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
  
    window.addEventListener("load", () => {
      // Aguarda o carregamento completo da página
      setTimeout(() => {
        // Move cada faixa para cima com um pequeno atraso
        document.querySelectorAll(".stripe").forEach((stripe, index) => {
          stripe.style.transform = "translateY(-100%)";
          stripe.style.transitionDelay = `${index * 0.2}s`;
        });
  
        // Aguarda o término da animação para esconder o preloader
        const lastStripe = document.querySelector(".stripe5");
        lastStripe.addEventListener(
          "transitionend",
          () => {
            preloader.style.display = "none"; // Remove o preloader
            document.body.style.overflow = "auto"; // Reabilita o scroll quando o preloader desaparece
            content.classList.add("visible"); // Torna o conteúdo visível
          },
          { once: true }
        ); // Executa apenas uma vez
      }, 500); // Ajuste o tempo conforme necessário
    });
  });

