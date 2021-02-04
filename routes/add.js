var data = require("../data.json");

exports.addFriend = function(request, response) {   
	// Your code goes here
	var new_friend =  {
		"name" : request.query.name,
		"description" : request.query.description,
		"imageURL" : "https://picsum.photos/400/400"
	}
	data.friends.push(new_friend);
	response.render('index', data);
}