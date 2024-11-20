import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão do ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); 

// Função assíncrona para buscar os posts do banco de dados.
export default async function getPosts() { 
    // Seleciona o banco de dados "imersaoAlura".
    const db = conexao.db("imersaoAlura"); 
     // Seleciona a coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");
    // Busca todos os documentos da coleção e retorna um array.
    return colecao.find().toArray(); 
}