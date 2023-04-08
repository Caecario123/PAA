import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Siswa = db.define("siswa",{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING

},{
    freezeTableName:true
});

export default Siswa;

(async()=>{
    await db.sync();
})();