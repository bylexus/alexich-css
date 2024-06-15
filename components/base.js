/**
 * Base class for Web Components. This is a helper class
 * inspired by other Web Component frameworks, to help
 * creating own web components easier.
 * 
 * This class supports observed attributes, and re-renders
 * the component when one of the observed attributes changes.
 * 
 * Inheriting classes must implement the `render()` method,
 * which either returns a string containing HTML,
 * an HTMLElement or an array of one of those.
 * 
 * By default, `render()` is called whenever observed properties change.
 * It will then replace the content's DOM with the new elements returned.
 * 
 * This can be performance intensive, and can be prevented by overriding
 * the `updateView()` method: `updateView()` is called before `render()`,
 * and if it returns false, the `render()` method will not be called:
 * It can be used to manipulate the existing DOM, withour re-rendering it.
 * 
 * See the implemented components like progess-bar for example usages.
 */
export default class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.initObservedAttributes();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
    this._style.textContent = this.customStyle || "";

    this._doRender();
  }

  disconnectedCallback() {
  }

  adoptedCallback() {
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
      if (this.updateView() !== false) {
        this._doRender();
      }
    }
  }

  initObservedAttributes() {
    let attrs = this.constructor.observedAttributes || [];

    for (const attr of attrs) {
      this[attr] = this.getAttribute(attr);
    }
  }

  _doRender() {
    if (this.shadowRoot) {
      const renderResult = this.render(this.attributes);
      const nodes = this._toNodes(renderResult);

      this.shadowRoot.replaceChildren(...[this._style], ...nodes);
    }
  }

  _toNodes(content) {
    let nodes = [];
    if (typeof content === "string") {
      const tmpl = document.createElement("template");
      tmpl.innerHTML = content;
      nodes.push(tmpl.content.cloneNode(true));
    } else if (content instanceof HTMLElement) {
      nodes.push(content);
    } else if (Array.isArray(content)) {
      nodes = [...nodes, ...content.map((n) => this._toNodes(n))];
    }
    return nodes;
  }

  render() {
    return "";
  }

  updateView() {
    return true;
  }
}
