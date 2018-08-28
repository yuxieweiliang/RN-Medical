import _ from "lodash";
import containerTheme from "./Container";
import variable from "./../variables";

export default (variables = variable) => {
  const theme = {
    variables,

    "NativeBase.Container": {
      ...containerTheme(variables)
    },

    /*"NativeBase.Content": {
      ...contentTheme(variables)
    },

    "NativeBase.Footer": {
      ...footerTheme(variables)
    },

    "NativeBase.Tabs": {
      flex: 1
    },

    "NativeBase.Header": {
      ...headerTheme(variables)
    },

    "NativeBase.Button": {
      ...buttonTheme(variables)
    },

    "NativeBase.Title": {
      ...titleTheme(variables)
    },

    "NativeBase.Card": {
      ...cardTheme()
    },*/
  };

  const cssifyTheme = (grandparent, parent, parentKey) => {
    _.forEach(parent, (style, styleName) => {
      // console.log('styleName', styleName);
      // console.log('parentKey', parentKey);
      if (
        styleName.indexOf(".") === 0 &&
        parentKey &&
        parentKey.indexOf(".") === 0
      ) {
        if (grandparent) {
          if (!grandparent[styleName]) {
            grandparent[styleName] = {};
          } else {
            grandparent[styleName][parentKey] = style;
          }
        }
      }
      if (style && typeof style === "object") {
        cssifyTheme(parent, style, styleName);
      }
    });
  };

  cssifyTheme(null, theme, null);

  return theme;
};
