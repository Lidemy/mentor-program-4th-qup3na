function capitalize(str) {
  var ans =''
  for( var i=0; i<str.length; i++){
      var code = str.charCodeAt(i)
      if( code >= 97 && code <= 122){
          ans += String.fromCharCode( code - 32 )
      }else if (code >= 65 && code <= 90){
          ans += String.fromCharCode (code + 32)
      }else{
          ans += str[i]
      }
  }
console.log(ans)
}

console.log(capitalize('hello'));
console.log(capitalize('What ArE yOu DoINg wItH YouR LiFE?'));