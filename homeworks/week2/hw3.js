function reverse(str) {
  var ans = ''
  for ( var i = 1; i <= str.length; i++){
      ans += str[str.length - i]
  }
    console.log(ans)
}

reverse('hello');


