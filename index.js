import fs from 'fs';
import chalk from 'chalk';
import { error } from 'console';

const textoTeste = 'São geralmente recuperados a partir de um objeto [FileList](https://www.youtube.com/) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://classroom.google.com/u/0/c/ODQyNDkxNjEwMDIx/a/Nzk3ODU0MTk1NTg5/details), a partir do objeto [DataTransfer](https://miniature-guide-wrj4gpp6wpvv2gggw.github.dev/) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://www.bing.com/alink/link?url=https%3A%2F%2Fnike.com.br&source=msn-ntp&h=e2BnvkDcYide1zuiHD51Kh0LFWj4gJifFF0XjsG9gkc%3D&aff=a&p=mkt%3Apt-br%3Bf%3AHHQEsLfFcI0bfkDE4F5cSxOwDTUAr8sDSse1rHdulh4%3D%3Btssls%3Awpol&ocid=msedgntp&pc=U531&cvid=6a18dad7d68a4c8ba9fc6f4cec4a1c1c&ei=10). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://www.office.com/) para mais informações.).'

function extralinks(texto) {
  const regex =  /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = regex.exec(texto);
  console.log(capturas);

}

extralinks(textoTeste);

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// async/wait

async function pegaArquivo(caminhoDoArquivo) {
  try {

    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.green(texto));
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

//pegaArquivo('./arquivos/texto.md');
//console.log(chalk.red('Faça os tiros'), chalk.yellow('valerem a pena.'));
