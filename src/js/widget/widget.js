import "./widget.css";

export default class Widget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onClick = this.onClick.bind(this);
  }

  static get markup() {
    return `
            <button class="button">Collapse</button>
            <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus ut tellus ut lectus tristique porta.
            Mauris in gravida elit. Vivamus volutpat pellentesque aliquet. 
            Integer vitae magna aliquam, interdum ante vel, rhoncus enim. Proin ac finibus nisi. 
            Phasellus mattis ante quis sodales faucibus.
            </div>
        `;
  }

  static get selector() {
    return ".button";
  }

  bindToDOM() {
    this.parentEl.innerHTML = Widget.markup;

    this.element = this.parentEl.querySelector(Widget.selector);

    this.element.addEventListener("click", this.onClick);
  }

  onClick(e) {
    e.preventDefault();
    const container = document.querySelector(".container");

    if (container.classList.contains("active")) {
      container.classList.remove("active");
    } else {
      container.classList.add("active");
    }
  }
}
