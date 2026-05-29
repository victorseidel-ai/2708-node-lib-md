import fs from 'fs';
import chalk from 'chalk';
import { error } from 'console';

function extralinks(texto) {
  const regex =  /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map(capturas => ({[capturas[1]]: capturas[2]}))
return resultados;
}

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// async/wait

async function pegaArquivo(caminhoDoArquivo) {
  try {

    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(extralinks(texto));
  }
  catch (erro) {
    trataErro(erro)
  }
}

// promises com then()

//function pegaArquivo(caminhoDoArquivo) {
// const encoding = 'utf-8';
//.promises.readFile(caminhoDoArquivo, encoding)
//.then((texto) => console.log(chalk.green(texto)))
//catch(trataErro) 
//}

//function pegaArquivo(caminhoDoArquivo) {
//  const encoding = 'utf-8';
//fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//  if (erro) {
//    trataErro(erro);
//}
//console.log(chalk.green(texto));
//})
//

pegaArquivo('./arquivos/texto.md');
//console.log(chalk.red('Faça os tiros'), chalk.yellow('valerem a pena.'));
