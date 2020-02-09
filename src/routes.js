import { Router } from "express";

import UserController from "./app/controllers/UserController";

const routes = new Router();

routes.post("/clients", UserController.store);

export default routes;
