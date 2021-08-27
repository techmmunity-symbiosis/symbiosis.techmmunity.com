const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Techmmunity Symbiosis",
  tagline: "The Ultimate OM For All Databases",
  url: "https://symbiosis.techmmunity.com.br",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "techmmunity", // Usually your GitHub org/user name.
  projectName: "symbiosis", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Symbiosis OM",
      logo: {
        alt: "Symbiosis OM",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "introduction",
          position: "left",
          label: "Docs",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/techmmunity/symbiosis",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/techmmunity-symbiosis",
            },
            {
              label: "Discord",
              href: "https://discord.gg/5hPnJzzAe2",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/techmmunity/symbiosis",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Techmmunity, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/techmmunity/symbiosis.techmmunity.com/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/techmmunity/symbiosis.techmmunity.com/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-BR"],
  },
};
