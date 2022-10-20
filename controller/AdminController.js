import KonyvModel from "../model/KonyvModel.js";
import KonyvekAdminView from "../view/admin/KonyvekAdminView.js";
import KonyvekPublicView from "../view/public/KonyvekPublicView.js";
class AdminController {
  constructor() {
    const konyvmodel = new KonyvModel();
    $("#admin").on("click", () => {
      konyvmodel.adatBe("../adat.json", this.konyvAdminAdatok);
    });
    $("#public").on("click", () => {
      konyvmodel.adatBe("../adat.json", this.konyvPublicAdatok);
    });

    $(window).on("modosit", (event) => {
      konyvmodel.adatModosit(event.detail);
    });
    $(window).on("torol", (event) => {
      konyvmodel.adatTorol(event.detail);
    });
    $(window).on("veszem", (event) => {
      konyvmodel.konyvVesz(event.detail);
    });
  }

  konyvAdminAdatok(tomb) {
    new KonyvekAdminView(tomb, $("main"));
  }
  konyvPublicAdatok(tomb) {
    new KonyvekPublicView(tomb, $("main"));
  }
}
export default AdminController;
