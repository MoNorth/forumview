
import url from '../url'
import token from '../getToken'



export default function (project_id, callback) {
	$.ajax({
		url: url.url + "/project/del/" + project_id,
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