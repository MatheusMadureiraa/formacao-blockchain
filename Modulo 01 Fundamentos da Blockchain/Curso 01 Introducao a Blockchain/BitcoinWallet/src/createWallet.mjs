// Importando dependências
import * as bip32 from 'bip32';
import * as bip39 from 'bip39';
import * as bitcoin from 'bitcoinjs-lib';

// Definindo a rede
const network = bitcoin.networks.testnet; // testnet é uma rede de teste, a rede original chama-se 'bitcoin'

// Aderivação de carteiras HD
const path = `m/49'/1'/0'/0`;

// Criando mnemonic para a seed
let mnemonic = bip39.generateMnemonic();
const seed  = bip39.mnemonicToSeedSync(mnemonic);

// Criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network);

// Criando conta - par private e public keys
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

let bech32Address = bitcoin.payments.p2wpkh({

    pubkey: node.publicKey,

    network: network,

}).address



console.log(`Carteira criada
    Endereço: ${bech32Address}
    Chave privada: ${node.toWIF()}
    Seed: ${mnemonic}
    `);