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
        path: '/json-view',
        component: 'pages/guest/JsonViewTest',
    },
    {
        path: '/json-form',
        component: 'pages/guest/JsonFormTest',
    },
    {
        path: '/json-form-view',
        component: 'pages/guest/JsonReadOnlyFormTest',
    },
    {
        redirect: '/',
    },
];

export default sitemap;
