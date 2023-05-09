
exports.success= function(req, res,operation , message, statusCode ,data){
	res.status(statusCode || 200)
	res.json({
		operation:operation,
		message : message,
		data:data
	})
}

exports.error= function(req, res,operation ,  message, statusCode,details){
	console.log('error no se registro',details)
	res.status(statusCode || 500)
	res.json({
		operation:operation,
		error: message
	})
}