# Lightweight custom typewriter

[![npm version](https://badgen.net/npm/v/lightweight-typewriter)](https://badgen.net/npm/v/lightweight-typewriter)
[![size](https://img.badgesize.io/shelooks16/Typewriter/master/dist/TypeWriter.min.js)](https://img.badgesize.io/shelooks16/Typewriter/master/dist/TypeWriter.min.js)
[![gzip size](https://img.badgesize.io/shelooks16/Typewriter/master/dist/TypeWriter.min.js?compression=gzip)](https://img.badgesize.io/shelooks16/Typewriter/master/dist/TypeWriter.min.js?compression=gzip)

Demo is available [here](https://shelooks16.github.io/Typewriter/)

## Usage

Add it to your html:

```html
<script src="https://unpkg.com/lightweight-typewriter@2.0.1/dist/TypeWriter.min.js"></script>
```

Intall as a dependency:

```js
npm i lightweight-typewriter
yarn add lightweight-typewriter
```

Import:

```js
const TypeWriter = require("lightweight-typewriter");
// or
import TypeWriter from "lightweight-typewriter";
```

Create an element with the desired class name and init the script:

```html
<h1 class="myCoolTypeWriter"></h1>

<script>
  new TypeWriter({
    elementClass: "myCoolTypeWriter",
    text: ["My cookies", "Your cookies"],
    cursorStyle: {
      color: "dodgerblue"
    };
  });
</script>
```

Use it as a variable. In this case you can dynamically change typewriter's
properties `cursorStyle`, `pause`, `speed`, `text`, `staticText`:

```c
const typeWriter = new TypeWriter({
    elementClass: "myCoolTypeWriter",
    staticText: "Hello",
    text: ["boys", "girls"],
    speed: 1000
  });

typeWriter.staticText = "New static text";
typeWriter.pause = 4000; // <-- default value changed
```

Refresh the page and enjoy :)

## Options

| option         | type        | required / default                 | example                               |
| -------------- | ----------- | ---------------------------------- | ------------------------------------- |
| `elementClass` | string      | yes                                | `"myCoolTypeWriter"`                  |
| `text`         | array       | yes                                | `["cookies", "pizza"]`                |
| `staticText`   | string      | no / `''`                          | `"I enjoy"`                           |
| `speed`        | number (ms) | no / `1000`                        | `2000`                                |
| `pause`        | number (ms) | no / `1500`                        | `2000`                                |
| `cursorStyle`  | object      | no / { color:"#000", width:"2px" } | `{color: "dodgerblue", width: "5px"}` |

`text` accepts array. If you would pass a string, each letter will.
be considered a word\
`staticText` value will prepend to the typing text.\
`speed` specifies the time needed to write the word.\
`pause` specifies the delay before the word starts deleting.\
`cursorStyle` accepts either color or width.
