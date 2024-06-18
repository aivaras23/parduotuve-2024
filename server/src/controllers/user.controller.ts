import { pool } from "../db/connect";
import { User } from "../models/user";
import bcrypt from "bcrypt";

export class UserController{
    static async getAll(req:any, res:any){
        const [result]=await pool.query<User[]>("SELECT * FROM users");
        return res.json(result);

    }
    static async getUser(req:any, res:any){
        //Redaguojamo vartotojo ID
        const userId=req.params.id;

        //req.user.id  -- prisijungusio vartotojo id
        //req.user.type -- prisijungusio vartotojo tipas

        if ( !(req.user.type==0 || userId==req.user.id)){
            res.status(400).json({
                text:"Jūs neturite teisės redaguoti įrašą"
            })
        }
        
        const [result]=await pool.query<User[]>("SELECT * FROM users WHERE id=?",[userId]);
        if (result.length==0){
            res.status(404).json({
                text:"Vartotojas nerastas"
            });
        }else{
            res.json(result[0]);
        }
    }

    static async update(req:any, res:any){
        //Redaguojamo vartotojo ID
        const userId=req.params.id;

        //req.user.id  -- prisijungusio vartotojo id
        //req.user.type -- prisijungusio vartotojo tipas

        if ( !(req.user.type==0 || userId==req.user.id)){
            res.status(400).json({
                text:"Jūs neturite teisės redaguoti įrašą"
            })
        }

        if (req.body.password!=''){
            const passwordHash=await bcrypt.hash(req.body.password, 12);

            await pool.query("UPDATE users SET email=?, name=?, password=?, type=? WHERE id=? ",[
                req.body.email,
                req.body.name,
                passwordHash,
                req.body.type,
                userId
            ]);
        }else{
            await pool.query("UPDATE users SET email=?, name=?, type=? WHERE id=? ",[
                req.body.email,
                req.body.name,
                req.body.type,
                userId
            ]);
        }
        res.json({
            success:true
        });

    }

    static async delete(req:any, res:any){
        await pool.query("DELETE FROM users WHERE id=?",[req.params.id]);
        res.json({
            success:true
        });
    }
}