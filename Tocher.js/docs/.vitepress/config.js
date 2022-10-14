import {sidebar} from "./sidebar";
import {nav} from "./navbar";
export default {
  logo: '../icon.png',
  title: "Tocher.js",
  themeConfig: {
    logo: '../icon.png',
    siteTitle: "Tocher.js",
    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © ${new Date().getFullYear()} Masye`,
    },
    nav,
    sidebar,
  },
  carbonAds: {
    code: "your-carbon-code",
    placement: "your-carbon-placement",
  },
};

