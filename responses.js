
exports.success= function(req, res, success , message, statusCode , token = ''){
	res.status(statusCode || 200)
	res.json({
		operationSuccess:success,
		message : message,
		token:token
	})
}

exports.error= function(req, res, success , message, statusCode){
	res.status(statusCode || 500)
	res.json({
		operationSuccess:success,
		MessageError : message,
	})
}