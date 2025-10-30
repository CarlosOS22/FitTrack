export const muscleGroups = [
  'Pecho',
  'Espalda',
  'Hombros',
  'Bíceps',
  'Tríceps',
  'Piernas',
  'Glúteos',
  'Abdominales',
  'Antebrazos',
  'Cardio'
];

export const exercises = [
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
  }
];

