export default function ErrorFallback({
  error,
  resetErrorBoundary
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "alert"
  }, /*#__PURE__*/React.createElement("p", null, "Something went wrong:"), /*#__PURE__*/React.createElement("pre", null, error.message), /*#__PURE__*/React.createElement("button", {
    onClick: resetErrorBoundary
  }, "Try again"));
}
//# sourceMappingURL=ErrorFallback.js.map