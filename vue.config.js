module.exports = {
    runtimeCompiler: true,
    productionSourceMap: false,
    outputDir: "../HLP-studio-back/public",
    // devServer: {
    //     host: 'value-Estimator.local'
    // },
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/'
}