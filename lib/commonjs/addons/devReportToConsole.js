"use strict";

var _runtimeConfig = require("../runtimeConfig");

(0, _runtimeConfig.updateRuntime)({
  reportMissingTranslation: messageId => console.log("i18n pass-through applied for id: ".concat(messageId)),
  reportLoadingLocale: (loaderName, uri) => console.log("".concat(loaderName, " loader is loading locale data from \"").concat(uri, "\""))
});
//# sourceMappingURL=devReportToConsole.js.map