const urlParams1 = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=green&a=1"
const urlParams2 = "client.car=Mazda&client.job._id=42691345&client.job.name=frontend-developer&luckynum=88&client.privateinfo.hobby.income=80000&client.privateinfo._id=55"

function toObjectParams(str){
	const arrayStrParams = str.split("&")
	const returnedObjectJSON = arrayStrParams.reduce((accumulator, item) => {
		const itemSplit = item.split("=")
		const arrayKeys = itemSplit[0].split(".")
		const value = itemSplit[1]
		arrayKeys.reduce((accum, el, ind, arr) => {
			if (ind === arr.length - 1) {
				accum[el] = value
				return
			}
			if(!accum[el]){
				accum[el] = {}
			}
			return accum[el]
		}, accumulator)

		return accumulator
	}, {})

	return returnedObjectJSON
}

const objectParams1 = toObjectParams(urlParams1)
const objectParams2 = toObjectParams(urlParams2)

console.log("objectParams1", objectParams1)
console.log("objectParams2", objectParams2)