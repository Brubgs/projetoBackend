import express from "express";
import multer from "multer";
import { listarPosts, postarPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

const upload = multer({dest:"./uploads", storage})

const routes = (app) => {
    app.use(express.json()); // Habilita o middleware para analisar o corpo das requisições JSON.
    
    app.get("/posts", listarPosts);
    
    app.post("/posts", postarPost);

    app.post("/upload", upload.single("imagem"), uploadImagem)

    app.put("/upload/:id", atualizarNovoPost)
}

export default routes;
