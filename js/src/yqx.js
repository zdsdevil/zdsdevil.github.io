/**
 * Created by Administrator on 2016/10/20.
 */
(function() {
  $('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    css3: true,
    scrollingSpeed: 1000,
    afterRender: function () {

    },
    afterLoad: function (anchorLink, index) {

    },
    onLeave: function (index, nextIndex, direction) {

    }
  });
})();