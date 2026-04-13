
export default {
  basePath: 'https://github.com/juanfervelandiag/soltech_services',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
