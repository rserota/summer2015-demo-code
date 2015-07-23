// List of all fooditem instances
var allFoods = [];

// This will be our base class for our model
var FoodItem = function(name, flavor, image){
	this.name = name;
	// Bananas Foster - wont work, two words
	this.slug = name.trim().toLowerCase().replace(/ /g, '-');
	this.flavor = flavor;
	this.image = image;

}
// bananas-foster
// BaNaNaS fOsTeR

var addFood = function(name, flavor, image){
	var newFood = new FoodItem(name, flavor, image);
	allFoods.push(newFood)
}

addFood('Pizza', 'Savory', 'http://2.bp.blogspot.com/-_xmCd7d1VsE/T-JbxvmtQnI/AAAAAAAAEas/gJBtrWlvrKg/s1600/Pizza.jpg')
addFood('Lasagna', 'Good', 'http://www.cookingclassy.com/wp-content/uploads/2013/03/lasagna15.jpg')
addFood('Bananas Foster', 'Sweet', 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2006/7/11/0/pa0804_BananasFoster.jpg')
addFood('Escargot', 'Sluggy', 'http://sueyeap.files.wordpress.com/2008/05/escargot.jpg')

var foodFind = function(slug){

	return allFoods.filter(function(element){
		return element.slug === slug
	})[0]
}

var foodDelete = function(slug){
	// Filter won't work in this situation since it does
	// not change the original array
	// Other files that reference the array are not changed
	// by resetting the value of allFoods
	// allFoods = allFoods.filter(function(element){
	// 	return element.slug !== slug
	// })
	
	// Splice changes the original array
	// This allows the changes values to be carried
	// into files that have references to it
	for(var i = 0; i< allFoods.length; i++) {

		if(allFoods[i].slug === slug){
			allFoods.splice(i, 1);
			return
		}

	}


}


module.exports = {
	allFoods   : allFoods,
	addFood    : addFood,
	FoodItem   : FoodItem,
	foodFind   : foodFind,
	foodDelete : foodDelete
}




