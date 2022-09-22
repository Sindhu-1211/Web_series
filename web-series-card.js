import { html, css, LitElement } from "lit";
class webSeriesCard extends LitElement {
  static styles = css``;

  static properties = {
    title: {},
    director: {},
  };

  constructor() {
    super();
    this.title = "";
    this.diirector = "";
  }
  render() {
    return html` <p @srylogin=${this._loginListener}><slot></slot></p>
      <p>Login: ${this.title}</p>
      <p>Age: ${this.director}</p>`;
  }
  _loginListener(e) {
    this.title = e.detail.title;
    this.director = e.detail.director;
    console.log(e);
    console.log(e.detail.title, e.detail.director);
  }
}
customElements.define("web-series-card", webSeriesCard);
