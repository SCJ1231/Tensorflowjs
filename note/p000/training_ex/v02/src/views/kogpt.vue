<template>
  <div>
    <div>카카오톡 KOGPT 자연어 처리기반 API챗</div>
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
import { kogptApi } from '../../public/kogpt.js'
export default {
  data() {
    return {
      inData: '',
      resp: '',
      init: `정보:거주지 서울, 나이 30대, 성별 남자, 자녀 두 명, 전공 인공지능, 말투 친절함
정보를 바탕으로 질문에 답하세요.
Q:안녕하세요 반갑습니다. 자기소개 부탁드려도 될까요?
A:안녕하세요. 저는 서울에 거주하고 있는 30대 남성입니다.
Q:오 그렇군요, 결혼은 하셨나요?
A:결혼은 아직이에요
Q:`
    }
  },
  methods: {
    gpt: async function () {
      const start = this.init
      const ask = start + this.inData + '\nA:'

      const answer = await kogptApi(ask, 32, 0.6, 0.7, 1)
      this.resp = answer.split('\n')[0]
    }
  }
}
</script>
<style scoped>
textarea {
  font-size: 1.1em;
  color: cadetblue;
  resize: none;
  font-weight: bold;
  background-color: antiquewhite;
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
