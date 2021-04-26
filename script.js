
var rows=[]
var display
start()

function start(){
  preise={
    Wasser:12.4,
    Öl:33,
    reifen:55,
  }

  for (key in preise){
    name="preis"+key

    if (localStorage[name]==undefined){
      preis=preise[key]
      console.log("adding", preis)
      localStorage[name]=preis
    }else{
      console.log(key,"allready defined");
    }
  }



  for (key in localStorage){
    if (key.startsWith('preis')){
      var newrow=createRow(key)
      rows.push(newrow)
    }
  }

}

function calculate(){

  var res=0
  for (i in rows){
    var row=rows[i]
    console.log(row);
    console.log(row.input.value);
    res+=row.input.value*row.preis

  }
  document.getElementById('ergebniss').innerHTML="gesammt: "+res+"€"
  return res
}


function createRow(key){

  preis=localStorage[key]
  name=key.split('preis')[1]

  title=createElement('h2',name+' ('+preis+'€)')
  inp=createElement('input','input')
  inp.value=0
  inp.id='input'+name
  return {preis:parseFloat(preis),input:inp}
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
