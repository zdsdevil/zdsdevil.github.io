/**
 * Created by Administrator on 2016/8/1.
 */
(function() {
  $('#fullpage').fullpage();

  var myBirth = new Date('1989-09-23');
  var exp = new Date('2014-01-01');
  var curTime = new Date();
  var expText;

  $(".age").text(curTime.getFullYear() - myBirth.getFullYear());

  if((curTime.getMonth() - exp.getMonth()) >= 6 ) {
    expText = '半';
  } else {
    expText = '';
  }
  $(".exp").text(curTime.getFullYear() - exp.getFullYear() + '年' + expText);
})();
