
/**
 * Created by Administrator on 2016/9/23.
 */
(function() {
  $("#preview").click(function() {
    $(".add").trigger("click");
  });
  $(".chun").click(function() {
    var num = parseInt($(this).find("span").attr('data-num'));
    $(this).find("span").text(num+1).attr('data-num',num+1);
    var chun = $(".chun-pic").clone();
    $("#preview").append(chun);
    random_pos(chun);
  });
  var random_pos = function(chun) {
    var width = $("#preview")
    $(chun).css({
      top: Math.random()*200 + 'px',
      left: Math.random()*200 + 'px',
      width: '20px'
    })
  }
})();