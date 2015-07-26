
var user = {name : 'George', admin : true}
var user2 = {name : 'Bill', admin : false}

var middle = {
	isAdmin : function(req, res, next){
		if(!user.admin) {
			res.redirect('/failure')
		}
		else {
			next()
		}
	}
}

module.exports = middle