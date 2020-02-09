import { Router } from "express";

import ClientController from "./app/controllers/ClientController";
import IncomeController from "./app/controllers/IncomeController";

const routes = new Router();

routes.post("/clients", ClientController.store);
routes.post("/incomes", IncomeController.store);

export default routes;
