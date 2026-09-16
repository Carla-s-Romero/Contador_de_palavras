function filterOccurences (paragrafo) {
   return Object.keys(paragrafo).filter(chaves => paragrafo[chaves] > 1)
}

export function montaSaida(listaPalavras) {
    let textoFinal = ''
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filterOccurences(paragrafo).join(', ');
        textoFinal += `palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas} \n`        
    });

    return textoFinal
}

 