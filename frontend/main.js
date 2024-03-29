$(function () {
  var sepalLength = $('#sepalLength');
  var sepalWidth = $('#sepalWidth');
  var petalLength = $('#petalLength');
  var petalWidth = $('#petalWidth');
  var iris = '';
  var btnPredict = $('#btnPredict');
  var btnLIFF = $('#btnLIFF');
  var answer = $('#answer');

  liff.init(function (data) {
    console.log(data.context.userId);
    answer.html(answer.html() + '<br>' + data.context.userId);
  });

  var getIrisData = function () {
    iris = sepalLength.val() + ',' + sepalWidth.val() + ',' + petalLength.val() + ',' + petalWidth.val();
    console.log(iris);
  }

  sepalLength.on('change', getIrisData);
  sepalWidth.on('change', getIrisData);
  petalLength.on('change', getIrisData);
  petalWidth.on('change', getIrisData);

  btnPredict.click(function () {
    getIrisData();
    $.ajax({
      url: "https://serene-caverns-64322.herokuapp.com/api?iris=" + iris,
      success: function (response) {
        console.log(response);
        answer.html(response.result);
      }
    });
  });

  btnLIFF.click(function () {
    console.log(answer.html());
    liff.sendMessages([
      {
        type: 'text',
        text: 'RGY 主人您好！',
      },
      {
        type: 'text',
        text: answer.html(),
      },
      {
        type: "image",
        originalContentUrl: "https://s3.amazonaws.com/cdn.brecks.com/images/350/63822.jpg",
        previewImageUrl: "https://s3.amazonaws.com/cdn.brecks.com/images/350/63822.jpg"
      }
    ]);
    liff.closeWindow();
  });
});