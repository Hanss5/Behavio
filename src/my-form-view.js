/* Load the PolymerElement base class and html helper function */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
/* Load shared styles. All view elements use these styles */
import './shared-styles.js';
import '@polymer/paper-checkbox/paper-checkbox.js';


/* Extend the base PolymerElement class */
class MyFormView extends PolymerElement {
    /* Define a template for the new element */
  static get template() {
  return html`
    <style include="shared-styles">
      :host {
        display: block;

        padding: 10px;
      }
    </style>

    <div class="card">
      <div class="circle">4</div>
      <h1>Contact form</h1>
      <paper-checkbox>Ready to deploy!</paper-checkbox>
      <p>New view!</p>
    </div>
  `;
}
}
/* Register the new element with the browser */
window.customElements.define('my-form-view', MyFormView);