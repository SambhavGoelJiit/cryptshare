// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.7.0 <0.9.0;

contract Upload {
    struct Access {
        address user;
        bool access;        
    }
    mapping (address => string[]) value;
    mapping (address => mapping(address=>bool)) ownership;
    mapping (address => Access[]) accessList;
    mapping (address => mapping (address => bool)) prevData;

    function add(address _user, string calldata url) external {
        value[_user].push(url);  
    }
    //Function to give access to a user
    function allow(address user) external {
        ownership[msg.sender][user] = true;

        //to not forget an already added user, store them in prevData
        //this allows us to give access again to user xyz from who we revoked the access 
        if (prevData[msg.sender][user] == true) {
            for (uint i = 0; i < accessList[msg.sender].length; i++) {
                if(accessList[msg.sender][i].user == user){
                    accessList[msg.sender][i].access = true;
                }              
            }
        }
        else{
            accessList[msg.sender].push(Access(user,true));
            prevData[msg.sender][user] = true;
        }
    }

    //Fucntion to revoke access from a user
    function disallow(address user) external {
        ownership[msg.sender][user] = false;
        //accessList[msg.sender].push(Access(user,false));
        for (uint i = 0; i < accessList[msg.sender].length; i++) {
            if(accessList[msg.sender][i].user == user){
                accessList[msg.sender][i].access = false;
            }
        }
    }

    function display(address _user) external view returns(string[] memory) {
        require(_user == msg.sender || ownership[_user][msg.sender], "You do NOT have access");
        return value[_user];
    }

    function shareAccess() public view returns(Access[] memory) {
        return accessList[msg.sender];
    }

}