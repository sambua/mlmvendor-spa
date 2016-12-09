/**
 * Created by rashad on 12/9/16.
 */
if(process.env.NODE_ENV === 'productions') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
