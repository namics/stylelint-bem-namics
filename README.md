# Stylint Nitro Bem

Verifies that the given css follows the nitro bem rules.

##Valid examples

```css
.a-block {}
.m-block {}
.o-block {}
.l-block {}
.g-block {}
.h-block {}

.a-block--modifier {}
.m-block--modifier {}
.o-block--modifier {}
.l-block--modifier {}
.g-block--modifier {}
.h-block--modifier {}

.a-block__block {}
.m-block__block {}
.o-block__block {}
.l-block__block {}
.g-block__block {}
.h-block__block {}

.js-a-block__hook-name {}
.js-m-block__hook-name {}
.js-o-block__hook-name {}
.js-l-block__hook-name {}
.js-g-block__hook-name {}
.js-h-block__hook-name {}

.state-a-block--state-name {}
.state-m-block--state-name {}
.state-o-block--state-name {}
.state-l-block--state-name {}
.state-g-block--state-name {}
.state-h-block--state-name {}
```

## Exception

Whenever you will apply rules you will run into edge cases like third-party code or wysiwyg content where those rules have to be bent a little bit.

In this case you can get around the rules above but you should leave a comment why and enable
the linting again:

```css
/* wysiwyg does not follow bem */
/* stylelint-disable */
    .wysiwyg .headline {
        /* stylelint-enable */
        font-size: 34px;
    }
```

## Configuration

### Simple configuration
```js
{
  "plugins": [
    "stylelint-nitro-bem"
  ],
  "rules": {
    "plugin/selector-nitro-bem": true,
  }
}
```  

### Advanced configuration
```js
{
  "plugins": [
    "@namics/stylelint-bem"
  ],
  "rules": {
    "plugin/stylelint-bem-namics": {
      "namespace": "ux-"
    },
  }
}
```  

## Changelog

Please see the CHANGELOG.md