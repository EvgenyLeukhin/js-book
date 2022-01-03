const links = {
  header: [
    { id: 0, title: 'JS',      to: '/js' },
    { id: 1, title: 'React',   to: '/react' },
    { id: 2, title: 'API',     to: '/api' },
    { id: 3, title: 'STATE',   to: '/state' },
    { id: 4, title: 'Webpack', to: '/wp' },
    { id: 5, title: 'NextJs',  to: '/nextjs' },
    { id: 6, title: 'NodeJS',  to: '/nodejs' },
    { id: 7, title: 'Other',   to: '/other' },
  ],

  js: [
    { id: 0,  title: 'Import/Export', to: '/js/export', },
    { id: 1,  title: 'Class',         to: '/js/class' },
    { id: 2,  title: 'Object',        to: '/js/object' },
    { id: 3,  title: 'Function',      to: '/js/function' },
    { id: 4,  title: 'Function II',   to: '/js/function2' },
    { id: 5,  title: 'Array',         to: '/js/array' },
    { id: 6,  title: 'Array II',      to: '/js/array2' },
    { id: 7, title: 'DOM',            to: '/js/dom', divider: true },
    { id: 8, title: 'Events',         to: '/js/events' },
    { id: 9, title: 'Forms',          to: '/js/forms' },
    { id: 10, title: 'Storage',       to: '/js/storage' },
    { id: 11, title: 'Script Tag',    to: '/js/script', divider: true },
    { id: 12, title: 'Var/Let/Const', to: '/js/vars' },
    { id: 13, title: 'Types',         to: '/js/types' },
    { id: 14, title: 'String',        to: '/js/string' },
    { id: 15, title: 'Number',        to: '/js/number' },
    { id: 16, title: 'Boolean',       to: '/js/boolean' },
    { id: 17, title: 'Null & Un-ed',  to: '/js/null' },
    { id: 18, title: 'Math(+ / -)',   to: '/js/math' },
    { id: 19, title: 'Logic',         to: '/js/logic' },
    { id: 20, title: 'Cycles',        to: '/js/cycles' },
  ],

  react: [
    { id: 0,  title: 'Template',     to: '/react/template' },
    { id: 1,  title: 'Components',   to: '/react/components' },
    { id: 2,  title: 'JSX',          to: '/react/jsx' },
    { id: 3,  title: 'State',        to: '/react/state' },
    { id: 4,  title: 'Props',        to: '/react/props' },
    { id: 5,  title: 'PropTypes',    to: '/react/proptypes' },
    { id: 6,  title: 'Styling',      to: '/react/styling' },
    { id: 7,  title: 'Images',       to: '/react/images' },
    { id: 8,  title: 'Output Data',  to: '/react/output-data' },
    { id: 9,  title: 'Maping Data',  to: '/react/maping-data' },
    { id: 10, title: 'Routing',      to: '/react/routing' },
    { id: 11, title: 'Switcher',     to: '/react/switcher' },
    { id: 12, title: 'Transitions',  to: '/react/transitions' },
    { id: 13, title: 'Refs X',       to: '/react/refs' },
    { id: 14, title: 'Forms',        to: '/react/forms' },
    { id: 15, title: 'Events',       to: '/react/events' },
    { id: 16, title: 'Libs',         to: '/react/libs' },
    { id: 17, title: 'Typescript',   to: '/react/typescript' },
    { id: 18, title: 'Hooks',        to: '/react/hooks' },
    { id: 19, title: 'GatsbyJS',     to: '/react/gatsby-js' },
  ],

  api: [
    { id: 0,  title: 'API',         to: '/js/api' },
    { id: 1,  title: 'Callback',    to: '/js/callback' },
    { id: 2,  title: 'Promise',     to: '/js/promise' },
    { id: 3, title: 'Promise II',   to: '/js/promise2' },
    { id: 4, title: 'Fetch, Axios', to: '/js/fetch' },
  ],

  state: [
    { id: 0, title:  'Provider & enh.', to: '/state/provider-enhancer' },
    { id: 1, title:  'Root reducer',    to: '/state/root-reducer' },
    { id: 2, title:  'Single reducer',  to: '/state/single-reducer' },
    { id: 3, title:  'Connect',         to: '/state/connect' },
    { id: 4, title:  'Actions',         to: '/state/actions' },
    { id: 5, title:  'Server API',      to: '/state/server-api' },
    { id: 6, title:  'Fetch data',      to: '/state/fetch-data' },
    { id: 7, title:  'Lifecycle',       to: '/state/lifecycle' },
    { id: 8, title:  'MobX-1',          to: '/state/mobx-1', divider: true },
    { id: 9, title:  'MobX-2',          to: '/state/mobx-2' },
    { id: 10, title: 'MobX-3',          to: '/state/mobx-3' },
  ],

  webpack: [
    { id: 0,  title: 'Install',        to: '/wp/install' },
    { id: 1,  title: 'Config',         to: '/wp/config' },
    { id: 2,  title: 'JS-Babel',       to: '/wp/js' },
    { id: 3,  title: 'CSS',            to: '/wp/css' },
    { id: 4,  title: 'HTML',           to: '/wp/html' },
    { id: 5,  title: 'Images',         to: '/wp/img' },
    { id: 6,  title: 'Fonts',          to: '/wp/fonts' },
    { id: 7,  title: 'Markdown',       to: '/wp/md' },
    { id: 8,  title: 'Plugins',        to: '/wp/plugins' },
    { id: 9,  title: 'ESLint',         to: '/wp/eslint' },
    { id: 10, title: 'Editor',         to: '/wp/editor' },
    { id: 11, title: 'Structure',      to: '/wp/structure' },
    { id: 12, title: 'SPA Template',   to: '/wp/spa' },
    { id: 13, title: 'MPA Template',   to: '/wp/mpa' },
    { id: 14, title: 'CreateReactApp', to: '/wp/create-react-app' },
  ],

  nextjs: [
    { id: 0, title: 'Install', to: '/nextjs/install' },
    { id: 1, title: 'Pages',   to: '/nextjs/pages' },
    { id: 2, title: 'Styling', to: '/nextjs/styling' },
    { id: 3, title: 'Routing', to: '/nextjs/routing' },
    { id: 4, title: 'Seo',     to: '/nextjs/seo' },
    { id: 5, title: 'Api',     to: '/nextjs/api' },
    { id: 6, title: 'Express', to: '/nextjs/express' },
  ],

  nodejs: [
    { id: 0, title: 'Install / Nvm', to: '/nodejs/install' },
    { id: 1, title: 'Npm / Yarn',    to: '/nodejs/npm-yarn' },
    { id: 2, title: 'Package.json',  to: '/nodejs/package-json' },
    { id: 3, title: 'Browser-sync',  to: '/nodejs/browser-sync' },
    { id: 4, title: 'Express',       to: '/nodejs/express' },
  ],

  other: [
    { id: 0, title: 'jQuery', to: '/other/jquery' },
    { id: 1, title: 'StimulusJs', to: '/other/stimulus' },
  ],
};

export default links;
