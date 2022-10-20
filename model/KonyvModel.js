class KonyvModel {
  #konyvekTomb = [];

  constructor() {
    console.log("KonyvModel");
  }

  adatBe(vegpont, myCallBack) {
    fetch(vegpont, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.#konyvekTomb = data.konyv;
        myCallBack(this.#konyvekTomb);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  adatModosit(adat) {
    console.log("MÓDOSÍT " + adat);
  }
  adatTorol(adat) {
    console.log("TÖRÖLTEM: " + adat);
  }
  konyvVesz(adat) {
    console.log("Vettem: " + adat);
  }
}

export default KonyvModel;
