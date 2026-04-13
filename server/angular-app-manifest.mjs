
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/soltech_services/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/soltech_services"
  },
  {
    "renderMode": 2,
    "route": "/soltech_services/favorites"
  },
  {
    "renderMode": 2,
    "route": "/soltech_services/contact"
  },
  {
    "renderMode": 2,
    "route": "/soltech_services/admin"
  },
  {
    "renderMode": 2,
    "route": "/soltech_services/services"
  },
  {
    "renderMode": 1,
    "route": "/soltech_services/service/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2790, hash: '459d3baf68a33edb4fa7e6ebc8f65e1daeebec8c90b4cb6915cb4069f32ecc56', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 995, hash: 'b8257c6233e4da0b6cc6be5a4c6f1cf1551f90265d48eca23fa1ef59fe24e4cd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 41771, hash: '376b3ff93e9e90cab7f65d76f5dd6b9d8fafdd126192b1b6d3933fceae8d5c84', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'favorites/index.html': {size: 23336, hash: '13a5b6c9f9d8fc797d6403de12a6d7bfa986de4334e4540c5b16db32ebf790bb', text: () => import('./assets-chunks/favorites_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30832, hash: '84d2458390803d3a5afc8192bce57a5bc04994150e2045c3f795355742dfd409', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 43593, hash: '6817675f2f2259cb08c9083fdff6536fdd3e2b74db86805040913c8b2a3e6fa9', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 44429, hash: '3ccbe64ea8acf2708f180b5266f304c79762e8ac8b520485e0ad85b6a4f705df', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'styles-N4MM2MOX.css': {size: 15451, hash: 'drD1uk0rXV0', text: () => import('./assets-chunks/styles-N4MM2MOX_css.mjs').then(m => m.default)}
  },
};
