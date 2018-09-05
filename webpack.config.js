const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const Blockchain = path.resolve(__dirname, 'src/lib/1.1.0/blockchain');
const BigNumber = path.resolve(__dirname, 'src/lib/1.0.0/bignumber');
const Event = path.resolve(__dirname, 'src/lib/1.0.0/event');
const LocalContractStorage = path.resolve(__dirname, 'src/lib/1.0.0/storage');
const Uint = path.resolve(__dirname, 'src/lib/1.0.5/uint');

const config = {
    mode: 'development',
    entry: './src/nvm.js',
    devtool: false,
    resolve: {
        alias: {
            'GlobalVars': path.resolve(__dirname, 'src/native/GlobalVars'),
            '_native_crypto': path.resolve(__dirname, 'src/native/_native_crypto'),
            '_native_event_trigger': path.resolve(__dirname, 'src/native/_native_event_trigger'),
            '_native_storage_handlers': path.resolve(__dirname, 'src/native/_native_storage_handlers'),
            '_native_blockchain': path.resolve(__dirname, 'src/native/_native_blockchain'),
            'NativeStorage': path.resolve(__dirname, 'src/native/NativeStorage'),
            'BigNumber': BigNumber,
        }
    },
    module: {
        rules: [

            {
                test: Event,
                use: "imports-loader?_native_event_trigger=_native_event_trigger"
            },

            {
                test: BigNumber,
                use: "imports-loader?GlobalVars=GlobalVars"
            },

            {
                test: Blockchain,
                use: "imports-loader?_native_blockchain=_native_blockchain,BigNumber=BigNumber"
            },

            {
                test: LocalContractStorage,
                use: "imports-loader?_native_storage_handlers=_native_storage_handlers,NativeStorage=NativeStorage"
            },

            {
                test: Uint,
                use: "imports-loader?BigNumber=BigNumber"
            }

        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'nvm.js',
        library: 'NVM',
        libraryTarget: 'umd'
        // libraryTarget: 'commonjs2'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                BROWSER_ENV: JSON.stringify(true)
            }
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    }
};

module.exports = config;
