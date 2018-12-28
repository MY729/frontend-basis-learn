module.exports = {
  title: '林夕梦木子李',
  description: '前端基础学习进度规划',
  head: [
    ['link', { rel: 'icon', href: `/img/logo.ico` }]
  ],
  // 注入到当前页面的 HTML <head> 中的标签
  base: '/frontend/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  host: 'localhost',
  port: 7714,
  // 侧边栏
  themeConfig: {
    logo: '/img/header.png',
    // 导航栏
    sidebarDepth: 1, // 为2 则将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    docsRepo: 'MY729/blog/issues/new#',
    editLinks: true,
    editLinkText: '纠正问题/留言/交流',
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav:[
      { text: 'JavaScript', link: '/JavaScript/' }, // 内部链接 以docs为根目录
      { text: 'css', link: '/css/' }, // 内部链接 以docs为根目录
      { text: '网络', link: '/internet/' }, // 内部链接 以docs为根目录
      { text: '数据结构', link: '/DataStructure/' }, // 内部链接 以docs为根目录
      // 下拉列表
      {
        text: '拓展',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/MY729/frontend-basis-learn'},
          { text: '博客地址', link: 'https://my729.github.io/blog/'},
          { text: '花瓣地址', link: 'http://huaban.com/tj3aawhzdp/'}
        ]
      },
      { text: '纠正问题/留言/交流', link: 'https://github.com/MY729/frontend-basis-learn/issues/new' }, // 内部链接 以docs为根目录
    ],
    // 侧边栏
    sidebar: {
      '/JavaScript/': [
        '/JavaScript/', // accumulate文件夹的README.md 不是下拉框形式
      ],
      '/css/': [
        '/css/',
      ],
      '/internet/': [
        '/internet/',
      ],
      '/DataStructure/': [
        '/DataStructure/',
      ]
    }
  }
}
