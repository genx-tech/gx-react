import React from 'react';
import { Typography } from 'antd';
import Box from '@material-ui/core/Box';

const { Text } = Typography;

export default () => (
    <div style={{ marginBottom: 20 }}>
        <Box display="flex" flexDirection="row" alignItems="flex-end">
            <div style={{ marginLeft: -40 }}>
                <img src="images/logo.png" />
            </div>
            <Text style={{ marginLeft: -40, fontSize: 24 }} strong>
                Admin Portal
            </Text>
        </Box>
    </div>
);
