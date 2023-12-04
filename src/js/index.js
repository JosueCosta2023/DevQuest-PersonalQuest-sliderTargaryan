
    const imagensSlide = document.querySelectorAll(".slide");
    const setaVoltar = document.getElementById("voltar");
    const setaAvancar = document.getElementById("avancar");

    let slidePosicao = 0;

    setaAvancar.addEventListener("click", function(){

        if(slidePosicao === imagensSlide.length -1){
            return
        }

        esconderSlide();

        slidePosicao++;

        mostrarSlide();

        mostrarOuEsconderSetas();

    })

    setaVoltar.addEventListener("click", function(){

        if(slidePosicao === 0){
            return
        }

        esconderSlide();

        slidePosicao--;

        mostrarSlide();

        mostrarOuEsconderSetas();

    })

    function esconderSlide() {
        const slideAtual = document.querySelector(".mostrar");
        slideAtual.classList.remove("mostrar")

    }

    function mostrarSlide(){

        imagensSlide[slidePosicao].classList.add("mostrar")

    }

    function mostrarOuEsconderSetas(){

        const ehUltima = imagensSlide[slidePosicao] !== 0 &&
                            slidePosicao === imagensSlide.length -1;

        if (ehUltima) {
            
            setaAvancar.classList.add("opacidade")

        } else {
            setaAvancar.classList.remove("opacidade")
        }


        const ehPrimeira = slidePosicao === 0;

        if (ehPrimeira) {
            setaVoltar.classList.add("opacidade")

        } else {
            setaVoltar.classList.remove("opacidade")
        }
 
    }
