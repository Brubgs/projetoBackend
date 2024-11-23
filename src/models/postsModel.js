import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão do ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); 


export async function getPosts() { 
    const db = conexao.db("imersaoAlura"); 
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray(); // Busca todos os documentos da coleção e retorna um array.
}

export async function criarPost(novoPost){
    const db = conexao.db("imersaoAlura"); 
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost); 
}

export async function atualizarPost(id, novoPost){
    const db = conexao.db("imersaoAlura"); 
    const colecao = db.collection("posts");
    const objId = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objId)}, {$set: novoPost}); 
}
