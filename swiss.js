//Swiss.js: Odds and ends utilities in JavaScript

var Swiss = function(){
	this.version = "0.0.1";
};

Swiss.prototype.isObject = function(thing){
	return (Object.prototype.toString.call(thing)==='[object Object]');
};

Swiss.prototype.isArray = function(thing){
	return (Object.prototype.toString.call(thing)==='[object Array]');
};

//Adds the 'append' function, a la Python syntax 
//***WARNING*** Modifies array prototype
Swiss.prototype.addAppendFunction = function(){
	Array.prototype.append = Array.prototype.push;
};

//Adds the 'last' function, which simply returns the last element of the array in question
//***WARNING*** Modifies array prototype
Swiss.prototype.addLastFunction = function(){
	Array.prototype.last = function(){
		return this[this.length - 1];
	};
};

//Pops element from front of array, i.e. the zeroth element
//This is the function version that does not modify the Array prototype
Swiss.prototype.popFirst = function(arr){
	var ret_val = arr[0];
	arr.shift();
	return ret_val;
};

//Same as popFirst, but adds it to the Array prototype
//***WARNING*** Modifies array prototype
Swiss.prototype.addPopFirstFunction = function(){
	Array.prototype.popFirst = function(){
		var ret_val = this[0];
		this.shift();
		return ret_val;
	};
};

//Convenience method to add only the Array helpers
Swiss.prototype.addAllArrayHelpers = function(){
	this.addAppendFunction();
	this.addLastFunction();
	this.addPopFirstFunction();
};

Swiss.prototype.addAllObjectHelpers = function(){
	//add object helpers
};

//Convenience method to add all helpers to Object and Array prototypes
Swiss.prototype.addAll = function(){
	this.addAllArrayHelpers()
	this.addAllObjectHelpers();
};
