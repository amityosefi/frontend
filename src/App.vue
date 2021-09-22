<template>
  <div id="app">
    <router-view />
    <binning />
    </div>
</template>

<script>
import binning from "./Components/binning";
export default {
  name: 'app',
  components: {
    binning
  },
}

</script>

<style>

</style>