// function clearAll(){
// 	[...document.querySelectorAll('li')].forEach(function(li){
		
// 		li.classList.add('big')	
// 		li.classList.remove('done')					
// 	}																   
// 	)
// }

 function checkDay(){

	var day = new Date().getDate();
 	const dayReg = localStorage.getItem("day");

	console.log("day: " + day + " dayreg: " + dayReg)
	if(day != dayReg){
 		localStorage.removeItem("dones");
		localStorage.setItem("day", day);
 	}
 }



function changeMeal(meal){
	if(Array.from(meal.querySelectorAll('li')).filter(ch => {return ch.classList.contains('done')}).length==0){
		meal.querySelectorAll('li').forEach(li => li.classList.add('big'))
	} else {meal.querySelectorAll('li').forEach(li => li.classList.remove('big'))}

}
function updateStorage(id, done){
	
	var dones = JSON.parse(localStorage.getItem("dones"));
	dones ? console.log("dones ok") : dones = [];
	const idx = dones.indexOf(id);
	idx  === -1 && done ? dones.push(id) : dones.splice(idx,1); 
	
	//dones ? console.log("  idx:" + dones.indexOf(id)) : console.log("dones null")
	localStorage.setItem("dones", JSON.stringify(dones));
	//console.log("st: " + JSON.parse(localStorage.getItem("dones")) )
}
function load(){
	console.log("loading")
	var dones = JSON.parse(localStorage.getItem("dones"));
	dones ? dones.forEach(id => {
							document.getElementById(id).classList.add("done")
							changeMeal(document.getElementById(id).closest('.meal'))
						}) 
		: updateStorage(-1)
}
checkDay();
load();

[...document.querySelectorAll('li')].filter(li => {return li.id != 'clear'}).forEach(li => 
  li.addEventListener('click', e => (e.stopPropagation(), li.classList.toggle('done'), updateStorage(li.id, li.classList.contains("done")),
changeMeal(li.closest('.meal')) 
																		 
)//lambta
)//evt listener
);//fore



document.querySelector('#clear').addEventListener('click', function(){
	[...document.querySelectorAll('li')].filter(li => {return li.id != 'clear'}).forEach(function(li){
		
		li.classList.add('big')	
		li.classList.remove('done')	
		localStorage.removeItem("dones");			
	}																   
	  )//lambta
});
																		   