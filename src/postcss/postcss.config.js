const basePlugins = [
    require('autoprefixer'),
    require('postcss-custom-media')({ importFrom: [
            './global/media-queries.css'
        ]}),
    require('postcss-combine-duplicated-selectors'),
    require('node-css-mqpacker'),
    require('postcss-add-root-selector')({ rootSelector: 'body'}),
    require('postcss-d-ts')
];

function getPlugins() {
    if (process.env.NODE_ENV === 'production') {
        return [...basePlugins,
            require('cssnano')({
                preset: 'default'
            })]
    }

    return basePlugins;
}

module.exports = {
    plugins:getPlugins(),
    sourceMap: true
}