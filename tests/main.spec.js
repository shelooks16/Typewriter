import TypeWriter from '../build/typewriter.js';

const defaults = {
  speed: 1000,
  pause: 1500,
  text: ['Default', 'Text'],
  indent: '0px',
  indentWithText: '6px',
  cursorStyle: {
    color: '#000',
    width: '2px'
  }
};

let typeWriterInstance;
let typeWriterNode;

beforeEach(() => {
  document.body.innerHTML = '<div class="typewriter"></div>';
  typeWriterInstance = new TypeWriter('typewriter');
  typeWriterNode = document.querySelector('.typewriter');
});

it('should mount <span> as a child element', () => {
  expect(typeWriterNode.children.length).toEqual(1);
  expect(typeWriterNode.childNodes[0].tagName.toLowerCase()).toEqual('span');
});

it('should apply correct default values', () => {
  expect(typeWriterInstance.speed).toEqual(defaults.speed);
  expect(typeWriterInstance.pause).toEqual(defaults.pause);
  expect(typeWriterInstance.text).toEqual(defaults.text);
  expect(typeWriterInstance.indent).toEqual(defaults.indent);
  expect(typeWriterInstance.cursorStyle).toMatchObject(defaults.cursorStyle);
});

it('should correctly apply changes after applyChanges()', () => {
  const changes = {
    speed: 5600,
    pause: 2200,
    indent: '10px',
    cursorStyle: {
      width: '10px'
    }
  };

  typeWriterInstance.start();
  typeWriterInstance.applyChanges(changes);

  expect(typeWriterInstance.cursorStyle).toMatchObject({
    ...changes.cursorStyle,
    color: '#000'
  });
  expect(typeWriterInstance.indent).toEqual(changes.indent);
  expect(typeWriterInstance.pause).toEqual(changes.pause);
  expect(typeWriterInstance.speed).toEqual(changes.speed);
});

it('should type word by the amount of time specified', done => {
  typeWriterInstance.applyChanges({
    speed: 600
  });
  typeWriterInstance.start();

  setTimeout(() => {
    expect(typeWriterNode.childNodes[0].textContent).toEqual(defaults.text[0]);
    done();
  }, 600);
});

it('should NOT apply styles when start() was not called', () => {
  expect(typeWriterNode.childNodes[0].style.borderRight).toEqual('');
  expect(typeWriterNode.childNodes[0].style.marginLeft).toEqual('');
});

it('should only apply styles after start() was called', () => {
  typeWriterInstance.start();
  expect(typeWriterNode.childNodes[0].style.borderRight).toEqual(
    '2px solid #000'
  );
  expect(typeWriterNode.childNodes[0].style.marginLeft).toEqual('0px');
});

it('should stop typing when stop() was called', done => {
  typeWriterInstance.start();
  const capturedState = typeWriterInstance.currentLetters;
  typeWriterInstance.stop();

  expect.assertions(2);

  expect(typeWriterInstance.isTyping).toBeFalsy();
  setTimeout(() => {
    expect(typeWriterInstance.currentLetters).toEqual(capturedState);
    done();
  }, 500);
});

it('should apply margin if front text was specified', () => {
  document.body.innerHTML = '<div class="anotherTyper">Front text</div>';
  const anotherTyper = new TypeWriter('anotherTyper');
  expect(anotherTyper.indent).toEqual(defaults.indentWithText);
});
