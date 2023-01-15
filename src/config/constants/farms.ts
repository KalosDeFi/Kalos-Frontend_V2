import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'XALO',
    lpAddresses: {
      97: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      56: '0xE9E9b8001d86C36F971d046D64983738599C7385',
    },
    token: serializedTokens.xkalo,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 5,
    v1pid: 5,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xb7758728a4838Ec79d1eD57a5bFC1517C3488983',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3,
    v1pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
      56: '0x1C60Ec7fcDb05c2c5592c1d2dE2ee551AfC48f0c',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  //    * V3 by order of release (some may be out of PID order due to multiplier boost)

  {
    pid: 3,
    v1pid: 3,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x436e40801083B254f0e9c4b1116F97585d0a24d5',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 99,
    lpSymbol: 'XCN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF01eD80d46759c0cf6A3e9c66856017d81284962',
    },
    token: serializedTokens.xcn,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },

  {
    pid: 23,
    v1pid: 293,
    lpSymbol: 'UST-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x05faf555522Fa3F93959F86B41A3808666093210',
    },
    token: serializedTokens.ust,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 22,
    v1pid: 285,
    lpSymbol: 'BTCST-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xB2678C414ebC63c9CC6d1a0fC45f43E249B50fdE',
    },
    token: serializedTokens.btcst,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 21,
    v1pid: 284,
    lpSymbol: 'LTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x71b01eBdDD797c8E9E0b003ea2f4FD207fBF46cC',
    },
    token: serializedTokens.ltc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 20,
    v1pid: 283,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 19,
    v1pid: 282,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
    },
    token: serializedTokens.dai,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 18,
    v1pid: 276,
    lpSymbol: 'VAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x133ee93FE93320e1182923E1a640912eDE17C90C',
    },
    token: serializedTokens.vai,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 17,
    v1pid: 268,
    lpSymbol: 'SXP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xD8E2F8b6Db204c405543953Ef6359912FE3A88d6',
    },
    token: serializedTokens.sxp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 16,
    v1pid: 270,
    lpSymbol: 'INJ-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1BdCebcA3b93af70b58C41272AEa2231754B23ca',
    },
    token: serializedTokens.inj,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 15,
    v1pid: 268,
    lpSymbol: 'UNI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x014608E87AF97a054C9a49f81E1473076D51d9a3',
    },
    token: serializedTokens.uni,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 14,
    v1pid: 265,
    lpSymbol: 'XRP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x03F18135c44C64ebFdCBad8297fe5bDafdBbdd86',
    },
    token: serializedTokens.xrp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 13,
    v1pid: 264,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 12,
    v1pid: 263,
    lpSymbol: 'ALPHA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xACF47CBEaab5c8A6Ee99263cfE43995f89fB3206',
    },
    token: serializedTokens.alpha,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 11,
    v1pid: 262,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 10,
    v1pid: 261,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 9,
    v1pid: 260,
    lpSymbol: 'XVS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7EB5D86FD78f3852a3e0e064f2842d45a3dB6EA2',
    },
    token: serializedTokens.xvs,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 8,
    v1pid: 259,
    lpSymbol: 'TWT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3DcB1787a95D2ea0Eb7d00887704EeBF0D79bb13',
    },
    token: serializedTokens.twt,
    quoteToken: serializedTokens.wbnb,
  },

  {
    pid: 6,
    v1pid: 257,
    lpSymbol: 'LINK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x824eb9faDFb377394430d2744fa7C42916DE3eCe',
    },
    token: serializedTokens.link,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 5555,
    v1pid: 255,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF',
    },
    token: serializedTokens.dot,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 4,
    v1pid: 253,
    lpSymbol: 'ADA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x28415ff2C35b65B9E5c7de82126b4015ab9d031F',
    },
    token: serializedTokens.ada,
    quoteToken: serializedTokens.wbnb,
  },
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
