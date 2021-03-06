import { LitElement, html, css } from 'lit-element';
import { ArcFitMixin } from '../index.js';

class TestFit extends ArcFitMixin(LitElement) {
  static get styles() {
    return css`
    :host {
      display: block;
      background: black;
      color: white;
      padding: 8px;
    }`;
  }

  static get properties() {
    return {
      // DO NOT REMOVE
      myProp: { type: String, attribute: 'my-prop' }
    };
  }

  render() {
    return html`<slot></slot>`;
  }
}
window.customElements.define('test-fit', TestFit);
