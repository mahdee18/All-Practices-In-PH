function getMax(jim, dela, chinku) {
    if (jim > dela && jim > chinku) {
        console.log('Jim Will get the cake!')
    }
    else if (dela > jim && dela > chinku) {
        console.log('Dela Will get the cake!')
    }
    else {
        console.log('Chinku will get the cake')
    }
}
var jim = 87;
var dela = 97;
var chinku = 99;
getMax(jim, dela, chinku)