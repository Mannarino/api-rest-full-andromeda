  const verifyRoles = (...allowedRoles)=>{
  	return (req,res,next)=>{
         const roles =[...allowedRoles]
         console.log(roles)
         console.log(req.rol)
         const pasoPermitido = roles.includes(req.rol)
         if(pasoPermitido){
         	next()
         }else{
         	res.send('acceso no permitido para tu rol')
         }
         console.log(pasoPermitido)
         
  	}
  }

  module.exports=verifyRoles