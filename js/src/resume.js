/**
 * Created by Administrator on 2016/8/1.
 */
(function() {
  $('#fullpage').fullpage();

  $(".play").click(function() {
    $("audio").play();
  });

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
  var typewriter=document.querySelector(".typewriter"),
    code=typewriter.innerHTML,
    pos=0,
    len=code.length;
  typewriter.innerHTML="";
  typewriter.style.display="block";
  function typewriting(){
    pos++;
    if(pos<=len)
    {
      switch(code.charAt(pos))
      {
        case "<":
          pos=code.indexOf(">",pos);
          break;
        case "&":
          pos=code.indexOf(";",pos);
          break;
      }
      typewriter.innerHTML=code.substring(0,pos);
      setTimeout(typewriting,100);
    }
    else
    {
      typewriter.classList.add("gameover");
    }
  }
  typewriting();
})();