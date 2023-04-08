import express from "express";
import {getUsers, login, Logout, Register} from "../controller/user.js";
import {getSiswa} from "../controller/siswa.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";
const router =  express.Router();

router.get('/siswa', getSiswa);
router.get("/users", verifyToken,getUsers);
router.post("/users",Register);
router.post("/login",login);
router.get("/token",refreshToken);
router.delete("/logout",Logout);

export default router;