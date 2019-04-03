// ES5
// ================================================================
function selectUsers(options){
  options = options || {};
  var start = options.start || 0;
  var limit = options.limit || 20;
  var sort = options.sort || 'email';
  console.log(start, limit, sort);
  // make a request to the api with start, limit, sort
}
// ================================================================


// ES6
// ================================================================
function selectUsers({start = 0, limit = 20, sort = 'email'} = {}){
  console.log(start, limit, sort);
  // make a request to the api with start, limit, sort
}
// ================================================================
selectUsers();