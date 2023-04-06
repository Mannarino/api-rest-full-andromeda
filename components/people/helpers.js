 /*The function getAge receives a birthday date as a parameter and 
	based on that returns the time elapsed from that date to the 
	current day */
function getAge(birthDay){
	let today = new Date()
	let age = today.getFullYear() - birthDay.getFullYear()
	let differenceMonths = today.getMonth() - birthDay.getMonth()
	if(differenceMonths < 0){
			age--
	}
	return age
}

 /*The function lastAge receives the date of the person passed away and
  birthday date as  parameters and 
	based on that returns the time elapsed from thatbirthday to the 
	date of the person passed away */
function lastAge(dateOfPassAway,birthDay){
	let age= dateOfPassAway.getFullYear() - birthDay.getFullYear()
	let differenceMonths = dateOfPassAway.getMonth() - birthDay.getMonth()
		if(differenceMonths < 0){
				age--
		}
	return age
}

/*The function ifPassAway receives the possible date of the person passed away and
  as  parameter and based on that returns true or false dependes 
  if the person passed away or not */
function ifPassAway(possibleDatePassAway){
     const notDiedYet = new Date("1000-01-01")
     if(possibleDatePassAway.getFullYear()===notDiedYet.getFullYear()){
     	return false
     }else{
     	return true
     }
}

const helpers = {
	addAgeOnList: function (peopleList){
        /* This method takes an array of people objects and 
        returns  an array with the age added to each
        person object in the array. */    
        	const changedList = peopleList.map( person => {
        		let age = 0
        		if(ifPassAway(person.yearPassAway)){
                    age = lastAge(person.yearPassAway,person.birthDay)
        		}else{
        			age = getAge(person.birthDay)
        		}
            	
            	console.log( person.passAway)
				const persona= {
					name: person.name,
					birthDay:person.birthDay,
					category:person.category,
					age:age,
					passAway:person.passAway,
					yearPassAway:person.yearPassAway,
					viewAllowed:person.viewAllowed,
					photo:person.photo,
					_id:person._id
				}

				return persona
	            })
            return changedList 
        }
}
	
module.exports= helpers