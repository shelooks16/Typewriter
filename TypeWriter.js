class TypeWriter {
  constructor({ elementClass, text, staticText = '', pause = 1500, speed = 1000, cursorStyle = {} }) {
    if (!text || !elementClass) {
      return console.error('Please provide proper parameters');
    }
    this.speed = speed;
    this.textArray = text;
    this.el = document.querySelector(`.${elementClass}`);
    this.loopsCounter = 0;
    this.pauseTime = parseInt(pause, 10);
    this.currentLetters = '';
    this.staticText = staticText;
    this.isDeleting = false;
    this.__start();
    this.__injectCss(cursorStyle);
  }

  __start() {
    const i = this.loopsCounter % this.textArray.length;
    const word = this.textArray[i];
    let typeSpeed = this.speed / word.length;
    typeSpeed = this.isDeleting ? typeSpeed /= 2 : typeSpeed; // make it faster

    this.currentLetters = this.__getCurrentLetters(word);
    this.el.innerHTML = `<span class="${this.el.className}-text">${this.staticText} ${this.currentLetters}</span>`;

    if (!this.isDeleting && this.currentLetters === word) {
      typeSpeed = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentLetters === '') {
      this.isDeleting = false;
      this.loopsCounter++;
      typeSpeed = 500;
    }

    setTimeout(() => {
      this.__start();
    }, typeSpeed);

  }
  __getCurrentLetters(word) {
    if (this.isDeleting) {
      return word.substring(0, this.currentLetters.length - 1);
    }
    return word.substring(0, this.currentLetters.length + 1);
  }
  __injectCss(cursorStyle) {
    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML =
      `.${this.el.className} > .${this.el.className}-text { border-right: ${cursorStyle.width || "2px"} solid ${cursorStyle.color || "#000"}}`;
    document.body.appendChild(css);
  }
}