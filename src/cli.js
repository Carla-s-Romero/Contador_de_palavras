import fs from 'fs';
import errorHandling from './errorHandling.js'
import { contador } from './index.js'

const caminho = process.argv
const link = caminho[2]
const endereco = caminho[3]

fs.readFile( link, 'utf-8', (erro, text) => {
    try {
        if (erro) throw erro
        const resultado = contador(text)
        criarSalvarArquivos(resultado, endereco)
    }
    catch(erro) {
        errorHandling(erro)
    }
});

async function criarSalvarArquivos(listaPalavras, endereco) {
    const novoArquivo = `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringify(listaPalavras)
    
    try {
        await fs.promises.writeFile(novoArquivo, textoPalavras)
        console.log("criado")
    } catch (error) {
        throw error
    }
}