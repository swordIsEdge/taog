module.exports = (options, context, api) => {
    return {
        title: '丁阳子',
        description: 'Just playing around',
        theme: '@vuepress/theme-blog',
        themeConfig: {
            directories: [
                {
                    id: "note",
                    dirname: "_note",
                    title: "Note",
                    path: "/note/",
                    itemPermalink: "/note/:year/:month/:day/:slug",
                    pagination: {
                        lengthPerPage: 2,
                    },
                },
                {
                    id: "posts",
                    dirname: "_posts",
                    title: "Blog",
                    path: "/blog/",
                    itemPermalink: "/blog/:year/:month/:day/:slug",
                    pagination: {
                        lengthPerPage: 2,
                    },
                }
            ],
            nav: [

                {
                    text: "Blog",
                    link: "/blog/"
                },
                {
                    text: 'Tags',
                    link: '/tag/',
                },
                {
                    text: "笔记",
                    link: "/note/"
                }
            ]
// Please keep looking down to see the available options.
        }
    }
}