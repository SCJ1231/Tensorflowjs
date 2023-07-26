/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

export const IRIS_CLASSES = [
  'Iris-setosa ', // 0
  'Iris-versicolor', // 1
  'Iris-Virginica' // 2
]
export const IRIS_NUM_CLASSES = IRIS_CLASSES.length

/* 다음 아이리스 데이터를 넣으시오. */
const IRIS_DATA = [ // 꽃잎 길이, 꽃잎 너비, 꽃받침 길이, 꽃받침 너비, 클래스(0~2)

]

function convertToTensors(data, targets, testSplit) {
  const numExamples = data.length
  if (numExamples !== targets.length) {
    throw new Error('데이터와 타깃의 길이가 다릅니다.')
  }

  const indices = []
  for (let i = 0; i < numExamples; ++i) {
    indices.push(i)
  }
  /* 데이터 셔플 */

  const shuffledData = []
  const shuffledTargets = []
  for (let i = 0; i < numExamples; ++i) {
    shuffledData.push(data[indices[i]])
    shuffledTargets.push(targets[indices[i]])
  }

  // `testSplit`를 기준으로 데이터를 훈련 세트와 테스트 세트로 나눕니다.
  const numTestExamples = Math.round(numExamples * testSplit)
  const numTrainExamples = numExamples - numTestExamples

  const xDims = shuffledData[0].length

  /* 데이터 원핫 내용추가 */

  /* 데이터나누기 */
  const xTrain = '???'
  const xTest = '???'
  const yTrain = '???'
  const yTest = '???'
  return ''
}

export function getIrisData(testSplit) {
  return tf.tidy(() => {
    const dataByClass = []
    const targetsByClass = []
    for (let i = 0; i < IRIS_CLASSES.length; ++i) {
      dataByClass.push([])
      targetsByClass.push([])
    }
    for (const example of IRIS_DATA) {
      const target = example[example.length - 1]
      const data = example.slice(0, example.length - 1)
      dataByClass[target].push(data)
      targetsByClass[target].push(target)
    }

    const xTrains = []
    const yTrains = []
    const xTests = []
    const yTests = []
    for (let i = 0; i < IRIS_CLASSES.length; ++i) {
      const [xTrain, yTrain, xTest, yTest] = convertToTensors(
        dataByClass[i],
        targetsByClass[i],
        testSplit
      )
      xTrains.push(xTrain)
      yTrains.push(yTrain)
      xTests.push(xTest)
      yTests.push(yTest)
    }

    const concatAxis = 0
    return [
      tf.concat(xTrains, concatAxis),
      tf.concat(yTrains, concatAxis),
      tf.concat(xTests, concatAxis),
      tf.concat(yTests, concatAxis)
    ]
  })
}
