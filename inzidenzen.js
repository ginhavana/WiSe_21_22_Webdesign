/*
  HS Nordhausen, FB Ingenieurwissenschaften
  m233 WebDesign
  WS 2021/22
*/

let inzidenzen = [
  {name: "Sonneberg"             , inzidenz: 787},
  {name: "Gotha"                 , inzidenz: 709},
  {name: "Ilm-Kreis"             , inzidenz: 602},
  {name: "Hildburghausen"        , inzidenz: 595},
  {name: "Erfurt"                , inzidenz: 506},
  {name: "Schmalkalden-Meiningen", inzidenz: 504},
  {name: "Unstrut-Hainich-Kreis" , inzidenz: 489},
  {name: "Weimar"                , inzidenz: 462},
  {name: "Saale-Orla-Kreis"      , inzidenz: 453},
  {name: "Greiz"                 , inzidenz: 451},
  {name: "Saale-Holzland-Kreis"  , inzidenz: 426},
  {name: "Kyffhäuserkreis"       , inzidenz: 424},
  {name: "Wartburgkreis"         , inzidenz: 421},
  {name: "Gera"                  , inzidenz: 398},
  {name: "Weimarer Land"         , inzidenz: 389},
  {name: "Eichsfeld"             , inzidenz: 378},
  {name: "Altenburger Land"      , inzidenz: 370},
  {name: "Suhl"                  , inzidenz: 352},
  {name: "Saalfeld-Rudolstadt"   , inzidenz: 328},
  {name: "Jena"                  , inzidenz: 321},
  {name: "Sömmerda"              , inzidenz: 262},
  {name: "Nordhausen"            , inzidenz: 249},
  ];
  
let main = document.querySelector("main");
for (let kreis of inzidenzen)
{
   let div = document.createElement("div");
   // add class name
   div.classList.add("inzidenz-landkreis");
   
   let span1 = document.createElement("span");
   span1.textContent = kreis.name;
   div.append(span1);
   
   let span2 = document.createElement("span");
   span2.textContent = kreis.inzidenz;
   // Ausnahme: Präsentation ist gekoppelt an Inhalte
   span2.style = "width:" + (80*kreis.inzidenz/877) + "%;";
   div.append(span2);
   
   main.append(div);  
} 
// end of file