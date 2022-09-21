import { html, css, LitElement } from "lit";

class webSeriesForm extends LitElement {
  static styles = css`
    h1 {
      text-align: center;
      padding-bottom: 20px;
      margin-bottom: 0;
      letter-spacing: 1.5px;
      word-spacing: 2px;
      text-transform: uppercase;
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
      flex-wrap: wrap;
    }
    input,
    select,
    option {
      width: 90%;
      height: 25px;
      margin-bottom: 25px;
      margin-top: 5px;
    }
    .clkBtn {
      background-color: rgb(70, 141, 70);
      width: 100px;
      height: 40px;
      padding: 8px;
      border-radius: 5px;
      font-size: medium;
      margin-bottom: 5px;
      cursor: pointer;
    }
    .del-btn {
      background-color: rgb(189, 45, 45);
      border: 1px solid black;
      border-radius: 4px;
      width: 60px;
      align-items: center;
    }
    .flex {
      display: flex;
    }

    @media only screen and (max-width: 750px) {
      .flex {
        display: inline;
      }
      .container {
        width: 90%;
      }
      .collection {
        width: 90%;
        align-items: center;
        margin-left: 20px;
      }
      .card {
        width: 90%;
      }
    }
  `;

  render() {
    return html`
      <form>
        <label for="title"><strong>Title:</strong></label
        ><br />
        <input type="text" id="title" /><br /><br />
        <label for="director"><strong>Directors:</strong></label
        ><br />
        <input type="text" id="director" /><br /><br />
        <label for="stars"><strong>Stars:</strong></label
        ><br />
        <input type="text" id="stars" /><br /><br />
        <label for="streaming"><strong>Streaming on:</strong></label
        ><br />
        <select id="streaming">
          <option style="text-align: center">--- Select ---</option>
          <option value="netflix">Netflix</option>
          <option value="hotstar">Hotstar</option>
          <option value="prime">Prime</option>
          <option value="youtube">YouTube</option>
        </select>
        <br /><br />

        <p><button class="clkBtn">Add</button></p>
      </form>
    `;
  }
}
customElements.define("web-series-form", webSeriesForm);
