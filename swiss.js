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

//Convenience method to add only the Array helpers
Swiss.prototype.addAllArrayHelpers = function(){
	this.addAppendFunction();
	this.addLastFunction();
};

Swiss.prototype.addAllObjectHelpers = function(){
	//add object helpers
};

//Convenience method to add all helpers to Object and Array prototypes
Swiss.prototype.addAll = function(){
	this.addAllArrayHelpers()
	this.addAllObjectHelpers();
};

Swiss.prototype.singleQuote = function(str){
	return "\'" + str + "\'";
};

Swiss.prototype.doubleQuote = function(str){
	return '\"' + str + '\"';
};

Swiss.prototype.isFalsy = function(val){ 
	if (val=="false" || val==false || val==0 || val=="0" || val==null || !val){ return true }
	else { return false } 
};

Swiss.prototype.isTruthy = function(val){
	if (val==true || val=="true" || val==1 || val=="1"){ return true }
	else { return false }
};
