module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-custom-media')({ importFrom: [
                './global/media-queries.css'
            ]})
    ]
}