export default {
    initialRouteName: 'Main',
    screens: [
        {
            name: 'Main',
            // navigator options
            options: {
                headerShown: false,
            },
            component: 'Navigator',
            componentProps: {
                type: 'bottomTab',
                initialRouteName: 'Home',
                // screen options
                screenOptions: {
                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarStyle: {
                        height: 88,
                        paddingTop: 4,
                    },
                },
                screens: [
                    {
                        name: 'Home',
                        options: {
                            title: 'Home',
                            tabBarIcon: {
                                type: 'ionicon',
                                name: 'logo-react',
                            },
                        },
                        component: 'SampleScreen',
                    },
                    {
                        name: 'Me',
                        options: {
                            title: 'Me',
                            tabBarIcon: {
                                type: 'ionicon',
                                name: 'person-outline',
                                focused: {
                                    name: 'person',
                                },
                            },
                        },
                        component: 'MeStack',
                    },
                ],
            },
        },
    ],
};
