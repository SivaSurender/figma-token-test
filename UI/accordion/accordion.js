import { LitElement, html, css } from "https://esm.sh/lit";
class AccordionComponent extends LitElement {
  static styles = css`
    .accordion {
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 5px;
      overflow: hidden;
    }

    .accordion-item {
      border-bottom: 1px solid #ddd;
    }

    .accordion-item:last-child {
      border-bottom: none;
    }

    .accordion-header {
      background: #f7f7f7;
      padding: 12px 16px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
      padding: 0 16px;
      background: white;
    }

    .accordion-content.open {
      max-height: 200px; /* Adjust as needed */
      padding: 12px 16px;
    }
  `;

  static properties = {
    items: { type: Array },
    openIndex: { type: Number },
  };

  constructor() {
    super();
    this.items = [
      { title: 'Section 1', content: 'This is the content for section 1.' },
      { title: 'Section 2', content: 'This is the content for section 2.' },
      { title: 'Section 3', content: 'This is the content for section 3.' },
    ];
    this.openIndex = -1; // -1 means no section is open
  }

  //   firstUpdated() {
  //   const link = document.createElement('link');
  //   link.setAttribute('rel', 'stylesheet');
  //   link.setAttribute('href', 'style.css'); 
  //   this.shadowRoot.appendChild(link);
  // }
  toggleAccordion(index) {
    this.openIndex = this.openIndex === index ? -1 : index;
  }
   

  render() {
    return html`
      <div class="accordion">
        ${this.items.map(
          (item, index) => html`
            <div class="accordion-item">
              <div class="accordion-header" @click=${() => this.toggleAccordion(index)}>
                ${item.title}
                <span>${this.openIndex === index ? '▲' : '▼'}</span>
              </div>
              <div class="accordion-content ${this.openIndex === index ? 'open' : ''}">
                <p>${item.content}</p>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define('accordion-component', AccordionComponent);
