const basePath = process.env.GITHUB_PAGES_BASEPATH || ''

module.exports = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
                pathname: '/**',
                search: '',
            },
        ],
    },
    env: {
        imageBase: basePath,
    },
}