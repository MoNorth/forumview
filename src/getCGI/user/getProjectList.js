
import url from '../url'



export default function (datas,id, sum) {
	if(!id) id = 0;
	$.ajax({
		url: url.url + "/user/project/" + id,
		type: "get",
		success: function(data){

			if(data.err)
				alert("出错了");
			datas.data = data;
			console.log(data)
		}
	})
}