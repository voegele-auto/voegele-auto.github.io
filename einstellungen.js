
start()

function start(){
  for (key in localStorage){
    if (key.startsWith('preis')){
      createRow(key)
    }
  }
}



function createRow(key){
  preis=localStorage[key]
  name=key.split('preis')[1]

  title=createElement('h2',name)
  inp=createElement('input','input')
  inp.value=preis
  inp.id='input'+name
  button=createElement('button','speichern')
  button.name=name
  button.onclick=function(){
    val=document.getElementById('input'+this.name).value
    localStorage['preis'+this.name+'preis']=val
  }
}

function createElement(type,title){
  var newElement=document.createElement(type)
  newElement.innerHTML=title
  document.getElementById('list').appendChild(newElement)
  return newElement
}
function resetPreise(){
  for (key in localStorage){
    if (key.startsWith('preis')){
      localStorage.removeItem(key)
    }
  }
}
