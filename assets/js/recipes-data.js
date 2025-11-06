const recipeCategories = [
  'Desayuno',
  'Almuerzo',
  'Comida',
  'Merienda',
  'Cena',
  'Batidos'
];

const recipes = [
  // ========== DESAYUNOS (15 recetas) ==========
  {
    id: 1,
    name: 'Tortilla de Claras con Verduras',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1590137876181-af5ba13df53c?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=600&h=400&fit=crop&q=80',
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

  // ========== COMIDAS (18 recetas) ==========
  {
    id: 11,
    name: 'Pollo a la Plancha con Arroz Integral',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&h=400&fit=crop&q=80',
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
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&q=80',
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
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&h=400&fit=crop&q=80',
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
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&h=400&fit=crop&q=80',
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
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&q=80',
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
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&h=400&fit=crop&q=80',
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
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop&q=80',
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
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop&q=80',
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
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop&q=80',
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
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?w=600&h=400&fit=crop&q=80',
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
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&h=400&fit=crop&q=80',
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
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&h=400&fit=crop&q=80',
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

  // ========== CENAS (17 recetas) ==========
  {
    id: 23,
    name: 'Salmón con Batata y Espárragos',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1580959375944-1ab5b8e24c30?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1588347818036-013b0c1b8fc7?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1580476262798-f4f6e0a94b60?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1621510456681-2330135e5871?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1626844131082-256783844137?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1564671165093-20688ff1f3f9?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1619899044175-c8ea46c9c32d?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1605348124576-bc3501aa3dd6?w=600&h=400&fit=crop&q=80',
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

  // ========== ALMUERZOS Y MERIENDAS (11 recetas) ==========
  {
    id: 35,
    name: 'Yogur Griego con Frutos Secos',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&h=400&fit=crop&q=80',
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
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1526318472351-c0a64ebbf655?w=600&h=400&fit=crop&q=80',
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
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
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
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1540713434306-58505cf70655?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1587233289227-62f4af41a4b5?w=600&h=400&fit=crop&q=80',
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
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1505253304499-671c55fb57fe?w=600&h=400&fit=crop&q=80',
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

  // ========== BATIDOS (9 recetas) ==========
  {
    id: 43,
    name: 'Batido Proteico de Chocolate y Plátano',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1622484210591-88f5329c7c10?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&h=400&fit=crop&q=80',
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

  // ========== MERIENDAS DULCES (6 recetas) ==========
  {
    id: 49,
    name: 'Brownie Proteico Saludable',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1590841609987-4ac211afdde1?w=600&h=400&fit=crop&q=80',
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
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=600&h=400&fit=crop&q=80',
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
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop&q=80',
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
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop&q=80',
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
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1626804235015-38a7de0b129f?w=600&h=400&fit=crop&q=80',
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
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop&q=80',
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
  },

  // ========== (Sección de desayunos adicionales incluida arriba) ==========
  {
    id: 55,
    name: 'Huevos Benedictinos Fit',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 28,
      carbs: 30,
      fat: 12
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: [
      '2 huevos',
      '2 rebanadas de pan integral',
      '50g de jamón de pavo',
      '50ml de yogur griego natural',
      '1 cucharadita de mostaza Dijon',
      'Espinacas frescas',
      'Limón',
      'Pimentón dulce'
    ],
    instructions: [
      'Tostar el pan integral.',
      'Preparar salsa: mezclar yogur griego con mostaza, limón y pimentón.',
      'Saltear espinacas brevemente.',
      'Cocinar los huevos pochados en agua con vinagre.',
      'Montar: pan, jamón de pavo, espinacas, huevo pochado.',
      'Cubrir con la salsa de yogur.',
      'Decorar con pimentón y perejil.'
    ]
  },
  {
    id: 56,
    name: 'Bowl de Açaí Energético',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1590440779792-436f09a48e8b?w=600&h=400&fit=crop&q=80',
    calories: 380,
    macros: {
      protein: 18,
      carbs: 58,
      fat: 10
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: [
      '100g de pulpa de açaí congelada',
      '1 plátano congelado',
      '50g de fresas',
      '100ml de leche de coco light',
      'Toppings: granola, coco rallado, semillas de chía, kiwi'
    ],
    instructions: [
      'Batir el açaí, plátano y fresas con la leche de coco.',
      'Conseguir consistencia espesa tipo helado.',
      'Verter en un bol.',
      'Decorar con granola, coco, chía y kiwi en rodajas.',
      'Servir inmediatamente con cuchara.'
    ]
  },
  {
    id: 57,
    name: 'Tostada Francesa Proteica',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1605528506680-1ca5fcaa3e3d?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 26,
      carbs: 35,
      fat: 8
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: [
      '3 rebanadas de pan integral',
      '3 huevos',
      '1 scoop de proteína de vainilla',
      '50ml de leche desnatada',
      'Canela',
      'Extracto de vainilla',
      'Frutos rojos para decorar',
      'Sirope sin azúcar'
    ],
    instructions: [
      'Batir huevos con leche, proteína, canela y vainilla.',
      'Remojar las rebanadas de pan en la mezcla.',
      'Calentar sartén antiadherente a fuego medio.',
      'Cocinar cada lado 2-3 minutos hasta dorar.',
      'Servir con frutos rojos y sirope sin azúcar.',
      'Espolvorear canela por encima.'
    ]
  },
  {
    id: 58,
    name: 'Wrap de Desayuno Mexicano',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1599974815066-a7321d9db05b?w=600&h=400&fit=crop&q=80',
    calories: 390,
    macros: {
      protein: 28,
      carbs: 42,
      fat: 12
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: [
      '2 tortillas integrales',
      '3 huevos',
      '50g de frijoles negros',
      'Aguacate',
      'Tomate',
      'Cebolla morada',
      'Cilantro',
      'Salsa picante',
      'Queso bajo en grasa'
    ],
    instructions: [
      'Revolver los huevos con sal y pimienta.',
      'Calentar los frijoles con especias.',
      'Picar tomate, cebolla y aguacate.',
      'Calentar las tortillas.',
      'Rellenar con huevos, frijoles, aguacate y verduras.',
      'Añadir queso, cilantro y salsa.',
      'Enrollar firmemente y servir.'
    ]
  },
  {
    id: 59,
    name: 'Batido Verde Detox Matcha',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop&q=80',
    calories: 220,
    macros: {
      protein: 16,
      carbs: 32,
      fat: 5
    },
    prepTime: 8,
    difficulty: 'Muy Fácil',
    ingredients: [
      '1 cucharadita de té matcha',
      '1 plátano',
      '1 taza de espinacas',
      '1/2 scoop de proteína de vainilla',
      '200ml de leche de almendras',
      '1 cucharada de semillas de chía',
      'Hielo'
    ],
    instructions: [
      'Añadir todos los ingredientes en la batidora.',
      'Batir durante 45 segundos hasta suave.',
      'Probar y ajustar dulzor si es necesario.',
      'Servir inmediatamente.',
      'Decorar con semillas de chía por encima.'
    ]
  },

  // ========== (Sección de comidas adicionales incluida arriba) ==========
  {
    id: 60,
    name: 'Salmón Teriyaki con Arroz Integral',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop&q=80',
    calories: 480,
    macros: {
      protein: 38,
      carbs: 52,
      fat: 14
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: [
      '180g de filete de salmón',
      '80g de arroz integral',
      'Salsa teriyaki baja en azúcar',
      'Brócoli',
      'Zanahoria',
      'Jengibre fresco',
      'Ajo',
      'Sésamo tostado',
      'Cebolleta'
    ],
    instructions: [
      'Cocinar el arroz integral según instrucciones.',
      'Marinar el salmón con salsa teriyaki 15 minutos.',
      'Saltear ajo y jengibre en una sartén.',
      'Cocinar el salmón 4-5 minutos por lado.',
      'Cocer brócoli y zanahoria al vapor.',
      'Servir el salmón sobre el arroz.',
      'Decorar con sésamo y cebolleta.'
    ]
  },
  {
    id: 61,
    name: 'Tacos de Pescado Baja Style',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=400&fit=crop&q=80',
    calories: 420,
    macros: {
      protein: 36,
      carbs: 48,
      fat: 10
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: [
      '200g de pescado blanco (tilapia o merluza)',
      '4 tortillas de maíz pequeñas',
      'Col morada rallada',
      'Zanahoria rallada',
      'Aguacate',
      'Yogur griego natural',
      'Limón',
      'Cilantro',
      'Especias: comino, pimentón'
    ],
    instructions: [
      'Cortar el pescado en tiras y sazonar con especias.',
      'Cocinar el pescado a la plancha 3-4 minutos por lado.',
      'Preparar ensalada de col con zanahoria y limón.',
      'Hacer salsa mezclando yogur con cilantro y limón.',
      'Calentar las tortillas.',
      'Rellenar con pescado, ensalada y aguacate.',
      'Añadir la salsa y servir con limón.'
    ]
  },
  {
    id: 62,
    name: 'Ensalada de Pollo Asiática',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1580959375944-1ab5b8e24c30?w=600&h=400&fit=crop&q=80',
    calories: 350,
    macros: {
      protein: 38,
      carbs: 28,
      fat: 12
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: [
      '180g de pechuga de pollo',
      'Lechuga variada',
      'Col china',
      'Zanahoria',
      'Pepino',
      'Edamame',
      'Cacahuetes',
      'Salsa de soja',
      'Jengibre',
      'Sésamo'
    ],
    instructions: [
      'Cocinar el pollo a la plancha y cortar en tiras.',
      'Picar todas las verduras finamente.',
      'Mezclar en un bol grande.',
      'Preparar vinagreta con soja, jengibre y sésamo.',
      'Añadir el pollo tibio.',
      'Aliñar con la vinagreta.',
      'Decorar con cacahuetes y sésamo.'
    ]
  },
  {
    id: 63,
    name: 'Burrito Bowl de Pollo',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1512236393941-e50b62d88a92?w=600&h=400&fit=crop&q=80',
    calories: 460,
    macros: {
      protein: 42,
      carbs: 50,
      fat: 12
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: [
      '180g de pechuga de pollo',
      '80g de arroz integral',
      '100g de frijoles negros',
      'Maíz',
      'Pimientos',
      'Aguacate',
      'Tomate',
      'Lechuga',
      'Yogur griego',
      'Especias mexicanas'
    ],
    instructions: [
      'Cocinar el arroz integral.',
      'Sazonar el pollo con especias mexicanas y cocinar.',
      'Calentar frijoles negros con comino.',
      'Saltear pimientos y maíz.',
      'Servir arroz en un bol como base.',
      'Añadir pollo cortado, frijoles, verduras.',
      'Decorar con aguacate, tomate y yogur.'
    ]
  },
  {
    id: 64,
    name: 'Pasta Primavera Ligera',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&h=400&fit=crop&q=80',
    calories: 410,
    macros: {
      protein: 18,
      carbs: 62,
      fat: 12
    },
    prepTime: 25,
    difficulty: 'Fácil',
    ingredients: [
      '80g de pasta integral',
      'Calabacín',
      'Pimiento rojo y amarillo',
      'Tomates cherry',
      'Espárragos',
      'Ajo',
      'Albahaca fresca',
      'Aceite de oliva',
      'Queso parmesano'
    ],
    instructions: [
      'Cocinar la pasta según instrucciones.',
      'Cortar todas las verduras en trozos medianos.',
      'Saltear ajo en aceite de oliva.',
      'Añadir verduras y cocinar 5-7 minutos.',
      'Mezclar con la pasta escurrida.',
      'Añadir albahaca fresca.',
      'Servir con parmesano rallado.'
    ]
  },
  {
    id: 65,
    name: 'Curry de Garbanzos y Espinacas',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop&q=80',
    calories: 390,
    macros: {
      protein: 20,
      carbs: 58,
      fat: 10
    },
    prepTime: 30,
    difficulty: 'Fácil',
    ingredients: [
      '200g de garbanzos cocidos',
      'Espinacas frescas',
      'Tomate triturado',
      'Cebolla',
      'Ajo',
      'Jengibre',
      'Curry en polvo',
      'Leche de coco light',
      'Arroz basmati'
    ],
    instructions: [
      'Cocinar el arroz basmati.',
      'Sofreír cebolla, ajo y jengibre.',
      'Añadir curry en polvo y cocinar 1 minuto.',
      'Agregar tomate triturado y cocinar 5 minutos.',
      'Añadir garbanzos y leche de coco.',
      'Cocinar 15 minutos a fuego medio.',
      'Agregar espinacas al final y servir con arroz.'
    ]
  },

  // ========== (Sección de cenas adicionales incluida arriba) ==========
  {
    id: 66,
    name: 'Atún a la Plancha con Verduras',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1580476262798-f4f6e0a94b60?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 42,
      carbs: 18,
      fat: 12
    },
    prepTime: 25,
    difficulty: 'Fácil',
    ingredients: [
      '200g de filete de atún fresco',
      'Espárragos verdes',
      'Calabacín',
      'Pimiento rojo',
      'Limón',
      'Sésamo negro',
      'Salsa de soja',
      'Aceite de oliva'
    ],
    instructions: [
      'Marinar el atún con soja y limón 10 minutos.',
      'Cortar las verduras.',
      'Calentar parrilla o sartén a fuego alto.',
      'Cocinar el atún 2-3 minutos por lado (centro rosado).',
      'Asar las verduras con aceite.',
      'Servir el atún con verduras.',
      'Decorar con sésamo negro y limón.'
    ]
  },
  {
    id: 67,
    name: 'Pechuga de Pollo Caprese',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1588347818036-013b0c1b8fc7?w=600&h=400&fit=crop&q=80',
    calories: 380,
    macros: {
      protein: 46,
      carbs: 12,
      fat: 16
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: [
      '200g de pechuga de pollo',
      'Tomate en rodajas',
      'Mozzarella light',
      'Albahaca fresca',
      'Vinagre balsámico',
      'Ajo',
      'Aceite de oliva',
      'Sal y pimienta'
    ],
    instructions: [
      'Precalentar el horno a 190°C.',
      'Sazonar el pollo y sellarlo en sartén.',
      'Colocar en bandeja de horno.',
      'Cubrir con rodajas de tomate y mozzarella.',
      'Hornear 15-20 minutos hasta que esté cocido.',
      'Añadir albahaca fresca al final.',
      'Rociar con vinagre balsámico y servir.'
    ]
  },
  {
    id: 68,
    name: 'Lubina al Horno con Limón',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 40,
      carbs: 15,
      fat: 10
    },
    prepTime: 35,
    difficulty: 'Fácil',
    ingredients: [
      '200g de lubina',
      'Limón',
      'Tomillo fresco',
      'Ajo',
      'Pimientos de colores',
      'Cebolla',
      'Aceite de oliva',
      'Vino blanco'
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'Limpiar y secar la lubina.',
      'Rellenar con rodajas de limón, ajo y tomillo.',
      'Colocar pimientos y cebolla en bandeja.',
      'Poner la lubina encima.',
      'Rociar con aceite y vino blanco.',
      'Hornear 25-30 minutos.'
    ]
  },
  {
    id: 69,
    name: 'Tortilla de Claras Rellena',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop&q=80',
    calories: 220,
    macros: {
      protein: 26,
      carbs: 14,
      fat: 6
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: [
      '6 claras de huevo',
      '1 huevo entero',
      'Queso fresco batido',
      'Jamón de pavo',
      'Espinacas',
      'Tomate',
      'Champiñones',
      'Cebolla',
      'Especias'
    ],
    instructions: [
      'Batir claras con huevo entero y especias.',
      'Saltear verduras hasta tiernas.',
      'Verter mezcla de huevo en sartén.',
      'Cocinar a fuego medio hasta casi cuajado.',
      'Rellenar un lado con verduras, jamón y queso.',
      'Doblar por la mitad.',
      'Cocinar 2 minutos más y servir.'
    ]
  },
  {
    id: 70,
    name: 'Brochetas de Pollo Marinado',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1629629187214-e2f5d623aab9?w=600&h=400&fit=crop&q=80',
    calories: 350,
    macros: {
      protein: 44,
      carbs: 20,
      fat: 10
    },
    prepTime: 40,
    difficulty: 'Media',
    ingredients: [
      '200g de pechuga de pollo en cubos',
      'Pimiento rojo y verde',
      'Cebolla',
      'Tomates cherry',
      'Yogur griego',
      'Limón',
      'Ajo',
      'Pimentón',
      'Comino',
      'Cilantro'
    ],
    instructions: [
      'Marinar pollo con yogur, limón, ajo y especias 30 minutos.',
      'Cortar verduras en trozos grandes.',
      'Ensartar alternando pollo y verduras.',
      'Calentar parrilla a fuego medio-alto.',
      'Cocinar brochetas 12-15 minutos, girando.',
      'Servir con ensalada fresca.',
      'Decorar con cilantro.'
    ]
  },

  // ========== (Sección de almuerzos y meriendas adicionales incluida arriba) ==========
  {
    id: 71,
    name: 'Edamame con Sal Marina',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1584278502003-17ac3c2fb7e3?w=600&h=400&fit=crop&q=80',
    calories: 120,
    macros: {
      protein: 12,
      carbs: 10,
      fat: 5
    },
    prepTime: 10,
    difficulty: 'Muy Fácil',
    ingredients: [
      '150g de edamame (vainas de soja)',
      'Sal marina gruesa',
      'Limón (opcional)',
      'Hojuelas de chile (opcional)'
    ],
    instructions: [
      'Hervir agua con sal.',
      'Cocinar edamame 4-5 minutos.',
      'Escurrir bien.',
      'Espolvorear con sal marina gruesa.',
      'Opcional: añadir ralladura de limón o hojuelas de chile.',
      'Servir tibio.'
    ]
  },
  {
    id: 72,
    name: 'Manzana con Mantequilla de Almendra',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1590005354167-6da97870c757?w=600&h=400&fit=crop&q=80',
    calories: 200,
    macros: {
      protein: 6,
      carbs: 26,
      fat: 10
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '1 manzana grande',
      '2 cucharadas de mantequilla de almendra',
      'Canela en polvo',
      'Semillas de lino (opcional)'
    ],
    instructions: [
      'Lavar y cortar la manzana en rodajas.',
      'Untar cada rodaja con mantequilla de almendra.',
      'Espolvorear canela por encima.',
      'Opcional: añadir semillas de lino.',
      'Servir inmediatamente.'
    ]
  },
  {
    id: 73,
    name: 'Mini Pizza Proteica',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 24,
      carbs: 28,
      fat: 8
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: [
      '1 pan árabe integral',
      '3 cucharadas de tomate triturado',
      '50g de queso mozzarella light',
      'Champiñones',
      'Pimiento',
      'Orégano',
      'Albahaca'
    ],
    instructions: [
      'Precalentar el horno a 200°C.',
      'Untar el pan árabe con tomate.',
      'Añadir champiñones y pimiento cortados.',
      'Cubrir con queso mozzarella.',
      'Espolvorear orégano.',
      'Hornear 8-10 minutos hasta que el queso se derrita.',
      'Decorar con albahaca fresca.'
    ]
  },
  {
    id: 74,
    name: 'Palitos de Apio con Queso',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1562007908-17c67e878c88?w=600&h=400&fit=crop&q=80',
    calories: 150,
    macros: {
      protein: 14,
      carbs: 8,
      fat: 8
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '4 tallos de apio',
      '100g de queso cottage',
      'Nueces picadas',
      'Pasas (opcional)',
      'Pimentón dulce'
    ],
    instructions: [
      'Lavar y cortar el apio en palitos.',
      'Rellenar el hueco con queso cottage.',
      'Espolvorear nueces picadas por encima.',
      'Opcional: añadir pasas.',
      'Decorar con pimentón.',
      'Servir frío.'
    ]
  },

  // ========== (Sección de batidos adicionales incluida arriba) ==========
  {
    id: 75,
    name: 'Batido de Matcha y Proteína',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop&q=80',
    calories: 220,
    macros: {
      protein: 26,
      carbs: 24,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '1 cucharadita de té matcha',
      '1 scoop de proteína de vainilla',
      '1 plátano',
      '200ml de leche de almendras',
      '1 cucharada de miel',
      'Hielo'
    ],
    instructions: [
      'Añadir todos los ingredientes en la batidora.',
      'Batir 30-40 segundos hasta suave.',
      'Probar y ajustar dulzor.',
      'Servir inmediatamente.',
      'Decorar con matcha en polvo por encima.'
    ]
  },
  {
    id: 76,
    name: 'Batido de Mango y Cúrcuma',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 20,
      carbs: 36,
      fat: 4
    },
    prepTime: 6,
    difficulty: 'Muy Fácil',
    ingredients: [
      '150g de mango congelado',
      '1 scoop de proteína de vainilla',
      '200ml de leche de coco light',
      '1/2 cucharadita de cúrcuma',
      'Jengibre fresco',
      'Pimienta negra',
      'Hielo'
    ],
    instructions: [
      'Añadir todos los ingredientes en la batidora.',
      'Batir hasta obtener consistencia cremosa.',
      'La pimienta ayuda a absorber la cúrcuma.',
      'Servir inmediatamente.',
      'Decorar con mango fresco.'
    ]
  },
  {
    id: 77,
    name: 'Batido Post-Entreno Chocolate',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 35,
      carbs: 38,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '1 scoop de proteína de chocolate',
      '1 plátano',
      '1 cucharada de mantequilla de cacahuete',
      '200ml de leche desnatada',
      '1 cucharada de cacao puro',
      '30g de avena',
      'Hielo'
    ],
    instructions: [
      'Añadir todos los ingredientes en la batidora.',
      'Batir durante 45 segundos.',
      'Ideal consumir dentro de 30 minutos post-entreno.',
      'Servir bien frío.',
      'Opcional: decorar con cacao en polvo.'
    ]
  },

  // ========== (Sección de meriendas dulces adicionales incluida arriba) ==========
  {
    id: 78,
    name: 'Trufas de Proteína y Dátiles',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop&q=80',
    calories: 160,
    macros: {
      protein: 12,
      carbs: 22,
      fat: 6
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: [
      '100g de dátiles deshuesados',
      '2 scoops de proteína de chocolate',
      '30g de almendras',
      '2 cucharadas de cacao puro',
      'Coco rallado para rebozar',
      'Extracto de vainilla'
    ],
    instructions: [
      'Triturar dátiles y almendras en procesador.',
      'Añadir proteína, cacao y vainilla.',
      'Procesar hasta masa pegajosa.',
      'Formar bolitas del tamaño de una nuez.',
      'Rebozar en coco rallado.',
      'Refrigerar 1 hora antes de servir.',
      'Guardar en recipiente hermético.'
    ]
  },
  {
    id: 79,
    name: 'Cheesecake Proteico Sin Horno',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&h=400&fit=crop&q=80',
    calories: 190,
    macros: {
      protein: 20,
      carbs: 18,
      fat: 6
    },
    prepTime: 180,
    difficulty: 'Media',
    ingredients: [
      '200g de queso quark',
      '100g de yogur griego',
      '1 scoop de proteína de vainilla',
      'Stevia al gusto',
      '50g de galletas integrales trituradas',
      'Frutos rojos',
      'Gelatina neutra'
    ],
    instructions: [
      'Triturar galletas y presionar en molde como base.',
      'Mezclar quark, yogur, proteína y stevia.',
      'Preparar gelatina según instrucciones.',
      'Mezclar todo hasta cremoso.',
      'Verter sobre la base de galletas.',
      'Refrigerar mínimo 3 horas.',
      'Decorar con frutos rojos antes de servir.'
    ]
  },
  {
    id: 80,
    name: 'Pudding de Chía con Chocolate',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop&q=80',
    calories: 180,
    macros: {
      protein: 14,
      carbs: 20,
      fat: 8
    },
    prepTime: 240,
    difficulty: 'Muy Fácil',
    ingredients: [
      '3 cucharadas de semillas de chía',
      '200ml de leche de almendras',
      '1/2 scoop de proteína de chocolate',
      '1 cucharada de cacao puro',
      'Stevia al gusto',
      'Extracto de vainilla',
      'Frutos rojos para decorar'
    ],
    instructions: [
      'Mezclar todos los ingredientes en un bol.',
      'Remover bien para evitar grumos.',
      'Refrigerar mínimo 4 horas o toda la noche.',
      'Remover a mitad del tiempo.',
      'Servir en vasitos individuales.',
      'Decorar con frutos rojos y cacao.',
      'Consumir dentro de 3 días.'
    ]
  }
,
  // ========== MÁS DESAYUNOS (40 recetas adicionales) ==========
  {
    id: 81,
    name: 'Porridge de Avena con Manzana Canela',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 12,
      carbs: 52,
      fat: 7
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["60g de avena", "250ml de leche desnatada", "1 manzana", "Canela", "Miel", "Nueces"],
    instructions: ["Pelar y cortar la manzana", "Cocinar avena con leche", "Añadir manzana y canela", "Cocinar 7-8 minutos", "Servir con miel y nueces"]
  },
  {
    id: 82,
    name: 'Crepes Proteicos de Plátano',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 24,
      carbs: 35,
      fat: 6
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["2 huevos", "1 plátano maduro", "1 scoop proteína vainilla", "Harina de avena", "Canela", "Frutos rojos"],
    instructions: ["Triturar plátano con huevos", "Añadir proteína y harina", "Mezclar bien", "Cocinar en sartén", "Servir con frutos rojos"]
  },
  {
    id: 83,
    name: 'Shakshuka Mediterránea',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 22,
      carbs: 18,
      fat: 14
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["3 huevos", "200g tomate triturado", "Pimiento rojo", "Cebolla", "Comino", "Pimentón", "Aceite de oliva"],
    instructions: ["Saltear cebolla y pimiento", "Añadir tomate y especias", "Cocinar 10 minutos", "Hacer huecos y añadir huevos", "Cocinar hasta cuajar"]
  },
  {
    id: 84,
    name: 'Granola Casera Proteica',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&h=400&fit=crop&q=80',
    calories: 350,
    macros: {
      protein: 18,
      carbs: 42,
      fat: 12
    },
    prepTime: 30,
    difficulty: 'Fácil',
    ingredients: ["200g avena", "50g almendras", "30g proteína vainilla", "Miel", "Aceite coco", "Canela", "Pasas"],
    instructions: ["Mezclar avena, frutos secos y especias", "Añadir miel y aceite calientes", "Hornear 180°C 20 minutos", "Remover a mitad", "Enfriar y añadir pasas"]
  },
  {
    id: 85,
    name: 'Tortilla de Espinacas y Feta',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 26,
      carbs: 8,
      fat: 12
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["3 huevos", "100g espinacas frescas", "40g queso feta", "Cebolla", "Aceite de oliva", "Pimienta"],
    instructions: ["Saltear espinacas y cebolla", "Batir huevos con sal y pimienta", "Añadir espinacas a los huevos", "Cocinar en sartén", "Agregar feta y doblar"]
  },
  {
    id: 86,
    name: 'Muffins de Huevo al Horno',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&h=400&fit=crop&q=80',
    calories: 180,
    macros: {
      protein: 16,
      carbs: 10,
      fat: 9
    },
    prepTime: 25,
    difficulty: 'Fácil',
    ingredients: ["4 huevos", "Pimiento", "Champiñones", "Espinacas", "Queso rallado", "Sal y pimienta"],
    instructions: ["Batir huevos con sal y pimienta", "Picar verduras finamente", "Distribuir en moldes de muffin", "Añadir queso rallado", "Hornear 180°C 20 minutos"]
  },
  {
    id: 87,
    name: 'Tortitas de Chocolate Proteicas',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 28,
      carbs: 38,
      fat: 7
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["1 scoop proteína chocolate", "2 huevos", "Harina de avena", "Levadura", "Leche desnatada", "Chips chocolate negro"],
    instructions: ["Mezclar todos los ingredientes secos", "Batir huevos con leche", "Combinar y dejar reposar 5 minutos", "Cocinar en sartén antiadherente", "Servir con chips de chocolate"]
  },
  {
    id: 88,
    name: 'Burrito de Desayuno Fit',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&h=400&fit=crop&q=80',
    calories: 380,
    macros: {
      protein: 28,
      carbs: 42,
      fat: 11
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["1 tortilla integral", "3 claras de huevo", "Pavo", "Aguacate", "Tomate", "Queso bajo en grasa"],
    instructions: ["Revolver las claras con el pavo", "Calentar la tortilla", "Rellenar con huevos, aguacate y tomate", "Añadir queso", "Enrollar y tostar"]
  },
  {
    id: 89,
    name: 'Smoothie Bowl de Açaí',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 22,
      carbs: 48,
      fat: 8
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["100g açaí congelado", "1 plátano", "1 scoop proteína", "Leche de almendras", "Granola", "Frutos rojos", "Coco rallado"],
    instructions: ["Batir açaí, plátano, proteína y leche", "Verter en un bol", "Decorar con granola", "Añadir frutos rojos y coco", "Servir inmediatamente"]
  },
  {
    id: 90,
    name: 'Pan Proteico en Microondas',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 20,
      carbs: 28,
      fat: 8
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 scoop proteína vainilla", "1 huevo", "Levadura", "Harina de avena", "Leche", "Canela"],
    instructions: ["Mezclar todos los ingredientes", "Verter en taza apta para microondas", "Cocinar 90 segundos", "Dejar reposar 1 minuto", "Desmoldar y cortar"]
  },
  {
    id: 91,
    name: 'Yogur Griego con Frutos Secos',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 24,
      carbs: 22,
      fat: 12
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["200g yogur griego", "Nueces", "Almendras", "Miel", "Arándanos", "Semillas de chía"],
    instructions: ["Poner yogur en un bol", "Picar frutos secos", "Añadir los frutos secos y semillas", "Agregar arándanos", "Rociar con miel"]
  },
  {
    id: 92,
    name: 'Tostadas de Aguacate y Huevo',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 18,
      carbs: 28,
      fat: 16
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["2 rebanadas pan integral", "1 aguacate", "2 huevos", "Tomate cherry", "Sal", "Pimienta", "Limón"],
    instructions: ["Tostar el pan", "Machacar aguacate con limón", "Untar aguacate en el pan", "Cocinar huevos al gusto", "Colocar huevo y tomates"]
  },
  {
    id: 93,
    name: 'Batido Verde Energizante',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 18,
      carbs: 32,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 plátano", "Espinacas", "1 scoop proteína vainilla", "Leche de almendras", "Mantequilla de cacahuete", "Hielo"],
    instructions: ["Lavar espinacas", "Añadir todos los ingredientes a la batidora", "Batir hasta suavizar", "Ajustar consistencia con leche", "Servir frío"]
  },
  {
    id: 94,
    name: 'Quesadilla de Claras y Espinacas',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 26,
      carbs: 24,
      fat: 8
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["1 tortilla integral", "4 claras de huevo", "Espinacas", "Queso mozzarella light", "Tomate", "Cebolla"],
    instructions: ["Revolver claras con espinacas picadas", "Cocinar en sartén", "Colocar en media tortilla", "Añadir queso y tomate", "Doblar y tostar ambos lados"]
  },
  {
    id: 95,
    name: 'Bowl de Quinoa Dulce',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&h=400&fit=crop&q=80',
    calories: 350,
    macros: {
      protein: 14,
      carbs: 58,
      fat: 8
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: ["80g quinoa", "Leche de almendras", "Plátano", "Miel", "Canela", "Nueces", "Frambuesas"],
    instructions: ["Cocinar quinoa en leche de almendras", "Añadir canela y miel", "Cortar plátano en rodajas", "Servir en bowl", "Decorar con nueces y frambuesas"]
  },
  {
    id: 96,
    name: 'Gofres Proteicos de Avena',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&h=400&fit=crop&q=80',
    calories: 330,
    macros: {
      protein: 26,
      carbs: 40,
      fat: 8
    },
    prepTime: 15,
    difficulty: 'Media',
    ingredients: ["60g harina de avena", "2 huevos", "1 scoop proteína", "Leche desnatada", "Levadura", "Vainilla", "Frutos rojos"],
    instructions: ["Mezclar ingredientes secos", "Batir huevos con leche", "Combinar todo", "Calentar gofrera", "Cocinar hasta dorar"]
  },
  {
    id: 97,
    name: 'Huevos Rancheros Light',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 24,
      carbs: 28,
      fat: 12
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["2 huevos", "2 tortillas de maíz", "Frijoles negros", "Salsa ranchera", "Aguacate", "Cilantro", "Lima"],
    instructions: ["Calentar tortillas", "Calentar frijoles con especias", "Hacer huevos fritos", "Montar con frijoles y salsa", "Decorar con aguacate y cilantro"]
  },
  {
    id: 98,
    name: 'Pudín de Chía Proteico',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 22,
      carbs: 34,
      fat: 9
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["3 cucharadas semillas de chía", "250ml leche proteica", "1/2 scoop proteína vainilla", "Plátano", "Canela", "Miel"],
    instructions: ["Mezclar chía con leche y proteína", "Remover bien", "Refrigerar toda la noche", "Servir con plátano en rodajas", "Añadir miel y canela"]
  },
  {
    id: 99,
    name: 'Bagel con Salmón y Queso Crema',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1612182062813-c6052ef0d4b9?w=600&h=400&fit=crop&q=80',
    calories: 380,
    macros: {
      protein: 28,
      carbs: 42,
      fat: 11
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["1 bagel integral", "60g salmón ahumado", "Queso crema light", "Pepino", "Cebolla morada", "Alcaparras", "Eneldo"],
    instructions: ["Tostar el bagel", "Untar queso crema", "Añadir salmón", "Cortar pepino en rodajas", "Decorar con cebolla y alcaparras"]
  },
  {
    id: 100,
    name: 'Wrap de Huevo y Verduras',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=400&fit=crop&q=80',
    calories: 300,
    macros: {
      protein: 20,
      carbs: 32,
      fat: 10
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["1 tortilla integral", "2 huevos", "Pimiento", "Champiñones", "Cebolla", "Espinacas", "Queso"],
    instructions: ["Saltear verduras picadas", "Batir y añadir huevos", "Revolver hasta cuajar", "Rellenar tortilla caliente", "Añadir queso y enrollar"]
  },
  {
    id: 101,
    name: 'Bizcocho Proteico de Manzana',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 18,
      carbs: 38,
      fat: 6
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: ["2 huevos", "1 scoop proteína vainilla", "Harina de avena", "1 manzana", "Canela", "Levadura", "Yogur griego"],
    instructions: ["Rallar la manzana", "Batir huevos con yogur", "Mezclar ingredientes secos", "Combinar todo", "Hornear 180°C 25-30 minutos"]
  },
  {
    id: 102,
    name: 'Batido de Café Proteico',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 220,
    macros: {
      protein: 28,
      carbs: 18,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 café espresso frío", "1 scoop proteína chocolate", "Leche de almendras", "Hielo", "Canela", "Stevia"],
    instructions: ["Preparar café y enfriar", "Añadir todos los ingredientes a la batidora", "Batir hasta espumar", "Servir con hielo", "Espolvorear canela"]
  },
  {
    id: 103,
    name: 'Tostada Francesa Proteica',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 22,
      carbs: 36,
      fat: 8
    },
    prepTime: 15,
    difficulty: 'Media',
    ingredients: ["2 rebanadas pan integral", "2 huevos", "1/2 scoop proteína vainilla", "Leche", "Canela", "Vainilla", "Sirope sin azúcar"],
    instructions: ["Batir huevos con proteína, leche y especias", "Remojar el pan", "Cocinar en sartén hasta dorar", "Dar la vuelta", "Servir con sirope y frutos"]
  },
  {
    id: 104,
    name: 'Bowl de Requesón y Frutas',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1505576633371-522bf443e48a?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 24,
      carbs: 32,
      fat: 7
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["200g requesón", "Melocotón", "Fresas", "Arándanos", "Miel", "Almendras laminadas", "Menta"],
    instructions: ["Poner requesón en un bol", "Cortar frutas en trozos", "Distribuir sobre el requesón", "Añadir almendras", "Rociar con miel"]
  },
  {
    id: 105,
    name: 'Magdalenas de Plátano Fit',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 12,
      carbs: 34,
      fat: 7
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["2 plátanos maduros", "2 huevos", "Harina de avena", "Yogur griego", "Miel", "Levadura", "Nueces"],
    instructions: ["Triturar plátanos", "Mezclar con huevos y yogur", "Añadir secos", "Distribuir en moldes", "Hornear 180°C 20 minutos"]
  },
  {
    id: 106,
    name: 'Revuelto de Tofu y Verduras',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 22,
      carbs: 18,
      fat: 12
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["200g tofu firme", "Pimiento", "Tomate", "Cebolla", "Espinacas", "Cúrcuma", "Aceite de oliva"],
    instructions: ["Desmenuzar el tofu", "Saltear verduras picadas", "Añadir tofu y cúrcuma", "Cocinar removiendo", "Servir caliente"]
  },
  {
    id: 107,
    name: 'Pan de Plátano Proteico',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 16,
      carbs: 42,
      fat: 7
    },
    prepTime: 50,
    difficulty: 'Media',
    ingredients: ["3 plátanos maduros", "2 huevos", "1 scoop proteína vainilla", "Harina de avena", "Levadura", "Canela", "Nueces"],
    instructions: ["Triturar plátanos", "Mezclar con huevos", "Añadir ingredientes secos", "Verter en molde", "Hornear 180°C 45-50 minutos"]
  },
  {
    id: 108,
    name: 'Tazón de Avena Nocturna',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1594998893017-36147c62e98c?w=600&h=400&fit=crop&q=80',
    calories: 300,
    macros: {
      protein: 18,
      carbs: 44,
      fat: 8
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["60g avena", "Yogur griego", "Leche de almendras", "Semillas de chía", "Miel", "Frutos rojos", "Almendras"],
    instructions: ["Mezclar avena con yogur y leche", "Añadir semillas de chía", "Refrigerar toda la noche", "Servir frío con frutos rojos", "Decorar con almendras y miel"]
  },
  {
    id: 109,
    name: 'Rollitos de Jamón y Queso',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=600&h=400&fit=crop&q=80',
    calories: 250,
    macros: {
      protein: 26,
      carbs: 8,
      fat: 12
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["4 lonchas jamón serrano", "Queso crema light", "Pepino", "Rúcula", "Tomate cherry", "Aceitunas"],
    instructions: ["Untar jamón con queso crema", "Cortar pepino en bastones", "Añadir rúcula", "Enrollar firmemente", "Servir con tomates"]
  },
  {
    id: 110,
    name: 'Frittata de Champiñones',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 24,
      carbs: 12,
      fat: 14
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["4 huevos", "Champiñones", "Cebolla", "Pimiento", "Queso parmesano", "Hierbas frescas", "Aceite de oliva"],
    instructions: ["Saltear champiñones y verduras", "Batir huevos con queso", "Verter sobre las verduras", "Cocinar en sartén", "Gratinar en el horno"]
  },
  {
    id: 111,
    name: 'Mousse de Yogur y Frambuesas',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop&q=80',
    calories: 210,
    macros: {
      protein: 16,
      carbs: 26,
      fat: 5
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["200g yogur griego", "Frambuesas", "Gelatina sin sabor", "Stevia", "Vainilla", "Menta"],
    instructions: ["Triturar frambuesas", "Mezclar con yogur", "Añadir gelatina hidratada", "Verter en vasitos", "Refrigerar 2 horas"]
  },
  {
    id: 112,
    name: 'Sándwich de Pavo y Aguacate',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e2?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 28,
      carbs: 36,
      fat: 10
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["2 rebanadas pan integral", "Pavo", "Aguacate", "Tomate", "Lechuga", "Mostaza", "Pepino"],
    instructions: ["Tostar el pan", "Untar con mostaza", "Colocar pavo", "Añadir aguacate machacado", "Agregar verduras y cerrar"]
  },
  {
    id: 113,
    name: 'Smoothie de Mango y Coco',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 20,
      carbs: 38,
      fat: 8
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 mango", "1 scoop proteína vainilla", "Leche de coco light", "Plátano", "Hielo", "Coco rallado"],
    instructions: ["Pelar y cortar mango", "Añadir todos los ingredientes", "Batir hasta suavizar", "Servir en vaso alto", "Decorar con coco"]
  },
  {
    id: 114,
    name: 'Tortilla de Setas y Queso',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 26,
      carbs: 10,
      fat: 16
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["3 huevos", "Setas variadas", "Queso gruyère", "Ajo", "Perejil", "Aceite de oliva", "Sal y pimienta"],
    instructions: ["Saltear setas con ajo", "Batir huevos", "Verter en sartén", "Añadir setas y queso", "Doblar y servir"]
  },
  {
    id: 115,
    name: 'Bowl de Açaí Básico',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 18,
      carbs: 46,
      fat: 9
    },
    prepTime: 8,
    difficulty: 'Fácil',
    ingredients: ["100g pulpa de açaí", "Plátano", "1/2 scoop proteína", "Granola", "Miel", "Fresas", "Coco"],
    instructions: ["Batir açaí con plátano y proteína", "Verter en bowl", "Añadir granola", "Decorar con fresas", "Rociar con miel y coco"]
  },
  {
    id: 116,
    name: 'Crumble de Manzana Fit',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 14,
      carbs: 48,
      fat: 9
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["2 manzanas", "Avena", "Harina de almendra", "Miel", "Canela", "Yogur griego", "Nueces"],
    instructions: ["Cortar manzanas", "Mezclar topping de avena y frutos secos", "Colocar manzanas en molde", "Cubrir con topping", "Hornear 180°C 25 minutos"]
  },
  {
    id: 117,
    name: 'Huevos Benedictinos Light',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 28,
      carbs: 26,
      fat: 14
    },
    prepTime: 20,
    difficulty: 'Difícil',
    ingredients: ["2 huevos", "2 muffins ingleses integrales", "Jamón", "Salsa holandesa light", "Espinacas", "Vinagre"],
    instructions: ["Tostar muffins", "Escalfar huevos en agua con vinagre", "Saltear espinacas", "Montar con jamón y espinacas", "Cubrir con salsa"]
  },
  {
    id: 118,
    name: 'Barras de Granola Caseras',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 12,
      carbs: 38,
      fat: 10
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: ["Avena", "Miel", "Mantequilla de cacahuete", "Frutos secos", "Semillas", "Chips de chocolate negro", "Coco"],
    instructions: ["Mezclar avena y frutos secos", "Calentar miel y mantequilla", "Combinar todo", "Prensar en molde", "Refrigerar 2 horas"]
  },
  {
    id: 119,
    name: 'Panqueques de Ricotta',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 22,
      carbs: 34,
      fat: 10
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["150g ricotta", "2 huevos", "Harina de avena", "Levadura", "Vainilla", "Limón", "Arándanos"],
    instructions: ["Batir ricotta con huevos", "Añadir ingredientes secos", "Mezclar suavemente", "Cocinar en sartén", "Servir con arándanos"]
  },
  {
    id: 120,
    name: 'Bowl de Proteína y Frutas',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 26,
      carbs: 36,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 scoop proteína vainilla", "Yogur griego", "Kiwi", "Fresas", "Plátano", "Granola", "Miel"],
    instructions: ["Mezclar proteína con yogur", "Verter en bowl", "Cortar frutas", "Distribuir sobre el yogur", "Añadir granola y miel"]
  },

  // ========== ALMUERZOS (40 recetas) ==========
  {
    id: 121,
    name: 'Sándwich de Atún Mediterráneo',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 28,
      carbs: 32,
      fat: 9
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["1 lata atún al natural", "2 rebanadas pan integral", "Tomate", "Lechuga", "Aceitunas", "Aceite de oliva", "Limón"],
    instructions: ["Escurrir el atún", "Mezclar con aceitunas y limón", "Tostar el pan", "Rellenar con atún y verduras", "Servir fresco"]
  },
  {
    id: 122,
    name: 'Hummus con Crudités',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 12,
      carbs: 36,
      fat: 10
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["200g garbanzos cocidos", "Tahini", "Limón", "Ajo", "Comino", "Zanahoria", "Apio", "Pimiento"],
    instructions: ["Triturar garbanzos con tahini y especias", "Añadir limón y ajo", "Cortar verduras en bastones", "Servir hummus en bowl", "Acompañar con crudités"]
  },
  {
    id: 123,
    name: 'Wrap de Pollo y Aguacate',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=400&fit=crop&q=80',
    calories: 380,
    macros: {
      protein: 32,
      carbs: 36,
      fat: 12
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["1 tortilla integral", "Pechuga de pollo", "Aguacate", "Lechuga", "Tomate", "Yogur griego", "Cilantro"],
    instructions: ["Cocinar y cortar el pollo", "Calentar tortilla", "Untar con yogur", "Añadir pollo y aguacate", "Enrollar firmemente"]
  },
  {
    id: 124,
    name: 'Ensalada de Quinoa y Vegetales',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 14,
      carbs: 46,
      fat: 8
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: ["100g quinoa", "Pepino", "Tomate cherry", "Pimiento", "Cebolla morada", "Limón", "Aceite de oliva", "Perejil"],
    instructions: ["Cocinar quinoa", "Picar todas las verduras", "Mezclar con quinoa fría", "Aliñar con limón y aceite", "Refrigerar antes de servir"]
  },
  {
    id: 125,
    name: 'Tostadas de Queso Cottage y Tomate',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 22,
      carbs: 28,
      fat: 7
    },
    prepTime: 8,
    difficulty: 'Fácil',
    ingredients: ["2 rebanadas pan integral", "Queso cottage", "Tomate", "Albahaca", "Aceite de oliva", "Pimienta negra"],
    instructions: ["Tostar el pan", "Untar generosamente con queso cottage", "Cortar tomate en rodajas", "Colocar sobre el queso", "Añadir albahaca y aceite"]
  },
  {
    id: 126,
    name: 'Bol de Edamame y Aguacate',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 16,
      carbs: 24,
      fat: 14
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["150g edamame", "Aguacate", "Pepino", "Sésamo", "Salsa de soja", "Jengibre", "Lima"],
    instructions: ["Cocinar edamame", "Cortar aguacate y pepino", "Mezclar todo en un bowl", "Añadir salsa de soja", "Espolvorear con sésamo"]
  },
  {
    id: 127,
    name: 'Tortilla de Patata Light',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 18,
      carbs: 38,
      fat: 12
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["2 patatas medianas", "3 huevos", "Cebolla", "Aceite de oliva", "Sal", "Pimienta"],
    instructions: ["Cortar patatas en láminas finas", "Cocinar con cebolla", "Batir huevos", "Mezclar patatas con huevo", "Cuajar en sartén"]
  },
  {
    id: 128,
    name: 'Bowl de Atún Poke',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&q=80',
    calories: 390,
    macros: {
      protein: 32,
      carbs: 42,
      fat: 9
    },
    prepTime: 15,
    difficulty: 'Media',
    ingredients: ["150g atún fresco", "Arroz integral", "Edamame", "Pepino", "Aguacate", "Alga nori", "Salsa de soja", "Sésamo"],
    instructions: ["Cocinar arroz", "Cortar atún en cubos", "Preparar verduras", "Montar el bowl con todos los ingredientes", "Aliñar con salsa y sésamo"]
  },
  {
    id: 129,
    name: 'Falafel con Salsa de Yogur',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1593058388344-4be5ce6bc0f7?w=600&h=400&fit=crop&q=80',
    calories: 330,
    macros: {
      protein: 16,
      carbs: 44,
      fat: 10
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["Garbanzos", "Cebolla", "Ajo", "Perejil", "Comino", "Cilantro", "Yogur griego", "Pepino", "Menta"],
    instructions: ["Triturar garbanzos con especias", "Formar bolitas", "Hornear a 200°C 20 minutos", "Preparar salsa de yogur", "Servir caliente"]
  },
  {
    id: 130,
    name: 'Ensalada Caprese Proteica',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 24,
      carbs: 12,
      fat: 16
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Tomate", "Mozzarella light", "Albahaca fresca", "Aceite de oliva virgen", "Vinagre balsámico", "Sal", "Pimienta"],
    instructions: ["Cortar tomate y mozzarella en rodajas", "Intercalar con albahaca", "Rociar con aceite y vinagre", "Salpimentar", "Servir fresco"]
  },
  {
    id: 131,
    name: 'Crepes Salados de Espinacas',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop&q=80',
    calories: 300,
    macros: {
      protein: 20,
      carbs: 32,
      fat: 10
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["2 huevos", "Harina integral", "Leche", "Espinacas", "Queso ricotta", "Nuez moscada", "Sal"],
    instructions: ["Preparar masa de crepes", "Cocinar crepes finas", "Saltear espinacas", "Mezclar con ricotta", "Rellenar y enrollar"]
  },
  {
    id: 132,
    name: 'Bocadillo de Pavo y Vegetales',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 28,
      carbs: 36,
      fat: 7
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Pan integral", "Pechuga de pavo", "Lechuga", "Tomate", "Pepino", "Mostaza", "Zanahoria rallada"],
    instructions: ["Cortar el pan", "Untar con mostaza", "Añadir pavo", "Colocar verduras frescas", "Cerrar y servir"]
  },
  {
    id: 133,
    name: 'Ensalada de Lentejas Mediterránea',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 18,
      carbs: 42,
      fat: 8
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Lentejas cocidas", "Tomate", "Pepino", "Cebolla morada", "Pimiento", "Limón", "Comino", "Cilantro"],
    instructions: ["Escurrir lentejas", "Picar verduras finamente", "Mezclar todo", "Aliñar con limón y especias", "Refrigerar 30 minutos"]
  },
  {
    id: 134,
    name: 'Rollitos de Lechuga con Pollo',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 26,
      carbs: 16,
      fat: 8
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Hojas de lechuga", "Pechuga de pollo", "Zanahoria", "Pepino", "Cilantro", "Salsa de maní light", "Lima"],
    instructions: ["Cocinar y desmenuzar pollo", "Cortar verduras en juliana", "Rellenar hojas de lechuga", "Enrollar firmemente", "Servir con salsa"]
  },
  {
    id: 135,
    name: 'Pan Pita con Hummus y Vegetales',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 12,
      carbs: 44,
      fat: 8
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Pan pita integral", "Hummus", "Zanahoria", "Pepino", "Pimiento", "Lechuga", "Tomate"],
    instructions: ["Calentar pan pita", "Abrir por la mitad", "Untar con hummus", "Rellenar con vegetales", "Servir fresco"]
  },
  {
    id: 136,
    name: 'Ensalada de Pasta Integral',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop&q=80',
    calories: 350,
    macros: {
      protein: 16,
      carbs: 52,
      fat: 9
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: ["Pasta integral", "Tomate cherry", "Mozzarella", "Aceitunas", "Albahaca", "Aceite de oliva", "Vinagre"],
    instructions: ["Cocinar pasta al dente", "Cortar tomates y mozzarella", "Mezclar todo", "Aliñar con aceite y vinagre", "Servir frío"]
  },
  {
    id: 137,
    name: 'Bowl de Garbanzos Especiados',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 16,
      carbs: 46,
      fat: 9
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["Garbanzos", "Pimentón", "Comino", "Cúrcuma", "Yogur", "Pepino", "Tomate", "Menta"],
    instructions: ["Asar garbanzos con especias", "Hornear hasta crujientes", "Preparar salsa de yogur", "Montar el bowl", "Servir con verduras frescas"]
  },
  {
    id: 138,
    name: 'Tosta de Sardinas y Tomate',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop&q=80',
    calories: 300,
    macros: {
      protein: 24,
      carbs: 28,
      fat: 10
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["1 lata sardinas", "2 rebanadas pan integral", "Tomate", "Ajo", "Perejil", "Aceite de oliva", "Limón"],
    instructions: ["Tostar el pan", "Frotar con ajo", "Triturar tomate y untar", "Colocar sardinas", "Rociar con limón"]
  },
  {
    id: 139,
    name: 'Ensalada de Huevo y Aguacate',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 18,
      carbs: 16,
      fat: 20
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["3 huevos duros", "Aguacate", "Lechuga", "Tomate", "Yogur griego", "Mostaza", "Eneldo"],
    instructions: ["Cocinar y picar huevos", "Mezclar con aguacate machacado", "Añadir yogur y mostaza", "Servir sobre lechuga", "Decorar con eneldo"]
  },
  {
    id: 140,
    name: 'Wrap de Salmón Ahumado',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=400&fit=crop&q=80',
    calories: 360,
    macros: {
      protein: 26,
      carbs: 36,
      fat: 11
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Tortilla integral", "Salmón ahumado", "Queso crema light", "Pepino", "Cebolla morada", "Eneldo", "Limón"],
    instructions: ["Untar tortilla con queso crema", "Colocar salmón", "Añadir pepino en tiras", "Agregar cebolla y eneldo", "Enrollar y cortar"]
  },
  {
    id: 141,
    name: 'Bowl Mediterráneo de Cuscús',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 14,
      carbs: 54,
      fat: 8
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Cuscús integral", "Tomate", "Pepino", "Aceitunas", "Queso feta", "Limón", "Menta", "Aceite de oliva"],
    instructions: ["Preparar cuscús según instrucciones", "Picar verduras", "Mezclar todo", "Aliñar con limón y aceite", "Servir frío"]
  },
  {
    id: 142,
    name: 'Ensalada de Pollo César Light',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&h=400&fit=crop&q=80',
    calories: 330,
    macros: {
      protein: 32,
      carbs: 24,
      fat: 10
    },
    prepTime: 15,
    difficulty: 'Media',
    ingredients: ["Pechuga de pollo", "Lechuga romana", "Pan integral", "Yogur griego", "Parmesano", "Ajo", "Limón", "Anchoas"],
    instructions: ["Cocinar y cortar pollo", "Tostar pan en cubos", "Preparar salsa césar light", "Mezclar todos los ingredientes", "Servir fresco"]
  },
  {
    id: 143,
    name: 'Tortitas de Verduras',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 16,
      carbs: 32,
      fat: 10
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["Calabacín", "Zanahoria", "Huevo", "Harina integral", "Cebolla", "Yogur griego", "Eneldo"],
    instructions: ["Rallar verduras", "Mezclar con huevo y harina", "Formar tortitas", "Cocinar en sartén", "Servir con yogur"]
  },
  {
    id: 144,
    name: 'Bruschetta de Tomate y Albahaca',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&h=400&fit=crop&q=80',
    calories: 250,
    macros: {
      protein: 10,
      carbs: 36,
      fat: 8
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Pan integral", "Tomate", "Ajo", "Albahaca", "Aceite de oliva", "Sal", "Pimienta"],
    instructions: ["Tostar pan", "Frotar con ajo", "Picar tomate con albahaca", "Colocar sobre el pan", "Rociar con aceite"]
  },
  {
    id: 145,
    name: 'Ensalada Griega Tradicional',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 12,
      carbs: 18,
      fat: 18
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Tomate", "Pepino", "Cebolla morada", "Pimiento verde", "Aceitunas Kalamata", "Queso feta", "Orégano", "Aceite de oliva"],
    instructions: ["Cortar verduras en trozos grandes", "Mezclar en ensaladera", "Añadir queso feta en cubos", "Aliñar con aceite y orégano", "Servir fresco"]
  },
  {
    id: 146,
    name: 'Wrap de Falafel',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=400&fit=crop&q=80',
    calories: 370,
    macros: {
      protein: 18,
      carbs: 52,
      fat: 10
    },
    prepTime: 15,
    difficulty: 'Media',
    ingredients: ["Tortilla integral", "Falafel", "Lechuga", "Tomate", "Pepino", "Salsa tahini", "Perejil"],
    instructions: ["Calentar tortilla", "Añadir falafels", "Agregar verduras picadas", "Rociar con salsa tahini", "Enrollar firmemente"]
  },
  {
    id: 147,
    name: 'Ensalada de Arroz Integral',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 12,
      carbs: 48,
      fat: 8
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: ["Arroz integral", "Maíz", "Pimiento", "Cebolla", "Tomate", "Limón", "Cilantro", "Aceite de oliva"],
    instructions: ["Cocinar arroz", "Picar verduras", "Mezclar todo", "Aliñar con limón y cilantro", "Servir frío"]
  },
  {
    id: 148,
    name: 'Bocadillo de Tortilla Española',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 18,
      carbs: 38,
      fat: 12
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Baguette integral", "Tortilla de patata", "Tomate", "Lechuga", "Aceite de oliva"],
    instructions: ["Cortar pan por la mitad", "Añadir la tortilla", "Agregar lechuga y tomate", "Rociar con aceite", "Cerrar y servir"]
  },
  {
    id: 149,
    name: 'Bowl de Tofu Marinado',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&q=80',
    calories: 330,
    macros: {
      protein: 22,
      carbs: 36,
      fat: 11
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["Tofu firme", "Salsa de soja", "Arroz", "Brócoli", "Zanahoria", "Sésamo", "Jengibre", "Ajo"],
    instructions: ["Marinar tofu", "Hornear hasta dorar", "Cocinar arroz", "Saltear verduras", "Montar el bowl"]
  },
  {
    id: 150,
    name: 'Tostadas de Aguacate y Huevo',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 16,
      carbs: 28,
      fat: 16
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Pan integral", "Aguacate", "Huevo", "Tomate cherry", "Limón", "Sal", "Pimienta", "Semillas de sésamo"],
    instructions: ["Tostar pan", "Machacar aguacate", "Cocinar huevo pochado", "Montar con aguacate", "Decorar con tomates"]
  },
  {
    id: 151,
    name: 'Ensalada de Remolacha y Queso Cabra',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 14,
      carbs: 26,
      fat: 12
    },
    prepTime: 15,
    difficulty: 'Media',
    ingredients: ["Remolacha", "Queso de cabra", "Rúcula", "Nueces", "Vinagre balsámico", "Miel", "Aceite de oliva"],
    instructions: ["Asar remolacha", "Cortar en cubos", "Mezclar con rúcula", "Añadir queso de cabra", "Aliñar con vinagre y miel"]
  },
  {
    id: 152,
    name: 'Wrap Vegetal con Hummus',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 12,
      carbs: 42,
      fat: 9
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Tortilla integral", "Hummus", "Zanahoria", "Pepino", "Pimiento", "Lechuga", "Brotes"],
    instructions: ["Untar tortilla con hummus", "Cortar verduras en tiras", "Distribuir sobre la tortilla", "Añadir brotes", "Enrollar firmemente"]
  },
  {
    id: 153,
    name: 'Ensalada Nicoise Light',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop&q=80',
    calories: 350,
    macros: {
      protein: 28,
      carbs: 24,
      fat: 14
    },
    prepTime: 15,
    difficulty: 'Media',
    ingredients: ["Atún", "Judías verdes", "Tomate", "Huevo", "Aceitunas", "Patata", "Lechuga", "Aceite de oliva"],
    instructions: ["Cocinar judías y patatas", "Preparar huevo duro", "Cortar verduras", "Montar la ensalada", "Aliñar con aceite"]
  },
  {
    id: 154,
    name: 'Panini de Pollo y Pesto',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=400&fit=crop&q=80',
    calories: 370,
    macros: {
      protein: 32,
      carbs: 36,
      fat: 11
    },
    prepTime: 15,
    difficulty: 'Media',
    ingredients: ["Pan chapata integral", "Pechuga de pollo", "Pesto", "Tomate", "Mozzarella", "Rúcula"],
    instructions: ["Cocinar pollo", "Cortar pan", "Untar con pesto", "Añadir pollo y mozzarella", "Tostar en plancha"]
  },
  {
    id: 155,
    name: 'Bowl de Salmón y Aguacate',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&q=80',
    calories: 390,
    macros: {
      protein: 30,
      carbs: 28,
      fat: 18
    },
    prepTime: 15,
    difficulty: 'Media',
    ingredients: ["Salmón", "Arroz integral", "Aguacate", "Edamame", "Pepino", "Algas", "Salsa de soja", "Sésamo"],
    instructions: ["Cocinar salmón a la plancha", "Preparar arroz", "Cortar verduras", "Montar el bowl", "Aliñar con salsa"]
  },
  {
    id: 156,
    name: 'Tosta de Jamón Serrano e Higo',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop&q=80',
    calories: 300,
    macros: {
      protein: 20,
      carbs: 36,
      fat: 9
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Pan integral", "Jamón serrano", "Higos frescos", "Queso de cabra", "Miel", "Rúcula"],
    instructions: ["Tostar pan", "Untar con queso", "Añadir jamón", "Colocar higos", "Rociar con miel"]
  },
  {
    id: 157,
    name: 'Ensalada de Garbanzos y Espinacas',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&q=80',
    calories: 300,
    macros: {
      protein: 16,
      carbs: 42,
      fat: 8
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Garbanzos", "Espinacas", "Tomate cherry", "Cebolla morada", "Limón", "Comino", "Aceite de oliva"],
    instructions: ["Escurrir garbanzos", "Mezclar con espinacas frescas", "Añadir tomates", "Aliñar con limón y comino", "Servir fresco"]
  },
  {
    id: 158,
    name: 'Bagel de Pavo y Aguacate',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1612182062813-c6052ef0d4b9?w=600&h=400&fit=crop&q=80',
    calories: 360,
    macros: {
      protein: 28,
      carbs: 38,
      fat: 11
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Bagel integral", "Pavo", "Aguacate", "Tomate", "Lechuga", "Mostaza", "Pepino"],
    instructions: ["Tostar bagel", "Untar con mostaza", "Añadir pavo", "Colocar aguacate y verduras", "Cerrar y servir"]
  },
  {
    id: 159,
    name: 'Bowl de Quinoa y Pollo Teriyaki',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&q=80',
    calories: 380,
    macros: {
      protein: 32,
      carbs: 44,
      fat: 9
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["Pollo", "Quinoa", "Brócoli", "Zanahoria", "Salsa teriyaki", "Sésamo", "Cebolleta"],
    instructions: ["Marinar pollo en teriyaki", "Cocinar pollo y quinoa", "Saltear verduras", "Montar el bowl", "Decorar con sésamo"]
  },
  {
    id: 160,
    name: 'Tostada de Requesón y Aguacate',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 18,
      carbs: 26,
      fat: 12
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Pan integral", "Requesón", "Aguacate", "Tomate", "Aceite de oliva", "Semillas de calabaza", "Pimienta"],
    instructions: ["Tostar pan", "Untar requesón", "Añadir aguacate en láminas", "Colocar tomate", "Decorar con semillas"]
  },

  // ========== COMIDAS - Platos principales (60 recetas) ==========
  {
    id: 161,
    name: 'Pollo al Horno con Verduras',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop&q=80',
    calories: 420,
    macros: {
      protein: 42,
      carbs: 32,
      fat: 14
    },
    prepTime: 45,
    difficulty: 'Media',
    ingredients: ["Pechuga de pollo", "Patata", "Zanahoria", "Cebolla", "Pimiento", "Aceite de oliva", "Romero", "Ajo"],
    instructions: ["Cortar verduras en trozos", "Sazonar el pollo", "Colocar todo en bandeja", "Rociar con aceite", "Hornear 180°C 40 minutos"]
  },
  {
    id: 162,
    name: 'Pasta Integral con Tomate y Albahaca',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop&q=80',
    calories: 380,
    macros: {
      protein: 16,
      carbs: 62,
      fat: 8
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: ["Pasta integral", "Tomate natural", "Ajo", "Albahaca", "Aceite de oliva", "Parmesano", "Sal"],
    instructions: ["Cocinar pasta al dente", "Hacer salsa con tomate y ajo", "Añadir albahaca fresca", "Mezclar con pasta", "Servir con parmesano"]
  },
  {
    id: 163,
    name: 'Salmón a la Plancha con Espárragos',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop&q=80',
    calories: 390,
    macros: {
      protein: 38,
      carbs: 12,
      fat: 22
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["Filete de salmón", "Espárragos", "Limón", "Aceite de oliva", "Ajo", "Pimienta", "Eneldo"],
    instructions: ["Sazonar el salmón", "Cocinar a la plancha 4 min por lado", "Saltear espárragos", "Servir con limón", "Decorar con eneldo"]
  },
  {
    id: 164,
    name: 'Arroz con Pollo y Verduras',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?w=600&h=400&fit=crop&q=80',
    calories: 400,
    macros: {
      protein: 32,
      carbs: 52,
      fat: 8
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["Arroz integral", "Pollo", "Pimiento", "Guisantes", "Zanahoria", "Caldo de pollo", "Azafrán", "Ajo"],
    instructions: ["Sofreír pollo y verduras", "Añadir arroz", "Agregar caldo caliente", "Cocinar 20 minutos", "Dejar reposar"]
  },
  {
    id: 165,
    name: 'Lentejas Guisadas con Verduras',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1592487780735-9d92d2a0e935?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 22,
      carbs: 52,
      fat: 6
    },
    prepTime: 35,
    difficulty: 'Fácil',
    ingredients: ["Lentejas", "Zanahoria", "Pimiento", "Tomate", "Cebolla", "Pimentón", "Comino", "Laurel"],
    instructions: ["Remojar lentejas", "Sofreír verduras", "Añadir lentejas y agua", "Cocinar 30-35 minutos", "Añadir especias"]
  },
  {
    id: 166,
    name: 'Lasaña de Verduras Light',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&h=400&fit=crop&q=80',
    calories: 380,
    macros: {
      protein: 24,
      carbs: 48,
      fat: 12
    },
    prepTime: 50,
    difficulty: 'Difícil',
    ingredients: ["Placas de lasaña", "Calabacín", "Berenjena", "Pimiento", "Tomate", "Queso light", "Bechamel light", "Albahaca"],
    instructions: ["Cortar y asar verduras", "Preparar bechamel", "Alternar capas", "Cubrir con queso", "Hornear 180°C 30 minutos"]
  },
  {
    id: 167,
    name: 'Merluza al Vapor con Patatas',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1580959375944-0815bcaa6c8f?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 34,
      carbs: 28,
      fat: 8
    },
    prepTime: 25,
    difficulty: 'Fácil',
    ingredients: ["Merluza", "Patatas", "Judías verdes", "Limón", "Perejil", "Aceite de oliva", "Ajo"],
    instructions: ["Cocinar patatas al vapor", "Añadir merluza", "Cocinar 12-15 minutos", "Preparar verduras", "Aliñar con limón"]
  },
  {
    id: 168,
    name: 'Pechuga de Pavo con Quinoa',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&h=400&fit=crop&q=80',
    calories: 390,
    macros: {
      protein: 40,
      carbs: 42,
      fat: 8
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["Pechuga de pavo", "Quinoa", "Brócoli", "Calabacín", "Limón", "Aceite de oliva", "Ajo", "Tomillo"],
    instructions: ["Marinar pavo", "Cocinar a la plancha", "Preparar quinoa", "Saltear verduras", "Montar el plato"]
  },
  {
    id: 169,
    name: 'Risotto de Champiñones',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1476124369491-f014784e0c8b?w=600&h=400&fit=crop&q=80',
    calories: 380,
    macros: {
      protein: 16,
      carbs: 58,
      fat: 10
    },
    prepTime: 35,
    difficulty: 'Difícil',
    ingredients: ["Arroz arborio", "Champiñones", "Caldo vegetal", "Cebolla", "Vino blanco", "Parmesano", "Mantequilla light"],
    instructions: ["Sofreír cebolla", "Añadir arroz y vino", "Ir añadiendo caldo", "Agregar champiñones", "Rematar con queso"]
  },
  {
    id: 170,
    name: 'Pechuga de Pollo Rellena',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop&q=80',
    calories: 410,
    macros: {
      protein: 44,
      carbs: 18,
      fat: 18
    },
    prepTime: 40,
    difficulty: 'Difícil',
    ingredients: ["Pechuga de pollo", "Espinacas", "Queso fresco", "Jamón serrano", "Tomate", "Ajo", "Orégano"],
    instructions: ["Abrir la pechuga", "Rellenar con espinacas y queso", "Enrollar y atar", "Sellar en sartén", "Hornear 180°C 25 minutos"]
  },
  {
    id: 171,
    name: 'Lubina al Horno con Limón',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop&q=80',
    calories: 350,
    macros: {
      protein: 36,
      carbs: 14,
      fat: 16
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["Lubina", "Limón", "Ajo", "Perejil", "Aceite de oliva", "Vino blanco", "Sal"],
    instructions: ["Limpiar y sazonar lubina", "Rellenar con limón y ajo", "Rociar con vino y aceite", "Hornear 180°C 25 minutos", "Servir con perejil"]
  },
  {
    id: 172,
    name: 'Hamburguesa de Pavo con Boniato',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop&q=80',
    calories: 420,
    macros: {
      protein: 36,
      carbs: 46,
      fat: 12
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: ["Carne picada de pavo", "Boniato", "Pan integral", "Lechuga", "Tomate", "Cebolla", "Aguacate"],
    instructions: ["Formar hamburguesas", "Cocinar a la plancha", "Hornear boniato en gajos", "Tostar pan", "Montar hamburguesa"]
  },
  {
    id: 173,
    name: 'Fideuá de Marisco',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop&q=80',
    calories: 400,
    macros: {
      protein: 32,
      carbs: 48,
      fat: 10
    },
    prepTime: 40,
    difficulty: 'Difícil',
    ingredients: ["Fideos", "Gambas", "Calamares", "Mejillones", "Caldo de pescado", "Ajo", "Pimentón", "Azafrán"],
    instructions: ["Sofreír mariscos", "Añadir fideos", "Incorporar caldo caliente", "Cocinar 10-12 minutos", "Gratinar ligeramente"]
  },
  {
    id: 174,
    name: 'Ternera Salteada con Brócoli',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop&q=80',
    calories: 380,
    macros: {
      protein: 38,
      carbs: 24,
      fat: 14
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["Ternera", "Brócoli", "Zanahoria", "Pimiento", "Salsa de soja", "Jengibre", "Ajo", "Sésamo"],
    instructions: ["Cortar ternera en tiras", "Saltear a fuego alto", "Añadir verduras", "Agregar salsa de soja", "Decorar con sésamo"]
  },
  {
    id: 175,
    name: 'Bacalao al Pil Pil Light',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop&q=80',
    calories: 360,
    macros: {
      protein: 34,
      carbs: 12,
      fat: 20
    },
    prepTime: 25,
    difficulty: 'Difícil',
    ingredients: ["Bacalao desalado", "Aceite de oliva", "Ajo", "Guindilla", "Perejil"],
    instructions: ["Confitar el bacalao", "Reservar aceite", "Hacer el pil pil moviendo", "Integrar el bacalao", "Servir caliente"]
  },
  {
    id: 176,
    name: 'Albóndigas en Salsa de Tomate',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop&q=80',
    calories: 390,
    macros: {
      protein: 32,
      carbs: 28,
      fat: 16
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: ["Carne picada magra", "Cebolla", "Ajo", "Huevo", "Pan rallado", "Tomate", "Vino tinto", "Especias"],
    instructions: ["Formar albóndigas", "Dorar en sartén", "Preparar salsa de tomate", "Cocinar albóndigas en salsa", "Servir caliente"]
  },
  {
    id: 177,
    name: 'Dorada a la Sal',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 38,
      carbs: 8,
      fat: 16
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: ["Dorada entera", "Sal gorda", "Limón", "Aceite de oliva", "Perejil"],
    instructions: ["Limpiar el pescado", "Cubrir completamente con sal", "Hornear 200°C 25 minutos", "Romper la costra", "Servir con limón"]
  },
  {
    id: 178,
    name: 'Ragú de Ternera con Polenta',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop&q=80',
    calories: 410,
    macros: {
      protein: 34,
      carbs: 38,
      fat: 14
    },
    prepTime: 90,
    difficulty: 'Difícil',
    ingredients: ["Ternera", "Tomate", "Zanahoria", "Apio", "Vino tinto", "Polenta", "Caldo", "Hierbas"],
    instructions: ["Sellar la carne", "Cocinar a fuego lento con verduras", "Añadir vino y tomate", "Cocinar 1.5 horas", "Servir con polenta"]
  },
  {
    id: 179,
    name: 'Paella Valenciana Light',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1630409346287-0a2e5f17e239?w=600&h=400&fit=crop&q=80',
    calories: 420,
    macros: {
      protein: 28,
      carbs: 56,
      fat: 10
    },
    prepTime: 50,
    difficulty: 'Difícil',
    ingredients: ["Arroz", "Pollo", "Conejo", "Judías verdes", "Garrofón", "Pimiento", "Azafrán", "Romero"],
    instructions: ["Sofreír carnes", "Añadir verduras", "Incorporar arroz", "Agregar caldo", "Cocinar 18 minutos"]
  },
  {
    id: 180,
    name: 'Pez Espada a la Plancha',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop&q=80',
    calories: 360,
    macros: {
      protein: 38,
      carbs: 10,
      fat: 18
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: ["Pez espada", "Limón", "Ajo", "Perejil", "Aceite de oliva", "Pimienta"],
    instructions: ["Marinar el pescado", "Calentar plancha", "Cocinar 3-4 min por lado", "Servir con limón", "Decorar con perejil"]
  },
  {
    id: 181,
    name: 'Curry de Pollo con Arroz',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?w=600&h=400&fit=crop&q=80',
    calories: 400,
    macros: {
      protein: 34,
      carbs: 48,
      fat: 12
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: ["Pollo", "Curry", "Leche de coco light", "Cebolla", "Pimiento", "Arroz basmati", "Ajo", "Jengibre"],
    instructions: ["Sofreír pollo", "Añadir verduras y curry", "Incorporar leche de coco", "Cocinar 20 minutos", "Servir con arroz"]
  },
  {
    id: 182,
    name: 'Muslitos de Pollo al Horno',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop&q=80',
    calories: 380,
    macros: {
      protein: 36,
      carbs: 22,
      fat: 16
    },
    prepTime: 40,
    difficulty: 'Fácil',
    ingredients: ["Muslitos de pollo", "Ajo", "Limón", "Romero", "Patatas", "Aceite de oliva", "Pimentón"],
    instructions: ["Marinar pollo", "Cortar patatas", "Colocar en bandeja", "Hornear 190°C 35 minutos", "Dar la vuelta a mitad"]
  },
  {
    id: 183,
    name: 'Sepia a la Plancha con Alioli',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 32,
      carbs: 8,
      fat: 14
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["Sepia", "Ajo", "Limón", "Perejil", "Aceite de oliva", "Huevo", "Sal"],
    instructions: ["Limpiar sepia", "Marcar a la plancha", "Preparar alioli", "Servir con limón", "Decorar con perejil"]
  },
  {
    id: 184,
    name: 'Pollo Tikka Masala',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop&q=80',
    calories: 410,
    macros: {
      protein: 36,
      carbs: 42,
      fat: 14
    },
    prepTime: 40,
    difficulty: 'Media',
    ingredients: ["Pechuga de pollo", "Yogur", "Especias tikka", "Tomate", "Nata light", "Arroz", "Cilantro", "Ajo"],
    instructions: ["Marinar pollo en yogur", "Hornear el pollo", "Preparar salsa masala", "Añadir pollo a la salsa", "Servir con arroz"]
  },
  {
    id: 185,
    name: 'Boloñesa de Lentejas',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop&q=80',
    calories: 360,
    macros: {
      protein: 20,
      carbs: 52,
      fat: 8
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: ["Lentejas", "Tomate", "Zanahoria", "Apio", "Cebolla", "Pasta integral", "Vino tinto", "Orégano"],
    instructions: ["Sofreír verduras", "Añadir lentejas", "Incorporar tomate y vino", "Cocinar 30 minutos", "Servir con pasta"]
  },
  {
    id: 186,
    name: 'Pulpo a la Gallega',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 34,
      carbs: 18,
      fat: 12
    },
    prepTime: 45,
    difficulty: 'Difícil',
    ingredients: ["Pulpo", "Patatas", "Pimentón dulce", "Pimentón picante", "Aceite de oliva", "Sal gorda"],
    instructions: ["Cocinar pulpo", "Hervir patatas", "Cortar pulpo en rodajas", "Colocar sobre patatas", "Espolvorear pimentón"]
  },
  {
    id: 187,
    name: 'Rabo de Toro Estofado',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop&q=80',
    calories: 440,
    macros: {
      protein: 38,
      carbs: 24,
      fat: 20
    },
    prepTime: 120,
    difficulty: 'Difícil',
    ingredients: ["Rabo de toro", "Zanahoria", "Cebolla", "Vino tinto", "Tomate", "Laurel", "Caldo", "Especias"],
    instructions: ["Sellar el rabo", "Sofreír verduras", "Añadir vino y caldo", "Cocinar a fuego lento 2 horas", "Reducir la salsa"]
  },
  {
    id: 188,
    name: 'Rodaballo al Horno',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop&q=80',
    calories: 370,
    macros: {
      protein: 40,
      carbs: 12,
      fat: 18
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["Rodaballo", "Patatas", "Cebolla", "Vino blanco", "Perejil", "Aceite de oliva", "Limón"],
    instructions: ["Limpiar pescado", "Cortar patatas en láminas", "Colocar base de cebolla", "Añadir pescado", "Hornear 180°C 25 minutos"]
  },
  {
    id: 189,
    name: 'Calabacines Rellenos de Carne',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&h=400&fit=crop&q=80',
    calories: 360,
    macros: {
      protein: 28,
      carbs: 24,
      fat: 16
    },
    prepTime: 40,
    difficulty: 'Media',
    ingredients: ["Calabacines", "Carne picada", "Cebolla", "Tomate", "Queso", "Ajo", "Orégano"],
    instructions: ["Vaciar calabacines", "Sofreír carne con verduras", "Rellenar calabacines", "Cubrir con queso", "Hornear 180°C 30 minutos"]
  },
  {
    id: 190,
    name: 'Magret de Pato con Naranja',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&q=80',
    calories: 420,
    macros: {
      protein: 34,
      carbs: 28,
      fat: 20
    },
    prepTime: 35,
    difficulty: 'Difícil',
    ingredients: ["Magret de pato", "Naranja", "Miel", "Vino tinto", "Canela", "Boniato", "Tomillo"],
    instructions: ["Marcar el magret", "Hornear 10 minutos", "Preparar salsa de naranja", "Cortar en lonchas", "Servir con salsa"]
  },
  {
    id: 191,
    name: 'Garbanzos con Espinacas',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1592487780735-9d92d2a0e935?w=600&h=400&fit=crop&q=80',
    calories: 350,
    macros: {
      protein: 18,
      carbs: 52,
      fat: 9
    },
    prepTime: 30,
    difficulty: 'Fácil',
    ingredients: ["Garbanzos", "Espinacas", "Tomate", "Pimentón", "Comino", "Ajo", "Cebolla"],
    instructions: ["Sofreír ajo y cebolla", "Añadir tomate y especias", "Incorporar garbanzos", "Agregar espinacas", "Cocinar 15 minutos"]
  },
  {
    id: 192,
    name: 'Atún en Escabeche',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1580959375944-0815bcaa6c8f?w=600&h=400&fit=crop&q=80',
    calories: 330,
    macros: {
      protein: 36,
      carbs: 16,
      fat: 14
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["Atún fresco", "Zanahoria", "Cebolla", "Vinagre", "Aceite de oliva", "Laurel", "Pimienta"],
    instructions: ["Marcar el atún", "Sofreír verduras", "Añadir vinagre y especias", "Incorporar el atún", "Dejar enfriar"]
  },
  {
    id: 193,
    name: 'Pollo al Ajillo',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop&q=80',
    calories: 370,
    macros: {
      protein: 38,
      carbs: 12,
      fat: 18
    },
    prepTime: 25,
    difficulty: 'Fácil',
    ingredients: ["Pollo troceado", "Ajo", "Guindilla", "Vino blanco", "Perejil", "Aceite de oliva"],
    instructions: ["Dorar el pollo", "Añadir ajos laminados", "Incorporar vino", "Cocinar hasta reducir", "Servir con perejil"]
  },
  {
    id: 194,
    name: 'Secreto Ibérico a la Plancha',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop&q=80',
    calories: 400,
    macros: {
      protein: 36,
      carbs: 8,
      fat: 24
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Secreto ibérico", "Pimientos de Padrón", "Sal gruesa", "Aceite de oliva"],
    instructions: ["Sazonar la carne", "Calentar plancha muy caliente", "Marcar 2-3 min por lado", "Freír pimientos", "Servir juntos"]
  },
  {
    id: 195,
    name: 'Rape a la Marinera',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop&q=80',
    calories: 360,
    macros: {
      protein: 38,
      carbs: 14,
      fat: 16
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["Rape", "Gambas", "Almejas", "Cebolla", "Tomate", "Vino blanco", "Ajo", "Perejil"],
    instructions: ["Dorar rape", "Sofreír cebolla y ajo", "Añadir tomate y vino", "Incorporar mariscos", "Cocinar 15 minutos"]
  },
  {
    id: 196,
    name: 'Cordero Asado con Patatas',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&q=80',
    calories: 450,
    macros: {
      protein: 40,
      carbs: 32,
      fat: 22
    },
    prepTime: 90,
    difficulty: 'Difícil',
    ingredients: ["Pierna de cordero", "Patatas", "Ajo", "Romero", "Vino blanco", "Aceite de oliva", "Tomillo"],
    instructions: ["Marinar el cordero", "Cortar patatas", "Hornear 180°C 1 hora", "Regar con su jugo", "Subir temperatura final"]
  },
  {
    id: 197,
    name: 'Calamares en su Tinta',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&h=400&fit=crop&q=80',
    calories: 350,
    macros: {
      protein: 32,
      carbs: 28,
      fat: 12
    },
    prepTime: 40,
    difficulty: 'Media',
    ingredients: ["Calamares", "Tinta de calamar", "Cebolla", "Tomate", "Vino blanco", "Ajo", "Arroz"],
    instructions: ["Limpiar calamares", "Sofreír cebolla", "Añadir calamares", "Incorporar tinta y vino", "Servir con arroz"]
  },
  {
    id: 198,
    name: 'Codornices Escabechadas',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&q=80',
    calories: 380,
    macros: {
      protein: 34,
      carbs: 18,
      fat: 18
    },
    prepTime: 50,
    difficulty: 'Media',
    ingredients: ["Codornices", "Zanahoria", "Cebolla", "Vinagre", "Vino blanco", "Laurel", "Aceite de oliva"],
    instructions: ["Dorar las codornices", "Sofreír verduras", "Añadir vinagre y vino", "Cocinar 30 minutos", "Dejar reposar"]
  },
  {
    id: 199,
    name: 'Wok de Verduras y Ternera',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop&q=80',
    calories: 360,
    macros: {
      protein: 32,
      carbs: 34,
      fat: 12
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["Ternera", "Brócoli", "Zanahoria", "Pimiento", "Cebolla", "Salsa de soja", "Jengibre", "Fideos"],
    instructions: ["Cortar todo en juliana", "Saltear carne a fuego alto", "Añadir verduras", "Incorporar fideos", "Terminar con salsa"]
  },
  {
    id: 200,
    name: 'Mero al Horno con Verduras',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop&q=80',
    calories: 370,
    macros: {
      protein: 40,
      carbs: 18,
      fat: 16
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: ["Mero", "Calabacín", "Berenjena", "Tomate", "Pimiento", "Aceite de oliva", "Limón", "Tomillo"],
    instructions: ["Cortar verduras", "Sazonar el pescado", "Colocar en bandeja", "Rociar con aceite y limón", "Hornear 180°C 25 minutos"]
  },
  {
    id: 201,
    name: 'Costillas BBQ al Horno',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop&q=80',
    calories: 440,
    macros: {
      protein: 36,
      carbs: 28,
      fat: 24
    },
    prepTime: 90,
    difficulty: 'Media',
    ingredients: ["Costillas de cerdo", "Salsa BBQ", "Miel", "Mostaza", "Ajo", "Especias", "Vinagre"],
    instructions: ["Marinar costillas", "Envolver en papel aluminio", "Hornear 150°C 1.5 horas", "Glasear con salsa", "Gratinar 10 minutos"]
  },
  {
    id: 202,
    name: 'Tajine de Pollo con Verduras',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop&q=80',
    calories: 390,
    macros: {
      protein: 34,
      carbs: 38,
      fat: 12
    },
    prepTime: 45,
    difficulty: 'Media',
    ingredients: ["Pollo", "Calabaza", "Garbanzos", "Cebolla", "Tomate", "Cúrcuma", "Comino", "Cilantro", "Pasas"],
    instructions: ["Dorar el pollo", "Añadir verduras y especias", "Incorporar garbanzos", "Cocinar a fuego lento", "Agregar pasas al final"]
  },
  {
    id: 203,
    name: 'Bonito con Tomate',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1580959375944-0815bcaa6c8f?w=600&h=400&fit=crop&q=80',
    calories: 370,
    macros: {
      protein: 38,
      carbs: 14,
      fat: 18
    },
    prepTime: 25,
    difficulty: 'Fácil',
    ingredients: ["Bonito", "Tomate", "Cebolla", "Pimiento verde", "Ajo", "Aceite de oliva"],
    instructions: ["Dorar el bonito", "Sofreír verduras", "Añadir tomate", "Cocinar 15 minutos", "Servir caliente"]
  },
  {
    id: 204,
    name: 'Pimientos Rellenos de Bacalao',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&h=400&fit=crop&q=80',
    calories: 360,
    macros: {
      protein: 32,
      carbs: 28,
      fat: 14
    },
    prepTime: 40,
    difficulty: 'Media',
    ingredients: ["Pimientos rojos", "Bacalao", "Cebolla", "Tomate", "Ajo", "Pan rallado", "Aceite de oliva"],
    instructions: ["Asar pimientos", "Preparar relleno de bacalao", "Rellenar pimientos", "Cubrir con pan rallado", "Gratinar 10 minutos"]
  },
  {
    id: 205,
    name: 'Osobuco Milanesa',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop&q=80',
    calories: 430,
    macros: {
      protein: 38,
      carbs: 22,
      fat: 22
    },
    prepTime: 120,
    difficulty: 'Difícil',
    ingredients: ["Osobuco", "Zanahoria", "Apio", "Cebolla", "Vino blanco", "Tomate", "Gremolata", "Caldo"],
    instructions: ["Dorar el osobuco", "Sofreír verduras", "Añadir vino y tomate", "Cocinar 2 horas a fuego lento", "Servir con gremolata"]
  },
  {
    id: 206,
    name: 'Besugo al Horno',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop&q=80',
    calories: 360,
    macros: {
      protein: 36,
      carbs: 12,
      fat: 18
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["Besugo", "Patatas", "Cebolla", "Limón", "Vino blanco", "Aceite de oliva", "Perejil"],
    instructions: ["Limpiar pescado", "Cortar patatas", "Hacer cama de cebolla", "Colocar besugo", "Hornear 180°C 25 minutos"]
  },
  {
    id: 207,
    name: 'Fideos a la Cazuela',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop&q=80',
    calories: 380,
    macros: {
      protein: 24,
      carbs: 52,
      fat: 10
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["Fideos gruesos", "Costilla de cerdo", "Morcilla", "Tomate", "Pimentón", "Caldo", "Ajo"],
    instructions: ["Dorar carnes", "Añadir tomate y pimentón", "Incorporar caldo", "Agregar fideos", "Cocinar 10 minutos"]
  },
  {
    id: 208,
    name: 'Carrilleras en Salsa',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop&q=80',
    calories: 420,
    macros: {
      protein: 36,
      carbs: 24,
      fat: 20
    },
    prepTime: 150,
    difficulty: 'Difícil',
    ingredients: ["Carrilleras de cerdo", "Zanahoria", "Cebolla", "Vino tinto", "Caldo", "Laurel", "Tomillo"],
    instructions: ["Sellar carrilleras", "Sofreír verduras", "Añadir vino", "Cocinar 2.5 horas", "Reducir salsa"]
  },
  {
    id: 209,
    name: 'Lubina a la Espalda',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop&q=80',
    calories: 350,
    macros: {
      protein: 38,
      carbs: 10,
      fat: 16
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["Lubina", "Ajo", "Perejil", "Limón", "Aceite de oliva", "Sal"],
    instructions: ["Abrir lubina por la espalda", "Marinar con ajo y perejil", "Cocinar a la plancha", "Rociar con limón", "Servir caliente"]
  },
  {
    id: 210,
    name: 'Cocido Madrileño Light',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop&q=80',
    calories: 400,
    macros: {
      protein: 32,
      carbs: 48,
      fat: 10
    },
    prepTime: 120,
    difficulty: 'Difícil',
    ingredients: ["Garbanzos", "Pollo", "Ternera magra", "Zanahoria", "Repollo", "Patata", "Fideos", "Hueso de jamón"],
    instructions: ["Cocinar garbanzos y carnes", "Añadir verduras", "Cocinar 2 horas", "Separar sopa", "Servir en tres vuelcos"]
  },
  {
    id: 211,
    name: 'Salmonetes a la Plancha',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 34,
      carbs: 8,
      fat: 18
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Salmonetes", "Ajo", "Perejil", "Limón", "Aceite de oliva"],
    instructions: ["Limpiar salmonetes", "Marcar a la plancha", "Preparar ajada", "Rociar sobre pescado", "Servir con limón"]
  },
  {
    id: 212,
    name: 'Conejo al Ajillo',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&q=80',
    calories: 380,
    macros: {
      protein: 36,
      carbs: 14,
      fat: 16
    },
    prepTime: 40,
    difficulty: 'Media',
    ingredients: ["Conejo troceado", "Ajo", "Vino blanco", "Romero", "Aceite de oliva", "Laurel"],
    instructions: ["Dorar el conejo", "Añadir ajos", "Incorporar vino", "Cocinar 30 minutos", "Servir con salsa"]
  },
  {
    id: 213,
    name: 'Pulpitos Salteados',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&h=400&fit=crop&q=80',
    calories: 330,
    macros: {
      protein: 32,
      carbs: 12,
      fat: 14
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["Pulpitos", "Ajo", "Perejil", "Pimentón", "Aceite de oliva", "Vino blanco"],
    instructions: ["Cocinar pulpitos", "Saltear con ajo", "Añadir pimentón", "Incorporar vino", "Servir caliente"]
  },
  {
    id: 214,
    name: 'Fabada Asturiana Light',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop&q=80',
    calories: 420,
    macros: {
      protein: 28,
      carbs: 48,
      fat: 14
    },
    prepTime: 90,
    difficulty: 'Media',
    ingredients: ["Fabes", "Chorizo light", "Morcilla", "Panceta", "Azafrán", "Ajo", "Pimentón"],
    instructions: ["Remojar fabes", "Cocinar con carnes", "Añadir especias", "Cocinar 1.5 horas", "Dejar reposar"]
  },
  {
    id: 215,
    name: 'Trucha a la Navarra',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop&q=80',
    calories: 360,
    macros: {
      protein: 36,
      carbs: 16,
      fat: 16
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["Trucha", "Jamón serrano", "Ajo", "Perejil", "Limón", "Aceite de oliva"],
    instructions: ["Limpiar trucha", "Rellenar con jamón", "Enharinar ligeramente", "Freír en aceite", "Servir con limón"]
  },
  {
    id: 216,
    name: 'Pisto Manchego con Huevo',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 16,
      carbs: 28,
      fat: 16
    },
    prepTime: 30,
    difficulty: 'Fácil',
    ingredients: ["Calabacín", "Berenjena", "Pimiento", "Tomate", "Cebolla", "Huevo", "Aceite de oliva"],
    instructions: ["Picar verduras", "Sofreír por separado", "Juntar todo", "Cocinar 20 minutos", "Servir con huevo frito"]
  },
  {
    id: 217,
    name: 'Emperador a la Plancha',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop&q=80',
    calories: 350,
    macros: {
      protein: 40,
      carbs: 6,
      fat: 16
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Emperador", "Limón", "Ajo", "Perejil", "Aceite de oliva"],
    instructions: ["Sazonar el pescado", "Calentar plancha", "Cocinar 3 min por lado", "Preparar majado de ajo", "Servir caliente"]
  },
  {
    id: 218,
    name: 'Caldereta de Cordero',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&q=80',
    calories: 430,
    macros: {
      protein: 38,
      carbs: 26,
      fat: 20
    },
    prepTime: 90,
    difficulty: 'Difícil',
    ingredients: ["Cordero", "Patatas", "Pimiento", "Cebolla", "Tomate", "Vino blanco", "Pimentón", "Ajo"],
    instructions: ["Dorar el cordero", "Sofreír verduras", "Añadir patatas", "Incorporar líquidos", "Cocinar 1 hora"]
  },
  {
    id: 219,
    name: 'Sardinas Asadas',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1580959375944-0815bcaa6c8f?w=600&h=400&fit=crop&q=80',
    calories: 300,
    macros: {
      protein: 28,
      carbs: 8,
      fat: 16
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Sardinas frescas", "Sal gorda", "Limón", "Aceite de oliva"],
    instructions: ["Limpiar sardinas", "Salar generosamente", "Asar a la parrilla", "Dar la vuelta una vez", "Servir con limón"]
  },
  {
    id: 220,
    name: 'Arroz Negro con Alioli',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1630409346287-0a2e5f17e239?w=600&h=400&fit=crop&q=80',
    calories: 400,
    macros: {
      protein: 28,
      carbs: 52,
      fat: 12
    },
    prepTime: 40,
    difficulty: 'Media',
    ingredients: ["Arroz", "Sepia", "Tinta de calamar", "Caldo de pescado", "Ajo", "Pimiento", "Alioli"],
    instructions: ["Limpiar sepia", "Sofreír con verduras", "Añadir arroz y tinta", "Incorporar caldo", "Servir con alioli"]
  },

  // ========== MERIENDAS (40 recetas) ==========
  {
    id: 221,
    name: 'Batido de Proteína y Plátano',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 26,
      carbs: 32,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 scoop proteína", "Plátano", "Leche de almendras", "Canela", "Hielo"],
    instructions: ["Añadir todos los ingredientes", "Batir hasta suavizar", "Servir frío", "Decorar con canela"]
  },
  {
    id: 222,
    name: 'Tostada con Mantequilla de Cacahuete',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 14,
      carbs: 38,
      fat: 12
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["2 rebanadas pan integral", "Mantequilla de cacahuete", "Plátano", "Miel", "Semillas de chía"],
    instructions: ["Tostar el pan", "Untar mantequilla", "Añadir plátano en rodajas", "Rociar con miel", "Espolvorear chía"]
  },
  {
    id: 223,
    name: 'Yogur con Granola y Frutas',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 18,
      carbs: 42,
      fat: 8
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Yogur griego", "Granola", "Fresas", "Arándanos", "Miel", "Nueces"],
    instructions: ["Poner yogur en bowl", "Añadir granola", "Agregar frutas", "Rociar miel", "Decorar con nueces"]
  },
  {
    id: 224,
    name: 'Galletas de Avena y Plátano',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1600506175684-fc1e8e97b255?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 10,
      carbs: 42,
      fat: 7
    },
    prepTime: 25,
    difficulty: 'Fácil',
    ingredients: ["2 plátanos maduros", "Avena", "Canela", "Chips de chocolate negro", "Nueces"],
    instructions: ["Triturar plátanos", "Mezclar con avena", "Formar galletas", "Hornear 180°C 15 minutos", "Enfriar antes de servir"]
  },
  {
    id: 225,
    name: 'Barritas Energéticas Caseras',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 12,
      carbs: 38,
      fat: 10
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["Dátiles", "Avena", "Frutos secos", "Semillas", "Mantequilla de almendra", "Cacao"],
    instructions: ["Triturar dátiles", "Mezclar todo", "Prensar en molde", "Refrigerar 2 horas", "Cortar en barritas"]
  },
  {
    id: 226,
    name: 'Manzana con Queso Fresco',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&h=400&fit=crop&q=80',
    calories: 220,
    macros: {
      protein: 12,
      carbs: 28,
      fat: 8
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 manzana", "Queso fresco", "Nueces", "Miel", "Canela"],
    instructions: ["Cortar manzana en rodajas", "Colocar queso encima", "Añadir nueces picadas", "Rociar con miel", "Espolvorear canela"]
  },
  {
    id: 227,
    name: 'Pudding de Chocolate Proteico',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4a1bbc4f?w=600&h=400&fit=crop&q=80',
    calories: 250,
    macros: {
      protein: 22,
      carbs: 28,
      fat: 7
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["1 scoop proteína chocolate", "Leche de almendras", "Cacao puro", "Semillas de chía", "Stevia"],
    instructions: ["Mezclar todos los ingredientes", "Batir bien", "Refrigerar 2 horas", "Remover a mitad", "Servir frío"]
  },
  {
    id: 228,
    name: 'Crackers Integrales con Hummus',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 10,
      carbs: 32,
      fat: 9
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Crackers integrales", "Hummus", "Zanahoria baby", "Pepino", "Tomate cherry"],
    instructions: ["Untar crackers con hummus", "Preparar verduras", "Servir juntos", "Decorar con hierbas"]
  },
  {
    id: 229,
    name: 'Smoothie de Frutos Rojos',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 20,
      carbs: 36,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Fresas", "Frambuesas", "Arándanos", "1 scoop proteína vainilla", "Yogur griego", "Hielo"],
    instructions: ["Lavar frutas", "Añadir todo a la batidora", "Batir hasta suavizar", "Ajustar consistencia", "Servir inmediatamente"]
  },
  {
    id: 230,
    name: 'Palitos de Queso con Uvas',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&h=400&fit=crop&q=80',
    calories: 250,
    macros: {
      protein: 18,
      carbs: 22,
      fat: 11
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Queso light en porciones", "Uvas", "Nueces", "Almendras"],
    instructions: ["Cortar queso en palitos", "Lavar uvas", "Disponer en plato", "Añadir frutos secos", "Servir fresco"]
  },
  {
    id: 231,
    name: 'Batido Verde Detox',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop&q=80',
    calories: 210,
    macros: {
      protein: 16,
      carbs: 28,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Espinacas", "Pepino", "Manzana verde", "Limón", "1/2 scoop proteína", "Agua de coco"],
    instructions: ["Lavar verduras y frutas", "Añadir todo a la batidora", "Batir bien", "Colar si prefieres", "Servir con hielo"]
  },
  {
    id: 232,
    name: 'Tortitas de Arroz con Aguacate',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=600&h=400&fit=crop&q=80',
    calories: 230,
    macros: {
      protein: 8,
      carbs: 32,
      fat: 10
    },
    prepTime: 8,
    difficulty: 'Fácil',
    ingredients: ["Tortitas de arroz", "Aguacate", "Tomate", "Sal", "Pimienta", "Limón"],
    instructions: ["Machacar aguacate", "Añadir limón", "Untar en tortitas", "Colocar tomate", "Salpimentar"]
  },
  {
    id: 233,
    name: 'Macedonia de Frutas',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1564093436563-17f52dd1bc29?w=600&h=400&fit=crop&q=80',
    calories: 200,
    macros: {
      protein: 6,
      carbs: 42,
      fat: 2
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Manzana", "Pera", "Naranja", "Kiwi", "Fresas", "Zumo de naranja", "Menta"],
    instructions: ["Pelar y cortar frutas", "Mezclar en bowl", "Rociar con zumo", "Refrigerar 30 minutos", "Decorar con menta"]
  },
  {
    id: 234,
    name: 'Bocadillo Mini de Jamón York',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 20,
      carbs: 36,
      fat: 7
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Pan integral pequeño", "Jamón York", "Tomate", "Lechuga", "Queso light"],
    instructions: ["Cortar pan", "Añadir jamón", "Colocar queso", "Agregar verduras", "Cerrar y servir"]
  },
  {
    id: 235,
    name: 'Muffin Proteico de Chocolate',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 18,
      carbs: 34,
      fat: 8
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 scoop proteína chocolate", "1 huevo", "Harina de avena", "Levadura", "Chips chocolate", "Leche"],
    instructions: ["Mezclar todos los ingredientes", "Verter en taza", "Microondas 90 segundos", "Dejar reposar", "Desmoldar"]
  },
  {
    id: 236,
    name: 'Ensalada de Frutas con Yogur',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 14,
      carbs: 38,
      fat: 5
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Yogur griego", "Melocotón", "Piña", "Mango", "Miel", "Coco rallado"],
    instructions: ["Cortar frutas en cubos", "Mezclar con yogur", "Añadir miel", "Espolvorear coco", "Servir frío"]
  },
  {
    id: 237,
    name: 'Chips de Manzana al Horno',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&h=400&fit=crop&q=80',
    calories: 180,
    macros: {
      protein: 2,
      carbs: 42,
      fat: 1
    },
    prepTime: 90,
    difficulty: 'Fácil',
    ingredients: ["2 manzanas", "Canela", "Stevia"],
    instructions: ["Cortar manzanas en láminas finas", "Colocar en bandeja", "Espolvorear canela", "Hornear 100°C 1 hora", "Dejar crujir"]
  },
  {
    id: 238,
    name: 'Rollitos de Pavo y Queso',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 24,
      carbs: 8,
      fat: 12
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Lonchas de pavo", "Queso light", "Lechuga", "Tomate", "Pepino"],
    instructions: ["Colocar pavo extendido", "Añadir queso", "Agregar verduras", "Enrollar firmemente", "Cortar en porciones"]
  },
  {
    id: 239,
    name: 'Batido de Café Proteico Frío',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 230,
    macros: {
      protein: 26,
      carbs: 20,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Café frío", "1 scoop proteína vainilla", "Leche de almendras", "Hielo", "Canela"],
    instructions: ["Preparar café y enfriar", "Añadir proteína y leche", "Batir con hielo", "Servir en vaso alto", "Decorar con canela"]
  },
  {
    id: 240,
    name: 'Brownie Proteico de Taza',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4a1bbc4f?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 20,
      carbs: 32,
      fat: 8
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 scoop proteína chocolate", "1 huevo", "Cacao", "Harina de almendra", "Levadura", "Chips chocolate"],
    instructions: ["Mezclar todo en una taza", "Añadir chips", "Microondas 90 segundos", "Dejar reposar 1 min", "Servir caliente"]
  },
  {
    id: 241,
    name: 'Palitos de Zanahoria y Hummus',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=600&h=400&fit=crop&q=80',
    calories: 190,
    macros: {
      protein: 8,
      carbs: 28,
      fat: 7
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Zanahorias", "Apio", "Pepino", "Hummus", "Pimentón"],
    instructions: ["Cortar verduras en palitos", "Preparar hummus", "Servir juntos", "Espolvorear pimentón"]
  },
  {
    id: 242,
    name: 'Quesito Batido con Frutas',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop&q=80',
    calories: 210,
    macros: {
      protein: 16,
      carbs: 26,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Quesito batido light", "Fresas", "Arándanos", "Galletas integrales"],
    instructions: ["Poner quesito en bol", "Lavar frutas", "Mezclar", "Servir con galletas"]
  },
  {
    id: 243,
    name: 'Pan de Plátano Mini',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=600&h=400&fit=crop&q=80',
    calories: 250,
    macros: {
      protein: 12,
      carbs: 40,
      fat: 6
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["1 plátano", "1 huevo", "Harina de avena", "Canela", "Levadura", "Nueces"],
    instructions: ["Triturar plátano", "Mezclar con resto de ingredientes", "Verter en molde pequeño", "Microondas 3 minutos", "Dejar enfriar"]
  },
  {
    id: 244,
    name: 'Smoothie Bowl de Mango',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 18,
      carbs: 48,
      fat: 8
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Mango congelado", "1/2 scoop proteína", "Yogur griego", "Granola", "Coco", "Fresas"],
    instructions: ["Batir mango con proteína y yogur", "Verter en bowl", "Añadir granola", "Decorar con frutas", "Espolvorear coco"]
  },
  {
    id: 245,
    name: 'Tostada de Queso Fresco y Tomate',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 16,
      carbs: 28,
      fat: 8
    },
    prepTime: 8,
    difficulty: 'Fácil',
    ingredients: ["Pan integral", "Queso fresco", "Tomate", "Orégano", "Aceite de oliva"],
    instructions: ["Tostar pan", "Untar queso", "Añadir tomate en rodajas", "Rociar aceite", "Espolvorear orégano"]
  },
  {
    id: 246,
    name: 'Batido de Fresa y Plátano',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 20,
      carbs: 38,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Fresas", "Plátano", "1 scoop proteína fresa", "Leche desnatada", "Hielo"],
    instructions: ["Lavar fresas", "Añadir todo a la batidora", "Batir hasta suavizar", "Ajustar consistencia", "Servir frío"]
  },
  {
    id: 247,
    name: 'Bizcocho de Zanahoria en Taza',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop&q=80',
    calories: 250,
    macros: {
      protein: 14,
      carbs: 36,
      fat: 8
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Zanahoria rallada", "1 huevo", "Harina integral", "Canela", "Nueces", "Stevia", "Levadura"],
    instructions: ["Mezclar todos los ingredientes", "Verter en taza grande", "Microondas 2 minutos", "Dejar reposar", "Desmoldar"]
  },
  {
    id: 248,
    name: 'Edamame con Sal Marina',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1584278502003-17ac3c2fb7e3?w=600&h=400&fit=crop&q=80',
    calories: 180,
    macros: {
      protein: 18,
      carbs: 16,
      fat: 6
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Edamame congelado", "Sal marina", "Limón"],
    instructions: ["Cocinar edamame 5 minutos", "Escurrir", "Añadir sal marina", "Rociar con limón", "Servir caliente"]
  },
  {
    id: 249,
    name: 'Gelatina de Frutas Proteica',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=600&h=400&fit=crop&q=80',
    calories: 150,
    macros: {
      protein: 18,
      carbs: 20,
      fat: 1
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Gelatina sin azúcar", "1 scoop proteína", "Frutos rojos", "Agua"],
    instructions: ["Preparar gelatina", "Mezclar con proteína", "Añadir frutas", "Refrigerar 4 horas", "Servir frío"]
  },
  {
    id: 250,
    name: 'Tostada de Aguacate Mini',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop&q=80',
    calories: 220,
    macros: {
      protein: 8,
      carbs: 24,
      fat: 12
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Pan integral mini", "Aguacate", "Tomate cherry", "Limón", "Pimienta"],
    instructions: ["Tostar pan", "Machacar aguacate", "Untar en el pan", "Añadir tomates", "Salpimentar"]
  },
  {
    id: 251,
    name: 'Mini Tortilla de Claras',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&h=400&fit=crop&q=80',
    calories: 180,
    macros: {
      protein: 20,
      carbs: 6,
      fat: 8
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["4 claras de huevo", "Espinacas", "Champiñones", "Queso light"],
    instructions: ["Batir claras", "Añadir verduras picadas", "Cocinar en sartén pequeña", "Agregar queso", "Doblar y servir"]
  },
  {
    id: 252,
    name: 'Batido de Chocolate y Mantequilla',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 24,
      carbs: 32,
      fat: 10
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 scoop proteína chocolate", "Mantequilla de cacahuete", "Plátano", "Leche de almendras", "Hielo"],
    instructions: ["Añadir todo a la batidora", "Batir hasta cremoso", "Ajustar espesor", "Servir frío", "Decorar con cacao"]
  },
  {
    id: 253,
    name: 'Manzana Asada con Canela',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&h=400&fit=crop&q=80',
    calories: 190,
    macros: {
      protein: 4,
      carbs: 42,
      fat: 2
    },
    prepTime: 25,
    difficulty: 'Fácil',
    ingredients: ["1 manzana", "Canela", "Miel", "Nueces", "Yogur griego"],
    instructions: ["Cortar manzana por la mitad", "Espolvorear canela", "Hornear 180°C 20 minutos", "Rociar con miel", "Servir con yogur"]
  },
  {
    id: 254,
    name: 'Galletas de Proteína',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1600506175684-fc1e8e97b255?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 18,
      carbs: 28,
      fat: 8
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["1 scoop proteína", "Harina de avena", "1 huevo", "Mantequilla de almendra", "Stevia", "Chips chocolate"],
    instructions: ["Mezclar todos los ingredientes", "Formar galletas", "Colocar en bandeja", "Hornear 180°C 12 minutos", "Enfriar antes de comer"]
  },
  {
    id: 255,
    name: 'Cuenco de Requesón Dulce',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1505576633371-522bf443e48a?w=600&h=400&fit=crop&q=80',
    calories: 230,
    macros: {
      protein: 22,
      carbs: 24,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Requesón", "Miel", "Almendras", "Arándanos", "Canela"],
    instructions: ["Poner requesón en bowl", "Añadir frutas", "Rociar con miel", "Espolvorear almendras", "Decorar con canela"]
  },
  {
    id: 256,
    name: 'Batido Tropical',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 18,
      carbs: 40,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Piña", "Mango", "Coco", "1 scoop proteína vainilla", "Leche de coco light", "Hielo"],
    instructions: ["Cortar frutas", "Añadir todo a la batidora", "Batir hasta suavizar", "Servir en vaso alto", "Decorar con coco"]
  },
  {
    id: 257,
    name: 'Yogur Helado Proteico',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop&q=80',
    calories: 200,
    macros: {
      protein: 20,
      carbs: 28,
      fat: 3
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Yogur griego", "1/2 scoop proteína", "Frutos rojos", "Stevia"],
    instructions: ["Mezclar yogur con proteína", "Añadir frutos", "Congelar 3 horas", "Remover cada hora", "Servir como helado"]
  },
  {
    id: 258,
    name: 'Tostada de Plátano y Miel',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 10,
      carbs: 48,
      fat: 7
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Pan integral", "Plátano", "Miel", "Canela", "Nueces"],
    instructions: ["Tostar pan", "Colocar plátano en rodajas", "Rociar con miel", "Espolvorear canela", "Añadir nueces picadas"]
  },
  {
    id: 259,
    name: 'Mini Pancakes Proteicos',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 22,
      carbs: 32,
      fat: 7
    },
    prepTime: 15,
    difficulty: 'Media',
    ingredients: ["1 scoop proteína", "1 huevo", "Harina de avena", "Levadura", "Leche", "Frutos rojos"],
    instructions: ["Mezclar todos los ingredientes", "Dejar reposar 5 minutos", "Cocinar mini pancakes", "Servir con frutas", "Rociar con sirope"]
  },
  {
    id: 260,
    name: 'Bolas Energéticas de Dátil',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=600&h=400&fit=crop&q=80',
    calories: 250,
    macros: {
      protein: 8,
      carbs: 38,
      fat: 9
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Dátiles", "Almendras", "Cacao", "Coco rallado", "Mantequilla de almendra"],
    instructions: ["Triturar dátiles y almendras", "Añadir cacao", "Formar bolas", "Rebozar en coco", "Refrigerar antes de servir"]
  },


  // ========== CENAS (60 recetas) ==========
  {
    id: 261,
    name: 'Ensalada César con Pollo',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 36,
      carbs: 18,
      fat: 14
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: ["Pechuga de pollo", "Lechuga romana", "Parmesano", "Picatostes integrales", "Yogur griego", "Anchoas", "Limón"],
    instructions: ["Cocinar y cortar pollo", "Lavar y trocear lechuga", "Preparar salsa césar light", "Mezclar todo", "Servir con parmesano"]
  },
  {
    id: 262,
    name: 'Sopa de Verduras Casera',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop&q=80',
    calories: 180,
    macros: {
      protein: 8,
      carbs: 28,
      fat: 4
    },
    prepTime: 25,
    difficulty: 'Fácil',
    ingredients: ["Zanahoria", "Calabacín", "Puerro", "Patata", "Cebolla", "Ajo", "Caldo vegetal"],
    instructions: ["Picar todas las verduras", "Sofreír en olla", "Añadir caldo", "Cocinar 20 minutos", "Triturar parcialmente"]
  },
  {
    id: 263,
    name: 'Pescado Blanco al Vapor',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 34,
      carbs: 12,
      fat: 10
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: ["Pescado blanco", "Brócoli", "Zanahoria", "Limón", "Eneldo", "Aceite de oliva"],
    instructions: ["Preparar vaporera", "Cocinar pescado 12 minutos", "Añadir verduras", "Aliñar con limón", "Servir caliente"]
  },
  {
    id: 264,
    name: 'Tortilla de Patatas Light',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 20,
      carbs: 32,
      fat: 12
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["3 huevos", "2 patatas", "Cebolla", "Aceite de oliva", "Sal"],
    instructions: ["Cortar patatas finamente", "Cocinar con cebolla", "Batir huevos", "Mezclar y cuajar", "Dar la vuelta"]
  },
  {
    id: 265,
    name: 'Crema de Calabaza',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&h=400&fit=crop&q=80',
    calories: 220,
    macros: {
      protein: 8,
      carbs: 34,
      fat: 6
    },
    prepTime: 30,
    difficulty: 'Fácil',
    ingredients: ["Calabaza", "Cebolla", "Ajo", "Caldo vegetal", "Nata light", "Pipas de calabaza"],
    instructions: ["Asar calabaza", "Sofreír cebolla y ajo", "Añadir caldo", "Triturar todo", "Servir con pipas"]
  },
  {
    id: 266,
    name: 'Revuelto de Ajetes y Gambas',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 28,
      carbs: 14,
      fat: 14
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["Gambas peladas", "Ajetes", "3 huevos", "Ajo", "Aceite de oliva", "Perejil"],
    instructions: ["Saltear gambas con ajo", "Añadir ajetes", "Batir huevos", "Revolver todo", "Servir inmediatamente"]
  },
  {
    id: 267,
    name: 'Brochetas de Pollo a la Parrilla',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 38,
      carbs: 16,
      fat: 10
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["Pechuga de pollo", "Pimiento", "Cebolla", "Calabacín", "Limón", "Especias", "Aceite de oliva"],
    instructions: ["Cortar pollo en cubos", "Marinar con especias", "Montar brochetas", "Asar a la parrilla", "Servir con limón"]
  },
  {
    id: 268,
    name: 'Gazpacho Andaluz',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop&q=80',
    calories: 150,
    macros: {
      protein: 4,
      carbs: 22,
      fat: 6
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Tomate", "Pepino", "Pimiento", "Ajo", "Cebolla", "Pan", "Vinagre", "Aceite de oliva"],
    instructions: ["Trocear verduras", "Remojar pan", "Triturar todo", "Añadir vinagre y aceite", "Refrigerar antes de servir"]
  },
  {
    id: 269,
    name: 'Hamburguesa de Lentejas',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 18,
      carbs: 46,
      fat: 9
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["Lentejas cocidas", "Cebolla", "Ajo", "Zanahoria", "Pan rallado", "Especias", "Pan integral"],
    instructions: ["Triturar lentejas parcialmente", "Mezclar con verduras salteadas", "Formar hamburguesas", "Cocinar a la plancha", "Servir en pan"]
  },
  {
    id: 270,
    name: 'Calabacín Relleno de Quinoa',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 14,
      carbs: 42,
      fat: 9
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: ["Calabacines", "Quinoa", "Tomate", "Cebolla", "Queso light", "Albahaca"],
    instructions: ["Vaciar calabacines", "Cocinar quinoa", "Mezclar con verduras", "Rellenar", "Hornear 180°C 25 minutos"]
  },
  {
    id: 271,
    name: 'Salmón en Papillote',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop&q=80',
    calories: 350,
    macros: {
      protein: 36,
      carbs: 14,
      fat: 18
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["Salmón", "Verduras variadas", "Limón", "Eneldo", "Vino blanco", "Aceite de oliva"],
    instructions: ["Colocar salmón en papel", "Añadir verduras y especias", "Rociar con vino", "Cerrar papillote", "Hornear 180°C 18 minutos"]
  },
  {
    id: 272,
    name: 'Ensalada de Garbanzos Mediterránea',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&q=80',
    calories: 300,
    macros: {
      protein: 16,
      carbs: 42,
      fat: 8
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Garbanzos", "Tomate", "Pepino", "Aceitunas", "Cebolla morada", "Queso feta", "Limón"],
    instructions: ["Escurrir garbanzos", "Picar verduras", "Mezclar todo", "Aliñar con limón", "Añadir queso feta"]
  },
  {
    id: 273,
    name: 'Crema de Espárragos',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop&q=80',
    calories: 200,
    macros: {
      protein: 12,
      carbs: 20,
      fat: 8
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["Espárragos verdes", "Patata", "Cebolla", "Caldo vegetal", "Nata light", "Queso parmesano"],
    instructions: ["Cortar espárragos", "Cocinar con patata y cebolla", "Añadir caldo", "Triturar", "Servir con queso"]
  },
  {
    id: 274,
    name: 'Pollo al Curry con Verduras',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop&q=80',
    calories: 360,
    macros: {
      protein: 34,
      carbs: 32,
      fat: 12
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["Pechuga de pollo", "Curry", "Leche de coco light", "Pimiento", "Cebolla", "Brócoli", "Arroz integral"],
    instructions: ["Cocinar pollo en trozos", "Añadir curry y verduras", "Incorporar leche de coco", "Cocinar 15 minutos", "Servir con arroz"]
  },
  {
    id: 275,
    name: 'Berenjena a la Parmesana Light',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 18,
      carbs: 28,
      fat: 16
    },
    prepTime: 40,
    difficulty: 'Media',
    ingredients: ["Berenjenas", "Tomate natural", "Mozzarella light", "Parmesano", "Albahaca", "Ajo"],
    instructions: ["Cortar berenjenas en rodajas", "Asar ligeramente", "Alternar capas con salsa", "Cubrir con queso", "Gratinar 15 minutos"]
  },
  {
    id: 276,
    name: 'Lubina al Horno con Verduras',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 36,
      carbs: 18,
      fat: 14
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["Lubina", "Tomate", "Calabacín", "Cebolla", "Pimiento", "Limón", "Tomillo"],
    instructions: ["Limpiar pescado", "Preparar cama de verduras", "Colocar lubina encima", "Rociar con limón", "Hornear 180°C 25 minutos"]
  },
  {
    id: 277,
    name: 'Wok de Verduras con Tofu',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 20,
      carbs: 32,
      fat: 10
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: ["Tofu firme", "Brócoli", "Zanahoria", "Pimiento", "Cebolla", "Salsa de soja", "Jengibre"],
    instructions: ["Cortar tofu en cubos", "Saltear a fuego alto", "Añadir verduras", "Agregar salsa", "Servir caliente"]
  },
  {
    id: 278,
    name: 'Merluza en Salsa Verde',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1580959375944-0815bcaa6c8f?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 32,
      carbs: 16,
      fat: 12
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["Merluza", "Guisantes", "Espárragos", "Ajo", "Perejil", "Vino blanco", "Harina"],
    instructions: ["Dorar merluza", "Hacer refrito con ajo", "Añadir harina", "Incorporar caldo y vino", "Cocinar con verduras"]
  },
  {
    id: 279,
    name: 'Ensalada Templada de Pollo',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&h=400&fit=crop&q=80',
    calories: 330,
    macros: {
      protein: 34,
      carbs: 24,
      fat: 12
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["Pechuga de pollo", "Mezcla de lechugas", "Tomate cherry", "Aguacate", "Nueces", "Vinagreta"],
    instructions: ["Cocinar pollo a la plancha", "Preparar ensalada", "Cortar pollo caliente", "Añadir a la ensalada", "Aliñar y servir"]
  },
  {
    id: 280,
    name: 'Crema de Puerros',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&h=400&fit=crop&q=80',
    calories: 210,
    macros: {
      protein: 8,
      carbs: 28,
      fat: 6
    },
    prepTime: 30,
    difficulty: 'Fácil',
    ingredients: ["Puerros", "Patata", "Cebolla", "Caldo vegetal", "Nata light", "Cebollino"],
    instructions: ["Limpiar y cortar puerros", "Cocinar con patata", "Añadir caldo", "Triturar", "Servir con cebollino"]
  },
  {
    id: 281,
    name: 'Pechuga Rellena de Espinacas',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop&q=80',
    calories: 360,
    macros: {
      protein: 40,
      carbs: 16,
      fat: 16
    },
    prepTime: 35,
    difficulty: 'Difícil',
    ingredients: ["Pechuga de pollo", "Espinacas", "Queso crema light", "Tomate seco", "Ajo", "Orégano"],
    instructions: ["Abrir pechuga", "Rellenar con espinacas y queso", "Enrollar y atar", "Sellar", "Hornear 180°C 25 minutos"]
  },
  {
    id: 282,
    name: 'Salteado de Gambas y Verduras',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 28,
      carbs: 18,
      fat: 12
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Gambas", "Calabacín", "Pimiento", "Ajo", "Limón", "Perejil", "Aceite de oliva"],
    instructions: ["Saltear ajo", "Añadir verduras", "Incorporar gambas", "Cocinar 5 minutos", "Servir con limón"]
  },
  {
    id: 283,
    name: 'Bowl de Quinoa y Aguacate',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 14,
      carbs: 46,
      fat: 12
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: ["Quinoa", "Aguacate", "Tomate cherry", "Pepino", "Edamame", "Limón", "Semillas de sésamo"],
    instructions: ["Cocinar quinoa", "Preparar verduras", "Montar el bowl", "Aliñar con limón", "Decorar con sésamo"]
  },
  {
    id: 284,
    name: 'Dorada al Horno',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop&q=80',
    calories: 330,
    macros: {
      protein: 36,
      carbs: 12,
      fat: 16
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["Dorada", "Limón", "Ajo", "Perejil", "Patatas", "Aceite de oliva", "Tomillo"],
    instructions: ["Limpiar pescado", "Rellenar con hierbas", "Colocar sobre patatas", "Rociar con aceite", "Hornear 180°C 25 minutos"]
  },
  {
    id: 285,
    name: 'Crema de Brócoli',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&h=400&fit=crop&q=80',
    calories: 190,
    macros: {
      protein: 10,
      carbs: 24,
      fat: 6
    },
    prepTime: 25,
    difficulty: 'Fácil',
    ingredients: ["Brócoli", "Patata", "Cebolla", "Caldo vegetal", "Queso light", "Nuez moscada"],
    instructions: ["Cocinar brócoli y patata", "Sofreír cebolla", "Añadir caldo", "Triturar con queso", "Servir caliente"]
  },
  {
    id: 286,
    name: 'Rape con Salsa de Almendras',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop&q=80',
    calories: 350,
    macros: {
      protein: 34,
      carbs: 18,
      fat: 16
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["Rape", "Almendras", "Ajo", "Perejil", "Vino blanco", "Caldo de pescado"],
    instructions: ["Dorar rape", "Tostar almendras", "Hacer picada", "Preparar salsa", "Cocinar rape en salsa"]
  },
  {
    id: 287,
    name: 'Ensalada de Atún y Aguacate',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 28,
      carbs: 16,
      fat: 18
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Atún al natural", "Aguacate", "Lechuga", "Tomate", "Huevo duro", "Aceitunas", "Limón"],
    instructions: ["Escurrir atún", "Preparar verduras", "Cocinar huevo", "Montar ensalada", "Aliñar con limón"]
  },
  {
    id: 288,
    name: 'Pollo Marinado con Limón',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop&q=80',
    calories: 330,
    macros: {
      protein: 38,
      carbs: 14,
      fat: 14
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: ["Pechuga de pollo", "Limón", "Ajo", "Romero", "Tomillo", "Aceite de oliva"],
    instructions: ["Marinar pollo 2 horas", "Cocinar a la plancha", "Rociar con marinada", "Cocinar hasta dorar", "Servir caliente"]
  },
  {
    id: 289,
    name: 'Berenjenas Rellenas de Carne',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&h=400&fit=crop&q=80',
    calories: 350,
    macros: {
      protein: 26,
      carbs: 24,
      fat: 16
    },
    prepTime: 40,
    difficulty: 'Media',
    ingredients: ["Berenjenas", "Carne picada", "Cebolla", "Tomate", "Queso", "Orégano"],
    instructions: ["Vaciar berenjenas", "Sofreír carne", "Rellenar berenjenas", "Cubrir con queso", "Hornear 180°C 30 minutos"]
  },
  {
    id: 290,
    name: 'Sopa de Pescado',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 24,
      carbs: 22,
      fat: 10
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: ["Pescado blanco", "Gambas", "Almejas", "Cebolla", "Tomate", "Ajo", "Azafrán"],
    instructions: ["Hacer sofrito", "Añadir pescado y caldo", "Cocinar 20 minutos", "Incorporar mariscos", "Servir caliente"]
  },
  {
    id: 291,
    name: 'Pimientos Rellenos de Arroz',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 14,
      carbs: 48,
      fat: 8
    },
    prepTime: 40,
    difficulty: 'Media',
    ingredients: ["Pimientos", "Arroz integral", "Tomate", "Cebolla", "Ajo", "Queso rallado"],
    instructions: ["Cocinar arroz", "Vaciar pimientos", "Preparar relleno", "Rellenar pimientos", "Hornear 180°C 35 minutos"]
  },
  {
    id: 292,
    name: 'Bacalao con Tomate',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop&q=80',
    calories: 330,
    macros: {
      protein: 32,
      carbs: 18,
      fat: 14
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["Bacalao desalado", "Tomate natural", "Cebolla", "Pimiento", "Ajo", "Aceite de oliva"],
    instructions: ["Desmigar bacalao", "Hacer sofrito", "Añadir tomate", "Incorporar bacalao", "Cocinar 15 minutos"]
  },
  {
    id: 293,
    name: 'Ensalada de Pulpo',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 26,
      carbs: 20,
      fat: 12
    },
    prepTime: 50,
    difficulty: 'Difícil',
    ingredients: ["Pulpo", "Patatas", "Cebolla", "Pimiento", "Aceite de oliva", "Pimentón", "Vinagre"],
    instructions: ["Cocinar pulpo", "Hervir patatas", "Cortar todo en trozos", "Mezclar", "Aliñar con aceite y pimentón"]
  },
  {
    id: 294,
    name: 'Tortilla de Calabacín',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 18,
      carbs: 16,
      fat: 16
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: ["3 huevos", "Calabacín", "Cebolla", "Queso rallado", "Aceite de oliva"],
    instructions: ["Rallar calabacín", "Saltear con cebolla", "Batir huevos", "Mezclar y cuajar", "Dar la vuelta"]
  },
  {
    id: 295,
    name: 'Crema de Zanahoria',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&h=400&fit=crop&q=80',
    calories: 200,
    macros: {
      protein: 6,
      carbs: 32,
      fat: 5
    },
    prepTime: 30,
    difficulty: 'Fácil',
    ingredients: ["Zanahorias", "Patata", "Cebolla", "Caldo vegetal", "Jengibre", "Nata light"],
    instructions: ["Pelar y cortar verduras", "Cocinar en caldo", "Añadir jengibre", "Triturar", "Servir con nata"]
  },
  {
    id: 296,
    name: 'Sepia con Guisantes',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&h=400&fit=crop&q=80',
    calories: 300,
    macros: {
      protein: 28,
      carbs: 20,
      fat: 12
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["Sepia", "Guisantes", "Cebolla", "Tomate", "Vino blanco", "Ajo"],
    instructions: ["Limpiar y cortar sepia", "Sofreír cebolla", "Añadir sepia y tomate", "Incorporar guisantes", "Cocinar 20 minutos"]
  },
  {
    id: 297,
    name: 'Ensalada Griega Light',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 12,
      carbs: 18,
      fat: 16
    },
    prepTime: 10,
    difficulty: 'Fácil',
    ingredients: ["Tomate", "Pepino", "Cebolla", "Aceitunas", "Queso feta light", "Orégano", "Aceite de oliva"],
    instructions: ["Cortar verduras", "Mezclar en ensaladera", "Añadir queso feta", "Aliñar con aceite", "Espolvorear orégano"]
  },
  {
    id: 298,
    name: 'Muslitos de Pollo al Limón',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 34,
      carbs: 16,
      fat: 16
    },
    prepTime: 35,
    difficulty: 'Fácil',
    ingredients: ["Muslitos de pollo", "Limón", "Ajo", "Romero", "Aceite de oliva", "Pimienta"],
    instructions: ["Marinar muslitos", "Colocar en bandeja", "Hornear 190°C 30 minutos", "Dar la vuelta", "Servir caliente"]
  },
  {
    id: 299,
    name: 'Salteado de Ternera con Setas',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop&q=80',
    calories: 350,
    macros: {
      protein: 32,
      carbs: 18,
      fat: 18
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["Ternera", "Setas variadas", "Cebolla", "Ajo", "Vino tinto", "Perejil"],
    instructions: ["Cortar ternera en tiras", "Saltear a fuego alto", "Añadir setas", "Incorporar vino", "Cocinar hasta reducir"]
  },
  {
    id: 300,
    name: 'Crema de Coliflor',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&h=400&fit=crop&q=80',
    calories: 180,
    macros: {
      protein: 8,
      carbs: 22,
      fat: 6
    },
    prepTime: 25,
    difficulty: 'Fácil',
    ingredients: ["Coliflor", "Patata", "Cebolla", "Caldo vegetal", "Nata light", "Nuez moscada"],
    instructions: ["Cocinar coliflor y patata", "Sofreír cebolla", "Añadir caldo", "Triturar", "Servir con nuez moscada"]
  },
  {
    id: 301,
    name: 'Pavo a la Plancha con Espárragos',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&h=400&fit=crop&q=80',
    calories: 310,
    macros: {
      protein: 38,
      carbs: 14,
      fat: 12
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: ["Pechuga de pavo", "Espárragos verdes", "Limón", "Ajo", "Aceite de oliva", "Pimienta"],
    instructions: ["Marinar pavo", "Cocinar a la plancha", "Saltear espárragos", "Servir juntos", "Rociar con limón"]
  },
  {
    id: 302,
    name: 'Ensalada de Pasta Integral',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 14,
      carbs: 48,
      fat: 9
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: ["Pasta integral", "Tomate cherry", "Mozzarella", "Rúcula", "Aceitunas", "Aceite de oliva"],
    instructions: ["Cocinar pasta", "Cortar ingredientes", "Mezclar todo", "Aliñar", "Servir fría"]
  },
  {
    id: 303,
    name: 'Bonito Encebollado',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1580959375944-0815bcaa6c8f?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 32,
      carbs: 16,
      fat: 14
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["Bonito", "Cebolla", "Pimiento verde", "Tomate", "Ajo", "Aceite de oliva"],
    instructions: ["Dorar bonito", "Pochar cebolla", "Añadir pimiento y tomate", "Incorporar bonito", "Cocinar 15 minutos"]
  },
  {
    id: 304,
    name: 'Calabaza Asada con Especias',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 8,
      carbs: 42,
      fat: 6
    },
    prepTime: 35,
    difficulty: 'Fácil',
    ingredients: ["Calabaza", "Comino", "Pimentón", "Ajo", "Aceite de oliva", "Yogur griego"],
    instructions: ["Cortar calabaza en gajos", "Aliñar con especias", "Hornear 200°C 30 minutos", "Servir con yogur", "Decorar con hierbas"]
  },
  {
    id: 305,
    name: 'Pollo con Champiñones',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop&q=80',
    calories: 340,
    macros: {
      protein: 36,
      carbs: 18,
      fat: 14
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["Pechuga de pollo", "Champiñones", "Cebolla", "Nata light", "Vino blanco", "Perejil"],
    instructions: ["Dorar pollo", "Saltear champiñones", "Añadir nata y vino", "Cocinar 15 minutos", "Servir con perejil"]
  },
  {
    id: 306,
    name: 'Ensalada de Remolacha',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 12,
      carbs: 32,
      fat: 10
    },
    prepTime: 15,
    difficulty: 'Media',
    ingredients: ["Remolacha", "Queso de cabra", "Nueces", "Rúcula", "Naranja", "Vinagre balsámico"],
    instructions: ["Asar remolacha", "Pelar y cortar", "Preparar ensalada", "Añadir queso y nueces", "Aliñar"]
  },
  {
    id: 307,
    name: 'Sopa de Tomate',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop&q=80',
    calories: 170,
    macros: {
      protein: 6,
      carbs: 26,
      fat: 5
    },
    prepTime: 25,
    difficulty: 'Fácil',
    ingredients: ["Tomate maduro", "Cebolla", "Ajo", "Albahaca", "Caldo vegetal", "Nata light"],
    instructions: ["Asar tomates", "Sofreír cebolla", "Añadir caldo", "Triturar", "Servir con albahaca"]
  },
  {
    id: 308,
    name: 'Trucha con Almendras',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop&q=80',
    calories: 350,
    macros: {
      protein: 34,
      carbs: 16,
      fat: 18
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: ["Trucha", "Almendras laminadas", "Limón", "Mantequilla light", "Perejil", "Ajo"],
    instructions: ["Cocinar trucha a la plancha", "Tostar almendras", "Preparar salsa", "Rociar sobre trucha", "Servir con limón"]
  },
  {
    id: 309,
    name: 'Hamburguesa de Pavo',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop&q=80',
    calories: 360,
    macros: {
      protein: 34,
      carbs: 32,
      fat: 12
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: ["Carne picada de pavo", "Pan integral", "Lechuga", "Tomate", "Cebolla", "Pepinillos"],
    instructions: ["Formar hamburguesa", "Cocinar a la plancha", "Tostar pan", "Montar con verduras", "Servir caliente"]
  },
  {
    id: 310,
    name: 'Crema de Champiñones',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&h=400&fit=crop&q=80',
    calories: 210,
    macros: {
      protein: 10,
      carbs: 22,
      fat: 8
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: ["Champiñones", "Patata", "Cebolla", "Caldo vegetal", "Nata light", "Tomillo"],
    instructions: ["Limpiar champiñones", "Sofreír con cebolla", "Añadir patata y caldo", "Triturar", "Servir con tomillo"]
  },
  {
    id: 311,
    name: 'Boquerones al Limón',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1580959375944-0815bcaa6c8f?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 24,
      carbs: 8,
      fat: 16
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Boquerones frescos", "Limón", "Ajo", "Perejil", "Aceite de oliva", "Sal"],
    instructions: ["Limpiar boquerones", "Marinar en limón", "Añadir ajo y perejil", "Refrigerar 2 horas", "Servir frío"]
  },
  {
    id: 312,
    name: 'Pollo Tandoori Light',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop&q=80',
    calories: 330,
    macros: {
      protein: 36,
      carbs: 22,
      fat: 10
    },
    prepTime: 40,
    difficulty: 'Media',
    ingredients: ["Pechuga de pollo", "Yogur griego", "Especias tandoori", "Limón", "Ajo", "Jengibre"],
    instructions: ["Marinar pollo en yogur", "Añadir especias", "Refrigerar 4 horas", "Hornear 200°C 25 minutos", "Servir con limón"]
  },
  {
    id: 313,
    name: 'Ensalada de Endivias',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 10,
      carbs: 20,
      fat: 14
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Endivias", "Nueces", "Queso roquefort light", "Manzana", "Vinagre de Módena", "Miel"],
    instructions: ["Limpiar endivias", "Cortar manzana", "Tostar nueces", "Montar ensalada", "Aliñar con vinagre y miel"]
  },
  {
    id: 314,
    name: 'Calamares a la Plancha',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 26,
      carbs: 12,
      fat: 14
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Calamares", "Ajo", "Perejil", "Limón", "Aceite de oliva", "Sal"],
    instructions: ["Limpiar calamares", "Calentar plancha muy caliente", "Cocinar 2 minutos por lado", "Aliñar con ajo", "Servir con limón"]
  },
  {
    id: 315,
    name: 'Crema de Calabacín',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&h=400&fit=crop&q=80',
    calories: 190,
    macros: {
      protein: 8,
      carbs: 24,
      fat: 6
    },
    prepTime: 25,
    difficulty: 'Fácil',
    ingredients: ["Calabacines", "Patata", "Cebolla", "Quesito light", "Caldo vegetal", "Albahaca"],
    instructions: ["Cortar verduras", "Cocinar en caldo", "Triturar con quesito", "Ajustar consistencia", "Servir con albahaca"]
  },
  {
    id: 316,
    name: 'Atún a la Plancha con Sésamo',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1580959375944-0815bcaa6c8f?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 36,
      carbs: 10,
      fat: 16
    },
    prepTime: 15,
    difficulty: 'Media',
    ingredients: ["Atún fresco", "Sésamo", "Salsa de soja", "Jengibre", "Limón", "Aceite de sésamo"],
    instructions: ["Marinar atún brevemente", "Rebozar en sésamo", "Sellar a fuego muy alto", "Dejar crudo por dentro", "Servir en láminas"]
  },
  {
    id: 317,
    name: 'Pisto con Huevo Pochado',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 16,
      carbs: 26,
      fat: 14
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: ["Calabacín", "Berenjena", "Pimiento", "Tomate", "Cebolla", "Huevo", "Aceite de oliva"],
    instructions: ["Picar verduras", "Sofreír por separado", "Juntar y cocinar", "Preparar huevo pochado", "Servir juntos"]
  },
  {
    id: 318,
    name: 'Lubina a la Sal',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop&q=80',
    calories: 320,
    macros: {
      protein: 36,
      carbs: 8,
      fat: 14
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: ["Lubina", "Sal gorda", "Limón", "Aceite de oliva", "Hierbas"],
    instructions: ["Limpiar pescado", "Cubrir con sal", "Hornear 200°C 25 minutos", "Romper costra", "Servir con limón"]
  },
  {
    id: 319,
    name: 'Ensalada de Lentejas',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&q=80',
    calories: 300,
    macros: {
      protein: 18,
      carbs: 42,
      fat: 7
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Lentejas cocidas", "Tomate", "Pepino", "Cebolla morada", "Pimiento", "Vinagreta"],
    instructions: ["Escurrir lentejas", "Picar verduras", "Mezclar todo", "Aliñar", "Dejar reposar"]
  },
  {
    id: 320,
    name: 'Revuelto de Espárragos Trigueros',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 18,
      carbs: 14,
      fat: 16
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: ["Espárragos trigueros", "3 huevos", "Ajo", "Gambas", "Aceite de oliva"],
    instructions: ["Saltear espárragos", "Añadir gambas", "Batir huevos", "Revolver todo", "Servir inmediatamente"]
  },

  // ========== BATIDOS (60 recetas) ==========
  {
    id: 321,
    name: 'Batido Verde Detox',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop&q=80',
    calories: 220,
    macros: {
      protein: 18,
      carbs: 28,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Espinacas", "Pepino", "Manzana verde", "1 scoop proteína", "Agua de coco", "Limón"],
    instructions: ["Lavar verduras", "Pelar manzana", "Añadir todo a la batidora", "Batir hasta suavizar", "Servir frío"]
  },
  {
    id: 322,
    name: 'Batido de Fresa y Plátano',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 22,
      carbs: 38,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Fresas", "Plátano", "1 scoop proteína fresa", "Leche de almendras", "Hielo"],
    instructions: ["Lavar fresas", "Pelar plátano", "Batir todo", "Ajustar consistencia", "Servir inmediatamente"]
  },
  {
    id: 323,
    name: 'Batido de Chocolate Proteico',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 26,
      carbs: 32,
      fat: 7
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 scoop proteína chocolate", "Plátano", "Cacao puro", "Leche desnatada", "Hielo", "Canela"],
    instructions: ["Añadir todos los ingredientes", "Batir hasta cremoso", "Probar dulzor", "Servir frío", "Decorar con cacao"]
  },
  {
    id: 324,
    name: 'Batido Tropical',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 20,
      carbs: 42,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Piña", "Mango", "Coco", "1 scoop proteína vainilla", "Leche de coco light", "Hielo"],
    instructions: ["Pelar y cortar frutas", "Añadir todo a la batidora", "Batir bien", "Servir en vaso alto", "Decorar con coco"]
  },
  {
    id: 325,
    name: 'Batido de Café Helado',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 28,
      carbs: 20,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Café espresso frío", "1 scoop proteína chocolate", "Leche de almendras", "Hielo", "Canela"],
    instructions: ["Preparar café y enfriar", "Añadir proteína", "Batir con hielo", "Servir en vaso alto", "Espolvorear canela"]
  },
  {
    id: 326,
    name: 'Batido de Frutos Rojos',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 250,
    macros: {
      protein: 20,
      carbs: 34,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Fresas", "Frambuesas", "Arándanos", "1 scoop proteína vainilla", "Yogur griego", "Hielo"],
    instructions: ["Lavar todas las frutas", "Añadir a la batidora", "Batir hasta suavizar", "Ajustar espesor", "Servir frío"]
  },
  {
    id: 327,
    name: 'Batido de Mantequilla de Cacahuete',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 300,
    macros: {
      protein: 26,
      carbs: 32,
      fat: 11
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Mantequilla de cacahuete", "Plátano", "1 scoop proteína chocolate", "Leche de almendras", "Hielo"],
    instructions: ["Añadir todos los ingredientes", "Batir hasta cremoso", "Ajustar consistencia", "Servir frío", "Decorar con cacahuetes"]
  },
  {
    id: 328,
    name: 'Batido de Vainilla y Almendras',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 24,
      carbs: 28,
      fat: 8
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 scoop proteína vainilla", "Leche de almendras", "Almendras", "Dátiles", "Hielo", "Canela"],
    instructions: ["Remojar dátiles", "Añadir todo a la batidora", "Batir bien", "Colar si prefieres", "Servir frío"]
  },
  {
    id: 329,
    name: 'Batido Verde de Aguacate',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 18,
      carbs: 32,
      fat: 12
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Aguacate", "Espinacas", "Plátano", "Leche de almendras", "1 scoop proteína vainilla", "Miel"],
    instructions: ["Pelar aguacate", "Lavar espinacas", "Batir todo", "Ajustar dulzor", "Servir inmediatamente"]
  },
  {
    id: 330,
    name: 'Batido de Melocotón',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 20,
      carbs: 36,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Melocotones", "Yogur griego", "1 scoop proteína vainilla", "Miel", "Hielo"],
    instructions: ["Pelar melocotones", "Añadir todo", "Batir hasta suavizar", "Probar dulzor", "Servir frío"]
  },
  {
    id: 331,
    name: 'Batido de Arándanos',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 250,
    macros: {
      protein: 22,
      carbs: 34,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Arándanos", "Plátano", "1 scoop proteína vainilla", "Leche desnatada", "Hielo", "Limón"],
    instructions: ["Lavar arándanos", "Añadir todo a la batidora", "Batir bien", "Ajustar consistencia", "Servir inmediatamente"]
  },
  {
    id: 332,
    name: 'Batido de Chocolate y Avellanas',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 24,
      carbs: 34,
      fat: 9
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 scoop proteína chocolate", "Avellanas", "Plátano", "Cacao", "Leche de avellanas", "Hielo"],
    instructions: ["Tostar avellanas", "Añadir todo", "Batir hasta cremoso", "Ajustar espesor", "Servir con avellanas picadas"]
  },
  {
    id: 333,
    name: 'Batido de Piña Colada Fit',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 20,
      carbs: 38,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Piña", "Leche de coco light", "1 scoop proteína vainilla", "Coco rallado", "Hielo"],
    instructions: ["Pelar piña", "Añadir todos los ingredientes", "Batir bien", "Servir en vaso alto", "Decorar con coco"]
  },
  {
    id: 334,
    name: 'Batido de Mango Lassi',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 22,
      carbs: 40,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Mango", "Yogur griego", "1 scoop proteína vainilla", "Cardamomo", "Miel", "Hielo"],
    instructions: ["Pelar mango", "Añadir todo", "Batir hasta suavizar", "Probar especias", "Servir frío"]
  },
  {
    id: 335,
    name: 'Batido de Té Verde Matcha',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 230,
    macros: {
      protein: 20,
      carbs: 28,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Té matcha", "1 scoop proteína vainilla", "Leche de almendras", "Plátano", "Miel", "Hielo"],
    instructions: ["Disolver matcha", "Añadir resto de ingredientes", "Batir bien", "Ajustar dulzor", "Servir inmediatamente"]
  },
  {
    id: 336,
    name: 'Batido de Frambuesa y Coco',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 250,
    macros: {
      protein: 20,
      carbs: 34,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Frambuesas", "Leche de coco", "1 scoop proteína vainilla", "Coco rallado", "Hielo"],
    instructions: ["Lavar frambuesas", "Añadir todo", "Batir hasta cremoso", "Servir en vaso", "Decorar con coco"]
  },
  {
    id: 337,
    name: 'Batido de Naranja Creamsicle',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 22,
      carbs: 38,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Naranja", "1 scoop proteína vainilla", "Yogur griego", "Vainilla", "Hielo"],
    instructions: ["Exprimir naranja", "Añadir resto", "Batir bien", "Ajustar dulzor", "Servir frío"]
  },
  {
    id: 338,
    name: 'Batido de Moras',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 20,
      carbs: 32,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Moras", "Plátano", "1 scoop proteína vainilla", "Leche de almendras", "Limón", "Hielo"],
    instructions: ["Lavar moras", "Añadir todo a la batidora", "Batir hasta suavizar", "Probar dulzor", "Servir inmediatamente"]
  },
  {
    id: 339,
    name: 'Batido de Chai Especiado',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 24,
      carbs: 32,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Té chai", "1 scoop proteína vainilla", "Leche de almendras", "Canela", "Jengibre", "Hielo"],
    instructions: ["Preparar té chai frío", "Añadir proteína", "Batir con especias", "Ajustar sabor", "Servir frío"]
  },
  {
    id: 340,
    name: 'Batido de Kiwi y Espinacas',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop&q=80',
    calories: 230,
    macros: {
      protein: 18,
      carbs: 34,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Kiwi", "Espinacas", "Plátano", "1 scoop proteína vainilla", "Agua de coco", "Miel"],
    instructions: ["Pelar kiwis", "Lavar espinacas", "Batir todo", "Ajustar dulzor", "Servir frío"]
  },
  {
    id: 341,
    name: 'Batido de Cereza',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 20,
      carbs: 38,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Cerezas deshuesadas", "Yogur griego", "1 scoop proteína vainilla", "Almendras", "Hielo"],
    instructions: ["Deshuesar cerezas", "Añadir todo", "Batir bien", "Ajustar consistencia", "Servir inmediatamente"]
  },
  {
    id: 342,
    name: 'Batido de Cacao y Plátano',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 24,
      carbs: 36,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Plátano", "1 scoop proteína chocolate", "Cacao puro", "Leche de avena", "Dátiles", "Hielo"],
    instructions: ["Remojar dátiles", "Añadir todo", "Batir hasta cremoso", "Probar dulzor", "Servir frío"]
  },
  {
    id: 343,
    name: 'Batido Verde de Kale',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop&q=80',
    calories: 220,
    macros: {
      protein: 18,
      carbs: 28,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Kale", "Piña", "Manzana verde", "1 scoop proteína", "Agua de coco", "Jengibre"],
    instructions: ["Lavar kale", "Pelar frutas", "Batir todo", "Ajustar líquido", "Servir inmediatamente"]
  },
  {
    id: 344,
    name: 'Batido de Coco y Lima',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 250,
    macros: {
      protein: 20,
      carbs: 32,
      fat: 7
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Leche de coco", "Lima", "1 scoop proteína vainilla", "Coco rallado", "Miel", "Hielo"],
    instructions: ["Exprimir lima", "Añadir todo", "Batir bien", "Ajustar dulzor", "Decorar con coco"]
  },
  {
    id: 345,
    name: 'Batido de Pera y Jengibre',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 18,
      carbs: 36,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Pera", "Jengibre", "1 scoop proteína vainilla", "Yogur griego", "Canela", "Hielo"],
    instructions: ["Pelar pera", "Añadir jengibre fresco", "Batir todo", "Ajustar especias", "Servir frío"]
  },
  {
    id: 346,
    name: 'Batido de Melón',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 230,
    macros: {
      protein: 18,
      carbs: 36,
      fat: 3
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Melón", "Menta", "1 scoop proteína vainilla", "Lima", "Hielo"],
    instructions: ["Pelar melón", "Añadir menta fresca", "Batir con lima", "Ajustar dulzor", "Servir muy frío"]
  },
  {
    id: 347,
    name: 'Batido de Nueces y Dátiles',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 22,
      carbs: 38,
      fat: 10
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Nueces", "Dátiles", "1 scoop proteína vainilla", "Leche de almendras", "Canela", "Hielo"],
    instructions: ["Remojar dátiles y nueces", "Añadir todo", "Batir hasta cremoso", "Ajustar espesor", "Servir frío"]
  },
  {
    id: 348,
    name: 'Batido de Sandía',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 210,
    macros: {
      protein: 16,
      carbs: 32,
      fat: 3
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Sandía", "Menta", "1 scoop proteína vainilla", "Lima", "Hielo"],
    instructions: ["Cortar sandía", "Añadir menta", "Batir con lima", "Servir muy frío", "Decorar con menta"]
  },
  {
    id: 349,
    name: 'Batido de Almendras y Vainilla',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 24,
      carbs: 30,
      fat: 8
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Leche de almendras", "Almendras", "1 scoop proteína vainilla", "Extracto de vainilla", "Miel", "Hielo"],
    instructions: ["Tostar almendras", "Añadir todo", "Batir bien", "Colar si prefieres", "Servir frío"]
  },
  {
    id: 350,
    name: 'Batido de Papaya',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 250,
    macros: {
      protein: 20,
      carbs: 38,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Papaya", "Lima", "1 scoop proteína vainilla", "Yogur griego", "Miel", "Hielo"],
    instructions: ["Pelar papaya", "Añadir todo", "Batir hasta suavizar", "Ajustar dulzor", "Servir frío"]
  },
  {
    id: 351,
    name: 'Batido de Chocolate Blanco',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 22,
      carbs: 34,
      fat: 8
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 scoop proteína vainilla", "Chocolate blanco light", "Leche desnatada", "Frambuesas", "Hielo"],
    instructions: ["Derretir chocolate", "Añadir todo", "Batir bien", "Ajustar dulzor", "Servir con frambuesas"]
  },
  {
    id: 352,
    name: 'Batido Verde de Pepino',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop&q=80',
    calories: 200,
    macros: {
      protein: 16,
      carbs: 26,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Pepino", "Menta", "Lima", "1 scoop proteína", "Agua de coco", "Jengibre"],
    instructions: ["Pelar pepino", "Añadir menta y lima", "Batir todo", "Ajustar líquido", "Servir muy frío"]
  },
  {
    id: 353,
    name: 'Batido de Café Moca',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 26,
      carbs: 28,
      fat: 7
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Café espresso", "1 scoop proteína chocolate", "Cacao", "Leche de almendras", "Hielo"],
    instructions: ["Preparar café frío", "Añadir proteína y cacao", "Batir bien", "Ajustar intensidad", "Servir frío"]
  },
  {
    id: 354,
    name: 'Batido de Granada',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 20,
      carbs: 38,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Granada", "Arándanos", "1 scoop proteína vainilla", "Yogur griego", "Miel", "Hielo"],
    instructions: ["Desgranar granada", "Añadir resto", "Batir bien", "Ajustar dulzor", "Servir frío"]
  },
  {
    id: 355,
    name: 'Batido de Calabaza Especiado',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 22,
      carbs: 36,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Puré de calabaza", "1 scoop proteína vainilla", "Especias pumpkin spice", "Leche de almendras", "Miel", "Hielo"],
    instructions: ["Usar calabaza cocida", "Añadir especias", "Batir todo", "Ajustar dulzor", "Servir con canela"]
  },
  {
    id: 356,
    name: 'Batido de Higos',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 18,
      carbs: 42,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Higos", "Almendras", "1 scoop proteína vainilla", "Leche de almendras", "Miel", "Hielo"],
    instructions: ["Pelar higos", "Añadir todo", "Batir hasta cremoso", "Ajustar dulzor", "Servir frío"]
  },
  {
    id: 357,
    name: 'Batido de Té Verde y Limón',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 220,
    macros: {
      protein: 20,
      carbs: 28,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Té verde frío", "Limón", "1 scoop proteína vainilla", "Menta", "Miel", "Hielo"],
    instructions: ["Preparar té verde", "Exprimir limón", "Añadir resto", "Batir bien", "Servir muy frío"]
  },
  {
    id: 358,
    name: 'Batido de Açaí',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1590440779792-436f09a48e8b?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 20,
      carbs: 40,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Pulpa de açaí", "Plátano", "1 scoop proteína", "Leche de almendras", "Frutos rojos", "Hielo"],
    instructions: ["Descongelar açaí", "Añadir todo", "Batir hasta cremoso", "Ajustar espesor", "Servir inmediatamente"]
  },
  {
    id: 359,
    name: 'Batido de Caramelo Salado',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 24,
      carbs: 36,
      fat: 8
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 scoop proteína vainilla", "Dátiles", "Sal marina", "Leche de almendras", "Canela", "Hielo"],
    instructions: ["Remojar dátiles", "Añadir pizca de sal", "Batir todo", "Ajustar dulzor", "Servir con sal por encima"]
  },
  {
    id: 360,
    name: 'Batido de Limón y Arándanos',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 20,
      carbs: 34,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Limón", "Arándanos", "1 scoop proteína vainilla", "Yogur griego", "Miel", "Hielo"],
    instructions: ["Exprimir limón", "Lavar arándanos", "Batir todo", "Ajustar acidez", "Servir frío"]
  },
  {
    id: 361,
    name: 'Batido de Avena y Canela',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 22,
      carbs: 40,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Avena", "Plátano", "1 scoop proteína vainilla", "Canela", "Leche de avena", "Miel"],
    instructions: ["Remojar avena", "Añadir todo", "Batir bien", "Ajustar espesor", "Espolvorear canela"]
  },
  {
    id: 362,
    name: 'Batido de Coco y Arándanos',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 250,
    macros: {
      protein: 20,
      carbs: 34,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Arándanos", "Leche de coco", "1 scoop proteína vainilla", "Coco rallado", "Hielo"],
    instructions: ["Lavar arándanos", "Añadir todo", "Batir hasta cremoso", "Ajustar dulzor", "Decorar con coco"]
  },
  {
    id: 363,
    name: 'Batido de Jengibre y Cúrcuma',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop&q=80',
    calories: 230,
    macros: {
      protein: 18,
      carbs: 32,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Jengibre", "Cúrcuma", "Naranja", "1 scoop proteína vainilla", "Miel", "Pimienta negra"],
    instructions: ["Pelar jengibre", "Añadir cúrcuma", "Exprimir naranja", "Batir todo", "Servir con pimienta"]
  },
  {
    id: 364,
    name: 'Batido de Plátano y Nueces',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 290,
    macros: {
      protein: 24,
      carbs: 38,
      fat: 9
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Plátano", "Nueces", "1 scoop proteína vainilla", "Leche de nueces", "Canela", "Hielo"],
    instructions: ["Pelar plátano", "Tostar nueces", "Batir todo", "Ajustar espesor", "Servir con nueces picadas"]
  },
  {
    id: 365,
    name: 'Batido de Manzana y Avena',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 20,
      carbs: 42,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Manzana", "Avena", "1 scoop proteína vainilla", "Canela", "Leche de avena", "Miel"],
    instructions: ["Pelar manzana", "Remojar avena", "Batir todo", "Ajustar dulzor", "Espolvorear canela"]
  },
  {
    id: 366,
    name: 'Batido de Chocolate y Menta',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 24,
      carbs: 32,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 scoop proteína chocolate", "Menta fresca", "Cacao", "Leche de almendras", "Hielo"],
    instructions: ["Lavar menta", "Añadir todo", "Batir bien", "Ajustar intensidad", "Decorar con menta"]
  },
  {
    id: 367,
    name: 'Batido de Naranja y Zanahoria',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 18,
      carbs: 36,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Naranja", "Zanahoria", "Jengibre", "1 scoop proteína vainilla", "Miel", "Hielo"],
    instructions: ["Exprimir naranja", "Pelar zanahoria", "Añadir jengibre", "Batir todo", "Servir frío"]
  },
  {
    id: 368,
    name: 'Batido de Café y Caramelo',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 26,
      carbs: 32,
      fat: 7
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Café espresso", "1 scoop proteína vainilla", "Dátiles", "Leche de almendras", "Canela", "Hielo"],
    instructions: ["Preparar café frío", "Remojar dátiles", "Batir todo", "Ajustar dulzor", "Servir con canela"]
  },
  {
    id: 369,
    name: 'Batido de Fresas y Coco',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 20,
      carbs: 36,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Fresas", "Leche de coco", "1 scoop proteína vainilla", "Coco rallado", "Miel", "Hielo"],
    instructions: ["Lavar fresas", "Añadir todo", "Batir bien", "Ajustar dulzor", "Decorar con coco"]
  },
  {
    id: 370,
    name: 'Batido de Chocolate Negro',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 26,
      carbs: 30,
      fat: 7
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 scoop proteína chocolate", "Cacao puro", "Chocolate negro", "Leche de almendras", "Stevia", "Hielo"],
    instructions: ["Derretir chocolate", "Añadir todo", "Batir hasta cremoso", "Ajustar amargor", "Servir con cacao"]
  },
  {
    id: 371,
    name: 'Batido Verde de Manzana',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop&q=80',
    calories: 230,
    macros: {
      protein: 18,
      carbs: 32,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Manzana verde", "Espinacas", "Pepino", "1 scoop proteína", "Lima", "Agua de coco"],
    instructions: ["Pelar manzana", "Lavar verduras", "Batir todo", "Ajustar líquido", "Servir muy frío"]
  },
  {
    id: 372,
    name: 'Batido de Pistacho',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 24,
      carbs: 34,
      fat: 9
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Pistachos", "1 scoop proteína vainilla", "Leche de almendras", "Dátiles", "Cardamomo", "Hielo"],
    instructions: ["Remojar pistachos", "Añadir todo", "Batir bien", "Ajustar especias", "Decorar con pistachos"]
  },
  {
    id: 373,
    name: 'Batido de Mandarina',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 250,
    macros: {
      protein: 20,
      carbs: 38,
      fat: 3
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Mandarinas", "1 scoop proteína vainilla", "Yogur griego", "Miel", "Hielo"],
    instructions: ["Pelar mandarinas", "Añadir todo", "Batir hasta suavizar", "Ajustar dulzor", "Servir frío"]
  },
  {
    id: 374,
    name: 'Batido de Remolacha',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 18,
      carbs: 36,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Remolacha cocida", "Fresas", "Plátano", "1 scoop proteína", "Jengibre", "Hielo"],
    instructions: ["Pelar remolacha", "Añadir frutas", "Batir todo", "Ajustar dulzor", "Servir frío"]
  },
  {
    id: 375,
    name: 'Batido de Coco y Piña',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 260,
    macros: {
      protein: 20,
      carbs: 38,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Piña", "Leche de coco", "1 scoop proteína vainilla", "Coco rallado", "Lima", "Hielo"],
    instructions: ["Pelar piña", "Añadir todo", "Batir bien", "Ajustar dulzor", "Decorar con coco y lima"]
  },
  {
    id: 376,
    name: 'Batido de Té Chai',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 270,
    macros: {
      protein: 22,
      carbs: 34,
      fat: 6
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Té chai concentrado", "1 scoop proteína vainilla", "Leche de almendras", "Canela", "Miel", "Hielo"],
    instructions: ["Preparar té chai frío", "Añadir proteína", "Batir con especias", "Ajustar dulzor", "Servir frío"]
  },
  {
    id: 377,
    name: 'Batido de Ciruela',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 250,
    macros: {
      protein: 18,
      carbs: 38,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Ciruelas", "Yogur griego", "1 scoop proteína vainilla", "Canela", "Miel", "Hielo"],
    instructions: ["Deshuesar ciruelas", "Añadir todo", "Batir hasta suavizar", "Ajustar dulzor", "Servir frío"]
  },
  {
    id: 378,
    name: 'Batido de Chocolate Blanco y Frambuesa',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 280,
    macros: {
      protein: 22,
      carbs: 36,
      fat: 7
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["1 scoop proteína vainilla", "Chocolate blanco light", "Frambuesas", "Leche de almendras", "Hielo"],
    instructions: ["Derretir chocolate", "Añadir frambuesas", "Batir todo", "Ajustar dulzor", "Servir con frambuesas"]
  },
  {
    id: 379,
    name: 'Batido de Albaricoque',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&q=80',
    calories: 250,
    macros: {
      protein: 20,
      carbs: 38,
      fat: 4
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Albaricoques", "Yogur griego", "1 scoop proteína vainilla", "Miel", "Almendras", "Hielo"],
    instructions: ["Deshuesar albaricoques", "Añadir todo", "Batir bien", "Ajustar dulzor", "Servir con almendras"]
  },
  {
    id: 380,
    name: 'Batido de Matcha y Vainilla',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop&q=80',
    calories: 240,
    macros: {
      protein: 22,
      carbs: 30,
      fat: 5
    },
    prepTime: 5,
    difficulty: 'Fácil',
    ingredients: ["Té matcha", "1 scoop proteína vainilla", "Leche de almendras", "Extracto de vainilla", "Miel", "Hielo"],
    instructions: ["Disolver matcha", "Añadir vainilla", "Batir todo", "Ajustar dulzor", "Servir muy frío"]
  },

  // ========== RECETAS ALTAS EN CALORÍAS PARA GANAR PESO (20 recetas) ==========
  {
    id: 381,
    name: 'Pancakes Proteicos con Mantequilla de Maní',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop&q=80',
    calories: 650,
    macros: {
      protein: 42,
      carbs: 68,
      fat: 22
    },
    prepTime: 20,
    difficulty: 'Media',
    ingredients: [
      '100g de harina de avena',
      '2 scoops de proteína de vainilla',
      '3 huevos enteros',
      '150ml de leche entera',
      '1 plátano maduro',
      '3 cucharadas de mantequilla de maní',
      '2 cucharadas de miel',
      '1 cucharadita de aceite de coco',
      'Canela al gusto'
    ],
    instructions: [
      'Mezclar la harina de avena, proteína y canela en un bowl.',
      'En otro bowl, batir los huevos, leche y plátano machacado.',
      'Combinar ambas mezclas hasta obtener una masa homogénea.',
      'Calentar una sartén con aceite de coco a fuego medio.',
      'Verter porciones de masa y cocinar 2-3 minutos por lado.',
      'Apilar los pancakes y cubrir con mantequilla de maní derretida.',
      'Añadir miel por encima y decorar con rodajas de plátano.'
    ]
  },
  {
    id: 382,
    name: 'Bowl de Avena con Frutos Secos y Semillas',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=600&h=400&fit=crop&q=80',
    calories: 580,
    macros: {
      protein: 28,
      carbs: 65,
      fat: 24
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: [
      '80g de avena integral',
      '300ml de leche entera',
      '1 scoop de proteína de chocolate',
      '30g de nueces',
      '20g de almendras',
      '15g de semillas de chía',
      '1 plátano',
      '2 cucharadas de mantequilla de almendras',
      '1 cucharada de cacao puro',
      'Miel al gusto'
    ],
    instructions: [
      'Cocinar la avena con la leche durante 5-7 minutos.',
      'Dejar enfriar 2 minutos y mezclar la proteína.',
      'Picar las nueces y almendras groseramente.',
      'Servir la avena en un bowl y cubrir con mantequilla de almendras.',
      'Añadir el plátano en rodajas, frutos secos y semillas de chía.',
      'Espolvorear cacao puro y añadir miel al gusto.',
      'Mezclar bien antes de comer.'
    ]
  },
  {
    id: 383,
    name: 'Tortilla de 4 Huevos con Aguacate y Queso',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=600&h=400&fit=crop&q=80',
    calories: 520,
    macros: {
      protein: 38,
      carbs: 12,
      fat: 36
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: [
      '4 huevos enteros',
      '1 aguacate maduro',
      '60g de queso cheddar',
      '50g de jamón de pavo',
      '1/2 cebolla',
      '1 cucharada de aceite de oliva',
      'Sal y pimienta',
      'Tomates cherry'
    ],
    instructions: [
      'Batir los huevos con sal y pimienta.',
      'Calentar aceite de oliva en una sartén grande.',
      'Saltear la cebolla picada hasta que esté dorada.',
      'Añadir el jamón picado y cocinar 1 minuto.',
      'Verter los huevos y cocinar a fuego medio.',
      'Cuando esté casi lista, añadir el queso rallado.',
      'Doblar la tortilla y servir con aguacate en láminas y tomates.'
    ]
  },
  {
    id: 384,
    name: 'Pasta Integral con Pollo y Salsa Cremosa',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600&h=400&fit=crop&q=80',
    calories: 720,
    macros: {
      protein: 52,
      carbs: 78,
      fat: 22
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: [
      '150g de pasta integral',
      '200g de pechuga de pollo',
      '100ml de nata para cocinar (15% grasa)',
      '50g de queso parmesano',
      '2 dientes de ajo',
      '100g de espinacas frescas',
      '1 cucharada de aceite de oliva',
      'Sal, pimienta y nuez moscada',
      'Tomates cherry'
    ],
    instructions: [
      'Cocinar la pasta según las instrucciones del paquete.',
      'Cortar el pollo en tiras y sazonar con sal y pimienta.',
      'Calentar aceite en una sartén y cocinar el pollo hasta dorarlo.',
      'Apartar el pollo y en la misma sartén saltear el ajo picado.',
      'Añadir la nata, parmesano, nuez moscada y espinacas.',
      'Cocinar hasta que las espinacas se ablanden.',
      'Mezclar la pasta escurrida con la salsa y el pollo.',
      'Servir con tomates cherry y más parmesano.'
    ]
  },
  {
    id: 385,
    name: 'Arroz Integral con Salmón y Aguacate',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=400&fit=crop&q=80',
    calories: 680,
    macros: {
      protein: 38,
      carbs: 62,
      fat: 28
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: [
      '120g de arroz integral',
      '180g de filete de salmón',
      '1 aguacate grande',
      '100g de edamame',
      '1 cucharada de aceite de sésamo',
      '2 cucharadas de salsa de soja',
      'Semillas de sésamo',
      'Jengibre fresco',
      'Limón'
    ],
    instructions: [
      'Cocinar el arroz integral según instrucciones (20-25 minutos).',
      'Marinar el salmón con salsa de soja, jengibre rallado y limón.',
      'Cocinar el edamame en agua hirviendo durante 5 minutos.',
      'Calentar una sartén y cocinar el salmón 4 minutos por lado.',
      'Cortar el aguacate en láminas.',
      'Montar el bowl con arroz como base.',
      'Añadir el salmón desmenuzado, aguacate y edamame.',
      'Rociar con aceite de sésamo y semillas de sésamo.'
    ]
  },
  {
    id: 386,
    name: 'Hamburguesa de Ternera con Boniato',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop&q=80',
    calories: 750,
    macros: {
      protein: 48,
      carbs: 65,
      fat: 32
    },
    prepTime: 40,
    difficulty: 'Media',
    ingredients: [
      '200g de carne picada de ternera (15% grasa)',
      '1 boniato grande (300g)',
      '1 pan integral para hamburguesa',
      '50g de queso cheddar',
      'Lechuga, tomate y cebolla',
      '1 cucharada de aceite de oliva',
      'Sal, pimienta y especias',
      'Mostaza y ketchup light'
    ],
    instructions: [
      'Precalentar el horno a 200°C.',
      'Cortar el boniato en gajos, sazonar y hornear 30 minutos.',
      'Formar la hamburguesa con la carne, sal, pimienta y especias.',
      'Cocinar la hamburguesa en una sartén 4-5 minutos por lado.',
      'Añadir el queso encima al final para que se derrita.',
      'Tostar el pan ligeramente.',
      'Montar la hamburguesa con lechuga, tomate, cebolla y salsas.',
      'Servir con los gajos de boniato.'
    ]
  },
  {
    id: 387,
    name: 'Quinoa con Pollo Teriyaki y Vegetales',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&q=80',
    calories: 620,
    macros: {
      protein: 45,
      carbs: 70,
      fat: 16
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: [
      '100g de quinoa',
      '180g de pechuga de pollo',
      '3 cucharadas de salsa teriyaki',
      '1 pimiento rojo',
      '1 zanahoria',
      '100g de brócoli',
      '1 cucharada de aceite de sésamo',
      'Semillas de sésamo',
      'Cebollino fresco'
    ],
    instructions: [
      'Cocinar la quinoa según las instrucciones del paquete.',
      'Cortar el pollo en dados y marinar con 2 cucharadas de teriyaki.',
      'Cortar las verduras en trozos medianos.',
      'Calentar aceite de sésamo en un wok o sartén grande.',
      'Saltear el pollo hasta que esté dorado (5-6 minutos).',
      'Añadir las verduras y saltear 4-5 minutos más.',
      'Agregar la quinoa y la salsa teriyaki restante.',
      'Servir con semillas de sésamo y cebollino picado.'
    ]
  },
  {
    id: 388,
    name: 'Wrap de Atún con Hummus y Frutos Secos',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&h=400&fit=crop&q=80',
    calories: 560,
    macros: {
      protein: 38,
      carbs: 48,
      fat: 24
    },
    prepTime: 15,
    difficulty: 'Fácil',
    ingredients: [
      '1 tortilla integral grande',
      '150g de atún en conserva (al natural)',
      '4 cucharadas de hummus',
      '30g de nueces picadas',
      'Lechuga, tomate y pepino',
      '1/2 aguacate',
      '20g de queso feta',
      'Aceite de oliva y limón'
    ],
    instructions: [
      'Calentar ligeramente la tortilla para que sea más flexible.',
      'Untar el hummus por toda la superficie de la tortilla.',
      'Escurrir bien el atún y colocarlo en el centro.',
      'Añadir la lechuga, tomate y pepino en rodajas.',
      'Agregar el aguacate en láminas, queso feta y nueces.',
      'Rociar con un poco de aceite de oliva y zumo de limón.',
      'Enrollar firmemente y cortar por la mitad.',
      'Servir inmediatamente o envolver para llevar.'
    ]
  },
  {
    id: 389,
    name: 'Batido Hipercalórico de Chocolate y Plátano',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600&h=400&fit=crop&q=80',
    calories: 720,
    macros: {
      protein: 48,
      carbs: 82,
      fat: 22
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '2 scoops de proteína de chocolate',
      '2 plátanos grandes',
      '50g de avena',
      '3 cucharadas de mantequilla de maní',
      '400ml de leche entera',
      '1 cucharada de miel',
      '1 cucharada de cacao puro',
      '5-6 cubitos de hielo'
    ],
    instructions: [
      'Añadir todos los ingredientes en la batidora.',
      'Batir a alta velocidad durante 60 segundos.',
      'Si está muy espeso, añadir un poco más de leche.',
      'Probar y ajustar dulzor con más miel si es necesario.',
      'Servir inmediatamente en un vaso grande.',
      'Decorar con cacao en polvo por encima.'
    ]
  },
  {
    id: 390,
    name: 'Sándwich de Pollo con Aguacate y Queso',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=400&fit=crop&q=80',
    calories: 590,
    macros: {
      protein: 42,
      carbs: 48,
      fat: 26
    },
    prepTime: 20,
    difficulty: 'Fácil',
    ingredients: [
      '2 rebanadas de pan integral',
      '150g de pechuga de pollo cocida',
      '1 aguacate',
      '50g de queso suizo',
      'Lechuga y tomate',
      '2 cucharadas de mayonesa light',
      '1 cucharada de mostaza',
      'Sal y pimienta'
    ],
    instructions: [
      'Tostar ligeramente el pan integral.',
      'Mezclar la mayonesa con la mostaza.',
      'Untar la mezcla en ambas rebanadas de pan.',
      'Colocar el pollo en lonchas sobre una rebanada.',
      'Añadir el aguacate machacado, queso, lechuga y tomate.',
      'Sazonar con sal y pimienta al gusto.',
      'Cerrar el sándwich y presionar ligeramente.',
      'Cortar en diagonal y servir.'
    ]
  },
  {
    id: 391,
    name: 'Risotto de Champiñones y Pollo',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1637806930600-37fa8892069d?w=600&h=400&fit=crop&q=80',
    calories: 680,
    macros: {
      protein: 38,
      carbs: 76,
      fat: 24
    },
    prepTime: 45,
    difficulty: 'Alta',
    ingredients: [
      '120g de arroz arborio',
      '150g de pechuga de pollo',
      '200g de champiñones',
      '50g de queso parmesano',
      '500ml de caldo de pollo',
      '1/2 cebolla',
      '2 cucharadas de aceite de oliva',
      '50ml de vino blanco',
      'Perejil fresco'
    ],
    instructions: [
      'Calentar el caldo de pollo y mantener caliente.',
      'Picar la cebolla finamente y saltear en aceite de oliva.',
      'Añadir el arroz y tostar 2 minutos removiendo.',
      'Agregar el vino blanco y dejar evaporar.',
      'Ir añadiendo caldo poco a poco mientras remueves constantemente.',
      'A mitad de cocción, añadir champiñones laminados y pollo en tiras.',
      'Cocinar 18-20 minutos hasta que el arroz esté cremoso.',
      'Terminar con parmesano rallado y perejil picado.'
    ]
  },
  {
    id: 392,
    name: 'Ensalada César con Pollo Doble',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&h=400&fit=crop&q=80',
    calories: 640,
    macros: {
      protein: 54,
      carbs: 32,
      fat: 32
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: [
      '250g de pechuga de pollo',
      'Lechuga romana',
      '50g de queso parmesano',
      '60g de crutones integrales',
      '3 cucharadas de salsa césar',
      '2 cucharadas de aceite de oliva',
      'Tomates cherry',
      'Bacon de pavo (opcional)',
      'Limón'
    ],
    instructions: [
      'Cortar el pollo en tiras y sazonar con sal y pimienta.',
      'Cocinar el pollo en una sartén con aceite hasta que esté dorado.',
      'Lavar y cortar la lechuga romana en trozos.',
      'En un bowl grande, mezclar la lechuga con la salsa césar.',
      'Añadir el pollo cocido, crutones y parmesano en láminas.',
      'Agregar los tomates cherry cortados por la mitad.',
      'Si usas bacon, añadirlo crujiente por encima.',
      'Rociar con limón y servir inmediatamente.'
    ]
  },
  {
    id: 393,
    name: 'Tacos de Ternera con Guacamole',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop&q=80',
    calories: 700,
    macros: {
      protein: 42,
      carbs: 58,
      fat: 34
    },
    prepTime: 30,
    difficulty: 'Media',
    ingredients: [
      '200g de carne picada de ternera',
      '4 tortillas de maíz',
      '2 aguacates',
      '100g de queso rallado',
      '1 tomate',
      '1/2 cebolla',
      'Cilantro fresco',
      'Especias para tacos',
      'Crema agria'
    ],
    instructions: [
      'Preparar el guacamole: machacar aguacate con tomate, cebolla y cilantro.',
      'Cocinar la carne con las especias para tacos hasta dorar.',
      'Calentar las tortillas en una sartén o microondas.',
      'Rellenar cada tortilla con la carne.',
      'Añadir queso rallado, guacamole y crema agria.',
      'Decorar con cilantro fresco picado.',
      'Servir inmediatamente con limón a un lado.'
    ]
  },
  {
    id: 394,
    name: 'Bowl de Proteína con Boniato y Pollo',
    category: 'Comida',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop&q=80',
    calories: 690,
    macros: {
      protein: 52,
      carbs: 68,
      fat: 22
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: [
      '200g de pechuga de pollo',
      '200g de boniato',
      '100g de garbanzos cocidos',
      '1 aguacate',
      '50g de queso feta',
      'Espinacas frescas',
      '2 cucharadas de aceite de oliva',
      'Tahini',
      'Limón y especias'
    ],
    instructions: [
      'Precalentar el horno a 200°C.',
      'Cortar el boniato en dados, sazonar y hornear 25 minutos.',
      'Cocinar el pollo a la plancha con especias.',
      'Tostar los garbanzos en una sartén con un poco de aceite.',
      'Preparar una base con espinacas frescas en un bowl.',
      'Añadir el boniato asado, pollo en tiras y garbanzos.',
      'Agregar aguacate en láminas y queso feta desmenuzado.',
      'Rociar con tahini diluido en limón y aceite de oliva.'
    ]
  },
  {
    id: 395,
    name: 'Pasta Carbonara Proteica',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1588013273468-315fd88ea34c?w=600&h=400&fit=crop&q=80',
    calories: 740,
    macros: {
      protein: 48,
      carbs: 72,
      fat: 28
    },
    prepTime: 25,
    difficulty: 'Media',
    ingredients: [
      '150g de pasta integral',
      '150g de bacon de pavo',
      '3 huevos enteros',
      '50g de queso parmesano',
      '1 diente de ajo',
      'Pimienta negra recién molida',
      'Sal',
      'Perejil fresco'
    ],
    instructions: [
      'Cocinar la pasta en agua con sal según instrucciones.',
      'Cortar el bacon en tiras y dorar en una sartén sin aceite.',
      'En un bowl, batir los huevos con el parmesano rallado.',
      'Añadir pimienta negra abundante a la mezcla de huevo.',
      'Escurrir la pasta reservando un poco del agua de cocción.',
      'Mezclar rápidamente la pasta caliente con la mezcla de huevo.',
      'Añadir el bacon y un poco de agua de pasta si está seco.',
      'Servir con más parmesano y perejil picado.'
    ]
  },
  {
    id: 396,
    name: 'Batido de Fresa y Mantequilla de Almendra',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&h=400&fit=crop&q=80',
    calories: 580,
    macros: {
      protein: 38,
      carbs: 58,
      fat: 20
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '2 scoops de proteína de fresa',
      '200g de fresas frescas',
      '40g de avena',
      '2 cucharadas de mantequilla de almendra',
      '300ml de leche entera',
      '1 plátano',
      'Miel al gusto',
      'Hielo'
    ],
    instructions: [
      'Lavar las fresas y quitar los tallos.',
      'Añadir todos los ingredientes en la batidora.',
      'Batir a alta velocidad hasta obtener textura cremosa.',
      'Si es necesario, añadir más leche para ajustar consistencia.',
      'Probar y endulzar con miel si lo prefieres.',
      'Servir inmediatamente decorado con fresas.'
    ]
  },
  {
    id: 397,
    name: 'Pizza Proteica con Pollo y Vegetales',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop&q=80',
    calories: 720,
    macros: {
      protein: 52,
      carbs: 68,
      fat: 26
    },
    prepTime: 40,
    difficulty: 'Alta',
    ingredients: [
      '1 base de pizza integral (200g)',
      '200g de pechuga de pollo cocida',
      '100g de queso mozzarella',
      '100ml de salsa de tomate',
      '1 pimiento',
      'Champiñones',
      '1/2 cebolla morada',
      'Aceitunas negras',
      'Orégano y albahaca'
    ],
    instructions: [
      'Precalentar el horno a 220°C.',
      'Extender la salsa de tomate sobre la base de pizza.',
      'Distribuir el pollo cortado en tiras pequeñas.',
      'Añadir el pimiento, champiñones laminados y cebolla.',
      'Cubrir con queso mozzarella rallado.',
      'Añadir aceitunas negras y espolvorear orégano.',
      'Hornear 15-18 minutos hasta que el queso esté dorado.',
      'Decorar con albahaca fresca y servir caliente.'
    ]
  },
  {
    id: 398,
    name: 'Batido Verde Energético con Espinacas',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1600718374662-0483d2b0da23?w=600&h=400&fit=crop&q=80',
    calories: 520,
    macros: {
      protein: 32,
      carbs: 62,
      fat: 16
    },
    prepTime: 5,
    difficulty: 'Muy Fácil',
    ingredients: [
      '1 scoop de proteína de vainilla',
      '2 tazas de espinacas frescas',
      '1 plátano',
      '1 manzana verde',
      '2 cucharadas de mantequilla de maní',
      '1 cucharada de semillas de lino',
      '300ml de leche de almendras',
      'Hielo'
    ],
    instructions: [
      'Lavar bien las espinacas.',
      'Pelar y cortar el plátano y la manzana.',
      'Añadir todos los ingredientes en la batidora.',
      'Batir a máxima potencia durante 60 segundos.',
      'Verificar consistencia y añadir más líquido si es necesario.',
      'Servir inmediatamente en un vaso grande.'
    ]
  },
  {
    id: 399,
    name: 'Pollo al Curry con Arroz Basmati',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop&q=80',
    calories: 710,
    macros: {
      protein: 46,
      carbs: 82,
      fat: 20
    },
    prepTime: 35,
    difficulty: 'Media',
    ingredients: [
      '200g de pechuga de pollo',
      '120g de arroz basmati',
      '200ml de leche de coco',
      '2 cucharadas de pasta de curry',
      '1 cebolla',
      '2 tomates',
      '1 pimiento',
      'Cilantro fresco',
      'Aceite de coco'
    ],
    instructions: [
      'Cocinar el arroz basmati según instrucciones.',
      'Cortar el pollo en dados y sazonar.',
      'Calentar aceite de coco y dorar el pollo.',
      'Añadir cebolla picada y cocinar hasta que esté transparente.',
      'Agregar pasta de curry y cocinar 1 minuto.',
      'Incorporar tomate picado, pimiento y leche de coco.',
      'Cocinar a fuego lento 15 minutos.',
      'Servir sobre el arroz y decorar con cilantro.'
    ]
  },
  {
    id: 400,
    name: 'Merienda Power: Tostada con Queso y Nueces',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=400&fit=crop&q=80',
    calories: 550,
    macros: {
      protein: 28,
      carbs: 48,
      fat: 28
    },
    prepTime: 10,
    difficulty: 'Muy Fácil',
    ingredients: [
      '3 rebanadas de pan integral',
      '100g de queso cottage',
      '30g de nueces',
      '2 cucharadas de mantequilla de maní',
      '1 plátano',
      'Miel',
      'Canela'
    ],
    instructions: [
      'Tostar el pan integral hasta que esté crujiente.',
      'Untar cada rebanada con mantequilla de maní.',
      'Añadir una capa generosa de queso cottage.',
      'Cortar el plátano en rodajas y distribuir.',
      'Picar las nueces y espolvorear por encima.',
      'Rociar con miel y espolvorear canela.',
      'Servir inmediatamente.'
    ]
  }

];

// Make available globally
window.recipeCategories = recipeCategories;
window.recipes = recipes;
