import { useEffect } from "react";
import "./Modal.css";
const Modal = ({ setModalOpen, contract }) => {
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
    setModalOpen(false);
  };

  const handleDisallow = async () => {
    const address = document.querySelector(".address").value;
    await contract.disallow(address);
    setAccessList(
      accessList.map((item) => {
        if (item.user === address) {
          return { ...item, access: false };
        }
        return item;
      })
    );
  };

  const handleSelectChange = (event) => {
    const addressInput = document.querySelector(".address");
    let adString = event.target.value;
    let commaIdx = adString.indexOf(',');
    if(commaIdx !== -1){
      adString = adString.substring(0,commaIdx);
    }
    addressInput.value = adString;
  };

  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("option");
        e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
      }
    };
    contract && accessList();
  }, [contract]);
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">Share with</div>
          <div className="body">
            <input
              type="text"
              className="address"
              placeholder="Enter Address"
            ></input>
          </div>
          <form id="myForm">
            <select id="selectNumber" onChange={handleSelectChange}>
              <option className="address">People With Access</option>
            </select>
          </form>
          <div className="footer">
            <button onClick={() => {
                setModalOpen(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button onClick={() => sharing()}>Share</button>
            <button onClick={() => handleDisallow()}>Disallow</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;