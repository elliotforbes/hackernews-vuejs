<template>
  <div class="container">
    <item v-for="story in stories" :key="story.data.id" :story="story"></item>
  </div>
</template>

<script>
import Item from '@/views/Item.vue'

export default {
  name: 'New',
  components: {
    'item': Item
  },
  data: function () {
    return {
        err: '',
        stories: this.$store.state.newStories
    }
  },
  created: function () {
    if (this.$store.state.newStories.length === 0) this.$store.dispatch('fetch_new_stories')
  }
}
</script>
