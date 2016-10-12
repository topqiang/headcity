/**
 * @name dom  linkto 属性增强
 * @author topqiang
 * @version 1.0
 * **/
function top_linkto(){
	$("[linkto]").on('click',function(){
		var self = $(this);
		var url = $.trim(self.attr("linkto"));
		if( url == ""){
			return;
		}
		if( url.valueOf(".") != -1){
			url = "http://"+url;
		}
		window.location.href = url;
	});
}
/**
 * @name check响应
 * @author topqiang
 * @version 1.0
 * **/
function top_check(){
	$(".top_radio").on('click',function(){
		var self = $(this);
		self.addClass("on");
		self.siblings().removeClass("on");
	});
	$(".top_check").on('click',function(){
		var self = $(this);
		if(self.hasClass("on")){
			self.removeClass("on");
		}else{
			self.addClass("on");
		}
	});
}
/**
 * @name  星级评价组件
 * @author topqiang
 * @version 1.0
 * **/
function top_rate(){
	$(".top_rate span").on('click',function(){
		var self = $(this);
		self.nextAll().removeClass("on");
		self.prevAll().addClass("on");
		if(!self.hasClass("on")){
			self.addClass("on");
		}
	});
}
/**
 * @name  购物车显示隐藏
 * @author topqiang
 * @version 1.0
 * **/
function top_ingley(){
	$(".ingley").on('click',function(){
		$(".zhao").toggle();
		$(".zhcon").slideToggle();
	});
}
/**
 * @name 隐式下拉框交互
 * @author topqiang
 * @version 1.0
 * **/
function top_select(){
	$("select.selpstime").on('change',function(){
		var self = $(this);
		var elename = self.attr("forele");
		if($.trim(elename) != ""){
			var ele = self.parent().find("[ele="+elename+"]");
			ele.text(self.val());
		}
	});
}
$(function(){
	//吊起linkto增强页面跳转
	top_linkto();
	//吊起check响应
	top_check();
	//开启星级评价
	top_rate();
	//开启购物车
	top_ingley();
	//吊起统一下拉框
	top_select();
});
