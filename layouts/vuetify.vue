<template lang="pug">
// Simple layout for Vuetify playground
v-app
  v-app-bar(color='indigo' dark fixed app dense)
    v-app-bar-nav-icon/
    v-toolbar-title Games for fun
    v-spacer
    v-btn(icon)
      v-icon mdi-home
    // sign in button for not logged in user.
    v-btn(
      v-if="!$auth.loggedIn" 
      color='indigo'
      depressed
      @click="login"
    )
      | Sign In
    v-btn(
      v-if="$auth.loggedIn" 
      color="indigo"
      depressed
    )
      v-avatar(
        size="33"
      )
        img(:src="$auth.user.picture")
        v-icon mdi-menu-down


  v-content
    Nuxt/

  v-footer(color="indigo" app padless)
    v-layout(justify-center row wrap)
      v-flex(py-3 text-center white--text xs12)
        | &copy;{{new Date().getFullYear()}} - <strong>Leocornus LTD.</strong>
</template>

<script>
export default {
    methods: {
        login: function() {

            return this.$auth.loginWith('auth0')
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>
