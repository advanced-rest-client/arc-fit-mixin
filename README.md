[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/arc-fit-mixin.svg)](https://www.npmjs.com/package/@advanced-rest-client/arc-fit-mixin)

[![Build Status](https://travis-ci.org/advanced-rest-client/arc-fit-mixin.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/arc-fit-mixin)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/arc-fit-mixin)

This mixin is a port of [iron-fit-behavior](https://github.com/PolymerElements/iron-fit-behavior)
that works with LitElement.

`ArcFitMixin` fits an element in another element using `max-height`
and `max-width`, and optionally centers it in the window or another element.
The element will only be sized and/or positioned if it has not already been
sized and/or positioned by CSS.

|CSS properties|Action|
|----------------------|---------------------------------------------------|
|`position` set|Element is not centered horizontally or vertically|
|`top` or `bottom` set|Element is not vertically centered|
|`left` or `right` set|Element is not horizontally centered|
|`max-height` set|Element respects `max-height`|
|`max-width` set|Element respects `max-width`|

`ArcFitMixin` can position an element into another element using
`verticalAlign` and `horizontalAlign`. This will override the element's css
position.

```html
<div class="container">
  <iron-fit-impl vertical-align="top" horizontal-align="auto">
    Positioned into the container
  </iron-fit-impl>
</div>
```

Use `noOverlap` to position the element around another element without
overlapping it.

```html
<div class="container">
  <iron-fit-impl no-overlap vertical-align="auto" horizontal-align="auto">
    Positioned around the container
  </iron-fit-impl>
</div>
```

Use `horizontalOffset, verticalOffset` to offset the element from its
`positionTarget`; `Polymer.IronFitBehavior` will collapse these in order to
keep the element within `fitInto` boundaries, while preserving the element's
CSS margin values.

```html
<div class="container">
  <iron-fit-impl vertical-align="top" vertical-offset="20">
    With vertical offset
  </iron-fit-impl>
</div>
```

## Installation

```bash
npm i @advanced-rest-client/arc-fit-mixin
```

## Usage

```javascript
import { LitElement } from 'lit-element';
import { ArcFitMixin } from '@advanced-rest-client/arc-fit-mixin.js';

class ArcFitImpl extends ArcFitMixin(LitElement) {
  static get properties() {
    const top = super.properties || {};
    const props = {
      myProp: { type: Object, attribute: 'my-prop' },
    };
    return Object.assign({}, top, props);
  }
}
```

Note how properties are propagated. Without this, parent properties would be overwritten.

## Testing

```bash
npm run test
```

## Testing with Sauce Labs

```bash
npm run test:sl
```

## Demo

```bash
npm start
```
