//1) getName
var lance = {
	name: 'Lance',
	age: '25',
	gender: 'male'
}
function getName(person) {
	return person.name
}

//2) totalLetters
var words = ['thing', 'banana', 'uh','other things']
function totalLetters(strings){
	var charCount = 0
	for (var i=0; i<strings.length; i++){
		charCount += strings[i].length

	}
	return charCount
}

//3) keyValue
function keyValue(key, value){
	var obj = {}
	obj[key] = value
	return obj
}
//4) negativeIndex
 // var arr = ['a', 'b', 'c', 'd']
function negativeIndex(arr,index){
	return arr[arr.length+index]
}

//5) removeM
function removeM(string){
	var noM = ''
	for (letter in string){
		if (string[letter] != 'm' && string[letter] != 'M'){
			noM +=string[letter]
			
		}

	}
	return noM

}

//6 printObject

function printObject(obj){

	for (item in obj){
		// console.log(item)
		console.log(item + ' is ' + obj[item])
	}
}

//7 vowels
function vowels(string){
	return string.match(/a|e|i|o|u|A|E|I|O|U/g)
}

//8 twins
testArr = ['a','b','b','c','c']
function twins(arr){
	for (var i=0; i<arr.length; i=i+2){
		if (arr[i]== arr[i+1]) {
			console.log('true')
		}
		else {
			return false
		}

	}
	return true
}
//9 or
boolArr = [false,true,false]
function or(arr){
	for (thing in arr){
		if (arr[thing]){
			// console.log(arr[thing])
			return true
		}

	}
	return false
}

//10 unique
var uniqueArr = ['john','arthur','ben','john','john']
function unique(arr){
	var uniques = []
	for (thing in arr){
		uniques.push(arr[thing])
	}
	for (thing in uniques){
		if (uniques.indexOf(uniques[thing])!= uniques.lastIndexOf(uniques[thing])) {
			uniques.splice(uniques.lastIndexOf(uniques[thing]),1)
		}
	}
	return uniques
}