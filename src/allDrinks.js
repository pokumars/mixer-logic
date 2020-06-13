//Drinks
/**Rules
 * - name starts with caps
 * - ingredients are all small case
 */

const drinks = [
  {
      name: "drinkName",
      ingredients: [
        ["ingredientName",4, "unit"],
        ["ingredientName",4, "unit"]
      ],
      imageUrl:"vodkaMartini",
      glass: "glassType",
      method: ["method1","method2"],
      garnish: ["garnish1","garnish2"],
      categories: ["category1", "category2"],
      page: 1,
      credits:[["entity1", "forWhat"], ["entity1", "forWhat"]],
      steps: [
       "step1",
       "step2",
       "step3",
       "step4",
       "step5"
      ]    
    },
    {
      name: "Vodka Martini",
      ingredients: [
        ["vodka",4, "cl"],
        ["dry vermouth",1, "dash"]
      ],
      imageUrl:"vodkaMartini",
      glass: "cocktail",
      method: ["stir"],
      garnish: ["olives"," lemon twist"],
      categories: ["classic", "martini", "cocktail"],
      page: 15,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Chill both the martini and mixing glasses",
       "Pour the vodka, followed by the dry vermouth in an ice-filled mixing glass and stir.",
       "Strain into a chilled martini glass.",
       "Olive - or twist? Your choice.",
       "Cheers"
      ]    
  
    },
    {
      name: "Bloody mary",
      ingredients: [
        ["vodka", 2, "cl"],
        ["lime vodka", 2, "cl"],
        ["lemon juice", 1, "cl"],
        ["tomato juice", 8, "cl"],
        ["salt & pepper"],
        ["tabasco/hot sauce ", 3, "drops"],
        ["worcestershire sauce", 2, "dashes"]
      ],
      imageUrl:"bloodyMaryCocktail",
      glass: "On The Rocks",
      method: ["stir"],
      garnish: ["celery stalk", "cucumber"],
      categories: ["classic", "ordinary drink"],
      page: 16,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Add the ingredients into the mixer",
       "Mix and chill together with ice",
       "Strain into a rocks glass",
       "Garnish with celery and cucumber",
      ]    
    },
    {
      name: "Spicy Mule",
      ingredients: [
        ["vodka", 4, "cl"],
        ["ginger beer", 10, "cl"],
        ["fresh lime juice", 2, "cl"],
        ["fresh ginger", null, null],
        ["chili pepper", null, null]
      ],
      imageUrl:"spicyMule",
      glass: "highball",
      method: ["muddle","build"],
      garnish: ["cucumber stick","lime wedge"],
      categories: ["vodka", "cocktail"],
      page: 24,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Muddle the ginger in a glass with the sliced pepper.",
       "Add the ice, lime juice and ginger beer.",
       "Finally, add the vodka and a lime and fresh chili pepper to garnish"
      ]    
    },
    {
      name: "Mango Breeze",
      ingredients: [
        ["mango flavoured vodka", 4, "cl"],
        ["cranberry juice", 6, "cl"],
        ["grapefruit juice", 6, "cl"],
        ["slice of mango", null, null],
      ],
      imageUrl:"mangoBreeze",
      glass: "highball",
      method: ["build"],
      garnish: ["slice of mango"],
      categories: ["mango", "cocktail"],
      page: 31,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Fill a tall glass with ice and stir it round",
       "Add the vodka.",
       "Pour in the grapefruit and cranberry juice and garnish with a mango slice."
      ]    
    },
    {
      name: "Mini Mary",
      ingredients: [
        ["vodka", 2, "cl"],
        ["tomato juice", 2, "cl"],
        ["hot chili sauce", 1, "drop"],
        ["fresh lemon juice", 1, "dash"],
        ["worcestershire sauce", 4, "dash"],
        ["salt and pepper", null, null],
        ["celery", null, null]
      ],
      imageUrl:"miniMary",
      glass: "shot",
      method: ["shake"],
      garnish: ["cherry tomato","celery stalk"],
      categories: ["shot", "short drinks"],
      page: 33,
      credits: [["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Put the salt, the juices and the sauces in an ice-filled shaker",
       "Introduce the vodka to the ingredients in the ice-filled shaker",
       "Shake and strain into a shot glass.",
       "Finish with black pepper and celery."
      ]
    },
    {
      name: "Mini Sea Breeze",
      ingredients: [
        ["grapefruit flavoured vodka", 2, "cl"],
        ["cranberry juice", 2, "cl"],
        ["sugar", null, null],
        ["pink grapefruit", null, "slice"]
      ],
      imageUrl:"miniSeaBreeze",
      glass: "shot",
      method: ["build"],
      garnish: ["pink grapefruit","sugar"],
      categories: ["shot", "rituals"],
      page: 34,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Pour the vodka into a mixing glass filled with ice and stir.",
       "Strain into a shot glass.",
       "Garnish with a grapefruit slice sprinkled with sugar and enjoy it after the shot."
      ]    
    },
    {
      name: "Cinnamini",
      ingredients: [
        ["cranberry flavoured vodka", 2, "cl"],
        ["apple juice", 2, "cl"],
        ["lime juice", 1, "dash"],
        ["apple", 1, "slice"],
        ["sugar", null, null],
        ["cinnamon", null, null]
      ],
      imageUrl:"cinnamini",
      glass: "shot",
      method: ["shake"],
      garnish: ["apple wedge","cinnamon", "sugar"],
      categories: ["shot", "rituals"],
      page: 34,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Pour the vodka, lime juice and apple juice into a mixing glass filled with ice.",
       "Stir and strain into a shot glass.",
       "Garnish with a slice of apple dipped in sugar and cinnamon, to be enjoyed after the shot."
      ]    
    },
    {
      name: "Caipiroska",
      ingredients: [
        ["vodka", 4, "cl"],
        ["lime wedges", 4, "pcs"],
        ["sugar", 2, "tsp"],
        ["crushed ice", null, null]
      ],
      imageUrl:"caipiroska",
      glass: "on the rocks",
      method: ["muddle","stir"],
      garnish: ["caipiroska spoon"],
      categories: ["caipiroska", "cocktail"],
      page: 35,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Give the limes and sugar a muddle in the glass.",
       "Add a spoonful of the crushed ice.",
       "Then pour the vodka and mix with a spoon.",
       "Top it off with more crushed ice and serve with a spoon to keep mixing"
      ]    
    },
    {
      name: "Oriental Caipiroska",
      ingredients: [
        ["mango flavoured vodka", 4, "cl"],
        ["honey syrup (2 parts honey mixed with 1 part hot water)", 2, "cl"],
        ["lime wedges", 4, null],
        ["basil leaves", null, null],
        ["wasabi paste", 1, "pinch"],
        ["crushed ice", null, null]
      ],
      imageUrl:"orientalCaipiroska",
      glass: "on the rocks",
      method: ["muddle","stir"],
      garnish: ["caipiroska spoon"],
      categories: ["caipiroska", "cocktail"],
      page: 36,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Give the limes, wasabi paste and honey syrup a muddle in the glass.",
       "Add the crushed ice",
       "Add the vodka and stir.",
       "Top it off with more crushed ice.",
       "Garnish with ginger and lime. Serve with a spoon for stirring"
      ]    
    },
    {
      name: "Grapefruit Caipiroska",
      ingredients: [
        ["grapefruit flavoured vodka", 4, "cl"],
        ["honey syrup (2 parts honey, 1 part hot water)", 2, "cl"],
        ["lime wedges", 4, "pcs"],
        ["pink grapefruit wedges", null, null],
        ["crushed ice", null, null]
      ],
      imageUrl:"grapefruitCaipiroska",
      glass: "on the rocks",
      method: ["muddle","stir"],
      garnish: ["pink grapefruit wedge"],
      categories: ["caipiroska", "cocktail"],
      page: 37,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Give the limes, grapefruit and honey syrup a muddle in the glass.",
       "Stir in a spoon of crushed ice.",
       "Pour the vodka and stir.",
       "Top it off with more crushed ice, garnish and serve with a spoon for stirring"
      ]    
    },
    {
      name: "Espresso Martini",
      ingredients: [
        ["vodka", 4, "cl"],
        ["simple syrup (1 part sugar mixed with 1 part hot water)", 1, "cl"],
        ["espresso", 4, "cl"]
      ],
      imageUrl:"espressoMartini",
      glass: "cocktail",
      method: ["shake"],
      garnish: ["coffee beans"],
      categories: ["martini", "coffee"],
      page: null,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Chill both the martini glass and the shaker",
       "Pour the vodka into an ice-filled shaker, followed by the wet ingredients",
       "Shake into a martini glass",
       "Garnish with coffee beans"
      ]
    },
    {
      name: "Archipelago/ Vodka Soda",
      ingredients: [
        ["vodka", 1, "part"],
        ["mineral water", 4, "parts"],
        ["rosemary sprig", null, null],
        ["lemon twist", null, null]
      ],
      imageUrl:"archipelago",
      glass: "highball",
      method: ["build"],
      garnish: ["lemon twist","herbs"],
      categories: ["cocktail"],
      page: null,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Add some ice in a highball glass",
       "Pour a shot of vodka and mineral water",
       "Mix the ingredients with a spoon",
       "Garnish with lemon twist and herbs",
      ]    
    },
    {
      name: "Tropical Touch",
      ingredients: [
        ["coconut flavoured vodka", 4, "cl"],
        ["coconut water", 2, "cl"],
        ["pineapple juice", 2, "cl"],
        ["lime juice", 2, "cl"],
        ["salt", 1, "pinch"],
        ["pineapple leaf", null, null],
        ["lime wedge", null, null]
      ],
      imageUrl:"tropicalTouch",
      glass: "cocktail or coupe",
      method: ["stir"],
      garnish: ["pineapple leaf","lime wedge"],
      categories: ["cocktail", "tropical"],
      page: null,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Chill the glass and the shaker.",
       "Add the ingredients to the ice-filled shaker.",
       "Stir and strain into the chilled coupe glass.",
       "Garnish with a wedge of lime and a pineapple leaf."
      ]    
    },
    {
      name: "Coconut Crush",
      ingredients: [
        ["coconut flavoured vodka", 3, "cl"],
        ["triple sec", 1, "cl"],
        ["pineapple juice", 4, "cl"],
        ["lemon-lime soda", 8, "cl"],
        ["ice", null, null]
      ],
      imageUrl:"coconutCrush",
      glass: "hihgball",
      method: ["shake","build"],
      garnish: ["pineapple wedge"],
      categories: ["cocktail", "tropical"],
      page: null,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Pour the vodka pineapple juice and triple sec into a shaker.",
       "Add ice and shake.",
       "Pour into an ice filled highball and add a splash of lemon-lime soda and a pineapple wedge to finish."
      ]    
    },
    {
      name: "Tropical Caipiroska",
      ingredients: [
        ["coconut flavoured vodka", 4, "cl"],
        ["sugar", 2, "tsp"],
        ["lime wedges", 4, null],
        ["cilantro leaves", 5, null],
        ["pineapple wedges", 4, null],
        ["crushed ice", null, null]
      ],
      imageUrl:"tropicalCaipiroska",
      glass: "on the rocks",
      method: ["muddle","stir"],
      garnish: ["cilantro","pineapple slice"],
      categories: ["caipiroska", "tropical"],
      page: null,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Add the vodka and a spoon of crushed ice.",
       "Stir.",
       "Top it off with more crushed ice.",
       "Garnish with cilantro and a pineapple slice, serve with a spoon for stirring"
      ]    
    },
    {
      name: "Gin & Tonic",
      ingredients: [
        ["vodka or gin (grapefruit flavour recommended)", 4, "cl"],
        ["tonic water", 12, "cl"],
        ["lime", 1, null]
      ],
      imageUrl:"ginAndTonic",
      glass: "highball",
      method: ["build"],
      garnish: ["lime"],
      categories: ["cocktail"],
      page: null,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Cut a fresh lime and add the slices to the glass.",
       "Next add ice and vodka",
       "Finally, top up with tonic and garnish with a slice of lime."
      ]    
    },
    {
      name: "Lime & Cola",
      ingredients: [
        ["lime(or citrus) flavoured vodka", 4, "cl"],
        ["cola", 12, "cl"],
        ["ice", null, null],
        ["lime twist", null, null]
      ],
      imageUrl:"limeCola",
      glass: "cocktail or highball",
      method: ["build"],
      garnish: ["lime twist"],
      categories: ["cocktail"],
      page: null,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Fill the glass with ice.",
       "Pour the vodka.",
       "Build with cola and garnish with a lime twist."
      ]
    },
    {
      name: "Apple Pie",
      ingredients: [
        ["lime flavoured vodka", 2, "cl"],
        ["apple juice", 2, "cl"],
        ["lime juice", 1, "lime"],
        ["apple slice", 1, null],
        ["sugar", null, null],
        ["cinnamon", null, null]
      ],
      imageUrl:"applePie",
      glass: "shot",
      method: ["stir","build"],
      garnish: ["apple slice","cinnamon"],
      categories: ["shot"],
      page: null,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Swipe a lime wedge around the shot glass rim and dip it in sugar.",
       "Pour the vodka, lime juice and the apple juice into an ice-filled mixing glass and stir.",
       "Strain into a shot glass.",
       "Garnish with an apple slice dipped in cinnamon and enjoy it after the shot.",
      ]
    },
    {
      name: "Spicy Mango",
      ingredients: [
        ["mango flavoured vodka", 2, "cl"],
        ["chocolate sauce", 2, "cl"],
        ["hot pepper sauce", 3, "drops"],
        ["chili", null, null],
        ["chocolate chips", null, null]
      ],
      imageUrl:"spicyMango",
      glass: "shot",
      method: ["shake"],
      garnish: ["chocolate chips","chili pepper"],
      categories: ["shot"],
      page: null,
      credits:[["Finlandia Vodka", "image"], ["Finlandia Vodka", "recipe"]],
      steps: [
       "Pour the ingredients into an ice-filled shaker.",
       "Shake.",
       "Strain into a chilled shot glass.",
       "Garnish with chocolate chips and a slice of chili pepper."
      ]    
    },
    {
      name: "Cuba Libre",
      ingredients: [
        ["cola", 10, "cl"],
        ["rum (preferrably white)", 5, "cl"],
        ["lime", null, "half"],
        ["ice", null, null]
      ],
      imageUrl:"cubaLibre",
      glass: "highball",
      method: ["build","stir"],
      garnish: ["lime wedge"],
      categories: ["rum", "ordinary drink", "classic"],
      page: null,
      credits:[["BBC goodfood", "image"], ["BBC goodfood", "recipe"]],
      steps: [
       "Cut ½ a lime into four small wedges.",
       "Squeeze the juice from two of the wedges into a tall glass.",
       "Drop the remaining wedges into the glass and fill with ice. ",
       "Pour in the rum then fill up with cola and stir gently. "
      ] 
    },
    {
      name: "Pina Colada",
      ingredients: [
        ["pineapple juice", 12, "cl"],
        ["white rum", 6, "cl"],
        ["coconut cream or coconut milk", 6, "cl"],
        ["pineapple wedge", null, null],
        ["ice", null, null]
      ],
      imageUrl:"pinaColada",
      glass: "highball",
      method: ["blend"],
      garnish: ["pineapple wedge"],
      categories: ["cocktail", "tropical", "classic"],
      page: null,
      credits:[["BBC goodfood", "image"], ["maliburumdrinks.com", "recipe"]],
      steps: [
       "Put all the ingredients in a container,",
       "Shake or blend until smooth.",
       "Pour into a tall (highball) glass and garnish with a pineapple wedge.",
      ]    
    },
    {
      name: "Long Island Iced Tea",
      ingredients: [
        ["vodka", 15, "ml"],
        ["tequila", 15, "ml"],
        ["white rum", 15, "ml"],
        ["gin", 15, "ml"],
        ["cointreau", 15, "ml"],
        ["lemon juice", 25, "ml"],
        ["simple syrup(1 part sugar mixed with 1 part hot water)", 15, "ml"],
        ["coke", null, null]
      ],
      imageUrl:"longIslandIcedTea",
      glass: "highball",
      method: ["stir"],
      garnish: ["lemon slice"],
      categories: ["cocktail", "classic"],
      page: null,
      credits:[["BBC goodfood", "image"], ["International Bartender Association", "recipe"]],
      steps: [
       "Add all ingredients into highball glass filled with ice.",
       "Stir gently.",
       "Optionally garnish with lemon slices"
      ]    
    },
    {
      name: "Mojito",
      ingredients: [
        ["white rum", 5, "cl"],
        ["fresh lime juice", 2, "cl"],
        ["sugar", 2, "tsp"],
        ["soda water", null, null],
        ["mint leaves", 6, null]      
      ],
      imageUrl:"mojito",
      glass: "highball",
      method: ["muddle","shake"],
      garnish: ["mint leaf", "lime wheel"],
      categories: ["classic", "cocktail"],
      page: null,
      credits:[["liquor.com", "image"], ["International Bartender Association", "recipe"]],
      steps: [
       "Mix mint leaves with sugar and lime juice.",
       "Add a splash of soda water and fill the glass with ice.",
       "Pour the rum and top with soda water. ",
       "Lightly stir to involve all ingredients."
      ]    
    },
    {
      name: "Daiquiri",
      ingredients: [
        ["white rum", 6, "cl"],
        ["lime juice", 2, "cl"],
        ["sugar", 2, "tsp"]
      ],
      imageUrl:"daiquiri",
      glass: "cocktail",
      method: ["stir","shake"],
      garnish: ["lime wheel", "nothing"],
      categories: ["cocktail", "classic"],
      page: null,
      credits:[["BBC goodfood", "image"], ["International Bartenders Association", "recipe"]],
      steps: [
       "In a cocktail shaker (or whatever you have) add all ingredients.",
       "Stir well to dissolve the sugar.",
       "Add ice and shake. ",
       "Strain into a chilled cocktail glass."
      ]    
    },
    {
      name: "Hemingway Special",
      ingredients: [
        ["rum (12 parts)", 6, "cl"],
        ["grapefruit juice (8 parts) ", 4, "cl"],
        ["maraschino liqueur (3 parts)", 1.5, "cl"],
        ["lime juice (3 parts) ", 1.5, "cl"]
      ],
      imageUrl:"hemingwaySpecial",
      glass: "cocktail",
      method: ["shake",],
      garnish: ["lime wedge"],
      categories: ["cocktail", "classic"],
      page: null,
      credits:[["thespruceeats.com", "image"], ["International Bartender Association", "recipe"]],
      steps: [
       "Pour all ingredients into a shaker (or whatever you have) with ice.",
       "Shake well and strain into a large cocktail glass.",
      ]    
    },
    {
      name: "Margarita",
      ingredients: [
        ["lime wedge", 1, null],
        ["tequila", 5, "cl"],
        ["triple sec", 2, "cl"],
        ["lime juice", 15, "ml"]
      ],
      imageUrl:"margarita",
      glass: "cocktail",
      method: ["shake"],
      garnish: ["salted rim"],
      categories: ["classic", "cocktail"],
      page: null,
      credits:[["liquor.com", "image"]],
      steps: [
       "Chill your cocktail glass.",
       "Place salt on a small shallow plate.",
       "Rub the rim of the cocktail glass with a lime wedge, then dip in salt to coat rim.",
       "Add all the ingredients into a shaker (or whatever you have) with ice.",
       "Shake and strain into the chilled cocktail glass."
      ]    
    },
    {
      name: "Sex On The Beach",
      ingredients: [
        ["vodka", 4, "cl"],
        ["peach schnapps", 2, "cl"],
        ["cranberry juice", 4, "cl"],
        ["fresh orange juice", 4, "cl"],
        ["maraschino cherry (optional)", 1, null],
        ["orange slice (optional)", 1, null],
      ],
      imageUrl:"sexOnTheBeach",
      glass: "highball",
      method: ["shake"],
      garnish: ["orange slice ","maraschino cherry", "cocktail umbrella"],
      categories: ["cocktail", "classic"],
      page: null,
      credits:[["BBC goodfood", "image"], ["liquor.com", "recipe"]],
      steps: [
       "Add all the ingredients into a shaker (or whatever you have) with ice and shake.",
       "Strain into a highball glass over fresh ice.",
       "Garnish with a maraschino cherry or orange slice or cocktail umbrella."
      ]    
    },
    {
      name: "Mimosa",
      ingredients: [
        ["orange juice", 7, "cl"],
        ["sparkling wine", 7, "cl"]
      ],
      imageUrl:"mimosa",
      glass: "champagne flute",
      method: ["stir"],
      garnish: ["orange wedge"],
      categories: ["cocktail", "classic"],
      page: null,
      credits:[["liquor.com", "image"], ],
      steps: [
       "Pour orange juice into a flute glass.",
       "Gently pour the sparkling wine.",
       "Stir gently."
      ] 
    },
    {
      name: "Black Russian",
      ingredients: [
        ["vodka", 5, "cl"],
        ["coffee liqueur", 2, "cl"],
        ["maraschino cherry", 1, null],
        ["cola (optional)", null, null]
      ],
      imageUrl:"blackRussian",
      glass: "On The Rocks",
      method: ["build","stir"],
      garnish: ["maraschino cherry"],
      categories: ["cocktail", ],
      page: null,
      credits:[["thespruceeats.com", "image"], ["BBC goodfood", "recipe"]],
      steps: [
       "Put the vodka and the coffee liqueur into a glass filled with ice.",
       "Stir gently for about 30 secs.",
       "Add the cherry and serve. ",
       "Optionally top up the glass with chilled cola if you prefer a longer drink."
      ]    
    },
    {
      name: "White Russian",
      ingredients: [
        ["vodka", 5, "cl"],
        ["coffee liqueur", 2, "cl"],
        ["fresh cream (or milk)", 3, "cl"],
        ["ice", null, null]
      ],
      imageUrl:"whiteRussian",
      glass: "On The Rocks",
      method: ["build","stir"],
      garnish: [null],
      categories: ["cocktail"],
      page: null,
      credits:[["liquor.com", "image"]],
      steps: [
       "Add the vodka and coffee liqueur to a glass with ice.",
       "Top with cream and stir."
      ]    
    },
  
  ]
  
  
  module.exports = { drinks }; 