var abi = require('ethereumjs-abi')

var parameterTypes = ["address", "address"];
var parameterValues = ["0x99760F6d4D19cF41258c2B174F110786c55F9b5E", "0xd0a1e359811322d97991e03f863a0c30c2cf029c"];

var encoded = abi.rawEncode(parameterTypes, parameterValues);

console.log(encoded.toString('hex'));