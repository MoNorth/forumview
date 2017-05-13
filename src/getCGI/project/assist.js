
import url from '../url'
import token from '../getToken'


exports.getAll =  function (datas,id) {

	$.ajax({
		url: url.url + "/project/assistall/" + id,
		type: "get",
		success: function(data){

			if(data.err)
				alert("出错了");
			datas.data = data;
			console.log(data)
		}
	})
}

exports.assist  = function(id, callback){
	$.ajax({
		url: url.url + "/project/assist/" + id,
		type: "get",
		xhrFields:{withCredentials: true},
		headers: {
			token: token()
		},
		success: function(data){
			if(data.err && data.result.newurl)
				location.href = data.result.newurl;
			callback(data.err, data.result);
		}
	})
}