
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/juanfervelandiag/soltech_services/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/juanfervelandiag/soltech_services"
  },
  {
    "renderMode": 2,
    "route": "/juanfervelandiag/soltech_services/favorites"
  },
  {
    "renderMode": 2,
    "route": "/juanfervelandiag/soltech_services/contact"
  },
  {
    "renderMode": 2,
    "route": "/juanfervelandiag/soltech_services/admin"
  },
  {
    "renderMode": 2,
    "route": "/juanfervelandiag/soltech_services/services"
  },
  {
    "renderMode": 1,
    "route": "/juanfervelandiag/soltech_services/service/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2825, hash: '4c8d729752995d89a632148416ad427a6675a311c887c6bf1cf3d1e9257e233a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1030, hash: '39d144a5990b4be747165fb2a8b1c52f5bccb424694a948faa362e5e91b33c53', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'favorites/index.html': {size: 23896, hash: '7614f3ecbdcab86e0b33a8a743abcdc0fba0ef0d7d58ddede31e2f4ec3e578d0', text: () => import('./assets-chunks/favorites_index_html.mjs').then(m => m.default)},
    'index.html': {size: 42541, hash: '5f3b617c456490d617c5c4577e18f3329742757efe7b951f901cc2d24a2728a4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 44118, hash: 'ca942bb6e1ea40b0bf09cd830197b3585cdeacca325b70fc4d87b6a50c826185', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 31357, hash: '3cfb06ee5fd09378c87d76267e5d60c2d78e634084aa1d4ca39208815a2f57d4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 45233, hash: 'f47b3b6f48523fb004340d0aa6564165d8c2cdffd34a58c37c852120d2b7eaa7', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'styles-N4MM2MOX.css': {size: 15451, hash: 'drD1uk0rXV0', text: () => import('./assets-chunks/styles-N4MM2MOX_css.mjs').then(m => m.default)}
  },
};
