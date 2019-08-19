$(function () {
  var sepalLength = $('#sepalLength');
  var sepalWidth = $('#sepalWidth');
  var petalLength = $('#petalLength');
  var petalWidth = $('#petalWidth');
  var iris = '';
  var btnPredict = $('#btnPredict');
  var btnLIFF = $('#btnLIFF');
  var answer = $('#answer');

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
});