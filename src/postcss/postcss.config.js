module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-custom-media')({ importFrom: [
                './global/media-queries.css'
            ]}),
        require('postcss-combine-duplicated-selectors'),
        require('node-css-mqpacker'),
        require('postcss-add-root-selector')({ rootSelector: 'body'}),
        require('postcss-d-ts'),
        require('cq-prolyfill/postcss-plugin')()
    ]
}