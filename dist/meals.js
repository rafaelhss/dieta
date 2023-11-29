

function getMeals(){
	return [
		{
			nome:"Cafe 9:00",
			itens:[
				[
					"Granola (2 col sopa)",
					"Protein veg (1 scoop)",
					"Fruta",
					"Fruta"
				],
				[
					"Aveia (2 sopa)",
					"Chia (1 sobremesa) ",
					"Leite veg (150ml)",
					"Protein veg (1 scoop)",
					"Fruta"
				]
			]
		},
		{
			nome:"Lanche 11:00 Pre treino",
			itens:[
				[
					"Granola (2 col sopa)",
					"Protein veg (2 col sopa)",
					"Fruta",
					"Fruta"
				],
				[
					"Granola (2 col sopa)",
					"Protein veg (2 col sopa)",
					"Fruta",
					"Aveia (2 sopa)",
					"Chia (1 sobremesa) ",
					"Leite veg (150ml)"
				]
			]
		},
		{
			nome:"Treino 12:30",
			itens:[
				[
					"LL ou SmartFit"		
				]
			]	
		},
		{
			nome:"Almoço 14:00",
			itens:[
				[
					"Vegetal A: à vontade ou Tabule (1 col servir)",
					"Vegetal B (3 col de sopa)",
					"Arroz integral, Batata doce, Aipim, Cará, Inhame, Macarrão integral (4 de sopa)",
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
					"Fruta ou Suco  uva (200 ml)",
					"Granola (2 col sopa)",
					"Protein Veg(2 col sopa)"
				],
				
				[
					"Bolo Vegano (1 fatia G)"
				]
			]	
		}
		,
		{
			nome:"Jantar   18:30",
			itens:[
				[
					"Sopa de legumes (1 prato de sopa cheio)",
		"Tofu (100g) ou Cogumelo (2 col sopa) ou Protein Veg (1 scoop) ou Feijão ou Leguminosas (2 conchas)"
				],
				[
					"Igual ao almoço (mesma quantidade)"
				]
			]	
		},
		{
			nome:"Lanche com momo  20:30 – 21:00",
			itens:[
				[
					"Fruta ou Suco  uva (200 ml)",
					"Salada crua colorida",
					"Protein Veg(1 scoop)"
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
