import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.nsdemosvg',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;