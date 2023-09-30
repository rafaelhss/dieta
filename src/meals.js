

	function getMeals(){
		return [
			{
				nome:"Cafe 8:00",
				itens:[
					[
						"Granola (2 col sopa)",
						"Protein veg (1 scoop)",
						"Fruta (2)"
					]
				]
			},
			{
				nome:"Lanche 10:00",
				itens:[
					[
						"Castanha Para (3) ou Caju(6)",
						"Fruta (1) ou Bananadinha (1)"
					],
					[
						"Bisc de Arroz (2)",
						"Pasta de amendoim (1 col cha cada)"
					]
					
				]
			},
			{
				nome:"Lanche Antes do treino",
				itens:[
					[
						"Fruta (2) ou Suco uva (200 ml)",
						"Granola (2 col de sopa)",
						"Protein Veg(2 col sopa)"		
					]
				]	
			},
			{
				nome:"Almoço 12:30 – 14:00",
				itens:[
					[
						"Vegetal A: à vontade <br>ou Tabule (1 col servir)",
						"Vegetal B (3 col de sopa)",
						"Arroz integral, Batata doce, <br>Aipim, Cará, Inhame, <br>Macarrão integral (4 de sopa)",
						"Feijão ou Leguminosas (2 conchas)",
						"Protein Veg (1 scoop) <br>ou Tofu (100g) <br>ou Cogumelo (2 col)"
					]
				]	
			},
			{
				nome:"Lanche 16:00 - 16:30",
				itens:[
					[
						"Fruta (2) ou Suco  uva (200 ml)",
						"Granola (2 col sopa)",
						"Protein Veg(2 col sopa)"
					],
					[
						"Polpa de Açaí ou Coco (2 un)",
						"Granola (2 col  sopa)",
						"Protein Veg(2 col sopa)"
					],
					[
						"Bolo Vegano (1 fatia M)",
						"Fruta (1) ou Suco  uva (100 ml)"	
					]
				]	
			}
			,
			{
				nome:"Jantar 1  18:00",
				itens:[
					[
						"Sopa de legumes (1 prato de sopa cheio)",
			"Tofu (100g) <br>ou Cogumelo (2 col sopa) <br>ou Protein Veg (1 scoop) <br>ou Feijão ou Leguminosas (2 conchas)"
					],
					[
						"Igual ao almoço (mesma quantidade)"
					]
				]	
			},
			{
				nome:"Jantar 2  20:00 – 21:00",
				itens:[
					[
						"Sopa de legumes (2 conchas)"
					],
					[
						"Vegetal A e B: à vontade <br>ou Tabule (1 col servir)",
						"Arroz integral, Batata doce, <br>Aipim, Cará, Inhame, <br>Macarrão integral (2 sopa)",
						"Feijão ou Leguminosas (1 concha)",
						"Protein Veg (1 col sopa) <br>ou Tofu (50g) ou Cogumelo (1 col)"
					],
					[
						"Guacamole (4 col  sopa)",
						"Queijo vegano (2 fatias)",
						"Bolacha arroz (2)"
					]
				]	
			}
		]
	};



getMeals().forEach(mealElement => {
	//console.log(mealElement)


	var meal = document.createElement("ul");
	meal.classList.add("meal");

	mealElement.itens.forEach(optionList => {
		var option = document.createElement("li");
		option.classList.add("big");
		option.appendChild(document.createTextNode(mealElement.nome));
		var itens = document.createElement("ul");

		optionList.forEach(optionText =>{
			var item = document.createElement("li");
			item.appendChild(document.createTextNode(optionText));
			itens.appendChild(item);
		})
		option.appendChild(itens);
		meal.appendChild(option);
	})  
			
	document.getElementById("content").appendChild(meal);

});