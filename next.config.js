const path = require('path');

module.exports = {
  sassOptions: {
    //↓..を使わなくてもimportできるようになる(scssファイルでのみ？)
    includePaths: [path.join(__dirname, 'styles')],
  },
};
