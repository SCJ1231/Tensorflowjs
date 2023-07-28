<template>
  <div>
    <div id="display"></div>
    <button @click="main"></button>
    <div>{{ result }}</div>
  </div>
</template>
<script>
const tf = this.$tf
const mobilenet = this.$nobilenet
export default {
  name: 'cam',
  data() {
    return {
      result: '스샷을 찍어 이미지 분석을 시작하세요.'
    }
  },
  methods: {
    main: function () {
      console.log(tf)
      console.log(mobilenet)
    }
  }
}
</script>
<style></style>
