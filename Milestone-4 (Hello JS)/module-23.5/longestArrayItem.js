function bestFriend(friends) {
    let longestArrayItem = []
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length > longestArrayItem.length) {
            longestArrayItem = friends[i]
        }
    }
    return longestArrayItem;
}
var friends = ['Shuvo', 'Kobir', 'Adul Malik']
let longestItem = bestFriend(friends)
console.log('The longest friend name is:', longestItem)