import { Router } from "express";

routes = new Router();

routes.get("/", (req, res) => {
  return res.json({
    message: "Hello World"
  });
});

export default routes;
