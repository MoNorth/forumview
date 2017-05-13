
import url from '../url'



export default function (datas, label, limit) {

	$.ajax({
		url: url.url + "/label/project/" + label + (limit ? '?limit=' + limit : ''),
		type: "get",
		success: function(data){

			if(data.err)
				alert("出错了");
			datas.data = data;
		}
	})
}