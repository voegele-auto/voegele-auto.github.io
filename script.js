
var rows=[]
var display
var preise={}
start()

function start(){
  startpreise={
    fahrtpreis:1,
    arbeitpreis:90,
    samstagpreis:45,
    sonntagpreis:45,
    spezialölpreis:40,
    spülmittelpreis:2,
    erstbefüllungpreis:25,
    filterpreis:1,
    schellepreis:3.5,
    kraftstoffentsorgungpreis:3,

  }

  for (key in startpreise){
    name="preis"+key

    if (localStorage[name]==undefined){
      preis=startpreise[key]
      console.log("adding", preis)
      localStorage[name]=preis
    }else{
      console.log(key,"allready defined");
    }
  }

  for (key in localStorage){
    if (key.startsWith('preis')){
      name=key.split('preis')[1]
      preise[name]=localStorage[key]
      console.log("name:",name,localStorage[key]);
      document.getElementById(name+'preis').innerHTML=preise[name]

    }
  }

}

function calculate(){
  var summe=0
  for (key in preise){
    var anzahl=document.getElementById(key+'input').value
    if (anzahl==""){
      anzahl=0
    }else{
      anzahl=parseFloat(anzahl)
      console.log(anzahl);
    }
    preis=preise[key]
    var kosten=anzahl*preis
    kostenId=key+"kosten"
    if (kosten!=0){
      console.log(kostenId,":",kosten);
      document.getElementById(kostenId).innerHTML=kosten

    }


    summe+=anzahl*preis
  }

  document.getElementById('nettosumme').innerHTML=summe
  document.getElementById('steuer').innerHTML=summe*0.19
  document.getElementById('brutto').innerHTML=summe*1.19


}

function resetPreise(){
  for (key in localStorage){
    if (key.startsWith('preis')){
      localStorage.removeItem(key)
    }
  }
}
