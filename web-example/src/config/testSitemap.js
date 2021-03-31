const sitemap = [
    {
        path: '/',
        component: 'pages/guest/Login',
        exact: true,
    },
    {
        path: '/native-test',
        component: 'pages/guest/NativeTest',
    },
    {
        path: '/json-view-test',
        component: 'pages/guest/JsonViewTest',
    },
    {
        redirect: '/',
    },
];

export default sitemap;
