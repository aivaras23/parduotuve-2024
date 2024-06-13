import { pool } from "../db/connect";
import bcrypt from 'bcrypt';
import { User } from "../models/user";
import jwt from 'jsonwebtoken';

export class AuthController{
    static async signIn(req:any, res:any){
        const name = req.body.name;
        const email = req.body.email;
        let password:string = req.body.password;

        password = await bcrypt.hash(password, 12);

        const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        await pool.query(sql, [name,email,password]);

        res.json({'status':'ok'});
    }

    static async login(req:any, res:any){
        const email = req.body.email;
        const password = req.body.password;

        const sql = "SELECT * FROM users WHERE email like ?";
        const [result] = await pool.query<User[]>(sql, [email]);
        if (res.length!=1){
            res.status(400).json({
                'text':'Vartotojas su tokiu el. pasto adresu neegzistuoja'
            })
        }
        const user = result[0];
        let passwordOk = bcrypt.compare(password, user.password);
        if(!passwordOk){
            return res.status(404).json({
                'text':'Ivestas neteisingas slaptazodis arba el. pasto adresas'
            })
        }

       let token = jwt.sign(
        {
            'id':user.id
        },
        'kk592385huxghsdugeui23942y3', 
        {
            expiresIn: '2 days'
        });

        res.json({
            'name': user.name,
            'email': user.email,
            'token':token,
            'text':'Viskas ok'
        });
    }
}