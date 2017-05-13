import baseToImg from '../baseToImg'
import url from '../url'
import addproject from './addProject'

export default function(src, sum, length, content, title, label){

	let blob = baseToImg(src);

	let formdata = new FormData();  
    formdata.append("img", blob);
    formdata.append("name", name);


    $.ajax({
		url: url.url + "/user/addprojectimg",
		method: 'POST',
		processData: false, 
		contentType: false, 
		dataType: 'json',
		data: formdata,
		success(data) {
    		content.content = content.content.replace(src, url.url + data.result.url)

    		sum.sum++
			if(sum.sum == length)
			{
				addproject({title: title, label: label, context: encodeURI(content.content)})
			}
		}
	});
}