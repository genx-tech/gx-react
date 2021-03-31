import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { withObserver } from '@genx/react/hoc';
import { flex } from '@genx/react/utils';

import guestStore from 'stores/guestStore';

const LoginForm = ({ guestStore }) => {
    const [loginError, setLoginError] = useState(false);

    const onFinish = (values) => {
        const { username, password } = values;
        login(username, password);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const login = async (username, password) => {
        console.log(username, password);
        try {
            setLoginError(false);
            await guestStore.login_(username, password);
        } catch (error) {
            setLoginError(error.message || error);
        }
    };

    return (
        <Form
            name="login"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username',
                    },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password',
                    },
                ]}
                style={{ marginBottom: 8 }}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <div style={{ ...flex.hBox() }}>
                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <span style={{ padding: 4 }}>
                    <Link className="login-form-forgot" to="/forget-password">
                        Forgot password
                    </Link>
                </span>
            </div>

            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Log in
                </Button>
                {
                    <Typography.Text type={loginError ? 'danger' : null}>
                        {loginError || ' '}
                    </Typography.Text>
                }
            </Form.Item>
        </Form>
    );
};

export default withObserver({ guestStore })(LoginForm);
