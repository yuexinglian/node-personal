module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3098',
                changeOrigin: true,
                pathRewrite: {'^/api': ''}
            }
        }
    }
};
