<template>
  <div class="Wokoo" v-if="show">
    <header class="Wokoo-header">
      <sell-list/>
    </header>
  </div>

</template>
<script>
import './app.less'
import logo from '../public/icon.jpg'
import SellList from "./SellList.vue";


export default {
  components: { SellList },
  data: function() {
    return {
      logo,
      show: true
    }
  },
  methods: {
    handleClose() {
      this.show = !this.show
    }
  }
}
</script>
<style scoped>
</style>
