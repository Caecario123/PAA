import  express from "express";
import {getSiswa, getSiswaById, createSiwa, updateSiwa, deleteSiwa} from "../controller/siswa.js";

const router1 = express.Router();

router1.get('/siswa', getSiswa);
router1.get('/siswa/:id', getSiswaById);
router1.post('/siswa', createSiwa);
router1.patch('/siswa/:id', updateSiwa);
router1.delete('/siswa/:id', deleteSiwa);

export default router1;