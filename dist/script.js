function changeMeal(meal){
	if(Array.from(meal.querySelectorAll('li')).filter(ch => {return ch.classList.contains('done')}).length==0){
		meal.querySelectorAll('li').forEach(li => li.classList.add('big'))
	} else {meal.querySelectorAll('li').forEach(li => li.classList.remove('big'))}
	
	
}
[...document.querySelectorAll('li')].forEach(li => 
  li.addEventListener('click', e => (e.stopPropagation(), li.classList.toggle('done'),
changeMeal(li.closest('.meal')) 
																		 
)//lambta
)//evt listener
);//fore