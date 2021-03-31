import React from 'react';

import { Row, Col } from 'antd';

import LoginHeader from 'components/guest/LoginHeader';
import LoginForm from 'components/guest/LoginForm';

export default () => (
    <>
        <Row
            justify="center"
            align="middle"
            style={{ height: '100vh', overflow: 'hidden' }}
        >
            <Col span={5}>
                <LoginHeader />
                <LoginForm />
            </Col>
        </Row>
    </>
);
