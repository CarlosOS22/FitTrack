export const recipeCategories = [
  'Desayuno',
  'Almuerzo',
  'Cena',
  'Merienda',
  'Postre Saludable',
  'Batidos'
];

export const recipes = [
  {
    id: 1,
    name: 'Tortilla de Claras con Verduras',
    category: 'Desayuno',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400',
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
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400',
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
    name: 'Pollo a la Plancha con Arroz Integral',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400',
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
    id: 4,
    name: 'Salmón con Batata y Espárragos',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400',
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
    id: 5,
    name: 'Ensalada de Atún con Quinoa',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
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
    id: 6,
    name: 'Yogur Griego con Frutos Secos',
    category: 'Merienda',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400',
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
    id: 7,
    name: 'Batido Proteico de Chocolate y Plátano',
    category: 'Batidos',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400',
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
    id: 8,
    name: 'Tacos de Pavo con Vegetales',
    category: 'Cena',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400',
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
    id: 9,
    name: 'Wrap de Hummus y Verduras',
    category: 'Almuerzo',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400',
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
    id: 10,
    name: 'Brownie Proteico Saludable',
    category: 'Postre Saludable',
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400',
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
  }
];
