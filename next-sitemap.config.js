/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://thecreatormd.com',
  generateRobotsTxt: false, // We have our own robots.ts
  generateIndexSitemap: false, // We have our own sitemap.ts
  exclude: ['/admin', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://thecreatormd.com/sitemap.xml',
    ],
  },
  // Since we're using Next.js app router with our own sitemap.ts,
  // we'll disable next-sitemap generation to avoid conflicts
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
}