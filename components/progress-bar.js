import BaseComponent from "./base.js";

/**
 * Renders a progress bar. The progress bar can be used
 * to show the progress of an action.
 * 
 * The following properties can be set:
 * 
 * - value: The actual progress value
 * - min: The minimum value, where no progress is reported
 * - max: The maximum value, where the progress bar is full
 * - appearance: The appearance of the progress bar. Can be: full, good, medium, bad
 * 
 * The following CSS custom properties can be set to customize the appearance:
 * 
 * - --progress-bar-full-color: The color of the 'full' appearance
 * - --progress-bar-full-text-color: The text color of the 'full' appearance
 * - --progress-bar-good-color: The color of the 'good' appearance
 * - --progress-bar-good-text-color: The text color of the 'good' appearance
 * - --progress-bar-medium-color: The color of the 'medium' appearance
 * - --progress-bar-medium-text-color: The text color of the 'medium' appearance
 * - --progress-bar-bad-color: The color of the 'bad' appearance
 * - --progress-bar-bad-text-color: The text color of the 'bad' appearance
 * - --progress-bar-transition-duration: If the value changes, this time defines the transition duration
 * - --progress-bar-border-radius: The border radius of the bar itself
 * 
 */
export default class ProgressBar extends BaseComponent {
  static observedAttributes = ["value", "min", "max", "appearance"];

  customStyle = `
    :host {
      display: block;
    }
    .progressbar {
      height: 100%;
      display: flex;
      flex-direction: row;
      .progress {
        transition: width var(--progress-bar-transition-duration, 0.2s) ease;
        color: var(--progress-bar-light-text-color, var(--color-light, white));
        padding: 2px 4px;
        border-radius: var(--progress-bar-border-radius, 5px);
        &.full {
          background-color: var(--progress-bar-full-color, var(--color-green-500, green));
          color: var(--progress-bar-full-text-color, var(--color-light, white));
        }
        &.good {
          background-color: var(--progress-bar-good-color, var(--color-blue-500, blue));
          color: var(--progress-bar-good-text-color, var(--color-light, white));
        }
        &.medium {
          background-color: var(--progress-bar-medium-color, var(--color-amber-200, yellow));
          color: var(--progress-bar-medium-text-color, var(--color-dark, black));
        }
        &.bad {
          background-color: var(--progress-bar-bad-color, var(--color-red-500, red));
          color: var(--progress-bar-bad-text-color, var(--color-light, white));
        }
      }
    }
  `;

  get percentage() {
    const min = Number(this.min) || 0;
    const max = Number(this.max) || 100;
    const value = Number(this.value) || 0;
    return ((value - min) / (max - min)) * 100;
  }

  render() {
    return `
      <div class="progressbar">
          <div class="progress ${
            this.appearance || "good"
          }" role="progressbar" style="width: ${
      this.percentage
    }%;"><slot></slot></div>
      </div>
`;
  }
  updateView() {
    if (this.shadowRoot) {
      const el = this.shadowRoot.querySelector(".progress");
      el.style.width = `${this.percentage}%`;
      el.classList.value = `progress ${this.appearance || "good"}`;
    }

    return false;
  }
}

customElements.define("progress-bar", ProgressBar);
