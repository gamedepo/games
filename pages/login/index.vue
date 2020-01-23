<template lang="pug">
div
  h2 Login
  hr
  v-btn(@click="login") Login Auth0

  v-chip(
    v-if="$auth.loggedIn"
    color="primary"
    v-text="$auth.user"
  )
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
