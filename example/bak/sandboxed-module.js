module.exports = {
    require: function (path, options) {

        if( path.indexOf('bignumber') ){
            return require('./lib/1.0.0/bignumber');
        }
        return null;
        // console.log(path)
    }
};