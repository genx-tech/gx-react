import { updateRuntime } from '../Runtime';
import 'antd/dist/antd.css';

const addon = {
    antdStyles: true,
};

updateRuntime(addon);

export default function initialize() {}
