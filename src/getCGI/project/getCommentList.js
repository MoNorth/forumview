
import url from '../url'



export default function (datas,id) {

	$.ajax({
		url: url.url + "/project/comment/" + id,
		type: "get",
		success: function(data){

			if(data.err)
				alert("出错了");
			datas.data = data;
		}
	})
}