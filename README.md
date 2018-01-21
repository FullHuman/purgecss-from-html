# Purgecss-from-html  
[![Build Status](https://travis-ci.org/FullHuman/purgecss-from-html.svg?branch=master)](https://travis-ci.org/FullHuman/purgecss-from-html)
[![CircleCi](https://circleci.com/gh/FullHuman/purgecss-from-html/tree/master.svg?style=shield)]()
[![dependencies Status](https://david-dm.org/fullhuman/purgecss-from-html/status.svg)](https://david-dm.org/fullhuman/purgecss-from-html)
[![devDependencies Status](https://david-dm.org/fullhuman/purgecss-from-html/dev-status.svg)](https://david-dm.org/fullhuman/purgecss-from-html?type=dev)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a711f39a6c2b44b2a4a55bd2a7a6c8cf)](https://www.codacy.com/app/FullHuman/purgecss-from-html?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=FullHuman/purgecss-from-html&amp;utm_campaign=Badge_Grade)
[![npm](https://img.shields.io/npm/v/purgecss-from-html.svg)](https://www.npmjs.com/package/purgecss-from-html)
[![license](https://img.shields.io/github/license/fullhuman/purgecss-from-html.svg)]()

Get the selectors of an html file.

## Install

```
npm i -D purgecss-from-html
```

## Usage

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
