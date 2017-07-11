# Purgecss-from-html  
[![Build Status](https://travis-ci.org/FullHuman/purgecss-from-html.svg?branch=master)](https://travis-ci.org/FullHuman/purgecss-from-html)
[![CircleCi](https://circleci.com/gh/FullHuman/purgecss-from-html/tree/master.svg?style=shield)]()
[![dependencies Status](https://david-dm.org/fullhuman/purgecss-from-html/status.svg)](https://david-dm.org/fullhuman/purgecss-from-html)
[![devDependencies Status](https://david-dm.org/fullhuman/purgecss-from-html/dev-status.svg)](https://david-dm.org/fullhuman/purgecss-from-html?type=dev)

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
