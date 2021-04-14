// SPDX-License-Identifier: OneMillionWallets

pragma solidity ^0.8.0;

//This contract is purely an experimental contract
contract AvaWallet {
    string publicAddress;
    string mnemonic;
    string privateKeyJsonHash;
    
    
    mapping (string => string) mnemonicPubKey;
    mapping (string => string) pubKeyPrivKeyHash;
    
    constructor(string memory _publicAddress, string memory _mnemonic, string memory _privateKeyJsonHash){
        publicAddress = _publicAddress;
        mnemonic= _mnemonic;
        privateKeyJsonHash = _privateKeyJsonHash;
        
        mnemonicPubKey[mnemonic] = publicAddress;
        pubKeyPrivKeyHash[publicAddress] = privateKeyJsonHash;
    }
    
    
    function getPublicKeyFromMnemonic(string memory _mnemonic) public view returns(string memory) {
        return mnemonicPubKey[_mnemonic];
    }
    
    function getPrivateKeyHashFromPublicKey(string memory _publicAddress) public view returns(string memory) {
        return pubKeyPrivKeyHash[_publicAddress];
    }
}
