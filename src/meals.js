

function getMeals(){
	return [
		{
			nome:"Cafe 9:00",
			itens:[
				[
					"Aveia (2 col sopa)",
					"Protein veg (1 scoop)",
					"Fruta ou Suco 200ml"
				]
			]
		},
		{
			nome:"Lanche 10:00 Pre treino",
			itens:[
				[
					"Aveia (2 col sopa)",
					"Protein veg (2 col sopa)",
					"Fruta"
				]
			]
		},
		{
			nome:"Treino 11:00",
			itens:[
				[
					"LL ou SmartFit"		
				]
			]	
		},
		{
			nome:"Almoço 13:00",
			itens:[
				[
					"Vegetal A: à vontade ou Tabule (1 col servir)",
					"Vegetal B (3 col de sopa)",
					"Feijão ou Leguminosas (2 conchas)",
					"Protein Veg (1.5 scoop) ou Tofu (100g) ou Cogumelo (2 col)"
				]
			]	
		},
		{
			nome:"Lanche 16:30",
			itens:[
				[
					"Fruta ou Suco  uva (200 ml)",
					"Aveia (2 col sopa)",
					"Protein Veg(2 col sopa)"
				],
				
				[
					"Bolo Vegano (1 fatia G)"
				]
			]	
		}
		,
		{
			nome:"Jantar   20:30",
			itens:[
				[
					"Sopa de legumes (1 prato de sopa cheio)",
		"Tofu (100g) ou Cogumelo (2 col sopa) ou Protein Veg (1 scoop) ou Feijão ou Leguminosas (2 conchas)"
				],
				[
					"Vegetal A: à vontade ou Tabule (1 col servir)",
					"Vegetal B (3 col de sopa)",
					"Feijão ou Leguminosas (2 conchas)",
					"Protein Veg (1 scoop) ou Tofu (100g) ou Cogumelo (2 col)"
				]
			]	
		},
		{
			nome:"Antes de dormir ",
			itens:[
				[
					"Protein Veg(1 scoop)"
				]
			]	
		}
	]
};

var countItensId = 0;
getMeals().forEach(mealElement => {
	//console.log(mealElement)


	var meal = document.createElement("ul");
	meal.classList.add("meal");

	mealElement.itens.forEach(optionList => {
		var option = document.createElement("li");
		option.classList.add("big");
		option.appendChild(document.createTextNode(mealElement.nome));
		option.id = countItensId++;
		var itens = document.createElement("ul");

		optionList.forEach(optionText =>{
			var item = document.createElement("li");
			item.appendChild(document.createTextNode(optionText));
			item.id = countItensId++;
			itens.appendChild(item);
		})
		option.appendChild(itens);
		meal.appendChild(option);
	})  
			
	document.getElementById("content").appendChild(meal);

});
