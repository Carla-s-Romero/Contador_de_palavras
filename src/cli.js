import fs from "fs";
import errorHandling from "./errorHandling.js";
import { contador } from "./index.js";
import { montaSaida } from "./helper.js";
import { Command } from "commander";
import path from "path";
import chalk from "chalk";

const program = new Command();

program
  .version("0.0.1")
  .option("-t, --texto <string>", "Caminho do texto a ser processado")
  .option(
    "-d, --destino <string>",
    " Caminho da pasta onde salvar o arquivo resultado",
  )
  .action((options) => {
    const { texto, destino } = options;

    if (!texto || !destino) {
      console.error(chalk.red("erro: por favor inserir o caminho de origem e destino"));
      program.help();
      return;
    }

    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);

    try {
      processarArquivo(caminhoTexto, caminhoDestino);
      console.log(chalk.green("texto processado com sucesso"));
    } catch (error) {
      console.log("Ocorreu um erro no processamento", error);
    }
  });

program.parse();

function processarArquivo(texto, destino) {
  fs.readFile(texto, "utf-8", async (erro, text) => {
    try {
      if (erro) throw erro;

      const resultado = contador(text);

      await criarSalvarArquivos(resultado, destino);
    } catch (erro) {
      errorHandling(erro);
    }
  });
}

async function criarSalvarArquivos(listaPalavras, endereco) {
  const novoArquivo = `${endereco}/resultado.txt`;
  const textoPalavras = montaSaida(listaPalavras);

  await fs.promises.mkdir(endereco, { recursive: true });
  await fs.promises.writeFile(novoArquivo, textoPalavras);

  console.log("criado");
}
