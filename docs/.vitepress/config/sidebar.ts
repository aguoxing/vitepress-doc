import DefaultTheme from 'vitepress/theme'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/posts/base/': [
        {
            text: 'java',
            items: [
                { text: 'java1', link: '/posts/base/java/java第一篇' },
                { text: 'java2', link: '/posts/base/java/java第二篇' }
            ],
            collapsible: true,
            collapsed: true
        },
        {
            text: 'vue',
            items: [
                { text: 'vue1', link: '/posts/base/vue/vue1' },
                { text: 'vue2', link: '/posts/base/vue/vue2' },
            ],
            collapsible: true,
            collapsed: false
        }
    ],
    '/posts/pro/': [
        {
            text: 'java3',
            items: [
                { text: 'java', link: '/posts/base/java/index' },
                { text: 'vue', link: '/posts/base/vue/index' },
            ]
        },
        {
            text: 'java3',
            items: [
                { text: 'java2', link: '/posts/base/java/index' },
                { text: 'vue2', link: '/posts/base/vue/index' },
            ]
        }
    ],
    '/posts/ruankao/': [
        {
            text: '软件设计师',
            items: [
                { text: '计算机组成与体系结构', link: '/posts/ruankao/softwaredesign/1-计算机组成与体系结构' },
                { text: '操作系统', link: '/posts/ruankao/softwaredesign/2-操作系统' }
            ]
        }
    ]
}

