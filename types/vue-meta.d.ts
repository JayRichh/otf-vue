declare module 'vue-meta' {
  import { Plugin } from 'vue';
  const metaPlugin: Plugin;
  export const createMetaManager: () => any;
  export const useMeta: (meta: Record<string, any>) => void;
  export default metaPlugin;
}
