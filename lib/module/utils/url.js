import { dropIfEndsWith, ensureStartsWith } from './string';
export function join(base, extraPath) {
  return base ? extraPath ? dropIfEndsWith(base, '/') + ensureStartsWith(extraPath, '/') : base : extraPath;
}
//# sourceMappingURL=url.js.map