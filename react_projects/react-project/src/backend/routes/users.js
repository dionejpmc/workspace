import express from "express";
import  { getUsers } from "../controller/user.js";


const router = express.Router();


router.get("/cruduser", getUsers);



export default router;