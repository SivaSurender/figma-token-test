import { LitElement, html, css } from "https://esm.sh/lit";

class ButtonComponent extends LitElement {
  static properties = {
    type: { type: String },
  };

  static styles = css`
    /* :host {
      display: inline-block;
    } */
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }
  
    button:hover {
      opacity: 0.8;
    }
  `;

  constructor() {
    super();
    this.type = "primary"; 
  }
   firstUpdated() {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'style.css'); 
    this.shadowRoot.appendChild(link);
  }


  handleClick() {
    this.dispatchEvent(
      new CustomEvent("btn-click", { bubbles: true, composed: true })
    );
  }

  render() {
    return html`
      <button class="${this.type}" @click=${this.handleClick}>
        <slot>Default Button</slot>
      </button>
    `;
  }
}

customElements.define("button-component", ButtonComponent);
