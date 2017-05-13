import url from '../url'
import token from '../getToken'



export default function (msg) {
	$.ajax({
		url: url.url + "/user/fixmsg",
		type: "post",
		xhrFields:{withCredentials: true},
		data : msg,
		headers: {
			token: token()
		},
		success(data) {
			if(data.err)
			{
				if(data.result.newurl)
					return location.href = data.result.newurl;
				alert("修改失败")
			}
		}
	})
}