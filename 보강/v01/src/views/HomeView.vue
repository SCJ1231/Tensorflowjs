<template>
  <div>
    <p>특강 part. chart</p>
    <button @click="choice = 'ex1'">예제1</button>
    <button @click="choice = 'ex2'">예제2</button>
    <button @click="e3">예제3</button>
    <button @click="e4">예제4</button>
  </div>
  <div>
    <component :is="choice"></component>
  </div>
</template>
<script>
import ex1 from '@/components/ex1.vue'
import ex2 from '@/components/ex2.vue'
import ex3 from '@/components/ex3.vue'
import ex4 from '@/components/ex4.vue'
export default {
  name: 'home',
  data() {
    return {
      choice: 'ex1'
    }
  },
  methods: {
    e3: function () {
      this.choice = 'ex3'
    },
    e4: function () {
      this.choice = 'ex4'
    }
  },
  components: {
    ex1,
    ex2,
    ex3,
    ex4
  }
}
</script>
<style></style>
