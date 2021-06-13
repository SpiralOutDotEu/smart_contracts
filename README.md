use [Ganache](https://www.trufflesuite.com/ganache) to create a workspace


# Compile Contract
```
$ npx truffle compile
```
# Deploy migrations
```
$ npx truffle migrate --network development
```
result:
```
Compiling your contracts...
===========================
> Compiling ./contracts/Box.sol
> Artifacts written to /home/v-dev/WebstormProjects/smart_contructs/build/contracts
> Compiled successfully using:
   - solc: 0.8.5+commit.a4f2e591.Emscripten.clang



Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x5b0d53341abfdd691599eeb64cded1032a120df470f059e2bad3b83655d83265
   > Blocks: 0            Seconds: 0
   > contract address:    0x2176C89A801d11BB759d6e3fea8AB25Cd44e39B6
   > block number:        1
   > block timestamp:     1623605142
   > account:             0x3830f5855ba936d0FfA2c8cFF01096946c907f74
   > balance:             99.99589426
   > gas used:            205287 (0x321e7)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00410574 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00410574 ETH


2_deploy.js
===========

   Deploying 'Box'
   ---------------
   > transaction hash:    0x33df2718617d523893e75db6cc42b0843c4a104def2485287318cdcbba52d525
   > Blocks: 0            Seconds: 0
   > contract address:    0x601c4bD26e88E34281cE8015A4303E23D2ACD4ee
   > block number:        3
   > block timestamp:     1623605143
   > account:             0x3830f5855ba936d0FfA2c8cFF01096946c907f74
   > balance:             99.98548964
   > gas used:            477882 (0x74aba)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00955764 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00955764 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.01366338 ETH
```

# Start development instance
## Interact with console
```
$ npx truffle console --network development
truffle(development)> box = await Box.deployed()
undefined
```

## Sending transactions
```
truffle(development)> await box.store(42)
{ tx:
   '0x5d4cc78f5d5eac3650214740728192ac760978e261962736289b10da0ec0ea43',
  receipt:
   { transactionHash:
      '0x5d4cc78f5d5eac3650214740728192ac760978e261962736289b10da0ec0ea43',
...
       event: 'ValueChanged',
       args: [Result] } ] }......
```

## Querying state
```
truffle(development)> await box.retrieve()

<BN: 2a>
```

```
truffle(development)> (await box.retrieve()).toString()

'42'
```

# Run a script
```
$ npx truffle exec --network development ./scripts/index.js

Using network 'development'.

[ '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
  '0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0',
  ... ]
```

# Test
```
$ npx truffle test
Using network 'development'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



  Contract: Box
    ✓ retrieve returns a value previously stored (71ms)


  1 passing (167ms)
```