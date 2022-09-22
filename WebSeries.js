import { html, css, LitElement } from "lit";

export class WebSeries extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }
    body {
      font-family: Georgia, "Times New Roman", Times, serif;
    }
    .cont {
      background-color: lightgrey;
      width: 100%;
      height: 100%;
      border: 2px solid black;
    }
    h1 {
      text-align: center;
      padding-bottom: 20px;
      margin-bottom: 0;
      letter-spacing: 1.5px;
      word-spacing: 2px;
      text-transform: uppercase;
    }
    .flex {
      display: flex;
      flex: 1;
    }
    .container {
      flex: 1;
      background-image: linear-gradient(rgb(223, 172, 223), rgb(216, 216, 116));
      font-size: medium;
      height: 100%;
      width: 45%;
      border: 1px solid black;
      padding: 40px 30px;
      padding-bottom: 20px;
      margin: 20px;
      margin-top: 0;
      margin-bottom: 40px;
      border-radius: 8px;
    }
    .collection {
      flex: 1;
      width: 45%;
      background-image: linear-gradient(rgb(223, 172, 223), rgb(216, 216, 116));
      border: 1px solid black;
      border-radius: 8px;
      margin-bottom: 40px;
      margin-right: 20px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap
    }
    @media only screen and (max-width: 750px) {
      .flex {
        display: inline;
      }
      .container {
        width: 90%;
      }
    }
  `;

  render() {
    return html` <div class="cont">
      <h1>Web Series</h1>
      <div class="flex">
        <div class="container">
          <web-series-form>
          <web-series-card></web-series-card>
          </web-series-form>
  </div>
        <div class="collection">
          <web-series-card></web-series-card>
          <web-series-card></web-series-card>
          <web-series-card></web-series-card>
          <web-series-card></web-series-card>
          <web-series-card></web-series-card>
          <web-series-card></web-series-card>
        </div>
      </div>
    </div>`;
  }
}
customElements.define("web-series", WebSeries);
