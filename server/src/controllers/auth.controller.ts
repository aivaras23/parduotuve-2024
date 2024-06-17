import { pool } from "../db/connect";
import bcrypt from "bcrypt";
import { User } from "../models/user";
import  jwt  from "jsonwebtoken";

export class AuthController{
    
    
    static async signin(req:any, res:any){
        const name=req.body.name; 
        const email=req.body.email;
        let password:string=req.body.password;

        password=await bcrypt.hash(password, 12);

        let sql="SELECT * FROM users WHERE email LIKE ?";
        const [result]=await pool.query<User[]>(sql,[email]);
        if  (result.length!=0){
            return res.status(400).json({
                'text':"Vartotojas su tokiu el. pastu adresu yra registruotas"
            })
        }

        sql="INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        await pool.query(sql, [name, email, password]);

        res.json({"status":"ok"});
    }

    static async login(req:any, res:any){
        const email=req.body.email;
        const password=req.body.password;

        const sql="SELECT * FROM users WHERE email LIKE ?"; 
        const [result]=await pool.query<User[]>(sql, [email]);
        if (result.length!=1){
            return res.status(400).json({
                'text':'Vartotojas su tokiu el. pasto adresu neegzistuoja'
            })
        }
        const user=result[0];
        let passwordOk=await bcrypt.compare(password, user.password);
        if (!passwordOk){
            return res.status(400).json({
                'text':'Ivestas neteisingas slaptazodis arba el. pasto adresas'
            });
        }

        let token=jwt.sign(
            {
                id:user.id
            },
            "kk59444gsd4r9+-eyery64er94ty9wer49erh4",
            {
                expiresIn:'2 days'
            });

        res.json({
            'name':user.name,
            'email':user.email,
            'token':token,
            'type':user.type
        });

    }

}