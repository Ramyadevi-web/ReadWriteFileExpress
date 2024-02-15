import { Router } from "express"
import UserController from "../controller/index.js"

const router = Router();

router.get('/',UserController.fileWriting)

export default router