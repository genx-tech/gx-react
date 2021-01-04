import { useI18n } from '@genx/react';

export default function Test() {
    const __app = useI18n('app');

    return <div>{__app.t('hello')}</div>;
}
