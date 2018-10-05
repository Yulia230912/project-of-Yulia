var p = document.createElement('p')
p.innerHTML = "МОЙ ПРОЭКТ"
document.body.appendChild(p)
function doSelected (event){
  switch(event.target.value){
    case "confirm":
      var z = confirm ("Подтвердите, что Юлечка - умничка")
      var a = z?"Юлечка - умничка" : "Не правильный выбор";
      document.body.innerHTML += a + "<br/>"
      break;
    case "pictures":
      var pictures
      var request = new XMLHttpRequest()
      request.onreadystatechange = function (event){
        if (this.readyState === 4)
            if (this.status === 200){
               pictures = JSON.parse(this.responseText)
               pictures.forEach(function (x) {
                 var picture = document.createElement ('img')
                 picture.src = x.ref
                 document.body.appendChild (picture)
                 picture.title = x.title
                 picture.width = "300"
               })
            }
      }
      request.open("GET", "test.json")
      request.send()
      break;
    case "":
      var labels
      var result = new XMLHttpRequest ()
      var demo = document.body.appendChild (
            document.createElement ( 'h4' )
      )

      for ( var x of labels ) {
            var checkButton = document.createElement ( 'input' )
            checkButton.type = "checkbox"
            checkButton.name = "checkbox"
            checkButton.value = x
            checkButton.onchange = function ( event ) {
                    var ind = result.indexOf ( this.value )
                    if ( this.checked && ind < 0 )
                            result.push ( this.value )
                    else if ( ind !== -1 )
                            result.splice ( ind, 1 )
                    demo.innerText = result
            }
            document.body.appendChild ( checkButton )
            var label = document.createElement ( 'span' )
            label.innerHTML = x
            document.body.appendChild ( label )
      }
      break;
  }
}
