class TypeWriter {
  constructor(elementClass, { ...props }) {
    this.el = document.querySelector(`.${elementClass}`);
    this.text = (props && props.text) || ['Default', 'Text'];
    this.speed = (props && parseInt(props.speed, 10)) || 1000;
    this.pause = (props && props.pause) || 1500;
    this.indent = this.el.textContent
      ? (props && props.indent) || '6px'
      : '0px';
    this.cursorStyle = (props && props.cursorStyle) || {
      color: '#000',
      width: '2px'
    };

    this.wordsTyped = 0;
    this.currentLetters = '';
    this.isDeleting = false;
    this.isTyping = false;
    this.timer = 0;

    this.typingEl = this.el.appendChild(document.createElement('span'));
  }

  start() {
    if (this.isTyping) {
      return this;
    }
    this.isTyping = true;
    this._typeCurrentLetters();
    return this;
  }

  stop(ms) {
    clearTimeout(this.timer);
    this.isTyping = false;
    if (ms) {
      setTimeout(() => {
        this._typeCurrentLetters();
      }, ms);
    }
    return this;
  }

  applyChanges(changes) {
    Object.entries(changes).forEach(([prop, val]) => {
      const hasProperty = Object.prototype.hasOwnProperty.call(this, prop);
      if (!hasProperty) {
        console.error(prop, 'is invalid thus was not applied');
      }
      if (prop === 'cursorStyle') {
        this[prop] = { ...this[prop], ...val };
      } else if (prop === 'speed' || prop === 'pause') {
        this[prop] = parseInt(val, 10);
      } else {
        this[prop] = val;
      }
    });
    return this;
  }

  _typeCurrentLetters() {
    const i = this.wordsTyped % this.text.length;
    const currentWord = this.text[i];
    let typeSpeed = this.speed / currentWord.length;
    typeSpeed = this.isDeleting ? (typeSpeed /= 2) : typeSpeed;

    this.currentLetters = this._getCurrentLetters(currentWord);

    this.typingEl.style.borderRight = `${this.cursorStyle.width ||
      '2px'} solid ${this.cursorStyle.color || '#000'}`;
    this.typingEl.style.marginLeft = this.indent;
    this.typingEl.textContent = this.currentLetters;

    if (!this.isDeleting && this.currentLetters === currentWord) {
      typeSpeed = this.pause;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentLetters === '') {
      this.isDeleting = false;
      this.wordsTyped++;
      typeSpeed = 500;
    }

    this.timer = setTimeout(() => {
      this._typeCurrentLetters();
    }, typeSpeed);
  }

  _getCurrentLetters(currentWord) {
    if (this.isDeleting) {
      return currentWord.substring(0, this.currentLetters.length - 1);
    }
    return currentWord.substring(0, this.currentLetters.length + 1);
  }
}

export default TypeWriter;
