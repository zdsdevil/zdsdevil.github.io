/** * Created by devil_zds on 2017/2/7. */(function() {    $('#fullpage').fullpage({        anchors: ['page1', 'page2', 'page3', 'page4','page5'],        afterRender: function() {        },        afterLoad: function(anchorLink, index) {            if(index === 2) {                setTimeout(function() {                    var typewriter = document.querySelector(".typewriter"),                        code=typewriter.innerHTML,                        pos=0,                        len=code.length;                    typewriter.innerHTML="";                    typewriter.style.display="block";                    function typewriting(){                        pos++;                        if(pos<=len)                        {                            switch(code.charAt(pos))                            {                                case "<":                                    pos=code.indexOf(">",pos);                                    break;                                case "&":                                    pos=code.indexOf(";",pos);                                    break;                            }                            typewriter.innerHTML=code.substring(0,pos);                            setTimeout(typewriting,100);                        }                        else                        {                            typewriter.classList.add("gameover");                        }                    }                    typewriting();                },500)            }        },        onLeave:function(index , nextIndex, direction) {            if(index === 2) {                $('.print').removeClass('gameover').css('display','none');            }        }    });})();