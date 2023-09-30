// function clearAll(){
// 	[...document.querySelectorAll('li')].forEach(function(li){
		
// 		li.classList.add('big')	
// 		li.classList.remove('done')					
// 	}																   
// 	)
// }

// function checkDay(){

// 	var day = new Date().getDate();
// 	const dayReg = localStorage.getItem("day");

// 	if(day != dayReg){
// 		clearAll();
// 		localStorage.setItem("day", day);	
// 	}
// }
// checkDay();


function changeMeal(meal){
	if(Array.from(meal.querySelectorAll('li')).filter(ch => {return ch.classList.contains('done')}).length==0){
		meal.querySelectorAll('li').forEach(li => li.classList.add('big'))
	} else {meal.querySelectorAll('li').forEach(li => li.classList.remove('big'))}
	
	
}

[...document.querySelectorAll('li')].filter(li => {return li.id != 'clear'}).forEach(li => 
  li.addEventListener('click', e => (e.stopPropagation(), li.classList.toggle('done'),
changeMeal(li.closest('.meal')) 
																		 
)//lambta
)//evt listener
);//fore



document.querySelector('#clear').addEventListener('click', function(){
	[...document.querySelectorAll('li')].filter(li => {return li.id != 'clear'}).forEach(function(li){
		
		li.classList.add('big')	
		li.classList.remove('done')					
	}																   
	  )//lambta
});
																		   