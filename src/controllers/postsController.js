import fs from "fs";
import {getPosts, criarPost, atualizarPost} from "../models/postsModel.js";

//pegar posts
export async function listarPosts(req, res){ 
    const posts = await getPosts();
    res.status(200).json(posts); // Envia os posts como resposta JSON com o status 200 (OK).
}

//criar novo post
export async function postarPost(req, res){
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}

export async function uploadImagem(req, res){
    const novoPost = {
        descricao: "",
        imagemUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}

export async function atualizarNovoPost(req, res){
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;
    const post = {
        descricao: req.body.descricao,
        imagemUrl: urlImagem,
        alt: req.body.alt
    }
    try {
        const postCriado = await atualizarPost(id, post);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}