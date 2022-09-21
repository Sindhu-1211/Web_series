import { html, css, LitElement } from "lit";
class webSeriesCard extends LitElement {
  static styles = css`
    .card {
      background-color: rgba(241, 238, 238, 0.685);
      width: auto;
      height: 128px;
      margin: 15px;
      // padding-left: 10px;
      display: flex;
      flex: 1;
      border: 1px solid black;
      border-radius: 3px;
    }
    .card-body {
      padding-left: 20px;
      padding-right: 20px;
      line-height: 3px;
    }
    .card-title,
    .card-director,
    .card-stars,
    .card-streaming {
      padding-left: 10px;
    }

    @media only screen and (max-width: 750px) {
      .card {
        width: 90%;
      }
    }
  `;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const newcard = document.createElement("DIV");
    newcard.className = "card";
    const newcardbody = document.createElement("DIV");
    newcardbody.className = "card-body";
    const newht = document.createElement("p");
    newht.className = "card-title";
    newht.innerText = "Title";
    const newhd = document.createElement("p");
    newhd.className = "card-director";
    newhd.innerText = "Director";
    const newhst = document.createElement("p");
    newhst.className = "card-stars";
    newhst.innerText = "Stars";
    const newhstr = document.createElement("p");
    newhstr.className = "card-director";
    newhstr.innerText = "Streaming";
    const btnRemove = document.createElement("INPUT");
    btnRemove.value = "Delete";
    btnRemove.type = "button";
    btnRemove.className = "del-btn";
    shadow.appendChild(newcard);
    newcard.appendChild(newcardbody);
    newcardbody.appendChild(newht);
    newcardbody.appendChild(newhd);
    newcardbody.appendChild(newhst);
    newcardbody.appendChild(newhstr);
    newcardbody.appendChild(btnRemove);
  }
}
customElements.define("web-series-card", webSeriesCard);
