const Hero = {
  mouseArea: document.querySelector('.js-hero-mousemove'),
  image: document.querySelector('.js-hero-image'),
  text: document.querySelectorAll('.js-hero-text *'),

  init() {
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.mouseArea.addEventListener('mousemove', this.handleMouseMove);
  },

  handleMouseMove(e) {
    const imgRatio = 100;
    const textRatio = 80;

    const imgX = e.x / imgRatio;
    const imgY = e.y / imgRatio;

    const textX = e.x / textRatio;
    const textY = e.y / textRatio;

    this.image.style.transform = `translate(${imgX}px, ${imgY}px)`;
    [...this.text].forEach((el) => {
      el.style.transform = `translate(${textX}px, ${textY}px)`;
    });
  }
};

Hero.init();
