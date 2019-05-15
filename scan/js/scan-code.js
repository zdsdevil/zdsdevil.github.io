
 /*第一种方式
  * mui.plusReady(function(){
         document.addEventListener('touchstart',startRecognize(),false);
         document.addEventListener('touchstart',cancelScan(),false);
         document.addEventListener('touchstart',setFlash(),false);
         });
		var scan=null;
    	var Flash=true;
      	function startRecognize() {
				scan = new plus.barcode.Barcode('barea');
				scan.onmarked = onmarked; 
				scan.start();
			}
      	function cancelScan() {
				scan.cancel();
			}
      	function setFlash() {
			if (Flash){
    				scan.setFlash(true);
    				Flash=false;
    				
    			}else{
    				scan.setFlash(false);
    				Flash=true;
    			}
		}
      	function onmarked(type,result){
      		var text="未知";
      		switch(type){
      			case plus.barcode.QR:
      			text="QR";
      			break;
      			case plus.barcode.EAN13:
      			text="EAN13";
      			break;
      			case plus.barcode.EAN8:
      			text="EAN8";
      			break;
      		}
      		alert("条码类型"+text+"\n条码内容"+result);
      	}	
		
      	
    */
  //第二种方法
	mui.init();
	var ws = null,
		wo = null;
	var scan = null,
		domready = false;
	// H5 plus事件处理
	function plusReady() {
		if(ws || !window.plus || !domready) {
			return;
		}
		// 获取窗口对象
		ws = plus.webview.currentWebview();
		wo = ws.opener();
		// 开始扫描
		ws.addEventListener('show', function() {
			scan = new plus.barcode.Barcode('barea');
			scan.onmarked = onmarked;
			scan.start();
		});
		// 显示页面并关闭等待框
		ws.show("pop-in");
		wo.evalJS("closeWaiting()");

	}
	if(window.plus) {
		plusReady();
	} else {
		document.addEventListener("plusready", plusReady, false);
	}
	// 监听DOMContentLoaded事件
	document.addEventListener("DOMContentLoaded", function() {
		domready = true;
		plusReady();
	}, false);
	// 二维码扫描成功
	function onmarked(type, result) {
		var text = "未知";
		switch(type) {
			case plus.barcode.QR:
				text = "QR";
				break;
			case plus.barcode.EAN13:
				text = "EAN13";
				break;
			case plus.barcode.EAN8:
				text = "EAN8";
				break;
		}
		result = result.replace(/\n/g,'');
		//分析扫描结果：是URL就跳转 ，不是就提示 
        if(result.indexOf('http://')==0  || result.indexOf('https://')==0){ 
            plus.nativeUI.confirm(result, function(i){ 
                if(i.index == 0){ 
                     
                    back();//返回上一页 
                    plus.runtime.openURL(result); 
                }else{ 
                    back();//返回上一页 
                } 
            }, '', ['打开', '取消']); 
        } else{ 
            back();//返回上一页 
            plus.nativeUI.alert(result); 
        } 
		//alert("条码类型" + text + "\n条码内容" + result);
		//mui.back();
	}
	// 从相册中选择二维码图片 
	function scanPicture() {
		plus.gallery.pick(function(path) {
			plus.barcode.scan(path, onmarked, function(error) {
				plus.nativeUI.alert("无法识别此图片");
			});
		}, function(err) {
			plus.nativeUI.alert("Failed: " + err.message);
		});
	}
	//开启闪光灯
	var Flash = true;

	function setFlash() {
		if(Flash) {
			scan.setFlash(true);
			Flash = false;

		} else {
			scan.setFlash(false);
			Flash = true;
		}
	}