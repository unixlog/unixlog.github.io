module.exports = {
    title: 'UNIX Log',
    description: 'Заметки системного администратора',
    base: '/',
    dest: 'public',
    head: [
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700,700i&subset=cyrillic' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&subset=cyrillic' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Mono:400,700&subset=cyrillic' }]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        editLinks: false,
        nav: [],
        sidebar: {
            '/': [
                {
                    title: 'Введение',
                    collapsable: false,
                    children: [
                        '/about'
                    ]
                },
                {
                    title: 'Установка',
                    collapsable: false,
                    children: [
                        '/install/'
                    ]
                },
                {
                    title: 'Обновление',
                    collapsable: false,
                    children: [
                        '/upgrade/'
                    ]
                }
            ]
        }
    }
};