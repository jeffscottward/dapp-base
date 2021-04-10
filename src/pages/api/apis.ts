export default function handler(req, res) {
  res.status(200).json([
    {
      id: 'Uniswap',
      package: {
        domains: {
          ens: 'ens/api.uniswap.eth',
          hns: 'hns/api.uniswap.eth',
        },
      },
      metadata: {
        name: 'Uniswap',
        description: 'Eiusmod non culpa id aute Lorem incididunt voluptate.',
        icon: 'icon.ico',
        banner: 'banner.png',
        logo: 'logo.svg',
        links: [
          {
            name: 'Source Code',
            icon: 'github.ico',
            link: 'github.com/uniswap/web3api',
          },
          {
            name: 'Etherscan',
            icon: 'etherscan.ico',
            link: 'https://etherscan.io/token/0x00000000000000000000000000000000000',
          },
        ],
      },
    },
    {
      id: 'Curve',
      package: {
        domains: {
          ens: 'ens/api.Curve.eth',
          hns: 'hns/api.Curve.eth',
        },
      },
      metadata: {
        name: 'Curve',
        description: 'Eiusmod non culpa id aute Lorem incididunt voluptate.',
        icon: 'icon.ico',
        banner: 'banner.png',
        logo: 'logo.svg',
        links: [
          {
            name: 'Source Code',
            icon: 'github.ico',
            link: 'github.com/Curve/web3api',
          },
          {
            name: 'Etherscan',
            icon: 'etherscan.ico',
            link: 'https://etherscan.io/token/0x00000000000000000000000000000000000',
          },
        ],
      },
    },
    {
      id: '1Inch',
      package: {
        domains: {
          ens: 'ens/api.1Inch.eth',
          hns: 'hns/api.1Inch.eth',
        },
      },
      metadata: {
        name: '1Inch',
        description: 'Eiusmod non culpa id aute Lorem incididunt voluptate.',
        icon: 'icon.ico',
        banner: 'banner.png',
        logo: 'logo.svg',
        links: [
          {
            name: 'Source Code',
            icon: 'github.ico',
            link: 'github.com/1Inch/web3api',
          },
          {
            name: 'Etherscan',
            icon: 'etherscan.ico',
            link: 'https://etherscan.io/token/0x00000000000000000000000000000000000',
          },
        ],
      },
    },
    {
      id: 'Filecoin',
      package: {
        domains: {
          ens: 'ens/api.Filecoin.eth',
          hns: 'hns/api.Filecoin.eth',
        },
      },
      metadata: {
        name: 'Filecoin',
        description: 'Eiusmod non culpa id aute Lorem incididunt voluptate.',
        icon: 'icon.ico',
        banner: 'banner.png',
        logo: 'logo.svg',
        links: [
          {
            name: 'Source Code',
            icon: 'github.ico',
            link: 'github.com/Filecoin/web3api',
          },
          {
            name: 'Etherscan',
            icon: 'etherscan.ico',
            link: 'https://etherscan.io/token/0x00000000000000000000000000000000000',
          },
        ],
      },
    }
  ])
}
