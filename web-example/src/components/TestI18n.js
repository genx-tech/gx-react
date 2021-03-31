import { useI18n } from '@genx/react/i18n';

export default function Test() {
    const __app = useI18n('app');

    return <div>{__app.t('hello')}</div>;
}
