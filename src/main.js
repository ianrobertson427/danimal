function generator() {
  var x = Math.floor((Math.random() * 6) + 1);
  console.log(x);
  document.getElementById('divImage').innerHTML = '<img src="assets/logo${x}.png>" style="width:300px;">';
}

console.log("testing")