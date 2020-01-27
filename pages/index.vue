<template lang="pug">
v-container(grid-list-md text-center)

  h1 Hello Games!

  v-chip(
    v-if="$auth.loggedIn"
    color="primary"
    v-text="$auth.user.name"
  )

  h3(v-if="$auth.loggedIn") {{ email }}
</template>

<script>
export default {

    // set the layout, the file name in layouts folder.
    layout: 'vuetify',

    name: 'GameHomepage',

    auth: false,
    
    computed: {

        email() {
            console.log(this.$auth.user);
            return this.$auth.user.email;
        }
    }
}
</script>
