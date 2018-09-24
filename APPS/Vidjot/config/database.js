/**
 * PRIMARY FILE FOR DATABASE CONFIG
 */

if (process.env.NODE_ENV === 'production') {
  module.exports = { mongoURI: 'mongodb://Roger:Roger_101@ds113443.mlab.com:13443/vidjot_prod' }
} else {
  module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' }
}