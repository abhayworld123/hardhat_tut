//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint totalWaves;
    uint private seed;

    event Newwave (address indexed from , uint timestamp , string message);

    struct Wave{
        address waver;
        string message;
        uint timestamp;    
    }

    Wave[] waves;

    constructor() payable{
        console.log("Yo yo, I am a contract");
    }

    function wave(string memory _message) public {
        totalWaves += 1;
        console.log("%s is waved ", msg.sender , _message );

        waves.push(Wave(msg.sender , _message, block.timestamp));
        
        emit Newwave(msg.sender, block.timestamp, _message);

        //generate new sdo no
        uint randomno = (block.difficulty + block.timestamp + seed) % 100;

        console.log("random generated no ", randomno);

        seed = randomno;
        if(randomno < 50){
            console.log("%s won",msg.sender);
        uint prizeAmount = 0.0001 ether;
        require(prizeAmount <= address(this).balance, "Contract does not have money ohh");
        (bool success, )= (msg.sender).call{value : prizeAmount}("");
        require(success, "Failed to withdraw money from contracts");

        }




    } 

     function getAllWaves() view public returns (Wave[] memory)  {
      
       
        return waves;
    } 

    function getTotalWaves() view public returns (uint)  {
      
        console.log(" We have %s total waves ", totalWaves );
        return totalWaves;
    } 
}

