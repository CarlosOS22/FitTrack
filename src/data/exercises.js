export const muscleGroups = [
  'Pecho',
  'Espalda',
  'Hombros',
  'Bíceps',
  'Tríceps',
  'Piernas',
  'Abdominales',
  'Cardio'
];

export const exercises = [
  // PECHO
  {
    id: 1,
    name: 'Press de Banca',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://media.giphy.com/media/fC8pH05qhXGS5sYZMY/giphy.gif',
    description: 'Ejercicio fundamental para el desarrollo del pecho, trabajando principalmente el pectoral mayor.',
    instructions: [
      'Acuéstate en el banco plano con los pies firmemente apoyados en el suelo.',
      'Agarra la barra con las manos un poco más separadas que el ancho de los hombros.',
      'Baja la barra de forma controlada hasta tocar el pecho.',
      'Empuja la barra hacia arriba extendiendo los brazos completamente.',
      'Mantén los omóplatos retraídos durante todo el movimiento.'
    ],
    sets: 4,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 2,
    name: 'Flexiones',
    muscleGroup: 'Pecho',
    difficulty: 'Fácil',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=400',
    gifUrl: 'https://media.giphy.com/media/ZdUnQS4AXEl1AERdil/giphy.gif',
    description: 'Ejercicio básico que trabaja pecho, hombros y tríceps usando el peso corporal.',
    instructions: [
      'Colócate en posición de plancha con las manos al ancho de los hombros.',
      'Mantén el cuerpo en línea recta desde la cabeza hasta los pies.',
      'Baja el cuerpo doblando los codos hasta que el pecho casi toque el suelo.',
      'Empuja hacia arriba hasta extender completamente los brazos.',
      'Mantén el core activado durante todo el ejercicio.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 60
  },
  {
    id: 3,
    name: 'Aperturas con Mancuernas',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif',
    description: 'Ejercicio de aislamiento que estira y contrae el pectoral.',
    instructions: [
      'Acuéstate en un banco plano con una mancuerna en cada mano.',
      'Extiende los brazos hacia arriba con los codos ligeramente flexionados.',
      'Abre los brazos hacia los lados en un arco amplio.',
      'Baja hasta sentir un estiramiento en el pecho.',
      'Vuelve a la posición inicial contrayendo el pecho.'
    ],
    sets: 3,
    reps: '10-15',
    restTime: 75
  },
  // ESPALDA
  {
    id: 4,
    name: 'Dominadas',
    muscleGroup: 'Espalda',
    difficulty: 'Alta',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Ejercicio compuesto que trabaja principalmente el dorsal ancho.',
    instructions: [
      'Agarra la barra con las palmas mirando hacia adelante, más anchas que los hombros.',
      'Cuelga completamente con los brazos extendidos.',
      'Tira de tu cuerpo hacia arriba hasta que la barbilla supere la barra.',
      'Baja de forma controlada hasta la posición inicial.',
      'Evita balancearte o usar impulso.'
    ],
    sets: 4,
    reps: '6-10',
    restTime: 120
  },
  {
    id: 5,
    name: 'Remo con Barra',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1584380931214-dbb5b72e7fd0?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Ejercicio fundamental para el grosor de la espalda.',
    instructions: [
      'Inclínate hacia adelante con la espalda recta, rodillas ligeramente flexionadas.',
      'Agarra la barra con las manos al ancho de los hombros.',
      'Tira de la barra hacia el abdomen inferior.',
      'Aprieta los omóplatos al final del movimiento.',
      'Baja la barra de forma controlada.'
    ],
    sets: 4,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 6,
    name: 'Peso Muerto',
    muscleGroup: 'Espalda',
    difficulty: 'Alta',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Ejercicio compuesto que trabaja toda la cadena posterior.',
    instructions: [
      'Colócate frente a la barra con los pies al ancho de las caderas.',
      'Flexiona las rodillas y agarra la barra con las manos al ancho de los hombros.',
      'Mantén la espalda recta y el pecho hacia fuera.',
      'Levanta la barra extendiendo las caderas y rodillas simultáneamente.',
      'Baja la barra de forma controlada siguiendo el mismo camino.'
    ],
    sets: 4,
    reps: '5-8',
    restTime: 150
  },
  // HOMBROS
  {
    id: 7,
    name: 'Press Militar',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Ejercicio principal para el desarrollo del deltoides.',
    instructions: [
      'De pie, agarra la barra a la altura de los hombros.',
      'Los pies deben estar al ancho de los hombros.',
      'Empuja la barra hacia arriba hasta extender completamente los brazos.',
      'La barra debe quedar sobre la cabeza, no delante.',
      'Baja de forma controlada hasta la posición inicial.'
    ],
    sets: 4,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 8,
    name: 'Elevaciones Laterales',
    muscleGroup: 'Hombros',
    difficulty: 'Fácil',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Aislamiento del deltoides lateral.',
    instructions: [
      'De pie con una mancuerna en cada mano a los lados.',
      'Con los codos ligeramente flexionados, levanta los brazos lateralmente.',
      'Sube hasta que los brazos estén paralelos al suelo.',
      'Mantén un segundo en la posición superior.',
      'Baja de forma controlada.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 9,
    name: 'Elevaciones Frontales',
    muscleGroup: 'Hombros',
    difficulty: 'Fácil',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Trabajo específico del deltoides frontal.',
    instructions: [
      'De pie con las mancuernas delante de los muslos.',
      'Con los brazos casi extendidos, eleva las mancuernas al frente.',
      'Sube hasta la altura de los hombros.',
      'Mantén el core activado y evita balancearte.',
      'Baja lentamente a la posición inicial.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  // BÍCEPS
  {
    id: 10,
    name: 'Curl con Barra',
    muscleGroup: 'Bíceps',
    difficulty: 'Fácil',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Ejercicio básico para el desarrollo del bíceps.',
    instructions: [
      'De pie con la barra en las manos, agarre supino (palmas hacia arriba).',
      'Mantén los codos pegados a los costados.',
      'Flexiona los codos llevando la barra hacia los hombros.',
      'Contrae el bíceps en la parte superior.',
      'Baja de forma controlada sin mover los codos.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 60
  },
  {
    id: 11,
    name: 'Curl con Mancuernas Alternado',
    muscleGroup: 'Bíceps',
    difficulty: 'Fácil',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Variante que permite mayor concentración en cada brazo.',
    instructions: [
      'Sentado o de pie con una mancuerna en cada mano.',
      'Comienza con los brazos extendidos a los lados.',
      'Flexiona un brazo mientras mantienes el otro extendido.',
      'Rota la muñeca hacia afuera mientras subes.',
      'Alterna entre ambos brazos.'
    ],
    sets: 3,
    reps: '10-12 por brazo',
    restTime: 60
  },
  {
    id: 12,
    name: 'Curl Martillo',
    muscleGroup: 'Bíceps',
    difficulty: 'Fácil',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Trabaja bíceps y antebrazo con agarre neutro.',
    instructions: [
      'De pie con las mancuernas a los lados, palmas enfrentadas.',
      'Mantén los codos pegados al cuerpo.',
      'Flexiona los codos sin rotar las muñecas.',
      'Sube hasta que las mancuernas estén a la altura de los hombros.',
      'Baja de forma controlada.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 60
  },
  // TRÍCEPS
  {
    id: 13,
    name: 'Fondos en Paralelas',
    muscleGroup: 'Tríceps',
    difficulty: 'Media',
    equipment: 'Paralelas',
    image: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Ejercicio compuesto para tríceps y pecho inferior.',
    instructions: [
      'Agarra las paralelas y elévate con los brazos extendidos.',
      'Inclínate ligeramente hacia adelante.',
      'Baja el cuerpo flexionando los codos hasta 90 grados.',
      'Empuja hacia arriba extendiendo los brazos completamente.',
      'Mantén el core activado.'
    ],
    sets: 3,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 14,
    name: 'Press Francés',
    muscleGroup: 'Tríceps',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Ejercicio de aislamiento para el tríceps.',
    instructions: [
      'Acuéstate en un banco con la barra sobre la frente.',
      'Agarra la barra con las manos a la anchura de los hombros.',
      'Baja la barra hacia la frente flexionando solo los codos.',
      'Los codos deben permanecer fijos y apuntando al techo.',
      'Extiende los brazos para volver a la posición inicial.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 60
  },
  {
    id: 15,
    name: 'Extensiones con Polea',
    muscleGroup: 'Tríceps',
    difficulty: 'Fácil',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Aislamiento del tríceps con tensión constante.',
    instructions: [
      'De pie frente a la polea alta con una cuerda o barra.',
      'Agarra el accesorio con las manos y codos pegados al cuerpo.',
      'Empuja hacia abajo extendiendo completamente los codos.',
      'Mantén los codos fijos durante todo el movimiento.',
      'Vuelve de forma controlada a la posición inicial.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  // PIERNAS
  {
    id: 16,
    name: 'Sentadillas',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Ejercicio fundamental para el desarrollo de las piernas.',
    instructions: [
      'Coloca la barra sobre los trapecios, no sobre el cuello.',
      'Pies al ancho de los hombros, ligeramente hacia afuera.',
      'Baja como si fueras a sentarte, manteniendo el pecho alto.',
      'Desciende hasta que los muslos estén paralelos al suelo.',
      'Empuja a través de los talones para volver arriba.'
    ],
    sets: 4,
    reps: '8-12',
    restTime: 120
  },
  {
    id: 17,
    name: 'Zancadas',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Ejercicio unilateral para cuádriceps y glúteos.',
    instructions: [
      'De pie con una mancuerna en cada mano.',
      'Da un paso largo hacia adelante con una pierna.',
      'Baja el cuerpo hasta que ambas rodillas estén a 90 grados.',
      'La rodilla trasera casi debe tocar el suelo.',
      'Empuja con el pie delantero para volver a la posición inicial.'
    ],
    sets: 3,
    reps: '10-12 por pierna',
    restTime: 75
  },
  {
    id: 18,
    name: 'Curl Femoral',
    muscleGroup: 'Piernas',
    difficulty: 'Fácil',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Aislamiento de los isquiotibiales.',
    instructions: [
      'Acuéstate boca abajo en la máquina de curl femoral.',
      'Ajusta el rodillo para que quede sobre los tobillos.',
      'Flexiona las rodillas llevando los talones hacia los glúteos.',
      'Contrae los isquiotibiales en la parte superior.',
      'Baja de forma controlada.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 19,
    name: 'Elevaciones de Gemelos',
    muscleGroup: 'Piernas',
    difficulty: 'Fácil',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Trabajo específico para los gemelos.',
    instructions: [
      'Colócate en la máquina de gemelos o con peso libre.',
      'Pies separados al ancho de las caderas en el borde.',
      'Eleva los talones lo más alto posible.',
      'Mantén la contracción en la parte superior.',
      'Baja lentamente hasta estirar completamente.'
    ],
    sets: 4,
    reps: '15-20',
    restTime: 45
  },
  // ABDOMINALES
  {
    id: 20,
    name: 'Plancha',
    muscleGroup: 'Abdominales',
    difficulty: 'Fácil',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Ejercicio isométrico para core y estabilidad.',
    instructions: [
      'Apoya los antebrazos y las puntas de los pies en el suelo.',
      'Mantén el cuerpo en línea recta desde la cabeza hasta los talones.',
      'Contrae el abdomen y los glúteos.',
      'Mantén la posición sin dejar caer las caderas.',
      'Respira normalmente durante todo el ejercicio.'
    ],
    sets: 3,
    reps: '30-60 segundos',
    restTime: 60
  },
  {
    id: 21,
    name: 'Crunch Abdominal',
    muscleGroup: 'Abdominales',
    difficulty: 'Fácil',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Ejercicio básico para el recto abdominal.',
    instructions: [
      'Acuéstate boca arriba con las rodillas flexionadas.',
      'Coloca las manos detrás de la cabeza sin tirar del cuello.',
      'Eleva el torso contrayendo el abdomen.',
      'Sube solo hasta despegar los omóplatos del suelo.',
      'Baja de forma controlada.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 45
  },
  {
    id: 22,
    name: 'Elevaciones de Piernas',
    muscleGroup: 'Abdominales',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Trabaja la parte inferior del abdomen.',
    instructions: [
      'Acuéstate boca arriba con las piernas extendidas.',
      'Coloca las manos debajo de los glúteos para soporte.',
      'Eleva las piernas juntas hasta formar 90 grados.',
      'Baja de forma controlada sin tocar el suelo.',
      'Mantén la zona lumbar pegada al suelo.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 23,
    name: 'Bicicleta',
    muscleGroup: 'Abdominales',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Ejercicio dinámico para abdomen y oblicuos.',
    instructions: [
      'Acuéstate boca arriba con las manos detrás de la cabeza.',
      'Eleva las piernas con las rodillas flexionadas.',
      'Lleva el codo derecho hacia la rodilla izquierda mientras extiendes la pierna derecha.',
      'Alterna los lados en un movimiento de pedaleo.',
      'Mantén el ritmo constante y controlado.'
    ],
    sets: 3,
    reps: '20-30',
    restTime: 60
  },
  // CARDIO
  {
    id: 24,
    name: 'Burpees',
    muscleGroup: 'Cardio',
    difficulty: 'Alta',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Ejercicio de cuerpo completo de alta intensidad.',
    instructions: [
      'De pie, baja hasta posición de sentadilla.',
      'Coloca las manos en el suelo y salta con los pies hacia atrás a posición de plancha.',
      'Haz una flexión (opcional).',
      'Salta con los pies hacia adelante volviendo a la sentadilla.',
      'Salta hacia arriba con los brazos extendidos.'
    ],
    sets: 3,
    reps: '10-15',
    restTime: 90
  },
  {
    id: 25,
    name: 'Mountain Climbers',
    muscleGroup: 'Cardio',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Cardio dinámico que trabaja core y piernas.',
    instructions: [
      'Comienza en posición de plancha alta.',
      'Lleva una rodilla hacia el pecho.',
      'Alterna rápidamente las piernas en un movimiento de carrera.',
      'Mantén las caderas bajas y el core activado.',
      'Mantén un ritmo rápido pero controlado.'
    ],
    sets: 3,
    reps: '30-45 segundos',
    restTime: 60
  },
  {
    id: 26,
    name: 'Saltos de Tijera',
    muscleGroup: 'Cardio',
    difficulty: 'Fácil',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Ejercicio cardiovascular básico.',
    instructions: [
      'De pie con los pies juntos y brazos a los lados.',
      'Salta separando las piernas y elevando los brazos sobre la cabeza.',
      'Salta de nuevo para volver a la posición inicial.',
      'Mantén un ritmo constante.',
      'Aterriza suavemente sobre las puntas de los pies.'
    ],
    sets: 3,
    reps: '30-60 segundos',
    restTime: 45
  },
  {
    id: 27,
    name: 'Correr en el Sitio',
    muscleGroup: 'Cardio',
    difficulty: 'Fácil',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif',
    description: 'Calentamiento cardiovascular simple.',
    instructions: [
      'De pie, comienza a elevar las rodillas alternadamente.',
      'Mueve los brazos de forma natural como al correr.',
      'Eleva las rodillas a la altura de las caderas.',
      'Mantén un ritmo moderado a rápido.',
      'Respira de forma regular.'
    ],
    sets: 3,
    reps: '60-90 segundos',
    restTime: 45
  }
];
