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
Directory Structure
lua
Copy code
├── backend
│   ├── middleware
│   │   └── auth.js
│   ├── models
│   │   ├── User.js
│   │   └── Password.js
│   ├── routes
│   │   ├── auth.js
│   │   └── password.js
│   └── server.js
├── frontend
│   └── src
│       ├── components
│       │   ├── Register.js
│       │   ├── Login.js
│       │   └── PasswordGrid.js
│       ├── context
│       │   ├── AuthContext.js
│       │   └── PasswordContext.js
│       └── App.js
├── .env
├── package.json
├── README.md
└── truffle-config.js
Installation
Prerequisites
Node.js
Truffle
Ganache (for local blockchain development)
MetaMask (for interacting with the blockchain)
Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/graphical-password-authentication.git
cd graphical-password-authentication/backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory with the following content:

makefile
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the backend server:

bash
Copy code
npm start
Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install dependencies:

bash
Copy code
npm install
Start the frontend server:

bash
Copy code
npm start
Blockchain Setup
Install Truffle and Ganache globally:

bash
Copy code
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

Usage
Open the frontend in your browser (usually at http://localhost:3000).
Register by creating a graphical password using the image grid and sign the contract using MetaMask.
Log in using your graphical password.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License.

Contact
If you have any questions or suggestions, feel free to reach out to [manishdhakane25.com].
