module.exports = {
  title: 'gs的前端之旅',
  description: '1',
  serviceWorker: true, // 是否开启 PWA
  base: '/vuePress/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: 'vue', link: '/vue/' },
    ],
    sidebar:[
      {
        title: 'vue', // 侧边栏名称
        collapsable: true, // 可折叠
        children: [
          '/vue/', // 你的md文件地址
        ]
      }
    ]
  }
};
