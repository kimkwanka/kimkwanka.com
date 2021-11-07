module.exports = {
  reactStrictMode: true,
  // https://stackoverflow.com/questions/58784444/nextjs-export-is-broken-no-css-no-js
  // To enable exported out folder to work locally uncomment next line
  // assetPrefix: './',
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/kimkwanka/image/upload/',
  },
};
