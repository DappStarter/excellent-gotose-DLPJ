require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace seek sun sugar shock rescue spawn provide hunt pet system ski'; 
let testAccounts = [
"0x1f61aa6ef127d6d5aaa4d511b0c3616aab842591539ba7f40d9ace49438d1ce9",
"0x7be4609506fcd7e2b85fdfab485e31b8184728614e072df2ea83ee2bd800e939",
"0x062c9b0f1f90e2cdc3d6d679a3d71be46ff0866db133e36001bf98ea3e5c80af",
"0xcb22b3f408898b07849ac392f29567f2b6c2b929c3a04919caa35b51fb3d3904",
"0x516a69414a29b4b880a475620afac36cf161cd4f6d88f26c58cabcf02eab85df",
"0xd5c6b521474bd8fbea3f6b0c78148d54f964d2be47836ebbc65ddf857c7998b9",
"0x95fdb257db7eb4721a6710b36c65fd5318cb6c414bdb33ab7a61cfd626995569",
"0x5c0ad2c2c287e5053c2926c7182ce3c31e8311597881a43a72fcbc8f33aa0324",
"0xcd760abb5cb443aac354e05789591c06841d64c46f24609a7d42b15d825ac172",
"0xca6b050d0582ec7f0ab265d405c149ab0166282f6ddbcec41856a4770f5ebff1"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


