import express from "express";
import { edit, trending, watch } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/", trending);
videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);

export default videoRouter;
