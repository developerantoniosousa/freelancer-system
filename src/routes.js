import { Router } from "express";

import ClientController from "./app/controllers/ClientController";
import IncomeController from "./app/controllers/IncomeController";
import InvestmentController from "./app/controllers/InvestmentController";

const routes = new Router();

routes.post("/clients", ClientController.store);
routes.get("/clients", ClientController.index);

routes.post("/incomes", IncomeController.store);
routes.get("/incomes", IncomeController.index);

routes.post("/investments", InvestmentController.store);
routes.get("/investments", InvestmentController.index);

export default routes;
