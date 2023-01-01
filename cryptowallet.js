// Initialize Web3 and set the provider to Infura
const Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('https://mainnet.infura.io/dda31a06d0584438ad97e3e6a7fbc436'));

// Define the Ethereum address to retrieve the balance for
const address = '0x1234567890abcdef';

// Call the getBalance method of the web
