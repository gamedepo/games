<template lang="pug">
v-container(grid-list-md)
  h1 Hello {{ name }}!
</template>

<script>
export default {

    // set the layout, the file name in layouts folder.
    layout: 'vuetify',

    name: 'PugPlayGroundj',

    auth: false,

    data() {
        return {
            name: 'Pug World'
        }
    }
}
</script>

<style lang="sass">
.red
  color: red
</style>
