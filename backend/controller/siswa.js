import Siswa from "../model/siswamodel.js";

export const getSiswa = async(req,res)=>{
    try{
        const response = await Siswa.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getSiswaById = async(req,res)=>{
    try{
        const response = await Siswa.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const createSiwa = async(req,res)=>{
    try{
        await Siswa.create(req.body);
        res.status(201).json({msg:"Siswa Ditambahkan"});
    } catch (error){
        console.log(error.message);
    }
}

export const updateSiwa = async(req,res)=>{
    try{
        await Siswa.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Siswa Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

export const deleteSiwa = async(req,res)=>{
    try{
        await Siswa.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Siswa Dihapus"});
    } catch (error){
        console.log(error.message);
    }
}