import _ from "lodash";
import containerTheme from "./Container";
import variables from "./../variables";

export default {
  variables,

  Container: {
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
}
