(function($){
	$.getUrlParam
	 = function(name)
	{
	var reg
	 = new RegExp("(^|&)"+
	 name +"=([^&]*)(&|$)");
	var r
	 = window.location.search.substr(1).match(reg);
	if (r!=null) return unescape(r[2]); return null;
	}
})($);

export default function(){
	var token = $.getUrlParam('forumkey') || $.cookie('forum_token') || "";
	return token;
}