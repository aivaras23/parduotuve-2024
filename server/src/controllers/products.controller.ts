import { pool } from "../db/connect";
import { Product } from "../models/product";


export class ProductsController{
    static async getAll( req:any, res:any){
        const sql="SELECT * FROM products";
        const [result]=await pool.query<Product[]>(sql);
        res.json(result);
    }

    static async insert(req:any, res:any){
        const sql="INSERT INTO products (name, price) VALUES ( ?, ? )";
        await pool.query(sql, [req.body.name, req.body.price]);
        res.json({
            "success":true
        })
    }

    static async update(req:any, res:any){
        const sql="UPDATE products SET name=?, price=? WHERE id=?";
        await pool.query(sql, [req.body.name, req.body.price, req.body.id]);
        res.json({
            "success":true
        })
    }

    static async delete(req:any, res:any){
        const sql="DELETE FROM products WHERE id=?";
        await pool.query(sql, [req.body.id]);
        res.json({
            "success":true
        })
    }
}