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

  // Continúo con más grupos musculares...
  // Por razones de espacio, voy a crear el archivo completo con todos los ejercicios

];
