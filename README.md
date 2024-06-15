for detailed explanation </a> 
<!-- 
run ganache 
set metamask with new network
  development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "*",
  }
  network name ****
  RPC URL HTTP://127.0.0.1:7545
  CID 1337
  Currency Sym ETH
cd src
truffle build
truffle migrate --reset
npm run start    
-->


<!-- if(e==abi id is not found){
    refresh the page || recompile the whole project;
} -->

Graphical Password Authentication Using Blockchain
Overview
This project implements a graphical password authentication system leveraging blockchain technology. Users can register by generating a password through an image grid and sign a contract by spending ether. The authentication process ensures security and privacy through the decentralized and immutable nature of blockchain.

Features
Graphical Password Generation: Users create a password using an image grid.
Blockchain Integration: Utilizes blockchain to store and verify authentication data.
Ether Transactions: Users sign a contract by spending ether during registration.
Secure Login: Ensures secure login through the decentralized blockchain network.

Installation
Prerequisites
Node.js
Truffle
Ganache (for local blockchain development)
MetaMask (for interacting with the blockchain)
Backend Setup
Clone the repository:
git clone 
cd graphical-password-authentication/backend

Blockchain Setup
Install Truffle and Ganache globally:
npm install -g truffle ganache-cli
Start Ganache:

bash
Copy code
ganache-cli
Compile and migrate the smart contracts:

bash
Copy code
truffle compile
truffle migrate
Configure MetaMask to connect to the local blockchain (http://127.0.0.1:8545).

Run Project:
npm install
cd src
truffle build
truffle migrate --reset
npm run start  



Usage
Open the frontend in your browser (usually at http://localhost:3000).
Register by creating a graphical password using the image grid and sign the contract using MetaMask.
Log in using your graphical password.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License.

Contact
If you have any questions or suggestions, feel free to reach out to [manishdhakane25@gmail.com].
