class KonyvAdminView {
  #elem;
  constructor(elem, szuloElem) {
    this.#elem = elem;
    // console.log("KonyvView");
    // console.log(elem);
    szuloElem.append(`<tr>
        <td>${elem.id}</td>
        <td>${elem.cim}</td>
        <td>${elem.szerzo}</td>
        <td>${elem.ar}</td>
        
        <td>
        <input type="button" value="töröl" id="del${elem.id}" class="torol">
        <input type="button" value="módosít" id="mod${elem.id}" class="modos"></td>
        </tr>`);

    this.delElem = $(`#del${elem.id}`);
    this.modElem = $(`#mod${elem.id}`);
    // console.log(this.modElem);
    this.delElem.on("click", () => {
      this.kattintasTrigger("torol");
    });
    this.modElem.on("click", () => {
      this.kattintasTrigger("modosit");
    });
  }
  kattintasTrigger(para) {
    const esemeny = new CustomEvent(para, { detail: this.#elem.id });
    window.dispatchEvent(esemeny);
  }
}
export default KonyvAdminView;
