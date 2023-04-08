# Web3-Based Voting Application

This is a web3-based voting application that operates using smart contracts created on the Polygon blockchain. The application is built with TypeScript, React, Javascript, HTML, CSS, and Solidity. The idea behind this application is to allow users to register and receive their votes, while preserving anonymity and ensuring security.

## Fist look at the application
![Alt Text](./src/images/app-demo-gif.gif)
- Webapp starts with a login screen
- User is prompted to create account or login 
- Login is handled with MagicLink sent to email
- Non-custodial voting wallet is provision for all new accounts
- Login action will trigger a 6 digit access code emailed to user
- Correct code entry will allow the user to access their voting wallet

## Utility 
Users register and receive their votes via SmartContract on Polygon blockchain. Users will be able to use passwordless Web3 & Web2 onboarding and authentication using email only authentication (magic link with magic.js). The app will allows users to gain access to a secure, non-custodial voting 'wallet' where they will be able to anonymously cast their votes. Election results are traceable on the blockchain to allow for complete transparency of the election process. Blockchain will allow for traceability of total number of casted votes, total number of people voted - however a complete anonymity will be preserved when voting whilst strict access control will ensure that only users with access to their email addresses will gain access to the non-custodial voting wallets.  

## Features
- Web3 and Web2 passwordless onboarding and authentication using email only authentication (magic link approach)
- Secure, non-custodial voting "wallet" where users can anonymously cast their votes
- Election results are traceable on the blockchain to ensure transparency of the election process
- Traceability of the total number of casted votes and total number of people who voted
- Strict access control to ensure that only users with access to their email addresses can gain access to the non-custodial voting wallets

## Technologies Used
- TypeScript
- React
- Javascript
- HTML
- CSS
- Solidity
- Polygon Blockchain

## Getting Started
To run the application, you will need to install the necessary dependencies by running:
`npm install`
Then, start the application by running:
`npm start`

## Contributing
Contributions to this project are welcome from the Election Project members.
Currently we are not accepting contributions from non-project members

If you would like to contribute, please fork the repository and create a pull request.
