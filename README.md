# Nyanswap

[![Actions Status](https://github.com/Nyanswap/nyanswap-core/workflows/CI/badge.svg)](https://github.com/Nyanswap/nyanswap-core/actions)

## Local Development

The following assumes the use of `node@>=10`.

## Install Dependencies

`yarn`

## Compile Contracts

`yarn compile`

## Run Tests

`yarn test`

## Deploy

### 1. (Optional, if want to deploy locally) Launch a local Ethereum blockchain by using *ganache*

`npx ganache-cli --deterministic`

### 2. Deploy by *penZeppelin CLI tool*

`npx oz deploy`

### 3. Follow OpenZeppelin prompt

## Interact with deployed smart contract

### 1. Sending Transactions

Modifies the blockchain state, need to send a transaction to the contract to execute it

`npx oz send-tx`

### 2. Querying State

A query of blockchain state, so we don’t need to send a transaction: a static call will suffice

`npx oz call`