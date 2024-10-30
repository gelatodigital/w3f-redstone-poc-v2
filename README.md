
# Gelato Web3 functions <<-->> RedStone PoC

## Summary

Oracle that using RedStone and Gelato Web3 functions to:
- Push on-chain price if the price difference between stored and live price is gerater than 20%

## Demo
- Mumbai:
  - Smart Contract: [https://volmex.cloud.blockscout.com/address/0x5B91C8E7a2DEABC623E6Ab34E8c26F27Cc18bC66#code](https://volmex.cloud.blockscout.com/address/0x5B91C8E7a2DEABC623E6Ab34E8c26F27Cc18bC66#code)
  - Web3 Function: [https://app.gelato.network/functions/task/0xf6aff3d48021788b09b87ebe52158c6422f5a6c608b28fbbed2e451efb64462b:123420000588](https://app.gelato.network/functions/task/0xf6aff3d48021788b09b87ebe52158c6422f5a6c608b28fbbed2e451efb64462b:123420000588)

## Deploy your smart contract and web3 function
```
yarn run deploy 
```

## How to run

1. Install project dependencies:
```
yarn install
```

2. Create a `.env` file with your private config:
```
cp .env.example .env
```
You will need to input your `PROVIDER_URLS`, your RPC.


3. Test the  web3 function
```
npx w3f test web3-functions/redstone/index.ts --logs --chain-id=80001
```

4. Deploy the web3 function on IPFS
```
npx w3f deploy web3-functions/redstone/index.ts
```

 ✓ Web3Function deployed to ipfs.
 ✓ CID: QmbZTooFHkFY1Td1SFd1Mfp8RTzuUN3QKbw1csioBFEcFx

5. Create the task following the link provided when deploying the web3 to IPFS in our case:

Go to  https://app.gelato.network and input cid=QmbZTooFHkFY1Td1SFd1Mfp8RTzuUN3QKbw1csioBFEcFx

