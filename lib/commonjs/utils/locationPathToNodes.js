"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(fullPath) {
  let path = fullPath;
  let nodes = [path];
  let lastPos = path.lastIndexOf('/');

  while (lastPos > 0) {
    path = path.substr(0, lastPos);
    nodes.push(path);
    lastPos = path.lastIndexOf('/');
  }

  return nodes;
}
//# sourceMappingURL=locationPathToNodes.js.map