
import url from '../url'
import token from '../getToken'



export default function (project_id, comment, callback) {
	$.ajax({
		url: url.url + "/project/comment/" + project_id,
		type: "post",
		xhrFields:{withCredentials: true},
		data: comment,
		headers: {
			token: token()
		},
		success: function(data){
			if(data.err && data.result.newurl)
				location.href = data.result.newurl;
			callback(data);
		}
	})
}