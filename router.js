import Router from "express";
import PostController from "./PostController.js";

import cors from "cors";
const corsOptions = {
  origin: "*",
  credentials: "include", //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  preflightContinue: false,
};

const router = new Router();
router.use(cors(corsOptions));
router.post("/posts", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/post_ratings", PostController.getRate);
router.get("/posts/:id", PostController.getOne);
router.put("/posts", PostController.update);
router.delete("/posts/:id", PostController.delete);

export default router;
