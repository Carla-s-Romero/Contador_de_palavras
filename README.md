# Alura - Contador/Indentificador de palavras.

Uma CLI em Node.js para analisar textos e identificar palavras repetidas em cada parágrafo, gerando um arquivo de saída com o resultado.

## ✨ O que o projeto faz

O programa lê um arquivo de texto, separa o conteúdo por parágrafos, ignora palavras com menos de 3 caracteres e conta apenas as palavras repetidas. Em seguida, salva um arquivo chamado `resultado.txt` no diretório de destino informado.

Exemplo de saída:

```txt
palavras duplicadas no parágrafo 1: web, como, clientes, servidores
palavras duplicadas no parágrafo 2: para, da, a
```

## 🛠️ Tecnologias

- Node.js
- JavaScript ES Modules
- `commander` para a interface de linha de comando
- `chalk` para mensagens coloridas no terminal

## 📦 Instalação

```bash
npm install
```

## ▶️ Como usar

```bash
node src/cli.js --texto ./arquivos/texto-web.txt --destino ./resultado
```

Ou na forma curta:

```bash
node src/cli.js -t ./arquivos/texto-web.txt -d ./resultado
```

### Parâmetros

- `-t, --texto <string>`: caminho do arquivo de texto de entrada
- `-d, --destino <string>`: pasta onde o arquivo `resultado.txt` será salvo

## 📁 Estrutura do projeto

```txt
3709-nodejs-lib/
├── arquivos/
│   ├── texto-aprendizado.txt
│   ├── texto-kanban.txt
│   └── texto-web.txt
├── resultado/
│   └── resultado.txt
├── src/
│   ├── cli.js
│   ├── errorHandling.js
│   ├── helper.js
│   └── index.js
├── package.json
└── README.md
```

## 🔍 Exemplo prático

```bash
node src/cli.js -t arquivos/texto-web.txt -d resultado
```

Esse comando lê o arquivo `arquivos/texto-web.txt`, processa as palavras e grava o resultado em:

```txt
resultado/resultado.txt
```

## 🧠 Observações

- A lógica ignora pontuação e normaliza letras para minúsculas.
- Apenas palavras repetidas aparecem na saída.
- O projeto foi pensado para análise simples e didática de processamento de texto em Node.js.

## 📌 Status

Projeto de estudo/CLI funcional para processamento de texto e contagem de repetição de palavras.
