export const recipeCategories = [
  'Desayuno',
  'Almuerzo',
  'Cena',
  'Merienda',
  'Postre Saludable',
  'Batidos'
];

export const recipes = [
  // ========== DESAYUNOS (10 recetas) ==========
  {
    id: 1,
    name: 'Tortilla de Claras con Verduras',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',
    calories: 180,
    macros: {
      protein: 20,
      carbs: 12,
      fat: 5
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: [
      '4 claras de huevo',
      '1 huevo entero',
      '1/2 pimiento rojo',
      '1/2 cebolla',
      '50g de espinacas',
      'Sal y pimienta al gusto',
      '1 cucharadita de aceite de oliva'
    ],
    instructions: [
      'Picar finamente el pimiento, la cebolla y las espinacas.',
      'Calentar una sartén con el aceite de oliva a fuego medio.',
      'Saltear las verduras durante 3-4 minutos hasta que estén tiernas.',
      'Batir las claras con el huevo entero, sal y pimienta.',
      'Verter la mezcla de huevo sobre las verduras.',
      'Cocinar a fuego medio-bajo durante 3-4 minutos.',
      'Doblar la tortilla por la mitad y servir caliente.'
    ]
  },
  {
    id: 2,
    name: 'Avena con Frutas y Proteína',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400&h=300&fit=crop',
    calories: 320,
    macros: {
      protein: 25,
      carbs: 45,
      fat: 8
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: [
      '60g de avena',
      '1 scoop de proteína de vainilla',
      '200ml de leche desnatada',
      '1/2 plátano',
      '50g de arándanos',
      '1 cucharada de miel',
      'Canela al gusto'
    ],
    instructions: [
      'Calentar la leche en una olla pequeña.',
      'Añadir la avena y cocinar durante 5 minutos, removiendo ocasionalmente.',
      'Retirar del fuego y dejar enfriar 1 minuto.',
      'Mezclar el scoop de proteína con un poco de agua y añadir a la avena.',
      'Cortar el plátano en rodajas.',
      'Servir la avena en un bol y decorar con el plátano, arándanos y miel.',
      'Espolvorear canela por encima.'
    ]
  },
  {
    id: 3,
    name: 'Tostadas de Aguacate y Huevo Pochado',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop',
    calories: 350,
    macros: {
      protein: 18,
      carbs: 32,
      fat: 16
    },
    prepTime: 15,
    difficulty: 'Media',
    ingredients: [
      '2 rebanadas de pan integral',
      '1 aguacate maduro',
      '2 huevos',
      'Tomate cherry',
      'Rúcula fresca',
      'Limón',
      'Sal, pimienta y hojuelas de chile'
    ],
    instructions: [
      'Tostar el pan integral hasta que esté crujiente.',
      'Poner agua a hervir con un chorrito de vinagre.',
      'Machacar el aguacate con un tenedor y añadir limón, sal y pimienta.',
      'Hacer un remolino en el agua hirviendo y añadir los huevos uno a uno.',
      'Cocinar los huevos 3-4 minutos para huevo pochado.',
      'Untar el aguacate en las tostadas.',
      'Colocar el huevo pochado encima, decorar con rúcula y tomates.',
      'Espolvorear hojuelas de chile al gusto.'
    ]
  },
  {
    id: 4,
    name: 'Pancakes Proteicos de Plátano',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop',
    calories: 290,
    macros: {
      protein: 28,
      carbs: 38,
      fat: 5
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: [
      '2 plátanos maduros',
      '3 huevos',
      '1 scoop de proteína de vainilla',
      '30g de harina de avena',
      '1/2 cucharadita de levadura',
      'Canela al gusto',
      'Frutos rojos para decorar'
    ],
    instructions: [
      'Machacar los plátanos en un bol hasta obtener un puré.',
      'Añadir los huevos y batir bien.',
      'Incorporar la proteína, harina de avena, levadura y canela.',
      'Mezclar hasta obtener una masa homogénea.',
      'Calentar una sartén antiadherente a fuego medio.',
      'Verter porciones de masa y cocinar 2-3 minutos por lado.',
      'Servir con frutos rojos y un chorrito de miel si se desea.'
    ]
  },
  {
    id: 5,
    name: 'Bol de Yogur con Granola Casera',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
    calories: 380,
    macros: {
      protein: 22,
      carbs: 48,
      fat: 12
    },
    prepTime: 10,
    difficulty: 'Muy Fácil',
    ingredients: [
      '250g de yogur griego natural',
      '40g de granola sin azúcar',
      '1 plátano',
      '50g de fresas',
      '30g de arándanos',
      '1 cucharada de semillas de chía',
      '1 cucharadita de miel'
    ],
    instructions: [
      'Servir el yogur griego en un bol grande.',
      'Cortar el plátano en rodajas y las fresas en mitades.',
      'Distribuir la granola sobre el yogur.',
      'Añadir todas las frutas.',
      'Espolvorear las semillas de chía.',
      'Rociar con miel al gusto.',
      'Servir inmediatamente.'
    ]
  },
  {
    id: 6,
    name: 'Revuelto de Claras con Salmón Ahumado',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop',
    calories: 260,
    macros: {
      protein: 32,
      carbs: 8,
      fat: 10
    },
    prepTime: 12,
    difficulty: 'Fácil',
    ingredients: [
      '5 claras de huevo',
      '1 huevo entero',
      '50g de salmón ahumado',
      '50g de queso fresco batido',
      'Cebollino fresco',
      'Eneldo',
      'Pimienta negra'
    ],
    instructions: [
      'Batir las claras con el huevo entero y un poco de pimienta.',
      'Cortar el salmón ahumado en tiras.',
      'Calentar una sartén antiadherente a fuego medio.',
      'Verter los huevos y remover suavemente.',
      'Cuando estén semi-cuajados, añadir el queso fresco.',
      'Continuar cocinando hasta la consistencia deseada.',
      'Servir con el salmón ahumado por encima y hierbas frescas.'
    ]
  },
  {
    id: 7,
    name: 'Burrito Bowl de Desayuno',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    calories: 420,
    macros: {
      protein: 30,
      carbs: 45,
      fat: 12
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: [
      '3 huevos',
      '80g de arroz integral cocido',
      '100g de frijoles negros',
      'Aguacate',
      'Tomate',
      'Cebolla morada',
      'Cilantro fresco',
      'Salsa picante (opcional)'
    ],
    instructions: [
      'Cocinar los huevos revueltos con un poco de sal y pimienta.',
      'Calentar los frijoles negros con especias (comino, pimentón).',
      'Servir el arroz integral en un bol como base.',
      'Añadir los huevos revueltos a un lado.',
      'Agregar los frijoles negros.',
      'Cortar aguacate, tomate y cebolla morada.',
      'Decorar con cilantro fresco y salsa al gusto.'
    ]
  },
  {
    id: 8,
    name: 'Smoothie Bowl Tropical',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
    calories: 310,
    macros: {
      protein: 20,
      carbs: 50,
      fat: 6
    },
    prepTime: 10,
    difficulty: 'Muy Fácil',
    ingredients: [
      '1 plátano congelado',
      '100g de mango congelado',
      '50g de piña',
      '1 scoop de proteína de vainilla',
      '100ml de leche de coco light',
      'Toppings: coco rallado, kiwi, granola'
    ],
    instructions: [
      'Añadir en la batidora el plátano, mango y piña congelados.',
      'Agregar la proteína y la leche de coco.',
      'Batir hasta obtener una consistencia espesa y cremosa.',
      'Verter en un bol.',
      'Decorar con rodajas de kiwi, coco rallado y granola.',
      'Servir inmediatamente con cuchara.'
    ]
  },
  {
    id: 9,
    name: 'Tortitas de Avena y Manzana',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop',
    calories: 280,
    macros: {
      protein: 16,
      carbs: 42,
      fat: 6
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: [
      '60g de copos de avena',
      '2 huevos',
      '1 manzana',
      '100ml de leche desnatada',
      'Canela',
      'Extracto de vainilla',
      '1/2 cucharadita de levadura'
    ],
    instructions: [
      'Triturar los copos de avena hasta obtener harina.',
      'Pelar y rallar la manzana.',
      'Batir los huevos con la leche.',
      'Mezclar la harina de avena, manzana rallada, canela y levadura.',
      'Combinar con los huevos batidos hasta formar una masa.',
      'Cocinar porciones en sartén antiadherente 2-3 minutos por lado.',
      'Servir con canela espolvoreada y rodajas de manzana.'
    ]
  },
  {
    id: 10,
    name: 'Creps de Proteína Rellenos',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=300&fit=crop',
    calories: 340,
    macros: {
      protein: 35,
      carbs: 30,
      fat: 8
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: [
      '2 huevos',
      '1 scoop de proteína de vainilla',
      '30g de harina de avena',
      '100ml de leche desnatada',
      'Relleno: queso fresco batido, fresas',
      'Stevia al gusto'
    ],
    instructions: [
      'Batir los huevos con la leche.',
      'Añadir la proteína y la harina de avena.',
      'Mezclar hasta obtener una masa líquida y sin grumos.',
      'Calentar una sartén antiadherente a fuego medio.',
      'Verter una fina capa de masa y cocinar 1-2 minutos por lado.',
      'Rellenar con queso fresco batido y fresas cortadas.',
      'Enrollar y servir con fresas frescas por encima.'
    ]
  },

  // ========== ALMUERZOS (12 recetas) ==========
  {
    id: 11,
    name: 'Pollo a la Plancha con Arroz Integral',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
    calories: 450,
    macros: {
      protein: 45,
      carbs: 50,
      fat: 8
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: [
      '200g de pechuga de pollo',
      '80g de arroz integral (peso en seco)',
      '100g de brócoli',
      '1 diente de ajo',
      'Limón',
      'Especias: pimentón, orégano',
      'Sal y pimienta'
    ],
    instructions: [
      'Cocinar el arroz integral según las instrucciones del paquete (unos 25 minutos).',
      'Salpimentar la pechuga de pollo y añadir las especias.',
      'Calentar una sartén antiadherente a fuego medio-alto.',
      'Cocinar el pollo 6-7 minutos por cada lado hasta que esté dorado.',
      'Mientras tanto, cocer el brócoli al vapor durante 5 minutos.',
      'Saltear el brócoli con ajo picado durante 2 minutos.',
      'Servir el pollo con el arroz y el brócoli, añadir un chorrito de limón.'
    ]
  },
  {
    id: 12,
    name: 'Ensalada de Atún con Quinoa',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&h=300&fit=crop',
    calories: 380,
    macros: {
      protein: 30,
      carbs: 42,
      fat: 10
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: [
      '150g de atún en lata (en agua)',
      '60g de quinoa (peso en seco)',
      'Lechuga variada',
      '1 tomate',
      '1/2 pepino',
      '10 aceitunas',
      'Vinagreta ligera'
    ],
    instructions: [
      'Cocinar la quinoa según las instrucciones del paquete (unos 15 minutos).',
      'Dejar enfriar la quinoa.',
      'Lavar y picar las verduras: lechuga, tomate y pepino.',
      'Escurrir bien el atún.',
      'En un bol grande, mezclar todas las verduras.',
      'Añadir la quinoa fría y el atún.',
      'Aliñar con la vinagreta y mezclar bien.',
      'Decorar con las aceitunas.'
    ]
  },
  {
    id: 13,
    name: 'Wrap de Hummus y Verduras',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    calories: 300,
    macros: {
      protein: 12,
      carbs: 45,
      fat: 10
    },
    prepTime: 10,
    difficulty: 'Muy Fácil',
    ingredients: [
      '1 tortilla integral grande',
      '3 cucharadas de hummus',
      'Zanahoria rallada',
      'Pepino en tiras',
      'Lechuga',
      'Tomate',
      'Cebolla morada',
      'Brotes de alfalfa'
    ],
    instructions: [
      'Extender el hummus uniformemente sobre la tortilla.',
      'Lavar y preparar todas las verduras: rallar la zanahoria, cortar el pepino, etc.',
      'Distribuir las verduras en el centro de la tortilla.',
      'Enrollar la tortilla firmemente, doblando los extremos.',
      'Cortar por la mitad en diagonal.',
      'Servir inmediatamente o envolver en papel film para llevar.'
    ]
  },
  {
    id: 14,
    name: 'Pasta Integral con Pesto de Espinacas y Pollo',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
    calories: 480,
    macros: {
      protein: 38,
      carbs: 55,
      fat: 12
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: [
      '80g de pasta integral',
      '150g de pechuga de pollo',
      '100g de espinacas frescas',
      '30g de albahaca fresca',
      '20g de nueces',
      '1 diente de ajo',
      '2 cucharadas de queso parmesano',
      'Aceite de oliva'
    ],
    instructions: [
      'Cocinar la pasta según las instrucciones del paquete.',
      'Cocinar el pollo a la plancha y cortarlo en tiras.',
      'Para el pesto: triturar espinacas, albahaca, nueces, ajo y parmesano.',
      'Añadir un chorrito de aceite de oliva hasta obtener consistencia cremosa.',
      'Escurrir la pasta y mezclar con el pesto.',
      'Añadir las tiras de pollo.',
      'Servir con un poco más de parmesano rallado por encima.'
    ]
  },
  {
    id: 15,
    name: 'Bowl de Arroz con Teriyaki de Pollo',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    calories: 465,
    macros: {
      protein: 42,
      carbs: 58,
      fat: 8
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: [
      '180g de pechuga de pollo',
      '80g de arroz basmati',
      'Salsa teriyaki baja en azúcar',
      'Brócoli',
      'Zanahoria',
      'Edamame',
      'Sésamo tostado',
      'Cebolleta'
    ],
    instructions: [
      'Cocinar el arroz basmati según las instrucciones.',
      'Cortar el pollo en cubos y marinarlo con salsa teriyaki 10 minutos.',
      'Saltear el pollo en una sartén hasta que esté dorado.',
      'Cocer al vapor el brócoli, zanahoria y edamame.',
      'Servir el arroz en un bol como base.',
      'Añadir el pollo teriyaki y las verduras.',
      'Decorar con sésamo y cebolleta picada.'
    ]
  },
  {
    id: 16,
    name: 'Ensalada César con Pollo a la Parrilla',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    calories: 380,
    macros: {
      protein: 40,
      carbs: 20,
      fat: 15
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: [
      '200g de pechuga de pollo',
      'Lechuga romana',
      '30g de queso parmesano',
      'Crutones integrales',
      'Salsa césar light',
      'Limón',
      'Pimienta negra'
    ],
    instructions: [
      'Sazonar el pollo y cocinarlo a la parrilla 6-7 minutos por lado.',
      'Dejar reposar el pollo 5 minutos y cortar en tiras.',
      'Lavar y trocear la lechuga romana.',
      'Mezclar la lechuga con la salsa césar.',
      'Añadir el pollo en tiras.',
      'Espolvorear queso parmesano rallado y crutones.',
      'Servir con pimienta negra recién molida.'
    ]
  },
  {
    id: 17,
    name: 'Lentejas con Verduras al Curry',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop',
    calories: 360,
    macros: {
      protein: 20,
      carbs: 58,
      fat: 6
    },
    prepTime: 35,
    difficulty: 'Fácil',
    ingredients: [
      '100g de lentejas rojas',
      'Cebolla',
      'Tomate',
      'Pimiento rojo',
      'Zanahoria',
      'Curry en polvo',
      'Leche de coco light',
      'Espinacas frescas'
    ],
    instructions: [
      'Picar todas las verduras en cubos pequeños.',
      'Sofreír la cebolla hasta que esté transparente.',
      'Añadir el resto de verduras y el curry, cocinar 5 minutos.',
      'Agregar las lentejas y cubrir con agua.',
      'Cocinar a fuego medio 20-25 minutos hasta que las lentejas estén tiernas.',
      'Añadir la leche de coco y las espinacas.',
      'Cocinar 5 minutos más y servir caliente.'
    ]
  },
  {
    id: 18,
    name: 'Fajitas de Pavo con Pimientos',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop',
    calories: 395,
    macros: {
      protein: 38,
      carbs: 42,
      fat: 9
    },
    prepTime: 25,
    difficulty: 'Fácil',
    ingredients: [
      '200g de pechuga de pavo',
      '3 tortillas integrales',
      'Pimientos de colores',
      'Cebolla',
      'Especias fajitas (comino, pimentón, chile)',
      'Yogur griego natural',
      'Cilantro fresco'
    ],
    instructions: [
      'Cortar el pavo y los pimientos en tiras finas.',
      'Picar la cebolla en juliana.',
      'Marinar el pavo con las especias 10 minutos.',
      'Saltear la cebolla hasta que esté dorada.',
      'Añadir el pavo y cocinar 5-6 minutos.',
      'Agregar los pimientos y cocinar 3-4 minutos más.',
      'Calentar las tortillas y rellenar con la mezcla.',
      'Servir con yogur griego y cilantro.'
    ]
  },
  {
    id: 19,
    name: 'Buddha Bowl Mediterráneo',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    calories: 420,
    macros: {
      protein: 22,
      carbs: 52,
      fat: 14
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: [
      '80g de quinoa',
      '150g de garbanzos cocidos',
      'Tomates cherry',
      'Pepino',
      'Pimiento rojo',
      'Aceitunas negras',
      'Queso feta light',
      'Hummus',
      'Tahini para aliñar'
    ],
    instructions: [
      'Cocinar la quinoa según las instrucciones.',
      'Secar los garbanzos y tostarlos en el horno con especias 20 minutos.',
      'Cortar todos los vegetales en cubos pequeños.',
      'Servir la quinoa en un bol como base.',
      'Distribuir los garbanzos tostados y todos los vegetales.',
      'Añadir el queso feta desmenuzado.',
      'Colocar una cucharada de hummus en el centro.',
      'Aliñar con tahini diluido en limón.'
    ]
  },
  {
    id: 20,
    name: 'Poke Bowl de Atún',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?w=400&h=300&fit=crop',
    calories: 440,
    macros: {
      protein: 35,
      carbs: 50,
      fat: 11
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: [
      '150g de atún fresco',
      '80g de arroz para sushi',
      'Edamame',
      'Aguacate',
      'Pepino',
      'Mango',
      'Alga wakame',
      'Salsa de soja',
      'Sésamo'
    ],
    instructions: [
      'Cocinar el arroz para sushi según instrucciones.',
      'Cortar el atún en cubos y marinarlo con salsa de soja.',
      'Preparar todos los vegetales: aguacate en láminas, pepino y mango en cubos.',
      'Hidratar el alga wakame en agua.',
      'Servir el arroz en un bol.',
      'Distribuir el atún marinado, edamame, aguacate, pepino y mango.',
      'Añadir el alga wakame escurrida.',
      'Espolvorear sésamo tostado por encima.'
    ]
  },
  {
    id: 21,
    name: 'Wok de Ternera con Vegetales',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop',
    calories: 455,
    macros: {
      protein: 40,
      carbs: 48,
      fat: 10
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: [
      '180g de solomillo de ternera',
      '80g de fideos de arroz',
      'Brócoli',
      'Pimiento rojo',
      'Zanahoria',
      'Cebolla',
      'Salsa de soja baja en sodio',
      'Jengibre fresco',
      'Ajo'
    ],
    instructions: [
      'Cocinar los fideos de arroz según las instrucciones.',
      'Cortar la ternera en tiras finas.',
      'Preparar todos los vegetales en juliana o trozos pequeños.',
      'Calentar un wok o sartén grande a fuego alto.',
      'Saltear la ternera 2-3 minutos y reservar.',
      'Saltear los vegetales con ajo y jengibre 4-5 minutos.',
      'Añadir la ternera y los fideos.',
      'Mezclar con salsa de soja y servir caliente.'
    ]
  },
  {
    id: 22,
    name: 'Ensalada de Garbanzos Especiados',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=300&fit=crop',
    calories: 370,
    macros: {
      protein: 18,
      carbs: 54,
      fat: 10
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: [
      '200g de garbanzos cocidos',
      'Lechuga',
      'Tomate',
      'Pepino',
      'Pimiento',
      'Cebolla morada',
      'Especias: comino, pimentón, cúrcuma',
      'Vinagre de manzana',
      'Aceite de oliva'
    ],
    instructions: [
      'Secar bien los garbanzos.',
      'Tostar los garbanzos en sartén con las especias.',
      'Lavar y cortar todas las verduras.',
      'Mezclar las verduras en un bol grande.',
      'Añadir los garbanzos especiados.',
      'Preparar vinagreta con vinagre de manzana y aceite de oliva.',
      'Aliñar la ensalada y mezclar bien antes de servir.'
    ]
  },

  // ========== CENAS (12 recetas) ==========
  {
    id: 23,
    name: 'Salmón con Batata y Espárragos',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
    calories: 420,
    macros: {
      protein: 35,
      carbs: 35,
      fat: 15
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: [
      '180g de filete de salmón',
      '200g de batata',
      '150g de espárragos verdes',
      '1 cucharada de aceite de oliva',
      'Limón',
      'Eneldo fresco',
      'Sal y pimienta'
    ],
    instructions: [
      'Precalentar el horno a 200°C.',
      'Pelar y cortar la batata en cubos, aliñar con un poco de aceite y sal.',
      'Hornear la batata durante 25-30 minutos.',
      'Lavar y cortar los extremos duros de los espárragos.',
      'Salpimentar el salmón y añadir eneldo.',
      'En una sartén con aceite, cocinar el salmón 4-5 minutos por cada lado.',
      'Saltear los espárragos con ajo durante 5 minutos.',
      'Servir todo junto con un chorrito de limón.'
    ]
  },
  {
    id: 24,
    name: 'Tacos de Pavo con Vegetales',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop',
    calories: 340,
    macros: {
      protein: 35,
      carbs: 30,
      fat: 10
    },
    prepTime: 25,
    difficulty: 'Fácil',
    ingredients: [
      '200g de pechuga de pavo picada',
      '3 tortillas integrales pequeñas',
      '1/2 pimiento rojo y verde',
      '1/2 cebolla',
      'Lechuga',
      'Tomate',
      'Especias: comino, pimentón, chile'
    ],
    instructions: [
      'Picar finamente la cebolla y los pimientos.',
      'En una sartén, cocinar la cebolla hasta que esté transparente.',
      'Añadir el pavo picado y las especias, cocinar hasta que esté dorado.',
      'Agregar los pimientos y cocinar 3-4 minutos más.',
      'Calentar las tortillas en otra sartén o microondas.',
      'Picar la lechuga y el tomate.',
      'Rellenar las tortillas con el pavo, lechuga y tomate.',
      'Servir caliente.'
    ]
  },
  {
    id: 25,
    name: 'Merluza al Horno con Verduras',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    calories: 310,
    macros: {
      protein: 38,
      carbs: 20,
      fat: 8
    },
    prepTime: 30,
    difficulty: 'Fácil',
    ingredients: [
      '200g de filete de merluza',
      'Calabacín',
      'Berenjena',
      'Tomate',
      'Cebolla',
      'Ajo',
      'Aceite de oliva',
      'Perejil fresco',
      'Limón'
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'Cortar todas las verduras en rodajas.',
      'En una bandeja de horno, colocar las verduras con un chorrito de aceite.',
      'Hornear las verduras 15 minutos.',
      'Salpimentar la merluza y colocarla sobre las verduras.',
      'Añadir ajo laminado y perejil.',
      'Hornear todo junto 12-15 minutos más.',
      'Servir con limón.'
    ]
  },
  {
    id: 26,
    name: 'Pechuga de Pollo Rellena de Espinacas',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
    calories: 380,
    macros: {
      protein: 45,
      carbs: 12,
      fat: 16
    },
    prepTime: 40,
    difficulty: 'Media',
    ingredients: [
      '200g de pechuga de pollo',
      '100g de espinacas frescas',
      '50g de queso ricotta',
      'Ajo',
      'Nuez moscada',
      'Tomates cherry',
      'Sal y pimienta',
      'Palillos de cocina'
    ],
    instructions: [
      'Saltear las espinacas con ajo hasta que se reduzcan.',
      'Mezclar las espinacas con ricotta y nuez moscada.',
      'Hacer un corte horizontal en la pechuga para crear un bolsillo.',
      'Rellenar con la mezcla de espinacas y ricotta.',
      'Cerrar con palillos y salpimentar.',
      'Sellar el pollo en sartén 2 minutos por cada lado.',
      'Añadir tomates cherry y terminar de cocinar en el horno 20 minutos a 180°C.',
      'Dejar reposar 5 minutos antes de cortar.'
    ]
  },
  {
    id: 27,
    name: 'Revuelto de Claras con Champiñones',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop',
    calories: 190,
    macros: {
      protein: 24,
      carbs: 10,
      fat: 6
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: [
      '6 claras de huevo',
      '1 huevo entero',
      '200g de champiñones',
      '1/2 cebolla',
      'Espinacas frescas',
      'Ajo',
      'Perejil',
      'Pimienta negra'
    ],
    instructions: [
      'Limpiar y laminar los champiñones.',
      'Picar la cebolla finamente.',
      'Saltear la cebolla y el ajo hasta que estén dorados.',
      'Añadir los champiñones y cocinar hasta que suelten agua.',
      'Agregar las espinacas y cocinar hasta que se reduzcan.',
      'Batir las claras con el huevo entero.',
      'Verter sobre las verduras y remover suavemente.',
      'Cocinar hasta la consistencia deseada, servir con perejil.'
    ]
  },
  {
    id: 28,
    name: 'Hamburguesa de Pavo con Ensalada',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    calories: 360,
    macros: {
      protein: 40,
      carbs: 28,
      fat: 10
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: [
      '200g de carne de pavo picada',
      '1 pan integral para hamburguesa',
      'Lechuga',
      'Tomate',
      'Cebolla',
      'Pepino',
      'Mostaza',
      'Especias: ajo en polvo, orégano'
    ],
    instructions: [
      'Mezclar la carne de pavo con especias, ajo en polvo y orégano.',
      'Formar una hamburguesa de aproximadamente 2cm de grosor.',
      'Cocinar la hamburguesa en sartén o plancha 5-6 minutos por lado.',
      'Tostar ligeramente el pan.',
      'Preparar la ensalada con lechuga, tomate, cebolla y pepino.',
      'Montar la hamburguesa con lechuga, tomate y cebolla.',
      'Añadir mostaza al gusto.',
      'Servir con ensalada fresca al lado.'
    ]
  },
  {
    id: 29,
    name: 'Dorada a la Sal con Verduras Asadas',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop',
    calories: 350,
    macros: {
      protein: 42,
      carbs: 18,
      fat: 12
    },
    prepTime: 45,
    difficulty: 'Media',
    ingredients: [
      '1 dorada entera (aprox. 300g)',
      'Sal gorda',
      'Pimiento rojo y verde',
      'Calabacín',
      'Berenjena',
      'Limón',
      'Romero y tomillo',
      'Aceite de oliva'
    ],
    instructions: [
      'Precalentar el horno a 200°C.',
      'Limpiar y secar bien la dorada, rellenarla con hierbas y limón.',
      'Hacer una cama de sal en una bandeja y colocar el pescado.',
      'Cubrir completamente con más sal gorda.',
      'Hornear 25-30 minutos.',
      'Mientras tanto, cortar las verduras y asarlas con aceite y sal.',
      'Romper la costra de sal y servir el pescado con las verduras.',
      'Acompañar con un chorrito de limón.'
    ]
  },
  {
    id: 30,
    name: 'Berenjena Rellena de Carne Magra',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=400&h=300&fit=crop',
    calories: 320,
    macros: {
      protein: 32,
      carbs: 22,
      fat: 12
    },
    prepTime: 50,
    difficulty: 'Media',
    ingredients: [
      '2 berenjenas medianas',
      '150g de carne picada magra de ternera',
      'Tomate triturado',
      'Cebolla',
      'Ajo',
      'Pimiento',
      'Queso mozzarella light',
      'Orégano y albahaca'
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'Cortar las berenjenas por la mitad y vaciar parte de la pulpa.',
      'Hornear las mitades de berenjena 15 minutos.',
      'Picar la pulpa de berenjena, cebolla, ajo y pimiento.',
      'Sofreír las verduras y añadir la carne picada.',
      'Agregar tomate triturado, orégano y albahaca, cocinar 10 minutos.',
      'Rellenar las berenjenas con la mezcla.',
      'Cubrir con mozzarella y hornear 15-20 minutos más.'
    ]
  },
  {
    id: 31,
    name: 'Pollo al Limón con Brócoli',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop',
    calories: 330,
    macros: {
      protein: 42,
      carbs: 15,
      fat: 10
    },
    prepTime: 30,
    difficulty: 'Fácil',
    ingredients: [
      '200g de pechuga de pollo',
      '200g de brócoli',
      '2 limones',
      'Ajo',
      'Jengibre fresco',
      'Caldo de pollo bajo en sodio',
      'Maicena',
      'Aceite de oliva'
    ],
    instructions: [
      'Cortar el pollo en trozos y salpimentar.',
      'Dorar el pollo en una sartén con aceite.',
      'Añadir ajo y jengibre picados, cocinar 1 minuto.',
      'Agregar el zumo de limón y caldo de pollo.',
      'Cocinar a fuego medio 10-12 minutos.',
      'Cocer el brócoli al vapor.',
      'Espesar la salsa con un poco de maicena disuelta.',
      'Servir el pollo con brócoli y la salsa de limón por encima.'
    ]
  },
  {
    id: 32,
    name: 'Tortilla de Calabacín al Horno',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1604908815298-8f8daa36bcc6?w=400&h=300&fit=crop',
    calories: 240,
    macros: {
      protein: 20,
      carbs: 12,
      fat: 12
    },
    prepTime: 35,
    difficulty: 'Fácil',
    ingredients: [
      '4 huevos',
      '2 claras de huevo',
      '2 calabacines medianos',
      '1 cebolla',
      'Queso feta light',
      'Menta fresca',
      'Sal y pimienta',
      'Aceite de oliva'
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'Rallar los calabacines y escurrir el exceso de agua.',
      'Picar la cebolla y saltearla hasta que esté dorada.',
      'Mezclar los calabacines escurridos con la cebolla.',
      'Batir los huevos y claras con sal, pimienta y menta.',
      'Combinar todo y añadir el queso feta desmenuzado.',
      'Verter en un molde apto para horno engrasado.',
      'Hornear 25-30 minutos hasta que esté cuajado y dorado.'
    ]
  },
  {
    id: 33,
    name: 'Bacalao con Tomate y Aceitunas',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1580959375944-1ab5b8e24c30?w=400&h=300&fit=crop',
    calories: 290,
    macros: {
      protein: 38,
      carbs: 14,
      fat: 10
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: [
      '200g de lomo de bacalao',
      'Tomate triturado',
      'Aceitunas negras',
      'Cebolla',
      'Ajo',
      'Pimiento rojo',
      'Perejil fresco',
      'Vino blanco',
      'Aceite de oliva'
    ],
    instructions: [
      'Picar finamente la cebolla, ajo y pimiento.',
      'Sofreír la cebolla y ajo en aceite de oliva.',
      'Añadir el pimiento y cocinar 3-4 minutos.',
      'Agregar el tomate triturado y cocinar 10 minutos.',
      'Añadir las aceitunas y un chorrito de vino blanco.',
      'Colocar el bacalao sobre la salsa.',
      'Cocinar a fuego medio-bajo 8-10 minutos con la sartén tapada.',
      'Servir con perejil fresco picado.'
    ]
  },
  {
    id: 34,
    name: 'Pimientos Rellenos de Quinoa y Verduras',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1587116861161-e2e74e8fa8b7?w=400&h=300&fit=crop',
    calories: 280,
    macros: {
      protein: 14,
      carbs: 42,
      fat: 8
    },
    prepTime: 45,
    difficulty: 'Media',
    ingredients: [
      '2 pimientos grandes',
      '60g de quinoa',
      'Calabacín',
      'Berenjena',
      'Tomate',
      'Cebolla',
      'Ajo',
      'Queso rallado light',
      'Albahaca fresca'
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'Cocinar la quinoa según las instrucciones.',
      'Cortar la parte superior de los pimientos y vaciar las semillas.',
      'Picar todas las verduras en cubos pequeños.',
      'Saltear las verduras con ajo hasta que estén tiernas.',
      'Mezclar las verduras con la quinoa y albahaca.',
      'Rellenar los pimientos con la mezcla.',
      'Cubrir con queso y hornear 30 minutos.'
    ]
  },

  // ========== MERIENDAS (8 recetas) ==========
  {
    id: 35,
    name: 'Yogur Griego con Frutos Secos',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
    calories: 220,
    macros: {
      protein: 18,
      carbs: 20,
      fat: 10
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '200g de yogur griego natural 0%',
      '20g de almendras',
      '10g de nueces',
      '1 cucharada de miel',
      '50g de frutos rojos',
      'Semillas de chía (opcional)'
    ],
    instructions: [
      'Servir el yogur griego en un bol.',
      'Picar las almendras y nueces groseramente.',
      'Añadir los frutos rojos al yogur.',
      'Espolvorear los frutos secos picados.',
      'Rociar con la miel.',
      'Opcional: añadir una cucharadita de semillas de chía.'
    ]
  },
  {
    id: 36,
    name: 'Tostadas de Arroz con Mantequilla de Cacahuete',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
    calories: 250,
    macros: {
      protein: 12,
      carbs: 28,
      fat: 10
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '3 tortitas de arroz integral',
      '2 cucharadas de mantequilla de cacahuete natural',
      '1/2 plátano',
      'Canela',
      'Semillas de chía'
    ],
    instructions: [
      'Untar las tortitas de arroz con mantequilla de cacahuete.',
      'Cortar el plátano en rodajas finas.',
      'Distribuir las rodajas de plátano sobre las tortitas.',
      'Espolvorear canela y semillas de chía.',
      'Servir inmediatamente.'
    ]
  },
  {
    id: 37,
    name: 'Hummus con Crudités',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1622485506387-cbcd14b82d45?w=400&h=300&fit=crop',
    calories: 180,
    macros: {
      protein: 8,
      carbs: 22,
      fat: 8
    },
    prepTime: 10,
    difficulty: 'Muy Fácil',
    ingredients: [
      '100g de hummus',
      'Zanahoria',
      'Apio',
      'Pepino',
      'Pimiento rojo',
      'Tomates cherry'
    ],
    instructions: [
      'Cortar todas las verduras en bastones o trozos para mojar.',
      'Servir el hummus en un bol pequeño.',
      'Disponer las verduras alrededor del hummus.',
      'Opcional: espolvorear pimentón sobre el hummus.'
    ]
  },
  {
    id: 38,
    name: 'Batido de Proteína con Frutas',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1622484210591-88f5329c7c10?w=400&h=300&fit=crop',
    calories: 200,
    macros: {
      protein: 25,
      carbs: 22,
      fat: 3
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '1 scoop de proteína de vainilla',
      '150g de fresas',
      '1/2 plátano',
      '200ml de leche de almendras',
      'Hielo'
    ],
    instructions: [
      'Añadir todos los ingredientes en la batidora.',
      'Batir durante 30-45 segundos hasta obtener una mezcla suave.',
      'Servir inmediatamente en un vaso alto.'
    ]
  },
  {
    id: 39,
    name: 'Rollitos de Pavo y Queso',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
    calories: 160,
    macros: {
      protein: 22,
      carbs: 4,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '4 lonchas de pavo bajo en grasa',
      '2 lonchas de queso bajo en grasa',
      'Lechuga',
      'Tomate',
      'Mostaza'
    ],
    instructions: [
      'Colocar las lonchas de pavo en una superficie plana.',
      'Untar con un poco de mostaza.',
      'Añadir media loncha de queso en cada una.',
      'Agregar lechuga y tomate cortado.',
      'Enrollar firmemente.',
      'Asegurar con palillos si es necesario.'
    ]
  },
  {
    id: 40,
    name: 'Energy Balls de Dátiles',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1511925284627-c5d37b135fce?w=400&h=300&fit=crop',
    calories: 180,
    macros: {
      protein: 6,
      carbs: 26,
      fat: 8
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: [
      '100g de dátiles deshuesados',
      '40g de almendras',
      '20g de cacao puro',
      '1 cucharada de mantequilla de almendra',
      'Coco rallado para rebozar'
    ],
    instructions: [
      'Triturar los dátiles y almendras en procesador de alimentos.',
      'Añadir el cacao y la mantequilla de almendra.',
      'Procesar hasta obtener una masa pegajosa.',
      'Formar bolitas del tamaño de una nuez.',
      'Rebozar en coco rallado.',
      'Refrigerar al menos 30 minutos antes de consumir.',
      'Guardar en recipiente hermético en nevera.'
    ]
  },
  {
    id: 41,
    name: 'Requesón con Fruta Fresca',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=400&h=300&fit=crop',
    calories: 150,
    macros: {
      protein: 16,
      carbs: 18,
      fat: 3
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '150g de requesón',
      '1 melocotón',
      '50g de arándanos',
      'Canela',
      'Stevia (opcional)'
    ],
    instructions: [
      'Servir el requesón en un bol.',
      'Cortar el melocotón en dados.',
      'Añadir el melocotón y los arándanos.',
      'Espolvorear canela.',
      'Endulzar con stevia si se desea.',
      'Mezclar suavemente antes de consumir.'
    ]
  },
  {
    id: 42,
    name: 'Crackers Integrales con Aguacate',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop',
    calories: 210,
    macros: {
      protein: 6,
      carbs: 24,
      fat: 12
    },
    prepTime: 7,
    difficulty: 'Muy Fácil',
    ingredients: [
      '5 crackers integrales',
      '1/2 aguacate',
      'Tomate cherry',
      'Limón',
      'Sal y pimienta',
      'Semillas de sésamo'
    ],
    instructions: [
      'Machacar el aguacate con un tenedor.',
      'Añadir limón, sal y pimienta al aguacate.',
      'Untar los crackers con el aguacate.',
      'Cortar tomates cherry por la mitad.',
      'Colocar los tomates sobre los crackers.',
      'Espolvorear semillas de sésamo.'
    ]
  },

  // ========== BATIDOS (6 recetas) ==========
  {
    id: 43,
    name: 'Batido Proteico de Chocolate y Plátano',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop',
    calories: 280,
    macros: {
      protein: 30,
      carbs: 35,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '1 scoop de proteína de chocolate',
      '1 plátano congelado',
      '200ml de leche de almendras',
      '1 cucharada de cacao puro',
      '5 cubitos de hielo',
      'Stevia al gusto (opcional)'
    ],
    instructions: [
      'Pelar y congelar el plátano previamente (al menos 2 horas).',
      'Añadir todos los ingredientes en la batidora.',
      'Batir durante 30-45 segundos hasta obtener una mezcla suave.',
      'Probar y ajustar el dulzor con stevia si es necesario.',
      'Servir inmediatamente en un vaso alto.',
      'Opcional: decorar con una rodaja de plátano o cacao en polvo.'
    ]
  },
  {
    id: 44,
    name: 'Batido Verde Detox',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop',
    calories: 160,
    macros: {
      protein: 8,
      carbs: 28,
      fat: 3
    },
    prepTime: 7,
    difficulty: 'Muy Fácil',
    ingredients: [
      '1 taza de espinacas frescas',
      '1/2 pepino',
      '1 manzana verde',
      '1/2 limón (zumo)',
      'Jengibre fresco',
      '200ml de agua de coco',
      'Hielo'
    ],
    instructions: [
      'Lavar bien las espinacas.',
      'Pelar el pepino y la manzana, cortar en trozos.',
      'Añadir todos los ingredientes en la batidora.',
      'Batir hasta obtener consistencia suave.',
      'Probar y ajustar con más limón si se desea.',
      'Servir inmediatamente con hielo.'
    ]
  },
  {
    id: 45,
    name: 'Batido de Fresas y Vainilla',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop',
    calories: 240,
    macros: {
      protein: 28,
      carbs: 26,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '1 scoop de proteína de vainilla',
      '150g de fresas congeladas',
      '150g de yogur griego natural',
      '100ml de leche desnatada',
      'Stevia al gusto',
      'Hielo'
    ],
    instructions: [
      'Añadir todos los ingredientes en la batidora.',
      'Batir 30-40 segundos hasta obtener textura cremosa.',
      'Ajustar dulzor con stevia si es necesario.',
      'Servir inmediatamente.',
      'Opcional: decorar con fresas frescas.'
    ]
  },
  {
    id: 46,
    name: 'Batido Tropical Energético',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?w=400&h=300&fit=crop',
    calories: 250,
    macros: {
      protein: 22,
      carbs: 38,
      fat: 4
    },
    prepTime: 6,
    difficulty: 'Muy Fácil',
    ingredients: [
      '1 scoop de proteína de vainilla',
      '100g de mango congelado',
      '100g de piña',
      '1/2 plátano',
      '150ml de leche de coco light',
      'Zumo de 1/2 lima',
      'Hielo'
    ],
    instructions: [
      'Cortar las frutas si no están ya preparadas.',
      'Añadir todos los ingredientes en la batidora.',
      'Batir hasta obtener consistencia suave y cremosa.',
      'Probar y ajustar con más lima si se desea.',
      'Servir inmediatamente con hielo.',
      'Decorar con un trozo de piña en el borde del vaso.'
    ]
  },
  {
    id: 47,
    name: 'Batido de Café y Chocolate',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
    calories: 200,
    macros: {
      protein: 26,
      carbs: 18,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '1 scoop de proteína de chocolate',
      '1 shot de café expreso frío',
      '200ml de leche de almendras',
      '1/2 plátano congelado',
      'Hielo',
      'Cacao puro para decorar'
    ],
    instructions: [
      'Preparar el café y dejar enfriar completamente.',
      'Añadir todos los ingredientes en la batidora.',
      'Batir hasta obtener consistencia suave.',
      'Servir en un vaso alto.',
      'Espolvorear cacao puro por encima.',
      'Opcional: añadir hielo extra para mayor espesor.'
    ]
  },
  {
    id: 48,
    name: 'Batido de Arándanos y Avena',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=400&h=300&fit=crop',
    calories: 290,
    macros: {
      protein: 24,
      carbs: 42,
      fat: 5
    },
    prepTime: 7,
    difficulty: 'Muy Fácil',
    ingredients: [
      '1 scoop de proteína de vainilla',
      '100g de arándanos congelados',
      '30g de copos de avena',
      '1 cucharada de semillas de lino',
      '200ml de leche desnatada',
      'Canela',
      'Hielo'
    ],
    instructions: [
      'Añadir todos los ingredientes en la batidora.',
      'Batir durante 45-60 segundos para que la avena se integre bien.',
      'Probar y ajustar consistencia con más leche si es necesario.',
      'Servir inmediatamente.',
      'Espolvorear canela por encima.',
      'Opcional: decorar con arándanos frescos.'
    ]
  },

  // ========== POSTRES SALUDABLES (6 recetas) ==========
  {
    id: 49,
    name: 'Brownie Proteico Saludable',
    category: 'Postre Saludable',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4863acc0?w=400&h=300&fit=crop',
    calories: 180,
    macros: {
      protein: 15,
      carbs: 20,
      fat: 6
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: [
      '2 scoops de proteína de chocolate',
      '2 huevos',
      '50g de harina de avena',
      '2 cucharadas de cacao puro',
      '50ml de leche desnatada',
      'Stevia al gusto',
      '1/2 cucharadita de levadura'
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'En un bol, mezclar la proteína, harina de avena, cacao y levadura.',
      'En otro bol, batir los huevos con la leche y la stevia.',
      'Combinar los ingredientes secos con los líquidos hasta obtener una masa homogénea.',
      'Verter en un molde cuadrado pequeño engrasado.',
      'Hornear durante 20-25 minutos.',
      'Dejar enfriar completamente antes de cortar en porciones.',
      'Guardar en un recipiente hermético.'
    ]
  },
  {
    id: 50,
    name: 'Mousse de Chocolate Proteico',
    category: 'Postre Saludable',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
    calories: 150,
    macros: {
      protein: 18,
      carbs: 14,
      fat: 4
    },
    prepTime: 120,
    difficulty: 'Fácil',
    ingredients: [
      '200g de queso quark',
      '1 scoop de proteína de chocolate',
      '2 cucharadas de cacao puro',
      'Stevia al gusto',
      '50ml de leche desnatada',
      'Esencia de vainilla'
    ],
    instructions: [
      'Mezclar el queso quark con la proteína de chocolate.',
      'Añadir el cacao puro y la stevia.',
      'Agregar la leche poco a poco hasta obtener consistencia cremosa.',
      'Añadir unas gotas de esencia de vainilla.',
      'Batir enérgicamente durante 2-3 minutos.',
      'Refrigerar mínimo 2 horas.',
      'Servir en copas individuales.',
      'Decorar con cacao en polvo o viruta de chocolate negro.'
    ]
  },
  {
    id: 51,
    name: 'Mug Cake de Vainilla',
    category: 'Postre Saludable',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    calories: 160,
    macros: {
      protein: 16,
      carbs: 18,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '1 scoop de proteína de vainilla',
      '1 huevo',
      '2 cucharadas de harina de avena',
      '2 cucharadas de leche desnatada',
      '1/4 cucharadita de levadura',
      'Stevia al gusto',
      'Esencia de vainilla'
    ],
    instructions: [
      'En una taza apta para microondas, mezclar todos los ingredientes secos.',
      'Añadir el huevo, leche y esencia de vainilla.',
      'Mezclar bien con un tenedor hasta obtener masa homogénea.',
      'Cocinar en microondas 60-90 segundos a máxima potencia.',
      'Dejar reposar 1 minuto antes de consumir.',
      'Opcional: servir con yogur griego o frutos rojos.'
    ]
  },
  {
    id: 52,
    name: 'Galletas de Avena y Plátano',
    category: 'Postre Saludable',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
    calories: 140,
    macros: {
      protein: 6,
      carbs: 24,
      fat: 3
    },
    prepTime: 25,
    difficulty: 'Fácil',
    ingredients: [
      '2 plátanos maduros',
      '100g de copos de avena',
      '30g de nueces picadas',
      'Canela al gusto',
      'Extracto de vainilla',
      'Pasas (opcional)'
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'Machacar los plátanos hasta obtener puré.',
      'Mezclar el puré de plátano con la avena.',
      'Añadir las nueces, canela y vainilla.',
      'Opcional: agregar pasas a la mezcla.',
      'Formar galletas y colocar en bandeja con papel de horno.',
      'Hornear 15-18 minutos hasta que estén doradas.',
      'Dejar enfriar sobre una rejilla.'
    ]
  },
  {
    id: 53,
    name: 'Flan Proteico de Vainilla',
    category: 'Postre Saludable',
    image: 'https://images.unsplash.com/photo-1587241321921-91a834d82e76?w=400&h=300&fit=crop',
    calories: 130,
    macros: {
      protein: 14,
      carbs: 12,
      fat: 3
    },
    prepTime: 180,
    difficulty: 'Media',
    ingredients: [
      '3 huevos',
      '300ml de leche desnatada',
      '1 scoop de proteína de vainilla',
      'Stevia al gusto',
      'Esencia de vainilla',
      'Caramelo sin azúcar (opcional)'
    ],
    instructions: [
      'Precalentar el horno a 160°C.',
      'Batir los huevos con la leche.',
      'Añadir la proteína de vainilla y la stevia.',
      'Agregar la esencia de vainilla y mezclar bien.',
      'Colar la mezcla para eliminar grumos.',
      'Verter en moldes individuales.',
      'Cocinar al baño maría en el horno 40-50 minutos.',
      'Refrigerar mínimo 2 horas antes de servir.'
    ]
  },
  {
    id: 54,
    name: 'Helado de Plátano con Cacao',
    category: 'Postre Saludable',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    calories: 140,
    macros: {
      protein: 8,
      carbs: 28,
      fat: 2
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '2 plátanos congelados',
      '1/2 scoop de proteína de chocolate',
      '1 cucharada de cacao puro',
      '50ml de leche de almendras',
      'Opcional: chips de chocolate negro'
    ],
    instructions: [
      'Cortar los plátanos en rodajas y congelar mínimo 4 horas.',
      'Añadir los plátanos congelados en un procesador de alimentos.',
      'Agregar la proteína, cacao y leche.',
      'Procesar durante 2-3 minutos hasta obtener consistencia cremosa.',
      'Servir inmediatamente como helado soft.',
      'Opcional: añadir chips de chocolate negro.',
      'Para helado más firme, congelar 1 hora más.'
    ]
  }
];
