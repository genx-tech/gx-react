import Runtime from '../Runtime';
export default (t => {
  Runtime.log('warning', () => "i18n pass-through applied for id: ".concat(t));
  return t;
});
//# sourceMappingURL=passThrough.js.map