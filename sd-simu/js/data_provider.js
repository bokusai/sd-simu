var connection = false;

var ajaxDefault = function(url, data){
	var defer = $.Deferred();
	$.ajax({
		url: url,
		type: "POST",
		dataType: "json",
		data: data,
	})
	.done(function(responseData) {   defer.resolve(responseData.data) })
	.fail(function () {
		console.log('通信失敗');
		defer.reject();
	});
	return defer
}



