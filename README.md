# CryptShare: A Decentralized Secure Document Sharing Platform

## Project Overview
CryptShare is a decentralized platform for secure document sharing, leveraging blockchain technology (Ethereum) and IPFS (InterPlanetary File System). It ensures secure document management by eliminating reliance on centralized servers, enhancing security, transparency, and user control.

## Team
- **Sambhav Goel** (Enrollment No.: 21104033)
- **Akshita Gupta** (Enrollment No.: 21104053)
- **Megha Chauhan** (Enrollment No.: 21104057)
- **Supervisor:** Dr. Arpita Jadhav Bhatt

## Table of Contents
1. [Introduction](#introduction)
2. [Problem Statement](#problem-statement)
3. [Significance/Novelty of the Problem](#significancenovelty-of-the-problem)
4. [Empirical Study](#empirical-study)
5. [Solution Approach](#solution-approach)
6. [Literature Survey](#literature-survey)
7. [Requirement Analysis](#requirement-analysis)
8. [Design and Implementation](#design-and-implementation)
9. [Testing](#testing)
10. [Findings, Conclusions, and Future Work](#findings-conclusions-and-future-work)
11. [References](#references)

## Introduction
CryptShare aims to revolutionize document sharing by providing a decentralized, secure, and transparent platform. By utilizing Ethereum smart contracts and IPFS, CryptShare addresses security and control issues inherent in centralized systems.

## Problem Statement
Centralized document sharing platforms are prone to data breaches, unauthorized access, and lack of transparency. CryptShare addresses these issues by offering a decentralized solution that enhances security, user control, and accountability.

## Significance/Novelty of the Problem
CryptShare offers a unique approach to document sharing by combining blockchain technology and decentralized storage, promoting security, transparency, and user empowerment.

## Empirical Study
An empirical study of existing document sharing platforms (e.g., Google Drive, OneDrive, Dropbox) highlighted their reliance on centralized servers, posing significant security and privacy risks. CryptShare's decentralized approach mitigates these risks.

## Solution Approach
### Blockchain Technology
CryptShare utilizes Ethereum smart contracts to manage document metadata, access control, and transactions, ensuring immutability and transparency.

### IPFS Integration
Documents are stored on IPFS, a peer-to-peer hypermedia protocol, providing decentralized and distributed storage. IPFS hashes are used to reference documents on the blockchain.

### User Interface
A user-friendly interface allows users to upload, share, and manage documents securely. The interface interacts with Ethereum and IPFS to provide seamless functionality.

## Literature Survey
The literature survey included analysis of key papers on decentralized storage and blockchain technology. The survey helped identify the limitations of existing solutions and the potential of blockchain and IPFS in addressing these limitations.

## Requirement Analysis
### Functional Requirements
- **User Registration and Authentication:** Secure user registration and login.
- **Document Upload and Storage:** Secure document upload to IPFS and storage reference on Ethereum.
- **Access Control:** Granular access control managed by smart contracts.
- **Audit Trail:** Immutable audit trail for document access and modifications.

### Non-functional Requirements
- **Security:** End-to-end encryption and secure key management.
- **Scalability:** Efficient handling of a large number of documents and users.
- **Usability:** Intuitive user interface and seamless user experience.

## Design and Implementation
### System Architecture
CryptShare's architecture consists of three main components:
1. **Frontend:** Built with React.js, providing a user-friendly interface.
2. **Smart Contracts:** Written in Solidity, deployed on the Ethereum blockchain for managing document metadata and access control.
3. **IPFS Storage:** Documents are stored on IPFS, with hashes stored on the blockchain.

### Smart Contracts
- **Document Manager Contract:** Handles document uploads, stores IPFS hashes, and manages access control.
- **User Manager Contract:** Manages user registration, authentication, and permissions.

### Cryptographic Hashing
Documents are hashed using SHA-256 before being uploaded to IPFS. The resulting hash is stored on the blockchain, ensuring data integrity and immutability.

### End-to-End Encryption
Documents are encrypted using AES-256 before being uploaded to IPFS. The encryption keys are managed securely to ensure only authorized users can decrypt the documents.

## Testing
### Testing Plan
- **Unit Testing:** Each smart contract function is tested individually using Truffle framework.
- **Integration Testing:** Testing the interaction between the frontend, smart contracts, and IPFS.
- **User Acceptance Testing:** Ensuring the platform meets user requirements and provides a seamless experience.

### Component Decomposition
- **Frontend:** React components and Redux for state management.
- **Smart Contracts:** Document Manager and User Manager contracts.
- **IPFS Integration:** IPFS API for document storage and retrieval.

## Findings, Conclusions, and Future Work
### Findings and Results
- **Performance:** CryptShare demonstrated efficient document upload, storage, and retrieval with minimal latency.
- **Security:** The platform successfully ensured data integrity, confidentiality, and access control.

### Conclusion
CryptShare successfully addresses the limitations of centralized document sharing platforms by leveraging blockchain and decentralized storage, providing enhanced security and user control.

### Future Work
- **Scalability Improvements:** Optimizing smart contracts and IPFS integration for large-scale deployments.
- **Additional Features:** Implementing advanced access control mechanisms, such as role-based access control (RBAC).
- **Mobile Application:** Developing a mobile version of CryptShare for enhanced accessibility.


## Acknowledgement
We would like to express our gratitude to our project supervisor, Dr. Arpita Jadhav Bhatt, and Jaypee Institute of Information Technology, Noida, for the opportunity to work on this project. We also thank our friends for their support during the project.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
