const errorHandling = require('./errorHandling')

const fs = require('fs')
const caminho = process.argv
const link = caminho[2]

fs.readFile( link, 'utf-8', (erro, text) => {
    try {
        if (erro) throw erro
        contador(text)
    }
    catch(erro) {
        errorHandling(erro)
    }
});

function contador(text) {
    const paragrafo = quebraParagrafo(text)
    const contagem = paragrafo.flatMap((paragrafo) => {
        if(!paragrafo) return []
        return verificarDuplicadas(paragrafo)
    })
    console.log(contagem)
}

function quebraParagrafo(text) {
        return paragrafo = text
        .toLowerCase()
        .split(/\r?\n/)

}

function limparTexto(palavra){
    return palavra.replace(/[^\p{L}\p{N}\s]/gu, '')
}

function verificarDuplicadas(text){
    const listagem = text
        .trim()    
        .split(/\s+/);

    const resultado = {}
    
    listagem.forEach(palavra => {
        if (palavra.length >= 3) {
            const palavraLimpa = limparTexto(palavra)
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1        
        }
    });

    return resultado
}