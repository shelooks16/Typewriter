# Lightweight custom typewriter

[![size](https://img.badgesize.io/shelooks16/Typewriter/master/dist/TypeWriter.min.js)](https://img.badgesize.io/shelooks16/Typewriter/master/build/typewriter.min.js)
[![gzip size](https://img.badgesize.io/shelooks16/Typewriter/master/dist/TypeWriter.min.js?compression=gzip)](https://img.badgesize.io/shelooks16/Typewriter/master/build/typewriter.min.js?compression=gzip)
[![gzip size](https://badge.fury.io/js/lightweight-typewriter.svg)](https://www.npmjs.com/package/lightweight-typewriter)

Demo is available [here](https://lightweight-typewriter.surge.sh/)

## Usage

Add it to your html:

```html
<script src="https://unpkg.com/lightweight-typewriter@2.0.6/build/typewriter.min.js"></script>
```

Intall as a dependency:

```js
npm i lightweight-typewriter
yarn add lightweight-typewriter
```

Import:

```js
const TypeWriter = require('lightweight-typewriter');
// or
import TypeWriter from 'lightweight-typewriter';
```

Create an element with the desired class name and create a class instance:

```html
<h1 class="myCoolTypeWriter"></h1>

<script>
  new TypeWriter('myCoolTypeWriter', {
    text: ['I am typable', 'Me too']
  }).start();
  // Don't forget to chain start()
</script>
```

You can dynamically change all the properties via `applyChanges()` method:

```c
const typeWriter = new TypeWriter('myCoolTypeWriter', {
  staticText: 'Before you go',
  text: ['outside', 'inside'],
  speed: 500,
  pause: 1000,
  cursorStyle: {
    width: '3px',
    color: 'dodgerblue'
  }
}).start();

// change speed after 1 second
setTimeout(() => {
  typeWriter.applyChanges({
    speed: 1500
    // ... other props
  })
}, 1000);
```

There are also available `start()` and `stop()` methods:

```c
// create an instance
const typeWriter = new TypeWriter('elemClass', {
  text: ['sometext']
});

// start typing when it's needed
// staticText prop will be displayed regardless
setTimeout(() => {
  typeWriter.start()
}, 1000);

// completely pause typing; can be resumed with start()
typeWriter.stop()

// stop typing and continue after 2 seconds
typeWriter.stop(2000)
```

## Options

| option         | type        | required / default                   | example                                 |
| -------------- | ----------- | ------------------------------------ | --------------------------------------- |
| `elementClass` | string      | yes                                  | `'myCoolTypeWriter'`                    |
| `text`         | array       | yes                                  | `['out', 'in']`                         |
| `staticText`   | string      | no / `''`                            | `'Try me'`                              |
| `speed`        | number (ms) | no / `1000`                          | `2000`                                  |
| `pause`        | number (ms) | no / `1500`                          | `2000`                                  |
| `cursorStyle`  | object      | no / { color: '#000', width: '2px' } | `{ color: 'dodgerblue', width: '5px' }` |

`text` is an array of typing strings\
`staticText` is a string which will be displayed in front of the typing text\
`speed` specifies the time needed to write a word\
`pause` specifies the delay before the word starts deleting\
`cursorStyle` is an optional object for styling typing cursor
