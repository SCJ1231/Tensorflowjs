const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const result_label = document.getElementById("result_label");

navigator.mediaDevices
  .getUserMedia({ video: true, audio: false })
  .then(function (stream) {
    video.srcObject = stream;
  });

posenet.load().then((model) => {
  console.log(model);
  video.onloadeddata = (e) => {
    console.log("정상");
    predict();
  };

  function predict() {
    model.estimateSinglePose(video).then((pose) => {
      canvas.width = video.width;
      canvas.height = video.height;
      drawKeypoints(pose.keypoints, 0.6, context);
      drawSkeleton(pose.keypoints, 0.6, context);
    });
    requestAnimationFrame(predict);
  }
});
/* 기본 예시 복붙으로 사용하기 */
const color = "blue";
const boundingBoxColor = "red";
const lineWidth = 2;
function toTuple({ y, x }) {
  return [y, x];
}

function drawPoint(ctx, y, x, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawSegment([ay, ax], [by, bx], color, scale, ctx) {
  ctx.beginPath();
  ctx.moveTo(ax * scale, ay * scale);
  ctx.lineTo(bx * scale, by * scale);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;
  ctx.stroke();
}

function drawSkeleton(keypoints, minConfidence, ctx, scale = 1) {
  const adjacentKeyPoints = posenet.getAdjacentKeyPoints(
    keypoints,
    minConfidence
  );
  adjacentKeyPoints.forEach((keypoints) => {
    drawSegment(
      toTuple(keypoints[0].position),
      toTuple(keypoints[1].position),
      color,
      scale,
      ctx
    );
  });
}

function drawKeypoints(keypoints, minConfidence, ctx, scale = 1) {
  for (let i = 0; i < keypoints.length; i++) {
    const keypoint = keypoints[i];
    if (keypoint.score < minConfidence) {
      continue;
    }
    const { y, x } = keypoint.position;
    drawPoint(ctx, y * scale, x * scale, 3, color);
  }
}