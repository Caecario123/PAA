import Users from "../model/usermodel.js";
import  jwt  from "jsonwebtoken";

export const refreshToken = async(req,res)=>{
    try{
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const user = await Users.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err,decoded)=>{
            if(err) return res.sendStatus(403);
            const userId = user[0].id;
            const name = user[0].name;
            const email = user[0].email;
            const accesToken = jwt.sign({userId,name,email},process.env.ACCES_TOKEN_SECRET,{
                expiresIn: "15 s"
            });
            res.json({accesToken});
        });
    } catch(error){
        console.log(error);
    }
}