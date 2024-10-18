/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "http://test.vercel.app",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
