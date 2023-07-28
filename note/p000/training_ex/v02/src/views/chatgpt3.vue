<template>
  <div>
    <div>OpenAI 자연어 처리기반 GPT3.5 turbo 챗</div>
    <hr />
    <textarea
      disabled
      name=""
      id=""
      cols="30"
      rows="10"
      :value="resp"
    ></textarea>
    <br />
    <input
      @keyup.enter="gpt()"
      v-model="inData"
      placeholder="질문할 내용입력하기"
    />
    <button @click="gpt()">묻기</button>
  </div>
</template>
<script>
import { kogptApi } from '../../public/chatgpt3.js'
export default {
  data() {
    return {
      inData: '',
      resp: ''
    }
  },
  methods: {
    gpt: async function () {
      const ask = this.inData
      const answer = await kogptApi(ask, 32, 0.6, 0.7, 1, ask)
      this.resp = answer
    }
  }
}
</script>
<style scoped>
textarea {
  font-size: 1.1em;
  color: rgb(195, 240, 241);
  resize: none;
  font-weight: bold;
  background-color: rgb(56, 67, 114);
}
input {
  width: 210px;
  height: 30px;
}
button {
  width: 52px;
  height: 35px;
}
</style>
