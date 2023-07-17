// TensorFlow.js 라이브러리 가져오기
const tf = require("@tensorflow/tfjs");

const t1 = tf.tensor1d([1, 2, 3, 4]);
const t2 = tf.tensor1d([10, 20, 30, 40]);

t1.add(t2).print();
tf.mul(t1, t2).print();
t1.add(t2).log().square().round().print()