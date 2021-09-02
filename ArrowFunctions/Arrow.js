//fn declaration
function add(x,y){
    return x + y;
}
//fn expression
var add = function(x,y){
    return x+y;
}

var add = (x,y) => {
    return x+y;
}
 
//---------------------------------
users.map(function(user){
    //
})
users.map(() = >{
    //
})

function getTweets(uid){
    return fetch('https://api.users.com/' + udi)
        .then (function(response){
            return response.json()
        })
        .then (function(response){
            return response.data()
        })
        .then (function(tweets){
            return tweets.filter(function(tweet){
                return tweet.stars > 50
            })
        })
        .then(function(tweets){
            return tweets.filter(function(tweet){
                return tweets.rts>50
            })
        })
}

getTweets => (uid){
    return fetch('https://api.users.com/' + udi)
        .then((response) => response.json())
        .then((response) => response.data())
        .then((tweets) => tweets.filter((tweet) => tweet.stars > 50))
        .then((tweets) => tweets.filter((tweet) => tweets.rts>50))
}

