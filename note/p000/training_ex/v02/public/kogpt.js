import axios from 'axios'

export async function kogptApi(prompt, max_tokens = 32, temperature, topP, n) {
  const REST_API_KEY = process.env.VUE_APP_kogpt
  let rst = '생각중...'
  const url = '/v1/inference/kogpt/generation'

  const headers = {
    Authorization: 'KakaoAK ' + REST_API_KEY,
    'Content-Type': 'application/json'
  }
  const options = {
    url,
    method: 'POST',
    data: {
      prompt,
      max_tokens,
      temperature,
      top_p: topP,
      n
    },
    headers,
    responseType: 'json'
  }
  await axios(options).then((res) => {
    rst = res.data.generations[0].text
  })

  return rst
}
