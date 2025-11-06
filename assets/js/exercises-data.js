const muscleGroups = [
  'Pecho',
  'Espalda',
  'Hombros',
  'Bíceps',
  'Tríceps',
  'Piernas',
  'Glúteos',
  'Abdominales',
  'Antebrazos',
  'Trapecio',
  'Cuello',
  'Pantorrillas',
  'Cardio',
  'Full Body'
];

const exercises = [
  // =============== PECHO (15 ejercicios) ===============
  {
    id: 1,
    name: 'Press de Banca con Barra',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif',
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
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-up.gif',
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
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif',
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
  {
    id: 4,
    name: 'Press Inclinado con Mancuernas',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif',
    description: 'Trabaja el pectoral superior con mayor énfasis.',
    instructions: [
      'Ajusta el banco a 30-45 grados de inclinación.',
      'Siéntate con una mancuerna en cada mano a la altura de los hombros.',
      'Empuja las mancuernas hacia arriba hasta extender los brazos.',
      'Baja de forma controlada hasta la posición inicial.',
      'Mantén los pies firmemente apoyados en el suelo.'
    ],
    sets: 4,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 5,
    name: 'Press Declinado',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Decline-Barbell-Bench-Press.gif',
    description: 'Enfoca el trabajo en el pectoral inferior.',
    instructions: [
      'Ajusta el banco con una declinación de 15-30 grados.',
      'Asegura tus pies en los rodillos del banco.',
      'Agarra la barra y bájala hacia la parte inferior del pecho.',
      'Empuja hacia arriba extendiendo los brazos completamente.',
      'Mantén el control durante todo el movimiento.'
    ],
    sets: 3,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 6,
    name: 'Cruces en Polea Alta',
    muscleGroup: 'Pecho',
    difficulty: 'Fácil',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif',
    description: 'Ejercicio de aislamiento para definición del pecho.',
    instructions: [
      'Colócate en el centro con las poleas a la altura de los hombros.',
      'Agarra las manijas y da un paso adelante.',
      'Con los codos ligeramente flexionados, junta las manos al frente.',
      'Mantén la contracción un segundo en el centro.',
      'Vuelve a la posición inicial de forma controlada.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 7,
    name: 'Flexiones Diamante',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Diamond-Push-up.gif',
    description: 'Variante que enfatiza el trabajo de tríceps y pecho interno.',
    instructions: [
      'Colócate en posición de flexión con las manos juntas formando un diamante.',
      'Los pulgares e índices deben tocarse.',
      'Baja el pecho hacia las manos manteniendo los codos cerca del cuerpo.',
      'Empuja hacia arriba hasta extender los brazos.',
      'Mantén el core activado y la espalda recta.'
    ],
    sets: 3,
    reps: '10-15',
    restTime: 60
  },
  {
    id: 8,
    name: 'Press con Mancuernas en Banco Plano',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Bench-Press.gif',
    description: 'Permite mayor rango de movimiento que con barra.',
    instructions: [
      'Acuéstate en banco plano con una mancuerna en cada mano.',
      'Coloca las mancuernas a la altura del pecho.',
      'Empuja hacia arriba hasta extender los brazos.',
      'Baja de forma controlada hasta sentir estiramiento en el pecho.',
      'Mantén los pies firmemente apoyados.'
    ],
    sets: 4,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 9,
    name: 'Pullover con Mancuerna',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Mancuerna',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Pullover.gif',
    description: 'Trabaja pecho y dorsales simultáneamente.',
    instructions: [
      'Acuéstate perpendicular en un banco, solo apoyando los hombros.',
      'Sostén una mancuerna con ambas manos sobre el pecho.',
      'Baja la mancuerna hacia atrás en un arco amplio.',
      'Siente el estiramiento en el pecho y dorsales.',
      'Vuelve a la posición inicial contrayendo el pecho.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 10,
    name: 'Flexiones Pliométricas',
    muscleGroup: 'Pecho',
    difficulty: 'Alta',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Plyometric-Push-up.gif',
    description: 'Ejercicio explosivo para potencia del pecho.',
    instructions: [
      'Comienza en posición de flexión estándar.',
      'Baja el pecho de forma controlada.',
      'Empuja con fuerza explosiva para despegar las manos del suelo.',
      'Aplaude en el aire si es posible.',
      'Aterriza suavemente y repite.'
    ],
    sets: 3,
    reps: '8-12',
    restTime: 120
  },
  {
    id: 11,
    name: 'Flexiones Archer',
    muscleGroup: 'Pecho',
    difficulty: 'Alta',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Archer-Push-up.gif',
    description: 'Ejercicio unilateral avanzado para pecho.',
    instructions: [
      'Colócate en posición de flexión con las manos bien separadas.',
      'Baja hacia un lado, doblando solo ese codo.',
      'El otro brazo permanece extendido.',
      'Empuja hacia arriba y repite hacia el otro lado.',
      'Alterna los lados en cada repetición.'
    ],
    sets: 3,
    reps: '6-10 por lado',
    restTime: 90
  },
  {
    id: 12,
    name: 'Press de Pecho en Máquina',
    muscleGroup: 'Pecho',
    difficulty: 'Fácil',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Press-Machine.gif',
    description: 'Ejercicio guiado ideal para principiantes.',
    instructions: [
      'Ajusta el asiento para que las manijas estén a la altura del pecho.',
      'Agarra las manijas con las palmas hacia abajo.',
      'Empuja hacia adelante extendiendo los brazos.',
      'Vuelve de forma controlada sin que las placas se toquen.',
      'Mantén la espalda pegada al respaldo.'
    ],
    sets: 3,
    reps: '10-15',
    restTime: 60
  },
  {
    id: 13,
    name: 'Fondos en Paralelas (Pecho)',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Paralelas',
    image: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Dips.gif',
    description: 'Fondos con inclinación hacia adelante para enfatizar el pecho.',
    instructions: [
      'Agarra las paralelas y elévate con los brazos extendidos.',
      'Inclínate hacia adelante unos 30 grados.',
      'Baja el cuerpo flexionando los codos hasta 90 grados.',
      'Los codos deben abrirse ligeramente hacia los lados.',
      'Empuja hacia arriba hasta la posición inicial.'
    ],
    sets: 3,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 14,
    name: 'Flexiones Declinadas',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Banco',
    image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Decline-Push-up.gif',
    description: 'Variante que aumenta la dificultad elevando los pies.',
    instructions: [
      'Coloca los pies sobre un banco o superficie elevada.',
      'Las manos en el suelo al ancho de los hombros.',
      'Mantén el cuerpo recto desde los pies hasta la cabeza.',
      'Baja el pecho hacia el suelo.',
      'Empuja hacia arriba manteniendo la forma.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 15,
    name: 'Aperturas en Polea Baja',
    muscleGroup: 'Pecho',
    difficulty: 'Fácil',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Fly.gif',
    description: 'Trabaja el pectoral superior con tensión constante.',
    instructions: [
      'Colócate en el centro con las poleas en posición baja.',
      'Agarra las manijas con las palmas hacia arriba.',
      'Eleva los brazos hacia arriba y al centro.',
      'Junta las manos sobre la cabeza.',
      'Baja de forma controlada manteniendo los codos ligeramente flexionados.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },

  // =============== ESPALDA (15 ejercicios) ===============
  {
    id: 16,
    name: 'Dominadas',
    muscleGroup: 'Espalda',
    difficulty: 'Alta',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif',
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
    id: 17,
    name: 'Remo con Barra',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1584380931214-dbb5b72e7fd0?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Row.gif',
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
    id: 18,
    name: 'Peso Muerto',
    muscleGroup: 'Espalda',
    difficulty: 'Alta',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif',
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
  {
    id: 19,
    name: 'Remo con Mancuerna a Una Mano',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'Mancuerna',
    image: 'https://images.unsplash.com/photo-1584380931214-dbb5b72e7fd0?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/One-Arm-Dumbbell-Row.gif',
    description: 'Permite aislar cada lado de la espalda.',
    instructions: [
      'Apoya una rodilla y una mano en un banco.',
      'Con la otra mano sostén la mancuerna.',
      'Tira de la mancuerna hacia la cadera.',
      'Aprieta el omóplato al final del movimiento.',
      'Baja de forma controlada y repite.'
    ],
    sets: 3,
    reps: '10-12 por lado',
    restTime: 75
  },
  {
    id: 20,
    name: 'Jalón al Pecho en Polea',
    muscleGroup: 'Espalda',
    difficulty: 'Fácil',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif',
    description: 'Alternativa a las dominadas, ideal para principiantes.',
    instructions: [
      'Siéntate en la máquina y ajusta las almohadillas para las piernas.',
      'Agarra la barra con las manos más anchas que los hombros.',
      'Tira de la barra hacia el pecho arqueando ligeramente la espalda.',
      'Aprieta los omóplatos en la parte baja del movimiento.',
      'Sube la barra de forma controlada.'
    ],
    sets: 3,
    reps: '10-15',
    restTime: 75
  },
  {
    id: 21,
    name: 'Remo en Polea Baja',
    muscleGroup: 'Espalda',
    difficulty: 'Fácil',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1584380931214-dbb5b72e7fd0?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif',
    description: 'Ejercicio de remo sentado con tensión constante.',
    instructions: [
      'Siéntate en la máquina con los pies apoyados.',
      'Agarra la manija con ambas manos.',
      'Tira hacia el abdomen manteniendo la espalda recta.',
      'Aprieta los omóplatos juntos al final.',
      'Vuelve de forma controlada sin dejar que las placas se toquen.'
    ],
    sets: 3,
    reps: '10-15',
    restTime: 75
  },
  {
    id: 22,
    name: 'Dominadas Supinas (Chin-ups)',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Chin-up.gif',
    description: 'Variante con palmas hacia ti, mayor activación de bíceps.',
    instructions: [
      'Agarra la barra con las palmas mirando hacia ti.',
      'Las manos deben estar al ancho de los hombros o menos.',
      'Tira hacia arriba hasta que la barbilla supere la barra.',
      'Mantén los codos cerca del cuerpo.',
      'Baja de forma controlada.'
    ],
    sets: 3,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 23,
    name: 'Peso Muerto Rumano',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Romanian-Deadlift.gif',
    description: 'Enfatiza los isquiotibiales y espalda baja.',
    instructions: [
      'De pie con la barra al frente y rodillas ligeramente flexionadas.',
      'Inclínate hacia adelante desde las caderas.',
      'Baja la barra por las piernas manteniendo la espalda recta.',
      'Siente el estiramiento en los isquiotibiales.',
      'Vuelve a la posición inicial extendiendo las caderas.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 90
  },
  {
    id: 24,
    name: 'Face Pulls',
    muscleGroup: 'Espalda',
    difficulty: 'Fácil',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1584380931214-dbb5b72e7fd0?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif',
    description: 'Excelente para la salud de los hombros y trapecio medio.',
    instructions: [
      'Ajusta la polea a la altura de la cara.',
      'Agarra la cuerda con ambas manos.',
      'Tira hacia la cara separando las manos.',
      'Los codos deben ir hacia atrás y arriba.',
      'Aprieta los omóplatos al final del movimiento.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 60
  },
  {
    id: 25,
    name: 'Remo Pendlay',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1584380931214-dbb5b72e7fd0?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pendlay-Row.gif',
    description: 'Variante explosiva del remo con barra.',
    instructions: [
      'La barra comienza en el suelo en cada repetición.',
      'Inclínate hasta que el torso esté paralelo al suelo.',
      'Tira explosivamente de la barra hacia el pecho.',
      'Baja la barra controladamente hasta el suelo.',
      'Pausa brevemente antes de la siguiente repetición.'
    ],
    sets: 4,
    reps: '6-8',
    restTime: 120
  },
  {
    id: 26,
    name: 'Pulldown con Agarre Cerrado',
    muscleGroup: 'Espalda',
    difficulty: 'Fácil',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Lat-Pulldown.gif',
    description: 'Trabaja el grosor de la espalda media.',
    instructions: [
      'Usa un agarre en V o manija cerrada.',
      'Siéntate y asegura las rodillas bajo las almohadillas.',
      'Tira hacia el pecho arqueando ligeramente la espalda.',
      'Aprieta los omóplatos juntos.',
      'Sube de forma controlada.'
    ],
    sets: 3,
    reps: '10-15',
    restTime: 75
  },
  {
    id: 27,
    name: 'Hiperextensiones',
    muscleGroup: 'Espalda',
    difficulty: 'Fácil',
    equipment: 'Banco romano',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hyperextension.gif',
    description: 'Fortalece la espalda baja y glúteos.',
    instructions: [
      'Colócate en el banco romano con las caderas en el borde.',
      'Cruza los brazos sobre el pecho.',
      'Baja el torso de forma controlada.',
      'Sube hasta que el cuerpo forme una línea recta.',
      'No hiperextendas la espalda más allá de la horizontal.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 60
  },
  {
    id: 28,
    name: 'T-Bar Row',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'T-Bar',
    image: 'https://images.unsplash.com/photo-1584380931214-dbb5b72e7fd0?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/T-Bar-Row.gif',
    description: 'Excelente para el grosor de la espalda media.',
    instructions: [
      'Colócate sobre la T-bar con los pies a ambos lados.',
      'Agarra las manijas y mantén la espalda recta.',
      'Tira de la barra hacia el pecho.',
      'Aprieta los omóplatos al final del movimiento.',
      'Baja de forma controlada.'
    ],
    sets: 4,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 29,
    name: 'Encogimientos con Barra',
    muscleGroup: 'Espalda',
    difficulty: 'Fácil',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1584380931214-dbb5b72e7fd0?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Shrug.gif',
    description: 'Aísla y fortalece los trapecios.',
    instructions: [
      'De pie con la barra al frente, brazos extendidos.',
      'Eleva los hombros hacia las orejas.',
      'Aprieta los trapecios en la parte superior.',
      'Mantén los brazos rectos durante todo el movimiento.',
      'Baja de forma controlada.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 30,
    name: 'Pullover en Polea',
    muscleGroup: 'Espalda',
    difficulty: 'Fácil',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Pullover.gif',
    description: 'Trabaja los dorsales con tensión constante.',
    instructions: [
      'De pie frente a la polea alta con barra recta.',
      'Agarra la barra con las manos separadas.',
      'Con los brazos casi rectos, baja la barra hacia los muslos.',
      'Mantén la contracción en los dorsales.',
      'Vuelve de forma controlada.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },

  // =============== HOMBROS (12 ejercicios) ===============
  {
    id: 31,
    name: 'Press Militar con Barra',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Military-Press.gif',
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
    id: 32,
    name: 'Elevaciones Laterales',
    muscleGroup: 'Hombros',
    difficulty: 'Fácil',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif',
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
    id: 33,
    name: 'Elevaciones Frontales',
    muscleGroup: 'Hombros',
    difficulty: 'Fácil',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Front-Raise.gif',
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
  {
    id: 34,
    name: 'Press con Mancuernas Sentado',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Dumbbell-Press.gif',
    description: 'Versión sentada que aísla mejor los hombros.',
    instructions: [
      'Siéntate en un banco con respaldo vertical.',
      'Sostén las mancuernas a la altura de los hombros.',
      'Empuja hacia arriba hasta extender los brazos.',
      'Las mancuernas pueden tocarse ligeramente arriba.',
      'Baja de forma controlada.'
    ],
    sets: 4,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 35,
    name: 'Remo al Cuello',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Upright-Row.gif',
    description: 'Trabaja deltoides y trapecios simultáneamente.',
    instructions: [
      'De pie con la barra al frente, agarre estrecho.',
      'Tira de la barra hacia arriba por el frente del cuerpo.',
      'Los codos deben subir más alto que las manos.',
      'Lleva la barra hasta la altura del cuello.',
      'Baja de forma controlada.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 36,
    name: 'Pájaros con Mancuernas',
    muscleGroup: 'Hombros',
    difficulty: 'Fácil',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Fly.gif',
    description: 'Aísla el deltoides posterior.',
    instructions: [
      'Inclínate hacia adelante con la espalda recta.',
      'Con una mancuerna en cada mano, brazos colgando.',
      'Eleva los brazos hacia los lados en un arco.',
      'Aprieta los omóplatos al final del movimiento.',
      'Baja de forma controlada.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 37,
    name: 'Press Arnold',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Arnold-Press.gif',
    description: 'Variante que trabaja todo el deltoides con rotación.',
    instructions: [
      'Siéntate con las mancuernas al frente, palmas hacia ti.',
      'Al subir, rota las muñecas hacia afuera.',
      'Termina con las palmas hacia adelante arriba.',
      'Invierte el movimiento al bajar.',
      'Controla la rotación en todo momento.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 38,
    name: 'Elevaciones Laterales en Polea',
    muscleGroup: 'Hombros',
    difficulty: 'Fácil',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Lateral-Raise.gif',
    description: 'Tensión constante en el deltoides lateral.',
    instructions: [
      'De pie al lado de una polea baja.',
      'Agarra la manija con la mano más alejada.',
      'Eleva el brazo lateralmente hasta la altura del hombro.',
      'Mantén el codo ligeramente flexionado.',
      'Baja de forma controlada.'
    ],
    sets: 3,
    reps: '12-15 por brazo',
    restTime: 60
  },
  {
    id: 39,
    name: 'Press con Barra por Detrás',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Behind-Neck-Press.gif',
    description: 'Variante que enfatiza el deltoides posterior.',
    instructions: [
      'Sentado, coloca la barra detrás del cuello.',
      'Agarra con las manos más anchas que los hombros.',
      'Empuja hacia arriba hasta extender los brazos.',
      'Baja controladamente detrás del cuello.',
      'Requiere buena movilidad de hombros.'
    ],
    sets: 3,
    reps: '8-10',
    restTime: 90
  },
  {
    id: 40,
    name: 'Elevaciones en W',
    muscleGroup: 'Hombros',
    difficulty: 'Fácil',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/W-Raise.gif',
    description: 'Trabaja deltoides posterior y trapecio medio.',
    instructions: [
      'Inclínate hacia adelante 45 grados.',
      'Con mancuernas ligeras, eleva los brazos en forma de W.',
      'Los codos van hacia arriba y atrás.',
      'Rota externamente los hombros.',
      'Mantén la contracción un segundo.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 60
  },
  {
    id: 41,
    name: 'Elevaciones Frontales con Disco',
    muscleGroup: 'Hombros',
    difficulty: 'Fácil',
    equipment: 'Disco',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Plate-Front-Raise.gif',
    description: 'Variante con disco para el deltoides frontal.',
    instructions: [
      'Sostén un disco con ambas manos al frente.',
      'Mantén los brazos extendidos.',
      'Eleva el disco hasta la altura de los hombros.',
      'No uses impulso del cuerpo.',
      'Baja de forma controlada.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 42,
    name: 'Press Pike',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pike-Push-up.gif',
    description: 'Versión de peso corporal para hombros.',
    instructions: [
      'Comienza en posición de plancha.',
      'Eleva las caderas formando una V invertida.',
      'Baja la cabeza hacia el suelo doblando los codos.',
      'Empuja hacia arriba hasta extender los brazos.',
      'Mantén las piernas lo más rectas posible.'
    ],
    sets: 3,
    reps: '10-15',
    restTime: 75
  },

  // =============== BÍCEPS (10 ejercicios) ===============
  {
    id: 43,
    name: 'Curl con Barra',
    muscleGroup: 'Bíceps',
    difficulty: 'Fácil',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif',
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
    id: 44,
    name: 'Curl con Mancuernas Alternado',
    muscleGroup: 'Bíceps',
    difficulty: 'Fácil',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Alternate-Bicep-Curl.gif',
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
    id: 45,
    name: 'Curl Martillo',
    muscleGroup: 'Bíceps',
    difficulty: 'Fácil',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif',
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
  {
    id: 46,
    name: 'Curl Concentrado',
    muscleGroup: 'Bíceps',
    difficulty: 'Fácil',
    equipment: 'Mancuerna',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Concentration-Curl.gif',
    description: 'Máximo aislamiento del bíceps.',
    instructions: [
      'Sentado, apoya el codo en la parte interna del muslo.',
      'Con una mancuerna, extiende el brazo completamente.',
      'Flexiona el codo llevando la mancuerna hacia el hombro.',
      'Mantén la contracción en la parte superior.',
      'Baja lentamente y repite.'
    ],
    sets: 3,
    reps: '10-12 por brazo',
    restTime: 60
  },
  {
    id: 47,
    name: 'Curl en Banco Scott',
    muscleGroup: 'Bíceps',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Preacher-Curl.gif',
    description: 'Aísla el bíceps eliminando impulso.',
    instructions: [
      'Siéntate en el banco Scott con los brazos sobre el pad.',
      'Agarra la barra con las palmas hacia arriba.',
      'Flexiona los codos llevando la barra hacia los hombros.',
      'No despegues los brazos del pad.',
      'Baja controladamente hasta casi extender completamente.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 48,
    name: 'Curl con Polea Baja',
    muscleGroup: 'Bíceps',
    difficulty: 'Fácil',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Curl.gif',
    description: 'Tensión constante en el bíceps.',
    instructions: [
      'De pie frente a la polea baja con barra recta.',
      'Agarra la barra con las palmas hacia arriba.',
      'Mantén los codos pegados a los costados.',
      'Flexiona los codos llevando la barra hacia los hombros.',
      'Baja de forma controlada sin dejar que las placas se toquen.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 49,
    name: 'Curl 21',
    muscleGroup: 'Bíceps',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif',
    description: 'Método avanzado con 21 repeticiones divididas.',
    instructions: [
      '7 repeticiones de la mitad inferior (abajo hasta mitad).',
      '7 repeticiones de la mitad superior (mitad hasta arriba).',
      '7 repeticiones completas.',
      'Todo sin descanso entre las fases.',
      'Usa un peso más ligero que en curl normal.'
    ],
    sets: 2,
    reps: '21 (7+7+7)',
    restTime: 120
  },
  {
    id: 50,
    name: 'Curl Invertido',
    muscleGroup: 'Bíceps',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Reverse-Curl.gif',
    description: 'Trabaja bíceps y antebrazos con agarre prono.',
    instructions: [
      'De pie con la barra, agarre prono (palmas hacia abajo).',
      'Mantén los codos pegados a los costados.',
      'Flexiona los codos llevando la barra hacia arriba.',
      'Mantén las muñecas rectas durante todo el movimiento.',
      'Baja de forma controlada.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 60
  },
  {
    id: 51,
    name: 'Curl Araña',
    muscleGroup: 'Bíceps',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Spider-Curl.gif',
    description: 'Variante del curl Scott con mayor aislamiento.',
    instructions: [
      'Inclínate sobre un banco inclinado con el pecho apoyado.',
      'Deja los brazos colgando completamente verticales.',
      'Flexiona los codos levantando la barra.',
      'Mantén los codos fijos en su posición.',
      'Baja controladamente hasta extensión completa.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 52,
    name: 'Curl Zottman',
    muscleGroup: 'Bíceps',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Zottman-Curl.gif',
    description: 'Combina curl supino y prono en un movimiento.',
    instructions: [
      'De pie con mancuernas, palmas hacia arriba.',
      'Flexiona los codos llevando las mancuernas hacia los hombros.',
      'En la parte superior, rota las muñecas (palmas hacia abajo).',
      'Baja las mancuernas con este agarre prono.',
      'En la parte baja, vuelve a rotar a agarre supino.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 60
  },

  // =============== TRÍCEPS (10 ejercicios) ===============
  {
    id: 53,
    name: 'Fondos en Paralelas (Tríceps)',
    muscleGroup: 'Tríceps',
    difficulty: 'Media',
    equipment: 'Paralelas',
    image: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Dips.gif',
    description: 'Ejercicio compuesto para tríceps y pecho.',
    instructions: [
      'Agarra las paralelas y elévate con los brazos extendidos.',
      'Mantén el cuerpo vertical (no inclinado).',
      'Baja el cuerpo flexionando los codos hasta 90 grados.',
      'Los codos deben ir hacia atrás, no a los lados.',
      'Empuja hacia arriba extendiendo los brazos completamente.'
    ],
    sets: 3,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 54,
    name: 'Press Francés',
    muscleGroup: 'Tríceps',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Triceps-Extension.gif',
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
    id: 55,
    name: 'Extensiones con Polea Alta',
    muscleGroup: 'Tríceps',
    difficulty: 'Fácil',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Pushdown.gif',
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
  {
    id: 56,
    name: 'Extensión sobre Cabeza con Mancuerna',
    muscleGroup: 'Tríceps',
    difficulty: 'Fácil',
    equipment: 'Mancuerna',
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Overhead-Triceps-Extension.gif',
    description: 'Estira completamente el tríceps.',
    instructions: [
      'De pie o sentado, sostén una mancuerna sobre la cabeza con ambas manos.',
      'Baja la mancuerna detrás de la cabeza flexionando los codos.',
      'Los codos deben permanecer cerca de la cabeza.',
      'Extiende los brazos llevando la mancuerna arriba.',
      'Contrae el tríceps en la parte superior.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 60
  },
  {
    id: 57,
    name: 'Patada de Tríceps',
    muscleGroup: 'Tríceps',
    difficulty: 'Fácil',
    equipment: 'Mancuerna',
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Kickback.gif',
    description: 'Aislamiento unilateral del tríceps.',
    instructions: [
      'Apóyate en un banco con una mano y una rodilla.',
      'Con la otra mano sostén una mancuerna.',
      'El brazo debe estar paralelo al cuerpo con el codo doblado.',
      'Extiende el codo llevando la mancuerna hacia atrás.',
      'Mantén la contracción un segundo y vuelve.'
    ],
    sets: 3,
    reps: '12-15 por brazo',
    restTime: 60
  },
  {
    id: 58,
    name: 'Press Cerrado con Barra',
    muscleGroup: 'Tríceps',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif',
    description: 'Ejercicio compuesto enfocado en tríceps.',
    instructions: [
      'Acuéstate en banco plano con agarre estrecho (manos cerca).',
      'Baja la barra hacia el pecho inferior.',
      'Mantén los codos cerca del cuerpo.',
      'Empuja hacia arriba extendiendo los brazos.',
      'Enfoca la tensión en los tríceps.'
    ],
    sets: 4,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 59,
    name: 'Extensiones con Cuerda',
    muscleGroup: 'Tríceps',
    difficulty: 'Fácil',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Rope-Pushdown.gif',
    description: 'Permite mayor rango de movimiento con la cuerda.',
    instructions: [
      'De pie frente a la polea alta con cuerda.',
      'Agarra los extremos de la cuerda.',
      'Empuja hacia abajo separando los extremos al final.',
      'Rota las muñecas hacia afuera en la parte baja.',
      'Mantén la contracción y vuelve controladamente.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 60,
    name: 'Fondos en Banco',
    muscleGroup: 'Tríceps',
    difficulty: 'Fácil',
    equipment: 'Banco',
    image: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bench-Dips.gif',
    description: 'Ejercicio con peso corporal para tríceps.',
    instructions: [
      'Apoya las manos en el borde de un banco detrás de ti.',
      'Pies apoyados en el suelo o en otro banco.',
      'Baja el cuerpo flexionando los codos.',
      'Los codos deben ir hacia atrás, no a los lados.',
      'Empuja hacia arriba hasta extender los brazos.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 60
  },
  {
    id: 61,
    name: 'Press JM',
    muscleGroup: 'Tríceps',
    difficulty: 'Alta',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/JM-Press.gif',
    description: 'Híbrido entre press cerrado y extensión.',
    instructions: [
      'Acuéstate en banco con agarre al ancho de los hombros.',
      'Baja la barra hacia el cuello/pecho superior.',
      'Los codos se flexionan mientras bajan.',
      'Empuja hacia arriba y ligeramente hacia atrás.',
      'Mantén tensión constante en los tríceps.'
    ],
    sets: 3,
    reps: '8-10',
    restTime: 90
  },
  {
    id: 62,
    name: 'Extensión con Polea por Encima de la Cabeza',
    muscleGroup: 'Tríceps',
    difficulty: 'Fácil',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Overhead-Extension.gif',
    description: 'Estira completamente la cabeza larga del tríceps.',
    instructions: [
      'De espaldas a la polea alta, agarra la cuerda.',
      'Da un paso adelante con los brazos sobre la cabeza.',
      'Extiende los codos llevando las manos hacia adelante.',
      'Mantén los codos cerca de la cabeza.',
      'Vuelve controladamente a la posición de estiramiento.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },

  // =============== PIERNAS (12 ejercicios) ===============
  {
    id: 63,
    name: 'Sentadillas con Barra',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Squat.gif',
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
    id: 64,
    name: 'Prensa de Piernas',
    muscleGroup: 'Piernas',
    difficulty: 'Fácil',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Press.gif',
    description: 'Alternativa segura a las sentadillas.',
    instructions: [
      'Siéntate en la máquina con la espalda pegada al respaldo.',
      'Coloca los pies al ancho de los hombros en la plataforma.',
      'Desbloquea los seguros y baja la plataforma.',
      'Baja hasta que las rodillas formen 90 grados.',
      'Empuja hacia arriba sin bloquear completamente las rodillas.'
    ],
    sets: 4,
    reps: '10-15',
    restTime: 90
  },
  {
    id: 65,
    name: 'Zancadas con Mancuernas',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif',
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
    id: 66,
    name: 'Extensiones de Cuádriceps',
    muscleGroup: 'Piernas',
    difficulty: 'Fácil',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Extension.gif',
    description: 'Aislamiento del cuádriceps.',
    instructions: [
      'Siéntate en la máquina con la espalda apoyada.',
      'Ajusta el rodillo para que quede sobre los tobillos.',
      'Extiende las piernas hasta que estén completamente rectas.',
      'Mantén la contracción un segundo en la parte superior.',
      'Baja de forma controlada sin que las placas se toquen.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 67,
    name: 'Curl Femoral Acostado',
    muscleGroup: 'Piernas',
    difficulty: 'Fácil',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Curl.gif',
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
    id: 68,
    name: 'Elevaciones de Gemelos de Pie',
    muscleGroup: 'Piernas',
    difficulty: 'Fácil',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif',
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
  {
    id: 69,
    name: 'Hack Squat',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hack-Squat.gif',
    description: 'Variante de sentadilla en máquina.',
    instructions: [
      'Colócate en la máquina hack con la espalda apoyada.',
      'Pies al ancho de los hombros en la plataforma.',
      'Desbloquea los seguros y baja el cuerpo.',
      'Baja hasta que las rodillas formen 90 grados.',
      'Empuja hacia arriba a través de los talones.'
    ],
    sets: 4,
    reps: '10-12',
    restTime: 90
  },
  {
    id: 70,
    name: 'Sentadilla Búlgara',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bulgarian-Split-Squat.gif',
    description: 'Ejercicio unilateral avanzado para piernas.',
    instructions: [
      'Coloca un pie en un banco detrás de ti.',
      'Con el otro pie adelante, sostén mancuernas.',
      'Baja el cuerpo hasta que la rodilla delantera forme 90 grados.',
      'La rodilla trasera casi toca el suelo.',
      'Empuja hacia arriba con la pierna delantera.'
    ],
    sets: 3,
    reps: '10-12 por pierna',
    restTime: 75
  },
  {
    id: 71,
    name: 'Sentadilla Frontal',
    muscleGroup: 'Piernas',
    difficulty: 'Alta',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Front-Squat.gif',
    description: 'Mayor énfasis en cuádriceps y core.',
    instructions: [
      'Coloca la barra sobre los deltoides frontales.',
      'Los codos deben estar altos y hacia adelante.',
      'Mantén el torso más vertical que en sentadilla normal.',
      'Baja manteniendo el pecho alto y los codos arriba.',
      'Empuja hacia arriba manteniendo la forma.'
    ],
    sets: 4,
    reps: '8-10',
    restTime: 120
  },
  {
    id: 72,
    name: 'Sentadilla Sumo',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Sumo-Squat.gif',
    description: 'Mayor activación de aductores y glúteos.',
    instructions: [
      'Pies mucho más separados que en sentadilla normal.',
      'Puntas de los pies hacia afuera unos 45 grados.',
      'Baja manteniendo las rodillas alineadas con los pies.',
      'Desciende hasta que los muslos estén paralelos.',
      'Empuja hacia arriba apretando los glúteos.'
    ],
    sets: 4,
    reps: '10-12',
    restTime: 90
  },
  {
    id: 73,
    name: 'Step-Ups con Mancuernas',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Step-Up.gif',
    description: 'Ejercicio funcional para piernas y glúteos.',
    instructions: [
      'De pie frente a un banco o step con mancuernas.',
      'Sube un pie sobre la plataforma.',
      'Empuja a través del talón para subir completamente.',
      'La otra pierna sigue hasta quedar de pie sobre el step.',
      'Baja de forma controlada y alterna las piernas.'
    ],
    sets: 3,
    reps: '10-12 por pierna',
    restTime: 75
  },
  {
    id: 74,
    name: 'Peso Muerto a Pierna Rígida',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Stiff-Leg-Deadlift.gif',
    description: 'Enfatiza isquiotibiales y glúteos.',
    instructions: [
      'De pie con la barra, piernas casi completamente rectas.',
      'Inclínate hacia adelante desde las caderas.',
      'Baja la barra por las piernas manteniendo la espalda recta.',
      'Siente el estiramiento en los isquiotibiales.',
      'Vuelve a la posición inicial extendiendo las caderas.'
    ],
    sets: 4,
    reps: '10-12',
    restTime: 90
  },

  // =============== GLÚTEOS (8 ejercicios) ===============
  {
    id: 75,
    name: 'Hip Thrust con Barra',
    muscleGroup: 'Glúteos',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif',
    description: 'Máxima activación de los glúteos.',
    instructions: [
      'Apoya la espalda superior en un banco.',
      'Coloca la barra sobre las caderas con almohadilla.',
      'Pies al ancho de los hombros, rodillas dobladas.',
      'Empuja las caderas hacia arriba hasta formar línea recta.',
      'Aprieta los glúteos en la parte superior y baja.'
    ],
    sets: 4,
    reps: '10-15',
    restTime: 90
  },
  {
    id: 76,
    name: 'Patada de Glúteo en Polea',
    muscleGroup: 'Glúteos',
    difficulty: 'Fácil',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Glute-Kickback.gif',
    description: 'Aislamiento del glúteo mayor.',
    instructions: [
      'De pie frente a la polea baja con correa en el tobillo.',
      'Apóyate en la máquina para estabilidad.',
      'Extiende la pierna hacia atrás manteniendo la rodilla recta.',
      'Aprieta el glúteo en la extensión máxima.',
      'Vuelve de forma controlada sin tocar el suelo.'
    ],
    sets: 3,
    reps: '15-20 por pierna',
    restTime: 60
  },
  {
    id: 77,
    name: 'Puente de Glúteos',
    muscleGroup: 'Glúteos',
    difficulty: 'Fácil',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Glute-Bridge.gif',
    description: 'Ejercicio básico para activar glúteos.',
    instructions: [
      'Acuéstate boca arriba con rodillas flexionadas.',
      'Pies al ancho de las caderas, planos en el suelo.',
      'Empuja las caderas hacia arriba.',
      'Aprieta los glúteos en la parte superior.',
      'Baja lentamente sin tocar completamente el suelo.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 60
  },
  {
    id: 78,
    name: 'Abducción de Cadera en Máquina',
    muscleGroup: 'Glúteos',
    difficulty: 'Fácil',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hip-Abduction-Machine.gif',
    description: 'Trabaja glúteo medio y menor.',
    instructions: [
      'Siéntate en la máquina con la espalda apoyada.',
      'Coloca las piernas en las almohadillas.',
      'Abre las piernas separando las almohadillas.',
      'Mantén la contracción un segundo.',
      'Vuelve de forma controlada.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 60
  },
  {
    id: 79,
    name: 'Zancada Inversa',
    muscleGroup: 'Glúteos',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Reverse-Lunge.gif',
    description: 'Mayor énfasis en glúteos que la zancada frontal.',
    instructions: [
      'De pie con mancuernas a los lados.',
      'Da un paso hacia atrás con una pierna.',
      'Baja hasta que ambas rodillas formen 90 grados.',
      'Empuja con el pie delantero para volver.',
      'Alterna las piernas.'
    ],
    sets: 3,
    reps: '10-12 por pierna',
    restTime: 75
  },
  {
    id: 80,
    name: 'Elevación de Glúteo a Cuatro Patas',
    muscleGroup: 'Glúteos',
    difficulty: 'Fácil',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Donkey-Kick.gif',
    description: 'Aislamiento del glúteo mayor.',
    instructions: [
      'Colócate a cuatro patas con manos bajo los hombros.',
      'Mantén la rodilla doblada a 90 grados.',
      'Eleva la pierna hacia arriba empujando el talón al techo.',
      'Aprieta el glúteo en la parte superior.',
      'Baja sin tocar el suelo y repite.'
    ],
    sets: 3,
    reps: '15-20 por pierna',
    restTime: 60
  },
  {
    id: 81,
    name: 'Peso Muerto Sumo',
    muscleGroup: 'Glúteos',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Sumo-Deadlift.gif',
    description: 'Mayor activación de glúteos y aductores.',
    instructions: [
      'Pies muy separados, puntas hacia afuera.',
      'Agarra la barra con las manos entre las piernas.',
      'Mantén la espalda recta y el pecho alto.',
      'Levanta la barra extendiendo caderas y rodillas.',
      'Aprieta los glúteos en la parte superior.'
    ],
    sets: 4,
    reps: '8-12',
    restTime: 120
  },
  {
    id: 82,
    name: 'Monster Walks con Banda',
    muscleGroup: 'Glúteos',
    difficulty: 'Fácil',
    equipment: 'Banda elástica',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Monster-Walk.gif',
    description: 'Activa glúteo medio, ideal para calentamiento.',
    instructions: [
      'Coloca una banda elástica alrededor de las piernas.',
      'Adopta posición de semi-sentadilla.',
      'Da pasos laterales manteniendo tensión en la banda.',
      'Luego da pasos hacia adelante y atrás.',
      'Mantén las rodillas separadas durante todo el ejercicio.'
    ],
    sets: 3,
    reps: '15-20 pasos por dirección',
    restTime: 45
  },

  // =============== ABDOMINALES (12 ejercicios) ===============
  {
    id: 83,
    name: 'Plancha',
    muscleGroup: 'Abdominales',
    difficulty: 'Fácil',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif',
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
    id: 84,
    name: 'Crunch Abdominal',
    muscleGroup: 'Abdominales',
    difficulty: 'Fácil',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Crunch.gif',
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
    id: 85,
    name: 'Elevaciones de Piernas',
    muscleGroup: 'Abdominales',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Raise.gif',
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
    id: 86,
    name: 'Bicicleta',
    muscleGroup: 'Abdominales',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bicycle-Crunch.gif',
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
  {
    id: 87,
    name: 'Plancha Lateral',
    muscleGroup: 'Abdominales',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Side-Plank.gif',
    description: 'Trabaja los oblicuos y estabilidad lateral.',
    instructions: [
      'Apóyate de lado sobre un antebrazo.',
      'El codo debe estar directamente bajo el hombro.',
      'Eleva las caderas formando una línea recta.',
      'El brazo libre puede ir a la cadera o arriba.',
      'Mantén la posición sin dejar caer las caderas.'
    ],
    sets: 3,
    reps: '30-45 segundos por lado',
    restTime: 60
  },
  {
    id: 88,
    name: 'Russian Twist',
    muscleGroup: 'Abdominales',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif',
    description: 'Rotación para oblicuos y abdomen.',
    instructions: [
      'Siéntate con las rodillas flexionadas y los pies elevados.',
      'Inclina el torso hacia atrás unos 45 grados.',
      'Junta las manos al frente.',
      'Rota el torso hacia un lado y luego al otro.',
      'Puedes sostener una mancuerna o disco para más dificultad.'
    ],
    sets: 3,
    reps: '20-30 rotaciones',
    restTime: 60
  },
  {
    id: 89,
    name: 'Mountain Climbers',
    muscleGroup: 'Abdominales',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-Climber.gif',
    description: 'Ejercicio dinámico para core y cardio.',
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
    id: 90,
    name: 'Rodillo Abdominal',
    muscleGroup: 'Abdominales',
    difficulty: 'Alta',
    equipment: 'Rueda abdominal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Ab-Wheel-Rollout.gif',
    description: 'Ejercicio avanzado para fuerza del core.',
    instructions: [
      'Arrodíllate con la rueda abdominal en las manos.',
      'Rueda hacia adelante extendiendo el cuerpo.',
      'Ve tan lejos como puedas manteniendo el core activado.',
      'No dejes que la espalda baja se hunda.',
      'Vuelve a la posición inicial usando el abdomen.'
    ],
    sets: 3,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 91,
    name: 'Crunch con Polea',
    muscleGroup: 'Abdominales',
    difficulty: 'Media',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crunch.gif',
    description: 'Resistencia constante para el abdomen.',
    instructions: [
      'Arrodíllate frente a la polea alta con cuerda.',
      'Agarra la cuerda a los lados de la cabeza.',
      'Flexiona el torso hacia abajo contrayendo el abdomen.',
      'La cadera permanece fija, solo se mueve el torso.',
      'Vuelve de forma controlada a la posición inicial.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 60
  },
  {
    id: 92,
    name: 'Dead Bug',
    muscleGroup: 'Abdominales',
    difficulty: 'Fácil',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Bug.gif',
    description: 'Coordinación y estabilidad del core.',
    instructions: [
      'Acuéstate boca arriba con brazos extendidos hacia arriba.',
      'Piernas elevadas con rodillas a 90 grados.',
      'Baja un brazo y la pierna opuesta al mismo tiempo.',
      'Vuelve a la posición inicial y alterna los lados.',
      'Mantén la zona lumbar pegada al suelo.'
    ],
    sets: 3,
    reps: '10-12 por lado',
    restTime: 60
  },
  {
    id: 93,
    name: 'Tijeras Verticales',
    muscleGroup: 'Abdominales',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Vertical-Leg-Crunch.gif',
    description: 'Trabaja abdomen superior con piernas elevadas.',
    instructions: [
      'Acuéstate con las piernas extendidas verticalmente.',
      'Manos detrás de la cabeza.',
      'Eleva el torso intentando tocar los pies.',
      'Contrae el abdomen en la parte superior.',
      'Baja de forma controlada.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 60
  },
  {
    id: 94,
    name: 'Plancha con Toque de Hombro',
    muscleGroup: 'Abdominales',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank-Shoulder-Tap.gif',
    description: 'Plancha dinámica con componente antirotacional.',
    instructions: [
      'Comienza en posición de plancha alta.',
      'Levanta una mano y toca el hombro opuesto.',
      'Vuelve la mano al suelo y alterna.',
      'Mantén las caderas lo más estables posible.',
      'Evita rotar el tronco.'
    ],
    sets: 3,
    reps: '20-30 toques totales',
    restTime: 60
  },

  // =============== CARDIO (10 ejercicios) ===============
  {
    id: 95,
    name: 'Burpees',
    muscleGroup: 'Cardio',
    difficulty: 'Alta',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Burpee.gif',
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
    id: 96,
    name: 'Saltos de Tijera',
    muscleGroup: 'Cardio',
    difficulty: 'Fácil',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Jumping-Jack.gif',
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
    id: 97,
    name: 'Correr en el Sitio',
    muscleGroup: 'Cardio',
    difficulty: 'Fácil',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Knees.gif',
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
  },
  {
    id: 98,
    name: 'Box Jumps',
    muscleGroup: 'Cardio',
    difficulty: 'Media',
    equipment: 'Cajón',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Box-Jump.gif',
    description: 'Ejercicio pliométrico para potencia y cardio.',
    instructions: [
      'De pie frente a un cajón o plataforma estable.',
      'Flexiona las rodillas y salta explosivamente.',
      'Aterriza suavemente sobre el cajón con ambos pies.',
      'Ponte completamente de pie sobre el cajón.',
      'Baja cuidadosamente y repite.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 90
  },
  {
    id: 99,
    name: 'Jump Rope (Saltar la Cuerda)',
    muscleGroup: 'Cardio',
    difficulty: 'Fácil',
    equipment: 'Cuerda',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Jump-Rope.gif',
    description: 'Cardio clásico con mínimo equipo.',
    instructions: [
      'Sostén la cuerda con una mano en cada extremo.',
      'Gira la cuerda con las muñecas, no con los brazos.',
      'Salta con ambos pies a la vez.',
      'Aterriza sobre las puntas de los pies.',
      'Mantén un ritmo constante.'
    ],
    sets: 3,
    reps: '60-120 segundos',
    restTime: 60
  },
  {
    id: 100,
    name: 'Skaters',
    muscleGroup: 'Cardio',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Skater.gif',
    description: 'Cardio lateral que trabaja piernas y equilibrio.',
    instructions: [
      'De pie, salta lateralmente hacia un lado.',
      'Aterriza sobre una pierna con la rodilla flexionada.',
      'La pierna opuesta va detrás para balance.',
      'Inmediatamente salta hacia el otro lado.',
      'Alterna los lados en un movimiento fluido.'
    ],
    sets: 3,
    reps: '30-45 segundos',
    restTime: 60
  },
  {
    id: 101,
    name: 'Battle Ropes',
    muscleGroup: 'Cardio',
    difficulty: 'Media',
    equipment: 'Cuerdas',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Battle-Ropes.gif',
    description: 'Cardio de alta intensidad para todo el cuerpo.',
    instructions: [
      'Agarra un extremo de cada cuerda.',
      'Adopta posición atlética con rodillas ligeramente flexionadas.',
      'Mueve los brazos alternativamente creando olas.',
      'Mantén el core activado y la espalda recta.',
      'Mantén un ritmo rápido y constante.'
    ],
    sets: 3,
    reps: '30-45 segundos',
    restTime: 60
  },
  {
    id: 102,
    name: 'Sprint en Escaleras',
    muscleGroup: 'Cardio',
    difficulty: 'Alta',
    equipment: 'Escaleras',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Stair-Sprints.gif',
    description: 'Cardio intenso que trabaja piernas y resistencia.',
    instructions: [
      'Encuentra un tramo de escaleras.',
      'Sube lo más rápido posible.',
      'Usa los brazos para impulso.',
      'Baja caminando para recuperación activa.',
      'Repite el sprint hacia arriba.'
    ],
    sets: 5,
    reps: '1 subida completa',
    restTime: 120
  },
  {
    id: 103,
    name: 'Tuck Jumps',
    muscleGroup: 'Cardio',
    difficulty: 'Alta',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Tuck-Jump.gif',
    description: 'Salto explosivo llevando rodillas al pecho.',
    instructions: [
      'De pie con los pies al ancho de los hombros.',
      'Salta explosivamente lo más alto posible.',
      'Lleva las rodillas hacia el pecho en el aire.',
      'Aterriza suavemente con las rodillas flexionadas.',
      'Repite inmediatamente el siguiente salto.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 90
  },
  {
    id: 104,
    name: 'Bike Sprints (Bicicleta)',
    muscleGroup: 'Cardio',
    difficulty: 'Media',
    equipment: 'Bicicleta estática',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bike-Sprint.gif',
    description: 'Intervalos de alta intensidad en bicicleta.',
    instructions: [
      'Ajusta la bicicleta estática a resistencia moderada.',
      'Calienta pedaleando suavemente 2-3 minutos.',
      'Sprint a máxima velocidad durante 20-30 segundos.',
      'Pedalea suavemente durante 40-60 segundos.',
      'Repite los intervalos.'
    ],
    sets: 6,
    reps: '20-30 segundos sprint',
    restTime: 60
  },

  // =============== MÁS PECHO (10 ejercicios adicionales) ===============
  {
    id: 105,
    name: 'Press de Banca Inclinado con Barra',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Incline-Bench-Press.gif',
    description: 'Trabaja el pectoral superior de forma intensa.',
    instructions: [
      'Ajusta el banco a 30-45 grados.',
      'Acuéstate y agarra la barra con agarre medio.',
      'Baja la barra hacia la parte superior del pecho.',
      'Empuja hacia arriba hasta extensión completa.',
      'Mantén el control en todo momento.'
    ],
    sets: 4,
    reps: '8-10',
    restTime: 90
  },
  {
    id: 106,
    name: 'Cruce de Poleas (Cable Crossover)',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Poleas',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif',
    description: 'Excelente para la contracción máxima del pecho.',
    instructions: [
      'Colócate en medio de las poleas altas.',
      'Agarra las manijas con los brazos extendidos a los lados.',
      'Inclínate ligeramente hacia adelante.',
      'Lleva las manos juntas frente al pecho en un arco.',
      'Contrae el pecho al final del movimiento.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 107,
    name: 'Flexiones Diamante',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Diamond-Push-Up.gif',
    description: 'Variación de flexiones que enfatiza tríceps y pecho interno.',
    instructions: [
      'Colócate en posición de flexión.',
      'Junta las manos formando un diamante con los pulgares e índices.',
      'Baja el pecho hacia las manos.',
      'Empuja hacia arriba manteniendo los codos cerca del cuerpo.',
      'Mantén el core activado.'
    ],
    sets: 3,
    reps: '10-15',
    restTime: 60
  },
  {
    id: 108,
    name: 'Press con Mancuernas en Banco Plano',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Bench-Press.gif',
    description: 'Permite mayor rango de movimiento que la barra.',
    instructions: [
      'Acuéstate en banco plano con mancuernas a los lados del pecho.',
      'Empuja las mancuernas hacia arriba juntándolas.',
      'Baja controladamente hasta sentir estiramiento.',
      'Mantén los codos a 45 grados del cuerpo.',
      'No choques las mancuernas en la parte superior.'
    ],
    sets: 4,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 109,
    name: 'Pec Deck (Contractor)',
    muscleGroup: 'Pecho',
    difficulty: 'Fácil',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck.gif',
    description: 'Aislamiento puro del pecho en máquina.',
    instructions: [
      'Ajusta el asiento para que los brazos queden a altura del pecho.',
      'Coloca los antebrazos en las almohadillas.',
      'Junta las almohadillas frente a ti contrayendo el pecho.',
      'Vuelve lentamente a la posición inicial.',
      'Mantén la espalda contra el respaldo.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 110,
    name: 'Flexiones Declinadas',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Decline-Push-up.gif',
    description: 'Flexiones con pies elevados para mayor intensidad.',
    instructions: [
      'Coloca los pies en un banco o superficie elevada.',
      'Manos en el suelo al ancho de hombros.',
      'Baja el pecho hacia el suelo.',
      'Empuja hacia arriba explosivamente.',
      'Mantén el cuerpo recto.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 111,
    name: 'Pullover con Mancuerna',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Mancuerna',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Pullover.gif',
    description: 'Trabaja pecho y dorsales con expansión de caja torácica.',
    instructions: [
      'Acuéstate perpendicular en un banco con solo los hombros apoyados.',
      'Sujeta una mancuerna con ambas manos sobre el pecho.',
      'Baja la mancuerna en arco detrás de la cabeza.',
      'Siente el estiramiento en pecho y dorsales.',
      'Regresa a la posición inicial.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 112,
    name: 'Press de Suelo con Mancuernas',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Floor-Press.gif',
    description: 'Variación de press que protege los hombros.',
    instructions: [
      'Acuéstate en el suelo con las rodillas flexionadas.',
      'Sujeta mancuernas a los lados del pecho.',
      'Empuja las mancuernas hacia arriba.',
      'Baja hasta que los codos toquen el suelo.',
      'Pausa y vuelve a empujar.'
    ],
    sets: 4,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 113,
    name: 'Aperturas en Polea Baja',
    muscleGroup: 'Pecho',
    difficulty: 'Media',
    equipment: 'Poleas',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Low-Cable-Fly.gif',
    description: 'Trabaja el pectoral superior con poleas bajas.',
    instructions: [
      'Colócate entre poleas bajas.',
      'Agarra las manijas con las manos bajas.',
      'Lleva las manos hacia arriba y al centro.',
      'Junta las manos a la altura del pecho.',
      'Contrae fuerte en la parte superior.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 114,
    name: 'Flexiones con Palmada',
    muscleGroup: 'Pecho',
    difficulty: 'Alta',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Clapping-Push-up.gif',
    description: 'Flexión pliométrica para potencia explosiva.',
    instructions: [
      'Comienza en posición de flexión estándar.',
      'Baja el pecho hacia el suelo.',
      'Empuja explosivamente hacia arriba.',
      'Da una palmada en el aire.',
      'Aterriza suavemente y repite.'
    ],
    sets: 3,
    reps: '8-12',
    restTime: 90
  },

  // =============== MÁS ESPALDA (15 ejercicios adicionales) ===============
  {
    id: 115,
    name: 'Remo con Barra T',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'Barra T',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/T-Bar-Row.gif',
    description: 'Excelente para grosor de espalda media.',
    instructions: [
      'Colócate sobre la barra T con pies a ancho de hombros.',
      'Agarra el mango con ambas manos.',
      'Inclínate hacia adelante manteniendo espalda recta.',
      'Tira de la barra hacia el pecho.',
      'Aprieta los omóplatos juntos en la parte superior.'
    ],
    sets: 4,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 116,
    name: 'Dominadas Supinas',
    muscleGroup: 'Espalda',
    difficulty: 'Alta',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Chin-up.gif',
    description: 'Variación con agarre supino que trabaja más los bíceps.',
    instructions: [
      'Agarra la barra con las palmas hacia ti.',
      'Cuélgate con brazos completamente extendidos.',
      'Tira hacia arriba hasta que la barbilla supere la barra.',
      'Baja controladamente.',
      'Evita el balanceo.'
    ],
    sets: 4,
    reps: '6-10',
    restTime: 120
  },
  {
    id: 117,
    name: 'Jalón al Pecho Agarre Cerrado',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Lat-Pulldown.gif',
    description: 'Énfasis en la espalda baja y dorsales.',
    instructions: [
      'Siéntate en la máquina de jalones.',
      'Agarra la barra con un agarre cerrado.',
      'Tira de la barra hacia el pecho superior.',
      'Mantén el pecho hacia arriba.',
      'Regresa controladamente.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 118,
    name: 'Remo a Un Brazo con Mancuerna',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'Mancuerna',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/One-Arm-Dumbbell-Row.gif',
    description: 'Permite trabajar cada lado de forma independiente.',
    instructions: [
      'Apoya una rodilla y mano en un banco.',
      'Sujeta la mancuerna con la otra mano.',
      'Tira de la mancuerna hacia la cadera.',
      'Mantén la espalda recta.',
      'Contrae el omóplato en la parte superior.'
    ],
    sets: 3,
    reps: '10-12 por lado',
    restTime: 60
  },
  {
    id: 119,
    name: 'Peso Muerto Rumano',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Romanian-Deadlift.gif',
    description: 'Enfoca en isquiotibiales y erectores espinales.',
    instructions: [
      'De pie con la barra frente a ti.',
      'Agarra la barra con agarre prono.',
      'Baja la barra deslizándola por las piernas.',
      'Mantén las rodillas ligeramente flexionadas.',
      'Siente el estiramiento en los isquios y sube.'
    ],
    sets: 4,
    reps: '8-10',
    restTime: 90
  },
  {
    id: 120,
    name: 'Face Pulls con Polea',
    muscleGroup: 'Espalda',
    difficulty: 'Fácil',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif',
    description: 'Excelente para deltoides posteriores y trapecio medio.',
    instructions: [
      'Ajusta la polea a altura de la cara.',
      'Agarra la cuerda con ambas manos.',
      'Tira de la cuerda hacia la cara.',
      'Separa las manos al final del movimiento.',
      'Aprieta los omóplatos juntos.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 60
  },
  {
    id: 121,
    name: 'Remo en Polea Baja',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif',
    description: 'Remo sentado para grosor de espalda media.',
    instructions: [
      'Siéntate en la máquina con los pies apoyados.',
      'Agarra el mango con ambas manos.',
      'Tira del mango hacia el abdomen.',
      'Mantén la espalda recta.',
      'Junta los omóplatos en la contracción.'
    ],
    sets: 4,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 122,
    name: 'Pulldown con Brazos Rectos',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Straight-Arm-Pulldown.gif',
    description: 'Aislamiento de dorsales con brazos extendidos.',
    instructions: [
      'De pie frente a la polea alta.',
      'Agarra la barra con brazos extendidos.',
      'Tira de la barra hacia los muslos.',
      'Mantén los brazos rectos.',
      'Siente la contracción en los dorsales.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 123,
    name: 'Dominadas Agarre Ancho',
    muscleGroup: 'Espalda',
    difficulty: 'Alta',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Wide-Grip-Pull-up.gif',
    description: 'Máximo desarrollo del ancho de espalda.',
    instructions: [
      'Agarra la barra con las manos muy separadas.',
      'Cuélgate con brazos completamente extendidos.',
      'Tira hacia arriba enfocándote en los codos.',
      'Lleva el pecho hacia la barra.',
      'Baja controladamente.'
    ],
    sets: 4,
    reps: '6-10',
    restTime: 120
  },
  {
    id: 124,
    name: 'Hiperextensiones',
    muscleGroup: 'Espalda',
    difficulty: 'Fácil',
    equipment: 'Banco de hiperextensión',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Back-Extension.gif',
    description: 'Fortalece la zona lumbar y erectores espinales.',
    instructions: [
      'Colócate en el banco de hiperextensión.',
      'Cruza los brazos sobre el pecho.',
      'Baja el torso hacia el suelo.',
      'Sube hasta quedar alineado.',
      'No hiperextiendas la espalda.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 60
  },
  {
    id: 125,
    name: 'Remo con Mancuernas Inclinado',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Row.gif',
    description: 'Remo en banco inclinado para aislar la espalda.',
    instructions: [
      'Acuéstate boca abajo en un banco inclinado.',
      'Sujeta mancuernas con los brazos colgando.',
      'Tira de las mancuernas hacia las caderas.',
      'Aprieta los omóplatos juntos.',
      'Baja controladamente.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 126,
    name: 'Jalón con Agarre Supino',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Underhand-Lat-Pulldown.gif',
    description: 'Variación que trabaja más la parte baja de dorsales.',
    instructions: [
      'Siéntate en la máquina de jalones.',
      'Agarra la barra con palmas hacia ti.',
      'Tira de la barra hacia el pecho superior.',
      'Arquea ligeramente la espalda.',
      'Sube controladamente.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 127,
    name: 'Good Mornings',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Good-Morning.gif',
    description: 'Fortalece cadena posterior completa.',
    instructions: [
      'Coloca la barra en la parte superior de la espalda.',
      'De pie con pies al ancho de hombros.',
      'Inclínate hacia adelante desde las caderas.',
      'Mantén la espalda recta.',
      'Vuelve a la posición inicial.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 90
  },
  {
    id: 128,
    name: 'Remo Invertido',
    muscleGroup: 'Espalda',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Inverted-Row.gif',
    description: 'Remo con peso corporal, excelente para principiantes.',
    instructions: [
      'Colócate debajo de una barra baja.',
      'Agarra la barra con brazos extendidos.',
      'Mantén el cuerpo recto.',
      'Tira del pecho hacia la barra.',
      'Baja controladamente.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 129,
    name: 'Peso Muerto con Déficit',
    muscleGroup: 'Espalda',
    difficulty: 'Alta',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Deficit-Deadlift.gif',
    description: 'Mayor rango de movimiento para más desarrollo.',
    instructions: [
      'Párate sobre una plataforma elevada.',
      'Agarra la barra que está más baja.',
      'Realiza el peso muerto con técnica perfecta.',
      'El rango de movimiento es mayor.',
      'Usa menos peso que en peso muerto normal.'
    ],
    sets: 4,
    reps: '6-8',
    restTime: 120
  },

  // =============== MÁS HOMBROS (15 ejercicios adicionales) ===============
  {
    id: 130,
    name: 'Press Arnold',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Arnold-Press.gif',
    description: 'Variación de press que trabaja todo el deltoides.',
    instructions: [
      'Siéntate con mancuernas a la altura de los hombros.',
      'Comienza con palmas hacia ti.',
      'Rota las muñecas mientras presionas hacia arriba.',
      'Termina con palmas hacia adelante.',
      'Invierte el movimiento al bajar.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 131,
    name: 'Elevaciones Frontales con Barra',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Front-Raise.gif',
    description: 'Aislamiento del deltoides anterior.',
    instructions: [
      'De pie con la barra frente a los muslos.',
      'Agarra la barra con agarre prono.',
      'Eleva la barra hasta la altura de los hombros.',
      'Mantén los brazos casi rectos.',
      'Baja controladamente.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 132,
    name: 'Elevaciones Laterales en Polea',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Lateral-Raise.gif',
    description: 'Tensión constante en el deltoides lateral.',
    instructions: [
      'De pie junto a la polea baja.',
      'Agarra la manija con la mano más alejada.',
      'Eleva el brazo lateralmente.',
      'Sube hasta la altura del hombro.',
      'Controla la bajada.'
    ],
    sets: 3,
    reps: '12-15 por lado',
    restTime: 60
  },
  {
    id: 133,
    name: 'Remo al Mentón con Mancuernas',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Upright-Row.gif',
    description: 'Trabaja deltoides y trapecios superiores.',
    instructions: [
      'De pie con mancuernas frente a los muslos.',
      'Tira de las mancuernas hacia arriba.',
      'Los codos van más altos que las manos.',
      'Sube hasta la altura del pecho.',
      'Baja controladamente.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 134,
    name: 'Press de Hombros en Máquina',
    muscleGroup: 'Hombros',
    difficulty: 'Fácil',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Machine-Shoulder-Press.gif',
    description: 'Press guiado ideal para principiantes.',
    instructions: [
      'Ajusta el asiento a la altura correcta.',
      'Agarra las manijas a la altura de los hombros.',
      'Empuja hacia arriba hasta extensión completa.',
      'Baja controladamente.',
      'Mantén la espalda contra el respaldo.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 135,
    name: 'Elevaciones Posteriores en Banco Inclinado',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Rear-Delt-Fly.gif',
    description: 'Aislamiento del deltoides posterior.',
    instructions: [
      'Acuéstate boca abajo en banco inclinado.',
      'Sujeta mancuernas con brazos colgando.',
      'Abre los brazos hacia los lados.',
      'Llega hasta la altura del cuerpo.',
      'Contrae los deltoides posteriores.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 136,
    name: 'Press de Hombros con Barra de Pie',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Barbell-Press.gif',
    description: 'Press militar clásico de pie.',
    instructions: [
      'De pie con la barra a la altura de los hombros.',
      'Pies al ancho de los hombros.',
      'Empuja la barra hacia arriba.',
      'No arquees la espalda baja.',
      'Baja la barra hasta los hombros.'
    ],
    sets: 4,
    reps: '8-10',
    restTime: 90
  },
  {
    id: 137,
    name: 'Elevaciones Frontales Alternas',
    muscleGroup: 'Hombros',
    difficulty: 'Fácil',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Alternating-Front-Raise.gif',
    description: 'Aislamiento alternado del deltoides anterior.',
    instructions: [
      'De pie con mancuernas a los lados.',
      'Eleva una mancuerna al frente.',
      'Sube hasta la altura del hombro.',
      'Baja mientras subes la otra.',
      'Alterna de forma controlada.'
    ],
    sets: 3,
    reps: '10-12 por brazo',
    restTime: 60
  },
  {
    id: 138,
    name: 'Press Bradford',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bradford-Press.gif',
    description: 'Movimiento alterno delante y detrás de la cabeza.',
    instructions: [
      'Siéntate con barra a altura de hombros.',
      'Presiona hacia arriba y lleva detrás de la cabeza.',
      'Baja detrás de la nuca.',
      'Presiona y lleva al frente.',
      'Alterna continuamente.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 139,
    name: 'Elevaciones en W',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/W-Raise.gif',
    description: 'Trabaja deltoides posteriores y rotadores.',
    instructions: [
      'Inclínate hacia adelante con mancuernas.',
      'Eleva los brazos formando una W.',
      'Los codos quedan doblados.',
      'Aprieta los omóplatos.',
      'Baja controladamente.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 140,
    name: 'Elevaciones Laterales Inclinado',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Leaning-Lateral-Raise.gif',
    description: 'Mayor rango de movimiento en laterales.',
    instructions: [
      'Agárrate de un soporte con una mano.',
      'Inclina el cuerpo hacia el soporte.',
      'Eleva la mancuerna lateralmente.',
      'Mayor rango de movimiento en la parte baja.',
      'Controla todo el recorrido.'
    ],
    sets: 3,
    reps: '12-15 por lado',
    restTime: 60
  },
  {
    id: 141,
    name: 'Press con Kettlebell',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Kettlebell',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Kettlebell-Press.gif',
    description: 'Press unilateral con mayor estabilización.',
    instructions: [
      'Sujeta la kettlebell a la altura del hombro.',
      'La pesa debe estar apoyada en el antebrazo.',
      'Presiona hacia arriba rotando la muñeca.',
      'Extiende completamente el brazo.',
      'Baja controladamente.'
    ],
    sets: 3,
    reps: '10-12 por brazo',
    restTime: 75
  },
  {
    id: 142,
    name: 'Elevaciones en Y',
    muscleGroup: 'Hombros',
    difficulty: 'Fácil',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Y-Raise.gif',
    description: 'Trabaja trapecios medios y deltoides.',
    instructions: [
      'Inclínate hacia adelante con mancuernas.',
      'Eleva los brazos formando una Y.',
      'Los brazos van en diagonal.',
      'Sube hasta la altura del cuerpo.',
      'Contrae la parte superior de la espalda.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 143,
    name: 'Press de Hombros con Agarre Neutro',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Neutral-Grip-Shoulder-Press.gif',
    description: 'Variación que reduce tensión en hombros.',
    instructions: [
      'Siéntate con mancuernas a los hombros.',
      'Palmas enfrentadas entre sí.',
      'Presiona hacia arriba manteniendo el agarre.',
      'Los codos van hacia adelante.',
      'Baja controladamente.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 144,
    name: 'Elevaciones Posteriores en Polea',
    muscleGroup: 'Hombros',
    difficulty: 'Media',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Rear-Delt-Fly.gif',
    description: 'Tensión constante en deltoides posterior.',
    instructions: [
      'Ajusta poleas a altura del pecho.',
      'Cruza los brazos y agarra las manijas opuestas.',
      'Abre los brazos hacia los lados.',
      'Mantén los codos ligeramente flexionados.',
      'Aprieta los deltoides posteriores.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },

  // =============== MÁS BÍCEPS (10 ejercicios adicionales) ===============
  {
    id: 145,
    name: 'Curl Concentrado',
    muscleGroup: 'Bíceps',
    difficulty: 'Fácil',
    equipment: 'Mancuerna',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Concentration-Curl.gif',
    description: 'Aislamiento máximo del bíceps.',
    instructions: [
      'Siéntate con las piernas abiertas.',
      'Apoya el codo en la parte interna del muslo.',
      'Realiza el curl hacia el hombro.',
      'Mantén el brazo inmóvil.',
      'Baja completamente entre repeticiones.'
    ],
    sets: 3,
    reps: '10-12 por brazo',
    restTime: 60
  },
  {
    id: 146,
    name: 'Curl con Barra Z',
    muscleGroup: 'Bíceps',
    difficulty: 'Media',
    equipment: 'Barra Z',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Curl.gif',
    description: 'Reduce tensión en muñecas comparado con barra recta.',
    instructions: [
      'De pie con barra Z frente a los muslos.',
      'Agarra en la parte angulada.',
      'Curl hacia arriba manteniendo codos fijos.',
      'Contrae en la parte superior.',
      'Baja controladamente.'
    ],
    sets: 4,
    reps: '8-12',
    restTime: 75
  },
  {
    id: 147,
    name: 'Curl Martillo Alterno',
    muscleGroup: 'Bíceps',
    difficulty: 'Fácil',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Alternating-Hammer-Curl.gif',
    description: 'Trabaja bíceps y braquial alternando brazos.',
    instructions: [
      'De pie con mancuernas a los lados.',
      'Palmas enfrentadas.',
      'Curl con un brazo manteniendo el agarre neutro.',
      'Baja mientras subes el otro brazo.',
      'Alterna de forma controlada.'
    ],
    sets: 3,
    reps: '10-12 por brazo',
    restTime: 60
  },
  {
    id: 148,
    name: 'Curl en Polea Baja',
    muscleGroup: 'Bíceps',
    difficulty: 'Media',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Curl.gif',
    description: 'Tensión constante durante todo el movimiento.',
    instructions: [
      'De pie frente a la polea baja.',
      'Agarra la barra con agarre supino.',
      'Curl hacia arriba manteniendo codos fijos.',
      'Aprieta en la contracción.',
      'Baja resistiendo la tensión.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 149,
    name: 'Curl Araña (Spider Curl)',
    muscleGroup: 'Bíceps',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Spider-Curl.gif',
    description: 'Elimina el impulso, puro aislamiento.',
    instructions: [
      'Acuéstate boca abajo en un banco inclinado.',
      'Brazos colgando perpendiculares al suelo.',
      'Curl hacia arriba sin mover los codos.',
      'Contrae fuerte en la parte superior.',
      'Baja completamente.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 150,
    name: 'Curl 21s',
    muscleGroup: 'Bíceps',
    difficulty: 'Alta',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl-21s.gif',
    description: 'Técnica de alto volumen para quemar los bíceps.',
    instructions: [
      '7 repeticiones de la parte baja del movimiento.',
      '7 repeticiones de la parte alta del movimiento.',
      '7 repeticiones del rango completo.',
      'Todo sin descanso = 1 serie.',
      'Usa peso moderado.'
    ],
    sets: 3,
    reps: '21 (7+7+7)',
    restTime: 90
  },
  {
    id: 151,
    name: 'Curl en Banco Inclinado',
    muscleGroup: 'Bíceps',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Curl.gif',
    description: 'Mayor estiramiento del bíceps.',
    instructions: [
      'Siéntate en banco inclinado a 45 grados.',
      'Brazos colgando con mancuernas.',
      'Curl hacia arriba sin mover los codos.',
      'Siente el estiramiento en la parte baja.',
      'No balancees el cuerpo.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 152,
    name: 'Curl Zottman',
    muscleGroup: 'Bíceps',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Zottman-Curl.gif',
    description: 'Trabaja bíceps en la subida y antebrazos en la bajada.',
    instructions: [
      'De pie con mancuernas, agarre supino.',
      'Curl hacia arriba con palmas hacia arriba.',
      'En la parte superior, rota las muñecas.',
      'Baja con palmas hacia abajo.',
      'Rota de nuevo en la parte baja.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 60
  },
  {
    id: 153,
    name: 'Curl en Polea Alta',
    muscleGroup: 'Bíceps',
    difficulty: 'Media',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Cable-Curl.gif',
    description: 'Curl con brazos elevados, trabaja pico del bíceps.',
    instructions: [
      'De pie entre poleas altas.',
      'Agarra las manijas con brazos extendidos.',
      'Curl hacia la cabeza manteniendo codos altos.',
      'Aprieta el bíceps en la contracción.',
      'Extiende completamente.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 154,
    name: 'Curl con Banda de Resistencia',
    muscleGroup: 'Bíceps',
    difficulty: 'Fácil',
    equipment: 'Banda elástica',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Band-Curl.gif',
    description: 'Curl con resistencia variable.',
    instructions: [
      'Pisa la banda con los pies.',
      'Agarra los extremos con las manos.',
      'Curl hacia arriba contra la resistencia.',
      'La tensión aumenta al subir.',
      'Controla la bajada.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 45
  },

  // =============== MÁS TRÍCEPS (10 ejercicios adicionales) ===============
  {
    id: 155,
    name: 'Extensión de Tríceps con Barra Z',
    muscleGroup: 'Tríceps',
    difficulty: 'Media',
    equipment: 'Barra Z',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Skull-Crusher.gif',
    description: 'Extensión tumbado con menor tensión en muñecas.',
    instructions: [
      'Acuéstate en banco con barra Z sobre el pecho.',
      'Extiende brazos hacia arriba.',
      'Baja la barra hacia la frente doblando codos.',
      'Mantén codos fijos apuntando al techo.',
      'Extiende completamente.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 156,
    name: 'Patada de Tríceps',
    muscleGroup: 'Tríceps',
    difficulty: 'Fácil',
    equipment: 'Mancuerna',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Tricep-Kickback.gif',
    description: 'Aislamiento del tríceps con mancuerna.',
    instructions: [
      'Inclínate hacia adelante apoyándote en un banco.',
      'Brazo superior paralelo al suelo.',
      'Extiende el antebrazo hacia atrás.',
      'Contrae el tríceps en la extensión completa.',
      'Regresa controladamente.'
    ],
    sets: 3,
    reps: '12-15 por brazo',
    restTime: 60
  },
  {
    id: 157,
    name: 'Press Cerrado con Barra',
    muscleGroup: 'Tríceps',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif',
    description: 'Press de banca con agarre cerrado para tríceps.',
    instructions: [
      'Acuéstate en banco plano.',
      'Agarra la barra con las manos juntas.',
      'Baja la barra al pecho inferior.',
      'Mantén los codos cerca del cuerpo.',
      'Empuja hacia arriba enfocándote en tríceps.'
    ],
    sets: 4,
    reps: '8-10',
    restTime: 90
  },
  {
    id: 158,
    name: 'Extensión de Tríceps sobre la Cabeza con Polea',
    muscleGroup: 'Tríceps',
    difficulty: 'Media',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Overhead-Extension.gif',
    description: 'Extensión con polea para cabeza larga del tríceps.',
    instructions: [
      'De espaldas a la polea, agarra la cuerda.',
      'Da un paso adelante con la cuerda sobre la cabeza.',
      'Extiende los brazos hacia adelante y arriba.',
      'Mantén los codos cerca de la cabeza.',
      'Regresa controladamente.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 159,
    name: 'Fondos en Paralelas',
    muscleGroup: 'Tríceps',
    difficulty: 'Alta',
    equipment: 'Paralelas',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dips.gif',
    description: 'Ejercicio compuesto que trabaja tríceps y pecho.',
    instructions: [
      'Agarra las paralelas y elévate.',
      'Inclínate ligeramente hacia adelante.',
      'Baja doblando los codos hasta 90 grados.',
      'Empuja hacia arriba extendiendo los brazos.',
      'Mantén el core activado.'
    ],
    sets: 4,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 160,
    name: 'Extensión con Mancuerna a Dos Manos',
    muscleGroup: 'Tríceps',
    difficulty: 'Media',
    equipment: 'Mancuerna',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Two-Arm-Dumbbell-Extension.gif',
    description: 'Extensión sobre la cabeza con mancuerna.',
    instructions: [
      'Siéntate o párate con mancuerna sobre la cabeza.',
      'Sujeta la mancuerna con ambas manos.',
      'Baja la mancuerna detrás de la cabeza.',
      'Mantén los codos apuntando hacia arriba.',
      'Extiende completamente.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 161,
    name: 'Press con Agarre Neutro',
    muscleGroup: 'Tríceps',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Neutral-Grip-Press.gif',
    description: 'Press con palmas enfrentadas para enfatizar tríceps.',
    instructions: [
      'Acuéstate con mancuernas, palmas enfrentadas.',
      'Posición inicial con mancuernas sobre el pecho.',
      'Baja manteniendo codos cerca del cuerpo.',
      'Empuja hacia arriba.',
      'Enfoca en la contracción del tríceps.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 162,
    name: 'Extensión de Tríceps Unilateral en Polea',
    muscleGroup: 'Tríceps',
    difficulty: 'Media',
    equipment: 'Polea',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Single-Arm-Cable-Extension.gif',
    description: 'Trabajo unilateral para equilibrio muscular.',
    instructions: [
      'De lado a la polea, agarra la manija.',
      'Codo doblado con manija a la altura del hombro.',
      'Extiende el brazo hacia abajo.',
      'Mantén el codo fijo.',
      'Regresa controladamente.'
    ],
    sets: 3,
    reps: '12-15 por brazo',
    restTime: 60
  },
  {
    id: 163,
    name: 'Flexiones Cerradas',
    muscleGroup: 'Tríceps',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Push-up.gif',
    description: 'Flexiones con manos juntas para tríceps.',
    instructions: [
      'Posición de flexión con manos juntas.',
      'Manos formando un triángulo.',
      'Baja manteniendo codos pegados al cuerpo.',
      'Empuja hacia arriba.',
      'Mantén el core activado.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 164,
    name: 'Extensión con Banda',
    muscleGroup: 'Tríceps',
    difficulty: 'Fácil',
    equipment: 'Banda elástica',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Band-Tricep-Extension.gif',
    description: 'Extensión con banda para resistencia variable.',
    instructions: [
      'Pisa la banda con un pie.',
      'Agarra el otro extremo sobre la cabeza.',
      'Extiende el brazo hacia arriba.',
      'Mantén el codo fijo.',
      'La resistencia aumenta al extender.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 45
  },

  // =============== ANTEBRAZOS (15 ejercicios nuevos) ===============
  {
    id: 165,
    name: 'Curl de Muñeca con Barra',
    muscleGroup: 'Antebrazos',
    difficulty: 'Fácil',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Wrist-Curl.gif',
    description: 'Fortalece los flexores del antebrazo.',
    instructions: [
      'Siéntate con antebrazos sobre los muslos.',
      'Sujeta la barra con agarre supino.',
      'Deja que la barra ruede hacia los dedos.',
      'Curl con las muñecas hacia arriba.',
      'Mantén los antebrazos fijos.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 60
  },
  {
    id: 166,
    name: 'Curl de Muñeca Inverso',
    muscleGroup: 'Antebrazos',
    difficulty: 'Fácil',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Reverse-Wrist-Curl.gif',
    description: 'Trabaja los extensores del antebrazo.',
    instructions: [
      'Siéntate con antebrazos sobre los muslos.',
      'Sujeta la barra con agarre prono.',
      'Extiende las muñecas hacia arriba.',
      'Baja controladamente.',
      'Mantén los antebrazos inmóviles.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 60
  },
  {
    id: 167,
    name: 'Paseo del Granjero',
    muscleGroup: 'Antebrazos',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Farmers-Walk.gif',
    description: 'Fortalece agarre y antebrazos caminando.',
    instructions: [
      'Sujeta mancuernas pesadas a los lados.',
      'Mantén los hombros hacia atrás.',
      'Camina con pasos controlados.',
      'Aprieta fuerte las mancuernas.',
      'Mantén el core activado.'
    ],
    sets: 3,
    reps: '30-60 segundos',
    restTime: 90
  },
  {
    id: 168,
    name: 'Agarre Estático con Barra',
    muscleGroup: 'Antebrazos',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Hang.gif',
    description: 'Desarrolla fuerza de agarre isométrica.',
    instructions: [
      'Cuélgate de una barra.',
      'Agarre prono, brazos completamente extendidos.',
      'Mantén la posición el mayor tiempo posible.',
      'Aprieta la barra con fuerza.',
      'Respira normalmente.'
    ],
    sets: 3,
    reps: '30-60 segundos',
    restTime: 90
  },
  {
    id: 169,
    name: 'Curl de Muñeca con Mancuernas',
    muscleGroup: 'Antebrazos',
    difficulty: 'Fácil',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Wrist-Curl.gif',
    description: 'Curl de muñeca unilateral con mancuerna.',
    instructions: [
      'Siéntate con un antebrazo sobre el muslo.',
      'Sujeta la mancuerna con agarre supino.',
      'Curl con la muñeca hacia arriba.',
      'Extiende completamente en cada repetición.',
      'Alterna los brazos.'
    ],
    sets: 3,
    reps: '15-20 por brazo',
    restTime: 45
  },
  {
    id: 170,
    name: 'Pronación-Supinación',
    muscleGroup: 'Antebrazos',
    difficulty: 'Fácil',
    equipment: 'Mancuerna o barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pronation-Supination.gif',
    description: 'Trabaja rotadores del antebrazo.',
    instructions: [
      'Siéntate con antebrazo sobre el muslo.',
      'Sujeta mancuerna o barra con una sola pesa.',
      'Rota la muñeca de palma arriba a palma abajo.',
      'Movimiento controlado.',
      'Siente la contracción en el antebrazo.'
    ],
    sets: 3,
    reps: '15-20 por brazo',
    restTime: 45
  },
  {
    id: 171,
    name: 'Curl Inverso con Barra',
    muscleGroup: 'Antebrazos',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Reverse-Curl.gif',
    description: 'Curl con agarre prono para antebrazos y braquiorradial.',
    instructions: [
      'De pie con barra frente a los muslos.',
      'Agarre prono (palmas hacia abajo).',
      'Curl hacia arriba manteniendo el agarre.',
      'No gires las muñecas.',
      'Baja controladamente.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 75
  },
  {
    id: 172,
    name: 'Pellizco de Placas',
    muscleGroup: 'Antebrazos',
    difficulty: 'Media',
    equipment: 'Discos',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Plate-Pinch.gif',
    description: 'Fortalece el agarre de pellizco.',
    instructions: [
      'Sujeta dos discos lisos con los dedos.',
      'Agarra solo con los dedos, no con la palma.',
      'Mantén los brazos a los lados.',
      'Aguanta el mayor tiempo posible.',
      'Aprieta con fuerza constante.'
    ],
    sets: 3,
    reps: '20-40 segundos',
    restTime: 60
  },
  {
    id: 173,
    name: 'Rodillo de Muñeca',
    muscleGroup: 'Antebrazos',
    difficulty: 'Media',
    equipment: 'Rodillo de muñeca',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Wrist-Roller.gif',
    description: 'Ejercicio clásico para antebrazos y agarre.',
    instructions: [
      'Sujeta el rodillo con ambas manos.',
      'Brazos extendidos al frente.',
      'Enrolla la cuerda girando las muñecas.',
      'Sube el peso completamente.',
      'Baja controladamente.'
    ],
    sets: 3,
    reps: '2-3 subidas completas',
    restTime: 90
  },
  {
    id: 174,
    name: 'Extensión de Dedos con Banda',
    muscleGroup: 'Antebrazos',
    difficulty: 'Fácil',
    equipment: 'Banda elástica',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Finger-Extension.gif',
    description: 'Fortalece extensores de dedos y previene desequilibrios.',
    instructions: [
      'Coloca banda elástica alrededor de los dedos.',
      'Mano cerrada con dedos juntos.',
      'Abre los dedos contra la resistencia.',
      'Extiende completamente.',
      'Regresa controladamente.'
    ],
    sets: 3,
    reps: '20-25',
    restTime: 30
  },
  {
    id: 175,
    name: 'Agarre con Pelota',
    muscleGroup: 'Antebrazos',
    difficulty: 'Fácil',
    equipment: 'Pelota de estrés',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Grip-Ball-Squeeze.gif',
    description: 'Fortalece músculos de la mano y antebrazo.',
    instructions: [
      'Sujeta una pelota de estrés.',
      'Aprieta con toda la fuerza posible.',
      'Mantén la contracción 3-5 segundos.',
      'Relaja completamente.',
      'Alterna las manos.'
    ],
    sets: 3,
    reps: '20-30 por mano',
    restTime: 45
  },
  {
    id: 176,
    name: 'Curl Martillo Inverso',
    muscleGroup: 'Antebrazos',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Reverse-Hammer-Curl.gif',
    description: 'Variación que enfatiza braquiorradial.',
    instructions: [
      'De pie con mancuernas, agarre neutro.',
      'Curl manteniendo las palmas enfrentadas.',
      'Enfoca en el antebrazo.',
      'Sube hasta la máxima contracción.',
      'Baja completamente.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 60
  },
  {
    id: 177,
    name: 'Rotación de Muñeca con Mancuerna',
    muscleGroup: 'Antebrazos',
    difficulty: 'Fácil',
    equipment: 'Mancuerna',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Wrist-Rotation.gif',
    description: 'Trabaja rotadores de muñeca en todos los ángulos.',
    instructions: [
      'Siéntate con antebrazo apoyado.',
      'Sujeta mancuerna ligera verticalmente.',
      'Rota la muñeca de lado a lado.',
      'Movimiento lento y controlado.',
      'Mantén el antebrazo fijo.'
    ],
    sets: 3,
    reps: '15-20 por lado',
    restTime: 45
  },
  {
    id: 178,
    name: 'Cuelgue con Toalla',
    muscleGroup: 'Antebrazos',
    difficulty: 'Alta',
    equipment: 'Toalla y barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Towel-Hang.gif',
    description: 'Agarre extremadamente desafiante con toalla.',
    instructions: [
      'Cuelga una toalla sobre la barra.',
      'Agarra los extremos de la toalla.',
      'Cuélgate con todo tu peso.',
      'Mantén la posición el mayor tiempo posible.',
      'Aprieta con máxima fuerza.'
    ],
    sets: 3,
    reps: '20-40 segundos',
    restTime: 90
  },
  {
    id: 179,
    name: 'Flexión de Muñeca Detrás de la Espalda',
    muscleGroup: 'Antebrazos',
    difficulty: 'Media',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Behind-Back-Wrist-Curl.gif',
    description: 'Curl de muñeca con mayor estiramiento.',
    instructions: [
      'De pie con barra detrás de la espalda.',
      'Agarre supino, barra contra glúteos.',
      'Flexiona las muñecas hacia arriba.',
      'Deja que la barra ruede hasta los dedos.',
      'Curl completo con las muñecas.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 60
  },

  // =============== MÁS PIERNAS (20 ejercicios adicionales) ===============
  {
    id: 180,
    name: 'Sentadilla Búlgara',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bulgarian-Split-Squat.gif',
    description: 'Sentadilla unilateral con pierna trasera elevada.',
    instructions: [
      'Coloca un pie en un banco detrás de ti.',
      'El otro pie adelante a distancia de zancada.',
      'Baja doblando la rodilla delantera.',
      'Mantén el torso erguido.',
      'Empuja hacia arriba con el talón delantero.'
    ],
    sets: 3,
    reps: '10-12 por pierna',
    restTime: 75
  },
  {
    id: 181,
    name: 'Zancadas Caminando',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Walking-Lunge.gif',
    description: 'Zancadas dinámicas caminando hacia adelante.',
    instructions: [
      'De pie con mancuernas a los lados.',
      'Da un paso largo hacia adelante.',
      'Baja hasta que ambas rodillas estén a 90 grados.',
      'Empuja con el talón delantero para avanzar.',
      'Alterna las piernas caminando.'
    ],
    sets: 3,
    reps: '10-12 por pierna',
    restTime: 60
  },
  {
    id: 182,
    name: 'Prensa de Piernas',
    muscleGroup: 'Piernas',
    difficulty: 'Fácil',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Press.gif',
    description: 'Press de piernas en máquina para cuádriceps y glúteos.',
    instructions: [
      'Siéntate en la máquina con espalda bien apoyada.',
      'Pies al ancho de hombros en la plataforma.',
      'Empuja la plataforma extendiendo las piernas.',
      'No bloquees completamente las rodillas.',
      'Baja controladamente.'
    ],
    sets: 4,
    reps: '10-15',
    restTime: 90
  },
  {
    id: 183,
    name: 'Extensión de Cuádriceps',
    muscleGroup: 'Piernas',
    difficulty: 'Fácil',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Extension.gif',
    description: 'Aislamiento puro de cuádriceps.',
    instructions: [
      'Siéntate en la máquina con espalda apoyada.',
      'Tobillos bajo las almohadillas.',
      'Extiende las piernas hacia arriba.',
      'Contrae los cuádriceps en la parte superior.',
      'Baja controladamente.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 184,
    name: 'Curl Femoral Tumbado',
    muscleGroup: 'Piernas',
    difficulty: 'Fácil',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Curl.gif',
    description: 'Aislamiento de isquiotibiales.',
    instructions: [
      'Acuéstate boca abajo en la máquina.',
      'Tobillos bajo las almohadillas.',
      'Flexiona las piernas llevando talones hacia glúteos.',
      'Contrae los isquios en la parte superior.',
      'Baja controladamente.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 185,
    name: 'Sentadilla Frontal',
    muscleGroup: 'Piernas',
    difficulty: 'Alta',
    equipment: 'Barra',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Front-Squat.gif',
    description: 'Sentadilla con barra al frente, enfatiza cuádriceps.',
    instructions: [
      'Barra apoyada en deltoides anteriores.',
      'Codos altos apuntando hacia adelante.',
      'Baja manteniendo el torso vertical.',
      'Profundidad paralela o más.',
      'Empuja hacia arriba con los talones.'
    ],
    sets: 4,
    reps: '6-10',
    restTime: 120
  },
  {
    id: 186,
    name: 'Hack Squat',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hack-Squat.gif',
    description: 'Sentadilla en máquina hack.',
    instructions: [
      'Colócate en la máquina con espalda apoyada.',
      'Pies al ancho de hombros en la plataforma.',
      'Baja doblando las rodillas.',
      'Llega hasta profundidad completa.',
      'Empuja hacia arriba.'
    ],
    sets: 4,
    reps: '10-12',
    restTime: 90
  },
  {
    id: 187,
    name: 'Zancada Inversa',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Reverse-Lunge.gif',
    description: 'Zancada hacia atrás, menos tensión en rodillas.',
    instructions: [
      'De pie con mancuernas a los lados.',
      'Da un paso largo hacia atrás.',
      'Baja hasta que ambas rodillas estén a 90 grados.',
      'Empuja con el talón delantero para volver.',
      'Alterna las piernas.'
    ],
    sets: 3,
    reps: '10-12 por pierna',
    restTime: 60
  },
  {
    id: 188,
    name: 'Step Ups con Mancuernas',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Step-up.gif',
    description: 'Subidas a banco trabajando piernas y glúteos.',
    instructions: [
      'De pie frente a un banco con mancuernas.',
      'Sube un pie al banco.',
      'Empuja con ese pie para subir completamente.',
      'Baja controladamente.',
      'Alterna las piernas.'
    ],
    sets: 3,
    reps: '12-15 por pierna',
    restTime: 60
  },
  {
    id: 189,
    name: 'Sentadilla Sumo',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Mancuerna',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Sumo-Squat.gif',
    description: 'Sentadilla con stance ancho, enfatiza aductores.',
    instructions: [
      'Pies muy separados, puntas hacia afuera.',
      'Sujeta mancuerna con ambas manos colgando.',
      'Baja manteniendo torso erguido.',
      'Rodillas siguen dirección de los pies.',
      'Empuja hacia arriba.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 75
  },
  {
    id: 190,
    name: 'Curl Nórdico',
    muscleGroup: 'Piernas',
    difficulty: 'Alta',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Nordic-Curl.gif',
    description: 'Curl femoral eccéntrico con peso corporal.',
    instructions: [
      'Arrodíllate con tobillos fijos.',
      'Cuerpo recto desde rodillas hasta hombros.',
      'Baja controladamente hacia adelante.',
      'Usa los isquios para frenar.',
      'Ayúdate con las manos si es necesario.'
    ],
    sets: 3,
    reps: '5-8',
    restTime: 120
  },
  {
    id: 191,
    name: 'Pistol Squat',
    muscleGroup: 'Piernas',
    difficulty: 'Alta',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pistol-Squat.gif',
    description: 'Sentadilla a una pierna, muy desafiante.',
    instructions: [
      'De pie en una sola pierna.',
      'Otra pierna extendida al frente.',
      'Baja en sentadilla completa.',
      'Brazos al frente para balance.',
      'Empuja hacia arriba.'
    ],
    sets: 3,
    reps: '5-8 por pierna',
    restTime: 90
  },
  {
    id: 192,
    name: 'Sentadilla Sissy',
    muscleGroup: 'Piernas',
    difficulty: 'Alta',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Sissy-Squat.gif',
    description: 'Aislamiento extremo de cuádriceps.',
    instructions: [
      'De pie, agárrate de un soporte.',
      'Inclínate hacia atrás mientras bajas.',
      'Rodillas van hacia adelante.',
      'Baja hasta casi tocar el suelo con rodillas.',
      'Empuja con los cuádriceps para subir.'
    ],
    sets: 3,
    reps: '8-12',
    restTime: 90
  },
  {
    id: 193,
    name: 'Box Jumps',
    muscleGroup: 'Piernas',
    difficulty: 'Alta',
    equipment: 'Cajón pliométrico',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Box-Jump.gif',
    description: 'Saltos explosivos a cajón para potencia.',
    instructions: [
      'De pie frente al cajón.',
      'Balancea los brazos y salta explosivamente.',
      'Aterriza suavemente en el cajón.',
      'Extensión completa de cadera al aterrizar.',
      'Baja caminando.'
    ],
    sets: 4,
    reps: '8-10',
    restTime: 90
  },
  {
    id: 194,
    name: 'Sentadilla con Salto',
    muscleGroup: 'Piernas',
    difficulty: 'Alta',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Jump-Squat.gif',
    description: 'Sentadilla pliométrica para potencia explosiva.',
    instructions: [
      'De pie con pies al ancho de hombros.',
      'Baja en sentadilla.',
      'Explota hacia arriba en salto.',
      'Aterriza suavemente.',
      'Inmediatamente baja en otra sentadilla.'
    ],
    sets: 3,
    reps: '10-12',
    restTime: 90
  },
  {
    id: 195,
    name: 'Zancada Lateral',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Mancuernas',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lateral-Lunge.gif',
    description: 'Zancada lateral para aductores y abductores.',
    instructions: [
      'De pie con mancuernas.',
      'Da un paso grande hacia un lado.',
      'Baja doblando la rodilla de ese lado.',
      'Otra pierna permanece recta.',
      'Empuja para volver al centro.'
    ],
    sets: 3,
    reps: '10-12 por lado',
    restTime: 60
  },
  {
    id: 196,
    name: 'Sentadilla Goblet',
    muscleGroup: 'Piernas',
    difficulty: 'Fácil',
    equipment: 'Mancuerna o Kettlebell',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Goblet-Squat.gif',
    description: 'Sentadilla sosteniendo peso al pecho.',
    instructions: [
      'Sujeta mancuerna o kettlebell al pecho.',
      'Pies al ancho de hombros.',
      'Baja en sentadilla profunda.',
      'Codos entre las rodillas.',
      'Empuja hacia arriba.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 197,
    name: 'Wall Sit (Sentadilla Isométrica)',
    muscleGroup: 'Piernas',
    difficulty: 'Media',
    equipment: 'Peso corporal',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Wall-Sit.gif',
    description: 'Mantención isométrica de sentadilla contra pared.',
    instructions: [
      'Espalda contra la pared.',
      'Baja hasta que muslos estén paralelos al suelo.',
      'Rodillas a 90 grados.',
      'Mantén la posición el mayor tiempo posible.',
      'Respira normalmente.'
    ],
    sets: 3,
    reps: '30-60 segundos',
    restTime: 60
  },
  {
    id: 198,
    name: 'Curl Femoral Sentado',
    muscleGroup: 'Piernas',
    difficulty: 'Fácil',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Leg-Curl.gif',
    description: 'Curl femoral en posición sentada.',
    instructions: [
      'Siéntate en la máquina.',
      'Tobillos sobre las almohadillas.',
      'Flexiona las piernas hacia abajo.',
      'Contrae los isquios.',
      'Regresa controladamente.'
    ],
    sets: 3,
    reps: '12-15',
    restTime: 60
  },
  {
    id: 199,
    name: 'Abducción de Cadera en Máquina',
    muscleGroup: 'Piernas',
    difficulty: 'Fácil',
    equipment: 'Máquina',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hip-Abduction-Machine.gif',
    description: 'Trabaja abductores (parte externa del muslo).',
    instructions: [
      'Siéntate en la máquina.',
      'Parte externa de muslos contra almohadillas.',
      'Abre las piernas contra la resistencia.',
      'Abre lo máximo posible.',
      'Regresa controladamente.'
    ],
    sets: 3,
    reps: '15-20',
    restTime: 45
  }
];


// Make available globally
window.muscleGroups = muscleGroups;
window.exercises = exercises;
