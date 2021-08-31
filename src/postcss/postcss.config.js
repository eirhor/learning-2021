module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-custom-media')({ importFrom: [
                {
                    customMedia: {
                        '--landscape': '(orientation: landscape)',
                        '--medium': '(min-width: 640px)',
                        '--large': '(min-width: 1024px)',
                        '--large-landscape': '(min-width: 1024px and orientation: landscape)',
                        '--xlarge': '(min-width: 2560px)'
                    }
                },
            ]})
    ]
}