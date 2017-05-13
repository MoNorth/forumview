
import url from '../url'



export default function (datas) {

	$.ajax({
		url: url.url + "/label",
		type: "get",
		success: function(data){

			if(data.err)
				alert("出错了");
			datas.data = data;
		}
	})
}