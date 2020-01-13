module.exports =
  process.env.NODE_ENV === 'production'
    ? require('./express_prod')
    : require('./express_dev');
