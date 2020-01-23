/**
 * configuration for Nuxt.js
 */
export default {

    server: {
        // port: 3000, // default is 3000
        host: '0.0.0.0' // default is localhost
    },

    buildModules: [
        // load the nuxtjs vutify-module
        // https://github.com/nuxt-community/vuetify-module
        '@nuxtjs/vuetify',
        // Axios module.
        '@nuxtjs/axios',
        // Auth module.
        '@nuxtjs/auth'
    ],

    /**
     * options for auth module.
     */
    auth: {
        strategies: {
            // disable local scheme.
            local: false,

            // config the auth0 scheme.
            auth0: {
                domain: 'games-leocorn.auth0.com',
                client_id: 'tLZ6wcgl6vS3mKnp7pTaMSTTCnmuLzRx'
            }
        }
    },
    
    /**
     * config router to globally enable authentication.
     * We could disable the auth in an individual page by
     * set the auth to false
     */
    router: {
        middleware: ['auth']
    },

    /**
     * options to set up vuetify, details on page
     *  - https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {

        // we could set up default assets here.
        // By default, automatically handle Roboto font & Material Design Icons
    }
}
