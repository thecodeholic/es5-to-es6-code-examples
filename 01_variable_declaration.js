// ES5
// ================================================================
var myLocation = 'Default';
function getLocation(ip) {
    if (ip) {
        var myLocation = getLocationByIp(ip);
        return myLocation;
    }
    return myLocation;
}
// ================================================================


// ES6
// ================================================================
let myLocation = 'Default';
function getLocation(ip) {
    if (ip) {
        let myLocation = getLocationByIp(ip);
        return myLocation;
    }
    return myLocation;
}
// ================================================================

console.log(getLocation());