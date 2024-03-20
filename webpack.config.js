const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  watch: process.env.NODE_ENV === 'production' ? false : true,
  entry: './src/simple-marquee.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'simple-marquee.min.js',
    library: {
      name: 'SimpleMarquee',
      type: 'umd',
    },
  },
}