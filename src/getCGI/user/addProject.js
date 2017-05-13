
import url from '../url'
import token from '../getToken'



export default function (project) {
	$.ajax({
		url: url.url + "/user/addproject",
		type: "post",
		xhrFields:{withCredentials: true},
		data : project,
		headers: {
			token: token()
		},
		success(data) {
			if(data.err)
			{
				if(data.result.newurl)
					return location.href = data.result.newurl;
				alert("发表失败")
			}
			location.href = "/#/project/" + data.result
		}
	})
}