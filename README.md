# Purgecss-from-html

Get the selectors of an html file.

### Use with Purgecss
```js
import Purgecss from "purgecss"
import purgeHtml from "purgecss-from-html"
const purgeCss = new Purgecss({
    content: ["**/*.html"],
    css: ["**/*.css"],
    extractors: [
        {
            extractor: purgeHtml,
            extensions: ["html"]
        }
    ]
})
const result = purgecss.purge()
```

### Use alone

```js
import purgeHtml from "purgecss-from-html"
import fs from "fs"

const htmlContent = fs.readFileSync("index.html")
const htmlSelectors = purgeHtml.extract(htmlContent)

```
