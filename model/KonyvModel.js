class KonyvModel {
  #konyvTabla;
  constructor() {
    // console.log("KM példányosítva");
    //adatok beolvasása
  }
  adatLekeres(fajl, callBack) {
    fetch(fajl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        callBack(data.konyv);
        this.#konyvTabla = data.konyv;
      });
  }
  getTabla() {
    return this.#konyvTabla;
  }
}
export default KonyvModel;
