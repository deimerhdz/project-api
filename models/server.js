import express from 'express';
import userRoutes from '../routes/user.router.js'
export default class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.routes();
    }
    routes(){
        this.app.use('/users',userRoutes);
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server on port ${this.port}`)
        })
    }
}
