import { useEffect, useState } from 'react';
import { ethers } from "ethers";
import Upload from "../../cryptshare-smart-contracts/artifacts/contracts/Upload.sol/Upload.json";
import FileUpload from "./components/FileUpload.jsx";
import Display from "./components/Display.jsx";
import Modal from "./components/Modal.jsx";
import './App.css';

function App() {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect( () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    //const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    const wallet = async () => {
      if(provider) {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        console.log(address);
        setAccount(address);
        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(signer);
      }
      else {
        alert("Metamask is not installed");
      }
    }
    provider && wallet()
  }, []);

  return (
    <>
    {!modalOpen && (
      <button className='share' onClick={()=>setModalOpen(true)}>Share</button>
    )}
    {
      modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )
    }
    <div className='App'>
       <h1 style={{color: "wheat"}}>CryptShare</h1>
       <div className="bg"></div>

       <p style={{color: "wheat"}}>
        Account : {account}
       </p>

       <FileUpload account={account} contract={contract}></FileUpload>
       <Display account={account} contract={contract}></Display>
    </div>
    </>
  )
}

export default App
