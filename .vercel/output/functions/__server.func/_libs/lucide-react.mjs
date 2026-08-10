import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "./react+tanstack__react-query.mjs";
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mergeClasses = (...classes) =>
  classes
    .filter((className, index, array) => {
      return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    })
    .join(" ")
    .trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var toCamelCase = (string) =>
  string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
    p2 ? p2.toUpperCase() : p1.toLowerCase(),
  );
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hasA11yProp = (props) => {
  for (const prop in props)
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
  return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Icon = (0, import_react.forwardRef)(
  (
    {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      ...rest
    },
    ref,
  ) =>
    (0, import_react.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...(!children && !hasA11yProp(rest) && { "aria-hidden": "true" }),
        ...rest,
      },
      [
        ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
        ...(Array.isArray(children) ? children : [children]),
      ],
    ),
);
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) =>
    (0, import_react.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className,
      ),
      ...props,
    }),
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ArrowDown = createLucideIcon("arrow-down", [
  [
    "path",
    {
      d: "M12 5v14",
      key: "s699le",
    },
  ],
  [
    "path",
    {
      d: "m19 12-7 7-7-7",
      key: "1idqje",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ArrowRight = createLucideIcon("arrow-right", [
  [
    "path",
    {
      d: "M5 12h14",
      key: "1ays0h",
    },
  ],
  [
    "path",
    {
      d: "m12 5 7 7-7 7",
      key: "xquz4c",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var CircleQuestionMark = createLucideIcon("circle-question-mark", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "path",
    {
      d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
      key: "1u773s",
    },
  ],
  [
    "path",
    {
      d: "M12 17h.01",
      key: "p32p05",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Mail = createLucideIcon("mail", [
  [
    "path",
    {
      d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
      key: "132q7q",
    },
  ],
  [
    "rect",
    {
      x: "2",
      y: "4",
      width: "20",
      height: "16",
      rx: "2",
      key: "izxlao",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var MapPin = createLucideIcon("map-pin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "10",
      r: "3",
      key: "ilqhr7",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Menu = createLucideIcon("menu", [
  [
    "path",
    {
      d: "M4 5h16",
      key: "1tepv9",
    },
  ],
  [
    "path",
    {
      d: "M4 12h16",
      key: "1lakjw",
    },
  ],
  [
    "path",
    {
      d: "M4 19h16",
      key: "1djgab",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Phone = createLucideIcon("phone", [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var X = createLucideIcon("x", [
  [
    "path",
    {
      d: "M18 6 6 18",
      key: "1bl5f8",
    },
  ],
  [
    "path",
    {
      d: "m6 6 12 12",
      key: "d8bk6v",
    },
  ],
]);
//#endregion
export {
  Mail as a,
  ArrowDown as c,
  MapPin as i,
  Phone as n,
  CircleQuestionMark as o,
  Menu as r,
  ArrowRight as s,
  X as t,
};
