import axios from 'axios'

export async function kogptApi(prompt, max_tokens = 32, temperature, topP, n, text) {
  const REST_API_KEY = process.env.VUE_APP_chatgpt3
  let rst = '생각중...'
  const url = 'https://api.openai.com/v1/chat/completions'

  const headers = {
    Authorization: `Bearer ${REST_API_KEY}`,
    'Content-Type': 'application/json'
  }
  const options = {
    url,
    method: 'POST',
    data: {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.'
        },
        {
          role: 'user',
          content: text
        }
      ]
    },
    headers,
    responseType: 'json'
  }
  await axios(options).then((res) => {
    console.log(res)
    rst = res.data.choices[0].message.content
  })

  return rst
}
