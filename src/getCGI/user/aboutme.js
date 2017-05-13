
import url from '../url'
import token from '../getToken'



export default function (datas, id) {
	if(!id)
		$.ajax({
			url: url.url + "/user/aboutme",
			type: "get",
			xhrFields:{withCredentials: true},
			headers: {
				token: token()
			},
			success: function(data){
				if(data.err && data.result.newurl)
					location.href = data.result.newurl;
				datas.data = data;
				console.log(data)
			}
		})
	else
		$.ajax({
			url: url.url + "/user/userinfo/" + id,
			type: "get",
			success: function(data){
				datas.data = data;
				console.log(data)
			}
		})

}