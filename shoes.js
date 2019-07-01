  var sole = document.getElementsByClassName('sole')
  for(var i=0;i<sole.length;i++) {
    var color = Math.random() < 0.5 ? "black" : "white";
    sole[i].style.background = color
  }
  
  var laces = document.getElementsByClassName('lace')
  var laceColor = Math.random() < 0.5 ? "black" : "white";
  for(var i=0;i<laces.length;i++) {    
    laces[i].style.background = laceColor
  }
}

function createShoes() {
  if(document.getElementsByClassName('shoe').length > 8) {
    clearInterval(placeShoes)
    styleShoes()
  } else {
    var shoe = document.getElementsByClassName('shoe')[0]
  var cln = shoe.cloneNode(true)
  document.getElementsByTagName('body')[0].appendChild(cln)
  }  
}

var placeShoes = setInterval(createShoes, 10)
var play = setInterval(styleShoes, 1500)
