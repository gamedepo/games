<template lang="pug">
div
  h1 Hello Nuex.js

  v-chip(
    v-if="$auth.loggedIn"
    color="primary"
    v-text="$auth.user.name"
  )

  h3(v-if="$auth.loggedIn") {{ email }}
</template>

<script>
export default {

    auth: false,
    
    computed: {
        email() {

            console.log(this.$auth.user);
            return this.$auth.user.email;
        }
    }
}
</script>
