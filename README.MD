# Lightweight custom typewriter
Demo is available [here](https://shelooks16.github.io/Typewriter/)

## Usage

Add it to your html:
```html
<script src="https://unpkg.com/lightweight-typewriter@1.0.1/dist/TypeWriter.js"></script>
```

Create an element with the desired class name and init the script:
```html
<h1 class="myCoolTypeWriter"></h1>

<script>
  new TypeWriter({
    elementClass: "myCoolTypeWriter",
    text: ["I love cookies", "I love eggs"],
  });
</script>
```

Refresh the page and enjoy :)

## Options
option | type | required / default | example
-----|------|------|------
`elementClass` | string | yes | `"myCoolTypeWriter"`
`text` | array | yes | `["I love cookies", "I love eggs"]`
`staticText` | string | no / `''` | `"Crisps are"`
`speed` | number (ms) | no / `1000` | `2000`
`pause` | number (ms) | no / `1500` | `2000`
`cursorStyle` | object | no / { color:"#000", width:"2px" } | `{color: dodgerblue, width: "5px"}`

`staticText` value will be prepend to the typing text.
`speed` specifies the time needed to write the word.
`pause` specifies the delay before the word starts deleting.
`cursorStyle` accepts only 2 parameters: color and width.