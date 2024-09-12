# CriandoCarteiraBTC
<p align="center>
  <img src="assets/Bitcoin_logo.webp" alt="Bitcoin Wallet" width="700">  
</p>

- Projeto de criação de carteira BTC experimental na TestNet para receber e transacionar cryptos, realizado durante BootCamp Blockchain Developer with Solidity da Binance em parceiria com a DIO.
|ℹ️ NOTE: Esse repositório foi desenvolvido durante uma trilha do Bootcamp da DIO com  Binance


## Tecnologias Utilizadas

- Node.js: Ferramenta capaz de interpretar códigos JavaScript em ambiente externo ao navegador.

- JavaScript: Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.

- Electrum: Carteira de Bitcoin

- BlockCypher: Explorador de Blocos, Endereços e Transações em redes crypto.

- Bitcoin Faucet: Provedor de liquides experimental.



## Como Testar

1. Instale o Node.js:

  https://nodejs.org/pt


2. Instale o Electrum:

  https://electrum.org/

3. Clone este repositório:

```bash

git clone https://github.com/MatheusMadureiraa/formacao-blockchain-criando-wallet.git

```

4. Rode o gerador de Carteiras:

- Abra o terminal do Node.js

- Caminhe até o repositório na pasta '..\src' no caminho '..\BitcoinWallet\src'

- Dentro da pasta '..\src' rode o comando

 ```bash

  node createWallet.mjs

 ```

5. Sincronizar carteira Electrum

- Abrir o Electrum

- Criar nova carteira

- Nomear e selecionar a opção importar carteira existente

- Importar carteira utilizando a Chave Privada gerada após rodar o gerador de carteiras

6. Solicitar recebimento de bitcoin na testnet

- Acessar https://bitcoinfaucet.uo1.net/

- Inserir endereço da carteira e clicar em 'Enviar testnet Bitcoins'


7. Consultar explorador de blocos

Consultar explorador de blocos de testnet no link

https://live.blockcypher.com/btc-testnet/


## Carteiras criadas

A seguir informações das 2 carteiras criadas e utilizadas no testnet para transacionar bitcoin durante o curso.

#### **Carteira 1**

- Endereço: tb1qp5t7qz2drylsrfk2uwxcdxu3wah2dqly43q9v7
- Chave privada: cRj76Umm594yBkkTGtHJsaLefw341GQNuQ8UUMCBEG4NH3fSAx7w
- Seed: pause sport fence talent melt horn gas nasty range neutral female marble



#### **Carteira 2**

- Endereço: tb1qmv8gmndzs4jcy7e7h4ga0fn7s7aw4n5krgkgm4
- Chave privada: cUg2sxudiEKXUd6URBykeCZXWuKR4SkPFpJzvLsQmcscbGDe4hkW
- Seed: find drama confirm ten auction expire ill physical industry syrup emotion laptop

### Clique [aqui](https://github.com/MatheusMadureiraa/formacao-blockchain-criando-wallet/blob/main/Modulo%2001%20Fundamentos%20da%20Blockchain/Curso%2001%20Introducao%20a%20Blockchain/BitcoinWallet/src/createWallet.mjs) para ver o código feito por mim para a criação das wallets

#### Feito com carinho por *Matheus Guilherme Madureira* ☕
