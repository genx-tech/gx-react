import { updateRuntime } from '../runtimeConfig';

updateRuntime({
    reportMissingTranslation: (messageId) =>
        console.log(`i18n pass-through applied for id: ${messageId}`),
    reportLoadingLocale: (loaderName, uri) =>
        console.log(
            `${loaderName} loader is loading locale data from "${uri}"`
        ),
});
