function styleShoes() {
  function color() {
  return 'hsla(' + (Math.floor(Math.random()*360)) + ', 100%, 50%, 1)';
}
  
  var base = document.getElementsByClassName('base')
  for(var i=0;i<base.length;i++) {
    base[i].style = ""
    var colorThree = Math.random() < 0.5 ? "black" : "white";
    var type = Math.random() < 0.5 ? "linear" : "radial"
    var colorOne = color();
    var colorTwo = color();
    var d = Math.random() < 0.5 ? "45" : "90"
    base[i].style.backgroundColor = colorThree
    if(type == "linear") {
      base[i].style.backgroundImage = ""+type+"-gradient("+d+"deg, transparent 50%,"+colorOne+" 50%,"+colorOne+" 55%,transparent 55%,transparent 60%,"+colorTwo+" 60%,"+colorTwo+" 70%,transparent 70%,transparent 75%,"+colorOne+" 75%,"+colorOne+" 80%,transparent 80%)"
    } else {
      base[i].style.backgroundImage = ""+type+"-gradient(circle, "+colorOne+" 50%,"+colorOne+" 55%,transparent 55%,transparent 60%,"+colorTwo+" 60%,"+colorTwo+" 70%,transparent 70%,transparent 75%, transparent 80%)"
      base[i].style.backgroundSize = "120px 120px"
      base[i].style.backgroundRepeat = "no-repeat"
      base[i].style.backgroundPosition = "100px -50px"
    }    
  }
  
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
  if(document.getElementsByClassName('shoe').length > 2) {
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


