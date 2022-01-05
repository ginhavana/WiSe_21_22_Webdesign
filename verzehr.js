let d = new Date();
let hour = d.getHours();
let min = d.getMinutes();
let time = document.getElementById('time');

let foodtable = document.getElementById('food-table');
const foodtb = [
["a",0],
["a",1],
["a",2],
["a",2],
["a",2],
["a",2],
["a",2],
["a",2],
["a",2],
["a",2]];

for(var i = 0; i < foodtb.length; i++)
{
	let foodname = "<option>"+foodtb[i][0]+"</option> ";
	foodtable.innerHTML += foodname;
}
