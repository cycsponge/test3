// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js
const path = require('path');
module.exports = function (ctx) {
    return {
        // app boot file (/src/boot)
        // --> boot files are part of "main.js"
        // https://quasar.dev/quasar-cli/cli-documentation/boot-files
        boot: ['i18n', 'axios'],

        // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
        css: ['app.scss'],

        // https://github.com/quasarframework/quasar/tree/dev/extras
        extras: [
            // 'ionicons-v4',
            // 'mdi-v4',
            'fontawesome-v5',
            // 'eva-icons',
            // 'themify',
            // 'line-awesome',
            // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

            'roboto-font', // optional, you are not bound to it
            'material-icons' // optional, you are not bound to it
        ],
        moduleNameMapper: {
            '^@/(.*)$': '<rootDir>/src/$1'
        },

        // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
        framework: {
            iconSet: 'material-icons', // Quasar icon set
            lang: 'zh-hant', // Quasar language pack
            cssAddon: true,
            // Possible values for "all":
            // * 'auto' - Auto-import needed Quasar components & directives
            //            (slightly higher compile time; next to minimum bundle size; most convenient)
            // * false  - Manually specify what to import
            //            (fastest compile time; minimum bundle size; most tedious)
            // * true   - Import everything from Quasar
            //            (not treeshaking Quasar; biggest bundle size; convenient)
            all: false,

            components: [
                'QLayout',
                'QHeader',
                'QFooter',
                'QDrawer',
                'QPageContainer',
                'QPage',
                'QToolbar',
                'QToolbarTitle',
                'QBtn',
                'QIcon',
                'QList',
                'QItem',
                'QItemSection',
                'QItemLabel',
                'QExpansionItem',
                'QDate',
                'QSeparator',
                'QMenu',
                'QAvatar',
                'QInput',
                'QField',
                'QCard',
                'QCardSection',
                'QCardActions',
                'QForm',
                'QImg',
                'QSpinner',
                'QSpinnerHourglass',
                'QScrollArea',
                'QTable',
                'QTh',
                'QTr',
                'QTd',
                'QSpace',
                'QPagination',
                'QToggle',
                'QDialog',
                'QSelect',
                'QFile',
                'QPopupProxy',
                'QMarkupTable',
                'QInnerLoading',
                'QStepper',
                'QStep',
                'QStepperNavigation',
                'QBanner',
                'QOptionGroup',
                'QPopupEdit',
                'QChip',
                'QRadio',
                'QCircularProgress',
                'QTabs',
                'QTab',
                'QTabPanels',
                'QTabPanel'


            ],

            directives: ['Ripple', 'ClosePopup'],

            // Quasar plugins
            plugins: ['Dialog', 'Loading'

            ]
        },

        // https://quasar.dev/quasar-cli/cli-documentation/supporting-ie
        supportIE: true,

        // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
        build: {
            vueRouterMode: 'hash', // available values: 'hash', 'history'

            // showProgress: false,
            // gzip: true,
            // analyze: true,
            // Options below are automatically set depending on the env, set them if you want to override
            // preloadChunks: false,
            // extractCSS: false,

            // https://quasar.dev/quasar-cli/cli-documentation/handling-webpack

            extendWebpack(cfg) {
                cfg.resolve.alias = {
                    ...cfg.resolve.alias, // This adds the existing alias

                    // Add your own alias like this
                    '@': path.resolve(__dirname, './src')
                };
            }
        },

        // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
        devServer: {
            https: false,
            port: 7999,
            open: true // opens browser window automatically
        },

        // animations: 'all', // --- includes all animations
        // https://quasar.dev/options/animations
        animations: [],

        // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
        ssr: {
            pwa: false
        },

        // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
        pwa: {
            workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
            workboxOptions: {}, // only for GenerateSW
            manifest: {
                name: 'Summer Course',
                short_name: 'Quasar App',
                description: 'summer course',
                display: 'standalone',
                orientation: 'portrait',
                background_color: '#ffffff',
                theme_color: '#027be3',
                icons: [{
                    src: 'statics/icons/icon-128x128.png',
                    sizes: '128x128',
                    type: 'image/png'
                },
                {
                    src: 'statics/icons/icon-192x192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: 'statics/icons/icon-256x256.png',
                    sizes: '256x256',
                    type: 'image/png'
                },
                {
                    src: 'statics/icons/icon-384x384.png',
                    sizes: '384x384',
                    type: 'image/png'
                },
                {
                    src: 'statics/icons/icon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png'
                }
                ]
            }
        },

        // Full list of options: https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
        cordova: {
            // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
            id: 'org.cordova.quasar.app'
        },

        // Full list of options: https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
        capacitor: {
            hideSplashscreen: true
        },

        // Full list of options: https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
        electron: {
            bundler: 'packager', // 'packager' or 'builder'

            packager: {
                // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
                // OS X / Mac App Store
                // appBundleId: '',
                // appCategoryType: '',
                // osxSign: '',
                // protocol: 'myapp://path',
                // Windows only
                // win32metadata: { ... }
            },

            builder: {
                // https://www.electron.build/configuration/configuration

                appId: 'summercourse_front'
            },

            // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
            nodeIntegration: true,

            extendWebpack(cfg) {
                // do something with Electron main process Webpack cfg
                // chainWebpack also available besides this extendWebpack
            }
        }
    }
}