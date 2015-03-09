//Swiss.js: Odds and ends utilities in JavaScript

(function () {
	var rt = this;

	var Swiss = function(){
		this.version = "0.1.1";
	};

	Swiss.prototype.isObject = function(thing){
		return (Object.prototype.toString.call(thing)==='[object Object]');
	};

	Swiss.prototype.isArray = function(thing){
		return (Object.prototype.toString.call(thing)==='[object Array]');
	};

	//Adds the 'append' function, a la Python syntax 
	Swiss.prototype.addAppendFunction = function(){
		Array.prototype.append = Array.prototype.push;
	};

	//Adds the 'last' function, which simply returns the last element of the calling array
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

	Swiss.prototype.findIndexBy = function(array_of_objects, key, value){
		for (var i = 0; i < array_of_objects.length; i++) {
	        if (array_of_objects[i][key] == value) {
	            return i;
	        }
		}
	};

	Swiss.prototype.findIndicesBy = function(array_of_objects, key, value){
		var indices = [];
		for (var i = 0; i < array_of_objects.length; i++) {
	        if (array_of_objects[i][key] == value) {
	            indices.push(i);
	        }
		}
		return indices;
	};

	var swiss = new Swiss();

	if (typeof module !== 'undefined' && module.exports) {
            module.exports = swiss;
            rt.swiss = swiss;
    } else {
            rt.swiss = swiss;
    }

})();
