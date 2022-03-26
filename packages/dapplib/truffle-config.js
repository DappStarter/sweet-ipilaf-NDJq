require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe story return pizza method great light army gas'; 
let testAccounts = [
"0xb057ac41691405dec8f48d1575eaf5089e8147a6ad94864556368ad76a7ded4f",
"0x662d7ae4d72b5130db3ec06d2e4c284e4e1dbb609d1a9df6b7ed87c90a5e941a",
"0x3486c4019a44fde7406bd25c961034ad4dd0b802631df301c90ef1b056cec3ec",
"0x252c184e3bd3e90730c5d023a03a9816f6884d7e0c94b5ba838cf0fe49f23a99",
"0x5b436492d02c91d2e057b7dd723adf4d2f58bb4ab76ad1839e049e2671bb0f68",
"0xa5a604dcf936ff936d6ace3de94c201385d6aed3022e21b02fee4970ae5671d9",
"0xbc82a6e0079941b18d6fec14ad6cbbb40f73949b355363f0977390d405a67d99",
"0x2ce4f5d5ca4baab9ccd9c12be8408f14d704f971ca136c04e0465f15253cd250",
"0xdf8ad37344206d1efd2e030cb78bcd30d5a38b02c4894ce4e5cbc6ccc4154c55",
"0x26dc8a3706f773f21c01fc06dbfa6ca4aaa27e748a1d7672f024669d5fd13a14"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

