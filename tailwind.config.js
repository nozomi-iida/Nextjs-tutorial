// tailwind.config.js
module.exports = {
  //↓使用していないcssを取り除く？
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.js',
    './components/**/*.js',
  ],
  // ...
};
