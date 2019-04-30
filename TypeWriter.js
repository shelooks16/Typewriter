(function() {
  let currentLetters;
  let isDeleting;
  let loopsCounter;
  let el;
  class TypeWriter {
    constructor({
      elementClass,
      text,
      staticText = "",
      pause = 1500,
      speed = 1000,
      cursorStyle = { color: "#000", width: "2px" }
    }) {
      if (!text || !elementClass) {
        return console.error("Please provide proper parameters");
      }
      this.staticText = staticText;
      this.text = text;
      this.speed = speed;
      this.pause = parseInt(pause, 10);
      this.cursorStyle = cursorStyle;
      el = document.querySelector(`.${elementClass}`);
      loopsCounter = 0;
      currentLetters = "";
      isDeleting = false;
      this.__start();
      this.injectStyles();
    }

    __start() {
      const i = loopsCounter % this.text.length;
      const word = this.text[i];
      let typeSpeed = this.speed / word.length;
      typeSpeed = isDeleting ? (typeSpeed /= 2) : typeSpeed; // make it faster

      currentLetters = this.__getCurrentLetters(word);
      el.innerHTML = `<span class="${el.className}-text">${
        this.staticText
      } ${currentLetters}</span>`;

      if (!isDeleting && currentLetters === word) {
        typeSpeed = this.pause;
        isDeleting = true;
      } else if (isDeleting && currentLetters === "") {
        isDeleting = false;
        loopsCounter++;
        typeSpeed = 500;
      }

      setTimeout(() => {
        this.__start();
      }, typeSpeed);
    }
    __getCurrentLetters(word) {
      if (isDeleting) {
        return word.substring(0, currentLetters.length - 1);
      }
      return word.substring(0, currentLetters.length + 1);
    }
    injectStyles() {
      const css = document.createElement("style");
      const cssRule = `.${el.className} > .${
        el.className
      }-text { border-right: ${this.cursorStyle.width || "2px"} solid ${this
        .cursorStyle.color || "#000"}}`;
      css.appendChild(document.createTextNode(cssRule));
      document.getElementsByTagName("head")[0].appendChild(css);
    }
  }
  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = TypeWriter;
  } else {
    if (typeof define === "function" && define.amd) {
      define([], function() {
        return TypeWriter;
      });
    } else {
      window["TypeWriter"] = TypeWriter;
    }
  }
})();
