module.exports = {
  title: 'Victor Tran',
  tagline: 'Victor Tran',
  url: 'https://vicr123.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.png',
  organizationName: 'vicr123', // Usually your GitHub org/user name.
  projectName: 'vicr123.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Victor Tran',
      logo: {
        alt: 'Victor Tran',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'projects',
          label: 'Projects'
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/vicr123',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Connect',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.vicr123.com/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCCD3mx0y2KSbD0eFJ0WGOBg',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/vicr12345',
            },
          ],
        },
        {
          title: 'Websites',
          items: [
            {
              label: 'Help',
              href: 'https://help.vicr123.com/'
            },
            {
              label: 'Translations',
              href: 'https://translate.vicr123.com/'
            },
            {
              label: 'Entertaining Games',
              href: 'https://entertaining.games/'
            },
            {
              label: 'Quad',
              href: 'https://quad.vicr123.com/'
            },
            {
              label: 'Old Website',
              href: 'https://old.vicr123.com/',
            },
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/vicr123',
            },
          ],
        },
      ],
      copyright: `Copyright © Victor Tran ${new Date().getFullYear()}. Built with Docusaurus. Text available under CC-BY-SA, v4.0 or later.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © Victor Tran ${new Date().getFullYear()}. Text available under CC-BY-SA, v4.0 or later.`
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
