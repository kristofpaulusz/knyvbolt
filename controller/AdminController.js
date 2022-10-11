import KonyvModel from "../model/KonyvModel.js";
import KonyvekAdminView from "../view/KonyvekAdminView.js";
class AdminController {
  constructor() {
    let konyvModel = new KonyvModel();
    konyvModel.adatLekeres("../konyvek.json", this.konyvAdatok);
  }
  konyvAdatok(tomb) {
    let konyvekAdminView = new KonyvekAdminView(tomb, $("main"));
  }
}
export default AdminController;
