function oddFriends(friends){
    let oddfr = []
    for(let i = 0; i<friends.length;i++){
        let name = friends[i].length;
        if(name % 2 ===1 ){
            oddfr.push(friends[i])
        }
    }
    return oddfr;
}
let friends = ['abul','babul','cabul','rony','rimon']
let oddFriend = oddFriends(friends)
console.log(oddFriend)