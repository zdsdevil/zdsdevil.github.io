/**
 * Created by Administrator on 2016/8/1.
 */
(function() {
  $('#fullpage').fullpage();

  var audio = document.getElementById('audio');
  audio.oncanplay = playmusic();

  var firsttaped = 0;
  function playmusic(){
    $('html').on('touchstart',function(){
      if(firsttaped == 0){
        audio.play();
        firsttaped = 1;
      }
    });
  };

  var myBirth = new Date('1989-09-23');
  var exp = new Date('2014-6-1');
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