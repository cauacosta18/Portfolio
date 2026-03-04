class Slide {
    constructor(nome, slides, current_slide) {
        this.nome = nome,
        this.slides = slides
        this.current_slide = current_slide;
    }

    getNome() {
        return this.nome;
    }

    getSlides() {
        return this.slides;
    }

    getCurrentSlide() {
        return this.current_slide;
    }

    setCurrentSlide(newCurrent) {
        this.current_slide = newCurrent;
    }

    moveForward () {
        this.current_slide++;
    }

    goBack () {
        this.current_slide--;
    }
}

export default Slide;