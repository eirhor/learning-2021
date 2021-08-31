module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-custom-media')({ importFrom: [
                {
                    customMedia: {
                        '--mobile-landscape': '(orientation: landscape)',
                        '--medium': '(min-width: 640px)',
                        '--tablet-landscape': '(min-width: 1024px and orientation: landscape)',
                        '--laptop': '(min-width: 1070px)',
                        '--desktop': '(min-width: 1920px)',
                        '--monitor': '(min-width: 2560px)'
                    }
                },
            ]})
    ]
}