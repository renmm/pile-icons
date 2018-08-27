const path = require('path');

const iconPath = path.join(process.cwd(), 'dist');

module.exports = {
  title: 'pile-icons',
  themeConfig: {
    repo: 'renmm/pile-icons',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' },
      { text: 'Examples', link: '/examples' },
      { text: 'Guide', link: '/guide' },
    ],
    serviceWorker: {
      updatePopup: true,
    },
    lastUpdated: 'Last Updated',
  },
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
      config.resolve.alias = { ...config.resolve.alias, 'pile-icons': iconPath };

      config.module.rules = config.module.rules.filter(rule => !~rule.test.toString().indexOf('svg'));

      config.module.rules.push({
        test: /\.svg$/,
        include: [iconPath],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: '[name]',
            },
          },
        ],
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: [iconPath],
        loader: 'url-loader?limit=10000&minetype=image/svg+xml',
      });
    }
  },
};
