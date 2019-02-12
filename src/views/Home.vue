<template>
  <div class="container">
    <item v-for="story in stories" :key="story.data.id" :story="story"></item>
  </div>
</template>

<script>
import Item from '@/views/Item.vue'

export default {
  name: 'home',
  components: {
    'item': Item
  },
  data: function () {
    return {
      err: '',
      stories: this.$store.state.topStories
    }
  },
  created: function () {
    if (this.$store.state.topStories.length === 0) this.$store.dispatch('fetch_top_stories')
  }
}
</script>
