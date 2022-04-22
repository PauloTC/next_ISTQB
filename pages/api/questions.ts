import type { NextApiRequest, NextApiResponse } from 'next'

type Option = {
  text: string,
  id: number
  letter: string
}

type Question = {
  id: number,
  title: string,
  options: Option[],
  answer: string
}

type Data = Question[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    [
      {
        id:1,
        title: '¿Qué es el conocimiento del dominio?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Comprender el problema empresarial que resuelve el sistema.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Comprensión de la tecnología que subyace al sistema.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Comprender lo esencial de las pruebas de software',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Comprender la política organizacional',
          }
        ],
        answer: 'a'
      },
      {
        id:2,
        title: '¿Cuál de las siguientes afirmaciones captura la diferencia entre el análisis estático y dinámico?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'En análisis estático, el sistema bajo prueba está funcionando; en el análisis dinámico no es',
          },
          {
            id: 1,
            letter: 'b',
            text: 'En análisis dinámico, el sistema bajo prueba está funcionando; en análisis estático no es',
          },
          {
            id: 2,
            letter: 'c',
            text: 'El análisis dinámico es efectivo para generar confianza en el sistema, el análisis estático no lo es.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'El análisis estático es efectivo para generar confianza en el sistema, el análisis dinámico no lo es.',
          }
        ],
        answer: 'b'
      },
      {
        id:3,
        title: '¿Cuál de los siguientes da el ciclo de mejora de Deming, en el orden correcto?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Planificar, Verificar, Hacer, Actuar.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Planificar, Hacer, Verificar, Actuar.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Planificar, Experimentar, Evaluar, Revisar.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Planificar, Experimentar, Revisar, Evaluar.',
          }
        ],
        answer: 'b'
      },
      {
        id:4,
        title: '¿Cuál de las siguientes entidades está mejor situada para priorizar los incidentes para la acción?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Probador.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Desarrollador',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Analista de negocios',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Reunión de clasificación',
          }
        ],
        answer: 'd'
      },
      {
        id:5,
        title: '¿Cuál de las siguientes afirmaciones es verdadera?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'El estándar ISO/IEC 61508 no aborda la cobertura',
          },
          {
            id: 1,
            letter: 'b',
            text: 'La norma ISO/IEC 61508 implica cobertura estructural',
          },
          {
            id: 2,
            letter: 'c',
            text: 'La norma ISO/IEC 61508 exige una cobertura estructural, de requisitos y de riesgo del 100%',
          },
          {
            id: 3,
            letter: 'd',
            text: 'El estándar ISO/EEC 61508 requiere cobertura estructural pero solo durante las pruebas unitarias',
          }
        ],
        answer: 'b'
      },
      {
        id:6,
        title: 'En una revisión, ¿quién es el moderador?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'El principal responsable de la revisión',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Cualquier persona que realice una evaluación independiente para determinar el cumplimiento',
          },
          {
            id: 2,
            letter: 'c',
            text: 'La persona que identifica y describe anomalías',
          },
          {
            id: 3,
            letter: 'd',
            text: 'La persona que registra cada defecto mencionado',
          }
        ],
        answer: 'a'
      },
      {
        id:7,
        title: '¿Cómo evalúa las herramientas el grupo del programa de estudios Avanzado?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Para probadores o desarrolladores',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Por tareas de prueba',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Por rol de usuario',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Por costo',
          }
        ],
        answer: 'c'
      },
      {
        id:8,
        title: 'En un régimen de documentación de prueba compatible con IEEE 829, ¿cuál de los siguientes es un documento IEEE 829 que describe las variaciones entre el plan de prueba y lo que realmente sucedió durante un período de ejecución de prueba?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Registro de prueba',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Informe de incidente',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Informe de resumen de prueba',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Informe de transmisión del elemento de prueba',
          }
        ],
        answer: 'c'
      },
      {
        id:9,
        title: 'IEEE 10440-1993 especifica un estándar para la notificación de defectos. ¿Cuál de los siguientes atributos debería estar en un informe de defectos según el plan de estudios ISTQB?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Informe completo, conciso, exacto y objetivo.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Competitivo y preciso. No tiene que ser conciso u objetivo.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Completo y objetivo. No tiene que ser exacto.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Preciso. No tiene que ser completo, conciso u objetivo.',
          }
        ],
        answer: 'a'
      },
      {
        id:10,
        title: '¿Cuál de los siguientes NO está asociado con la motivación del probador?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Reconocimiento',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Aprobación de la dirección',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Recompensas adecuadas',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Pruebas por pares',
          }
        ],
        answer: 'd'
      },
      {
        id:11,
        title: '¿Qué es un riesgo de proyecto?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Un riesgo directamente relacionado con el objeto de prueba',
          },
          {
            id: 1,
            letter: 'b',
            text: 'La posibilidad de un resultado negativo o indeseable',
          },
          {
            id: 2,
            letter: 'c',
            text: 'La identificación, análisis, priorización y control del riesgo',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Un riesgo relacionado con la gestión y el control del proyecto',
          }
        ],
        answer: 'd'
      },
      {
        id:12,
        title: '¿Cuál de los siguientes coloca los niveles de TMM en el orden correcto?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Inicial, Definición, Integración, Gestión y Medición, Optimización',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Inicial, Integración, Definición, Gestión y Medición, Optimización',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Inicial, Integración, Definición, Optimización, Gestión y Medición',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Inicial, Definición, Integración, Optimización, Gestión y Medida; alquilar',
          }
        ],
        answer: 'a'
      },
      {
        id:13,
        title: '¿Qué es la planificación de pruebas?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'La actividad de establecer o actualizar los principios, el enfoque y los principales objetivos de la organización con respecto a las pruebas.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'La actividad de establecer o actualizar el alcance, el enfoque, los recursos y el cronograma de las actividades de prueba previstas',
          },
          {
            id: 2,
            letter: 'c',
            text: 'La actividad de establecer o actualizar objetivos, insumos, acciones de prueba, resultados esperados y condiciones previas de ejecución',
          },
          {
            id: 3,
            letter: 'd',
            text: 'La actividad de establecer o actualizar el método utilizado para realizar la ejecución de la prueba real, ya sea manual o automatizada.',
          }
        ],
        answer: 'b'
      },
      {
        id:14,
        title: '¿Qué es Delphi de banda ancha?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Una técnica de estimación de prueba basada en expertos que utiliza la sabiduría colectiva de los miembros del equipo.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Pruebas basadas en un análisis de la estructura interna del componente o sistema.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Un marco para describir las actividades del ciclo de vida del desarrollo de software desde la especificación de requisitos hasta el mantenimiento.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'El seguimiento de los requisitos a través de las capas de la documentación de desarrollo hasta los componentes.',
          }
        ],
        answer: 'a'
      },
      {
        id:15,
        title: '¿Cuál de las siguientes afirmaciones es verdadera?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'El modelo de procesos de pruebas críticas funciona solo para organizaciones que utilizan los ciclos de vida del software del modelo V.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'El modelo de procesos de pruebas críticas funciona solo para organizaciones que utilizan ciclos de vida de software ágiles',
          },
          {
            id: 2,
            letter: 'c',
            text: 'El modelo de procesos de pruebas críticas funciona solo para organizaciones que utilizan ciclos de vida de software evolutivos',
          },
          {
            id: 3,
            letter: 'd',
            text: 'El modelo de procesos de pruebas críticas funciona para organizaciones que utilizan cualquier ciclo de vida de software',
          }
        ],
        answer: 'd'
      },
      {
        id:16,
        title: '¿Cuál de las siguientes es la mejor descripción de una aplicación cliente-servidor?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'La aplicación utiliza una interfaz web.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Hay al menos una computadora que proporciona información a otras computadoras.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Hay una computadora que proporciona información a terminales tontas.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Las aplicaciones se ejecutan en una sola computadora.',
          }
        ],
        answer: 'b'
      },
      {
        id:17,
        title: '¿Cuál de los siguientes describe mejor una diferencia entre un modelo de desarrollo secuencial y uno iterativo?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Un modelo de desarrollo secuencial siempre llevará más tiempo que un modelo iterativo, para un proyecto de tamaño similar.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Un modelo de desarrollo secuencial garantiza que al cliente le gustará el producto, mientras que el modelo iterativo no.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Un modelo de desarrollo secuencial involucra a los usuarios en las pruebas principalmente al final del desarrollo, mientras que el modelo iterativo se concentra en la perspectiva del usuario durante todo el desarrollo.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Un modelo de desarrollo secuencial requiere pruebas de regresión significativas, mientras que un modelo iterativo no.',
          }
        ],
        answer: 'c'
      },
      {
        id:18,
        title: `¿Cuáles de los siguientes están incluidos en los planes de prueba?
              I. Un cronograma de eventos.
              II. El conjunto de casos de prueba a ejecutar.
              III. Las funciones y responsabilidades de las partes interesadas.
              IV. Los datos de prueba.
              V. Los resultados de las pruebas e incidencias planteadas.`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'I y II',
          },
          {
            id: 1,
            letter: 'b',
            text: 'II y III',
          },
          {
            id: 2,
            letter: 'c',
            text: 'II, IV y V',
          },
          {
            id: 3,
            letter: 'd',
            text: 'I y III',
          }
        ],
        answer: 'd'
      },
      {
        id:19,
        title: '¿Cuál de los siguientes sería un criterio de entrada apropiado de las pruebas del sistema a las pruebas de aceptación?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: '100 por ciento de cobertura de especificación funcional.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Cobertura del 100 por ciento de los requisitos del negocio.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Cobertura del estado de cuenta del 100 por ciento.',
          },
          {
            id: 3,
            letter: 'd',
            text: '100 por ciento de cobertura de ruta.',
          }
        ],
        answer: 'a'
      },
      {
        id:20,
        title: '¿Cuál de las siguientes daría la mejor medida de progreso contra la calidad del producto?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'El número de pruebas realizadas frente a las previstas.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'El tiempo de respuesta por defectos.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'El número de defectos de alta prioridad pendientes.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'El tiempo necesario para ejecutar cada prueba.',
          }
        ],
        answer: 'c'
      },
      {
        id:21,
        title: `¿En qué orden se debe crear la siguiente documentación de gestión de pruebas?
        I. Plan de prueba del proyecto
        II. Estrategia de prueba
        III. Política de prueba
        IV. Plan de prueba de nivel`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'I, II, III, IV',
          },
          {
            id: 1,
            letter: 'b',
            text: 'II, I, III, IV',
          },
          {
            id: 2,
            letter: 'c',
            text: 'III, II, I, IV',
          },
          {
            id: 3,
            letter: 'd',
            text: 'I, IV, III, II',
          }
        ],
        answer: 'c'
      },
      {
        id:22,
        title: `¿Cuál de las siguientes es una declaración de política de prueba?`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Se requerirá ToolX dentro del conjunto de herramientas eficientes para este proyecto.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Los proyectos de toda la empresa utilizarán el conjunto de herramientas eficientes.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Se requerirá capacitación en ToolX para el personal de este proyecto.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Se requerirá ToolX por un período de un mes.',
          }
        ],
        answer: 'b'
      },
      {
        id:23,
        title: `¿Cuál de los siguientes podría formar parte de los criterios de entrada en las pruebas del sistema?
          I. Cobertura de decisión del 100 por ciento de todos los cálculos de tarifas.
          II. Cobertura del 100% de las especificaciones funcionales de todos los tipos de hogares.
          III. Se destacan los defectos sobresalientes en las pruebas de integración.
          IV. Informe de resumen de prueba para la prueba del sistema producido.
          V. Requisitos de negocio firmados.
        
        `,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'I, II y III',
          },
          {
            id: 1,
            letter: 'b',
            text: 'II, III y IV',
          },
          {
            id: 2,
            letter: 'c',
            text: 'I y III',
          },
          {
            id: 3,
            letter: 'd',
            text: 'I, III y IV',
          }
        ],
        answer: 'c'
      },
      {
        id:24,
        title: `¿Cuál de los siguientes formaría parte de los criterios de ingreso a las pruebas unitarias (que serán seguidas por las pruebas de integración)?
          I. Cobertura de decisión del 100 por ciento de todos los cálculos de tarifas.
          II. Especificación del programa aprobado.
          III. Especificación técnica firmada.
          IV. Cobertura del 100% de las especificaciones del programa.
          V. Código compilado.`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'I, III y V',
          },
          {
            id: 1,
            letter: 'b',
            text: 'II y V',
          },
          {
            id: 2,
            letter: 'c',
            text: 'I, II y III',
          },
          {
            id: 3,
            letter: 'd',
            text: 'III, IV y V',
          }
        ],
        answer: 'b'
      },
      {
        id:25,
        title: `Un banco importante recientemente subcontrató todo su desarrollo de software en un esfuerzo por reducir sus costos fijos. El nuevo proveedor será responsable de todos los nuevos desarrollos, así como de las mejoras a los existentes.

        El banco ha conservado su propio equipo de gestión para sus proyectos. Habrá un administrador de proyectos interno, un administrador de desarrollo y un administrador de pruebas para cada proyecto. Algunos miembros del personal pueden trabajar en más de un proyecto, según el tamaño total.
        
        Se está realizando una mejora para permitir que los clientes existentes autoricen sus propios préstamos en línea, de 1k a 10k respondiendo una serie de preguntas.
        
        ¿Cuál de los siguientes describe mejor la utilidad de una política de prueba en este escenario?`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'La política de prueba garantizará que todos los miembros de ambos conjuntos de equipos entiendan cuáles son sus roles y responsabilidades.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'La política de pruebas identificará los riesgos de cada proyecto y garantizará que todo el personal sepa cómo enfrentarlos.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'La política de prueba asegurará que todos los miembros del equipo entiendan lo que requiere el banco para crear productos de alta calidad.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'La política de pruebas recordará al personal la utilidad de usar su propio conocimiento para realizar las pruebas.',
          }
        ],
        answer: 'c'
      },
      {
        id:26,
        title: `La tripulación de una fuerza de defensa aérea nacional ha solicitado cambios en el software de aviación existente que proporciona información a bordo sobre el entorno de combate. La fuerza aérea se encuentra actualmente comprometida en una misión de mantenimiento de la paz en otro país y se ha enfrentado a amenazas inesperadas.
                El ciclo de vida de desarrollo es el modelo V. La casa de software necesita cambiar su proceso de gestión de pruebas para garantizar la entrega en el momento y la calidad adecuados.

                Los cambios de software están llegando a medida que las tripulaciones aéreas los solicitan, como resultado de sus enfrentamientos con fuerzas hostiles.
                
                La tripulación ha solicitado que los cambios se realicen lo más rápido posible. El director del proyecto ha decidido revisar el proceso de gestión de pruebas. Los cambios vendrán como pequeñas solicitudes de cambio. El equipo ha trabajado en el proyecto durante más de 25 años, con poca rotación de personal.
                
                El director del proyecto ha pedido su consejo sobre la estimación de la prueba. ¿Cuál de los siguientes recomendaría?
        
        `,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Realice un análisis de puntos de prueba en cada definición de solicitud de cambio.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Analizar datos de proyectos anteriores para encontrar cambios similares a cada solicitud de cambio y usar esto para estimar el tiempo requerido.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Pregunte a los desarrolladores cuánto tiempo llevará implementar el cambio y asigne el 50 por ciento de esto a las pruebas.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Pregúntele al probador que realizará la prueba para una mejor suposición.',
          }
        ],
        answer: 'd'
      },
      {
        id:27,
        title: `¿Cuál de los siguientes es más probable que se encuentre en una revisión de una especificación funcional?`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Valores límite indefinidos',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Código inalcanzable',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Una falla en el sistema',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Una pérdida de memoria',
          }
        ],
        answer: 'a'
      },
      {
        id:28,
        title: `¿Cuál de los siguientes tiene el aprendizaje como uno de sus propósitos principales?`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Tutorial.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Revisión informal.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Revisión técnica.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Inspección.',
          }
        ],
        answer: 'a'
      },
      {
        id:29,
        title: `¿Cuál de los siguientes siempre hace uso de criterios de entrada y salida?`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Tutorial.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Revisión informal.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Revisión técnica.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Inspección.',
          }
        ],
        answer: 'd'
      },
      {
        id:30,
        title: `
          Se está creando un nuevo sistema. Se está utilizando una forma de desarrollo iterativo, el desarrollo Agile. El proceso de captura de requisitos es típico de los proyectos de desarrollo iterativo en los que hay requisitos limitados disponibles. La funcionalidad para la primera iteración se ha esbozado, pero existe una necesidad real de que se entregue un sistema de calidad a tiempo.
          
          ¿Cuál de los siguientes proporcionaría el mejor razonamiento para usar revisiones guiadas en el primer conjunto de requisitos?`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Se asegurarán de que los gerentes entiendan lo que se entregará para cada iteración, para que puedan proporcionar contingencia.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Dado el interés en la calidad, los requisitos se pueden revisar en detalle para garantizar que los desarrolladores comprendan lo que se requiere.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Se pueden aprender lecciones desde la primera iteración, lo que debería ayudar a mejorar el rendimiento para iteraciones posteriores.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Permitirán que una amplia gama de partes interesadas entienda lo que se construirá y probará para la primera iteración.',
          }
        ],
        answer: 'd'
      },
      {
        id:31,
        title: `Es inusual encontrar que el proceso completo de inspección se sigue de forma rutinaria en proyectos de desarrollo iterativo, por lo general son demasiado costosos en tiempo y dinero.
        
        ¿Qué parte del proceso de inspección podríamos utilizar aquí, con el mejor efecto?`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Capacitar a los moderadores de las revisiones técnicas para que puedan administrar mejor el proceso.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Inspeccionar los requisitos de cada iteración para mejorar la calidad general del sistema.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Recopile métricas al final de cada iteración sobre los defectos encontrados por gravedad y prioridad, y utilícelas para planificar la siguiente iteración.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Incluir a los gerentes en las revisiones para que puedan apreciar mejor los costos involucrados y brindar más contingencia en caso de que las cosas salgan mal.',
          }
        ],
        answer: 'a'
      },
      {
        id:32,
        title: `Un supermercado importante está actualizando su tienda en línea en respuesta a cambios recientes en el gasto de los consumidores. Ha reducido su gama de productos premium ofreciendo menos carnes y verduras ecológicas y menos frutas y verduras exóticas. Ha aumentado su gama de productos amigables al aumentar sus productos de origen local, y su gama de comercio justo al incluir más productos del extranjero donde los productores tienen asegurado un precio justo por sus productos.
        
        El diseño frontal está cambiando para permitir que los clientes seleccionen sus preferencias de compra, que son:
        # Amigable con el medio ambiente;
        # familiar;
        # justo para todos.
        
        A continuación, se ofrecerán a los clientes productos pertenecientes a cada una de estas categorías. Los cambios en el front-end se consideran simples, en comparación con los cambios necesarios en el back-end, para proporcionar a cada grupo de clientes las opciones correctas de productos.

        El ciclo de vida del desarrollo es el desarrollo ágil. Uno de los desarrolladores ha comenzado a crear un diseño de alto nivel para ayudar a aclarar las categorías de productos. Ha decidido realizar una revisión del diseño de alto nivel.

        ¿Cuál de los siguientes tipos de revisión sería adecuado para el diseño de alto nivel, según el razonamiento dado?`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Una revisión guiada por el diseño, para que aquellos que construyen el front-end puedan entender cómo su software interactuará con el back-end.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Una revisión técnica del diseño para que cada categoría de producto pueda definirse estrictamente antes de construir la funcionalidad.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Una inspección del diseño para ver si se puede reutilizar fácilmente para iteraciones posteriores.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Una revisión por parte de la dirección del diseño para garantizar que se ajuste al propósito.',
          }
        ],
        answer: 'a'
      },
      {
        id:33,
        title: `¿Cuál de los siguientes NO es un desafío con la subcontratación?`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Diferencias culturales',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Calidad',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Rotación de empleados',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Bajo costo',
          }
        ],
        answer: 'd'
      },
      {
        id:141,
        title: 'Una evaluación formal de un producto de trabajo realizada por uno o más revisores independientes calificados para detectar defectos.',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Inspección.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Tutorial.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Revisar',
          },
          {
            id: 3,
            letter: 'd',
            text: 'No conformidad',
          }
        ],
        answer: 'a'
      },
      {
        id:142,
        title: `¿Cuáles de las siguientes son tareas PRINCIPALES de implementación y ejecución de pruebas?
          I. Repetición de actividades de prueba
          II. Creación de conjuntos de pruebas 
          III. Informe de discrepancias
          IV. Registrando el resultado
          V. Análisis de las lecciones aprendidas`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'II, III y IV.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'I, III, IV y V',
          },
          {
            id: 2,
            letter: 'c',
            text: 'I, II, III y IV',
          },
          {
            id: 3,
            letter: 'd',
            text: 'III, IV y V',
          }
        ],
        answer: 'c'
      },
      {
        id:143,
        title: `¿Qué tareas realiza un líder de prueba versus un probador? 
          S. Redacción de una estrategia de prueba de proyecto
          T. Selección de herramientas para apoyar las pruebas
          U. Preparación y adquisición de datos
          V. Programación de pruebas`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Líder de la prueba: S y V; Probador: T y U',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Líder de la prueba: S, T y V; probador: U',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Líder de la prueba: S, U y V; Probador: T',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Líder de la prueba: S; Probador: T, U y V',
          }
        ],
        answer: 'b'
      },
      {
        id:144,
        title: `Qué tipo de herramientas se utilizarán para las pruebas de regresión`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Performance',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Grabar/Reproducir',
          },
          {
            id: 2,
            letter: 'c',
            text: 'A. & B.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'None',
          }
        ],
        answer: 'b'
      },
      {
        id:145,
        title: `Las pruebas de integración del sistema deben realizarse después de`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Pruebas de integración',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Pruebas del sistema',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Unit testing',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Pruebas de integración de componentes',
          }
        ],
        answer: 'b'
      },
      {
        id:146,
        title: `Durante este evento se prueba todo el sistema para verificar que se han cumplido todos los requisitos estructurales y de calidad de la información funcional. Se diseña una combinación predeterminada de pruebas que, cuando se ejecutan con éxito, satisfacen a la gerencia de que el sistema cumple con las especificaciones.`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Pruebas de validación',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Pruebas de integración',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Pruebas de aceptación del usuario',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Pruebas del sistema',
          }
        ],
        answer: 'c'
      },
      {
        id:147,
        title: `¿Cuál es el orden normal de las actividades en las que se organizan las pruebas de software?`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Unidad, integración, sistema, validación.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Sistema, integración, unidad, validación',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Unidad, integración, validación, sistema.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Ninguna de las anteriores',
          }
        ],
        answer: 'a'
      },
      {
        id:148,
        title: `Durante las pruebas, se encontró un defecto en el que el sistema colapsaba cuando la red se desconectaba mientras recibía datos del servidor. El defecto se solucionó corrigiendo la funcionalidad que verifica la disponibilidad de la red durante la transferencia de datos. Los casos de prueba existentes cubrieron el 100% de las declaraciones del módulo. Para verificar la solución y garantizar una cobertura más amplia, se diseñaron y agregaron algunas pruebas al conjunto de pruebas. ¿Qué tipos de pruebas se mencionan anteriormente?
          I. Pruebas funcionales
          II.Pruebas estructurales
          III.Pruebas de confirmación
          IV. Pruebas de rendimiento`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'I, III and IV',
          },
          {
            id: 1,
            letter: 'b',
            text: 'I and III',
          },
          {
            id: 2,
            letter: 'c',
            text: 'II and IV',
          },
          {
            id: 3,
            letter: 'd',
            text: 'I, II and III',
          }
        ],
        answer: 'd'
      },
      {
        id:149,
        title: `¿Qué es una técnica de secuencias de comandos que utiliza archivos de datos para contener no solo datos de prueba y resultados esperados, sino también palabras clave relacionadas con la aplicación que se está probando?`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Técnica de automatización',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Lenguaje de escritura',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Pruebas impulsadas por procesos',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Pruebas basadas en palabras clave',
          }
        ],
        answer: 'd'
      },
      {
        id:150,
        title: `Los principales atributos de las herramientas y la automatización son`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Velocidad y eficiencia',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Exactitud y precisión',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Todo lo anterior',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Ninguna de las anteriores',
          }
        ],
        answer: 'c'
      },
      {
        id:701,
        title: 'De acuerdo con el Glosario ISTQB, ¿cómo llamamos a un documento que describe cualquier evento que ocurrió durante la prueba y que requiere una mayor investigación?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Un informe de error',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Un informe de defectos',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Un informe de incidente',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Un informe de resumen de prueba',
          }
        ],
        answer: 'c'
      },
      {
        id:702,
        title: `
          Se realiza un análisis de riesgo del producto durante la etapa de planificación del proceso de prueba. Durante la etapa de ejecución del proceso de prueba, el gerente de prueba indica a los probadores que clasifiquen cada informe de defecto por el riesgo conocido del producto con el que se relaciona (o con 'otro'). Una vez a la semana, el administrador de pruebas ejecuta un informe que muestra el porcentaje de defectos relacionados con cada riesgo conocido del producto y con los riesgos desconocidos. 
          ¿Cuál es un posible uso de dicho informe?`,
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Identificar nuevos riesgos para la calidad del sistema.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Para localizar grupos de defectos en subsistemas de productos.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Comprobar la cobertura de riesgos mediante pruebas.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Para medir las pruebas exploratorias.',
          }
        ],
        answer: 'a'
      },
      {
        id:703,
        title: '¿Qué herramientas ayudan a respaldar las pruebas estáticas?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Herramientas de análisis estático y herramientas de ejecución de pruebas.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Revisar herramientas de apoyo a procesos, herramientas de análisis estático y herramientas de medición de cobertura.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Herramientas de análisis dinámico y herramientas de modelado.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Revise las herramientas de soporte de procesos, las herramientas de análisis estático y las herramientas de modelado.',
          }
        ],
        answer: 'd'
      },
      {
        id:704,
        title: '¿Qué actividades de prueba son compatibles con el arnés de prueba o las herramientas del marco de prueba unitaria?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Gestión y control de pruebas.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Especificación y diseño de pruebas.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Prueba de ejecución y registro.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Rendimiento y seguimiento.',
          }
        ],
        answer: 'c'
      },
      {
        id:705,
        title: '¿Cuáles son los beneficios potenciales del uso de herramientas en general para respaldar las pruebas?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Mayor calidad de código, reducción del número de probadores necesarios, mejores objetivos para las pruebas.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Mayor repetibilidad de las pruebas, reducción del trabajo repetitivo, evaluación objetiva.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Mayor capacidad de respuesta de los usuarios, reducción de la ejecución de pruebas, objetivos no necesarios.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Mayor calidad de código, reducción de papeleo, menos objeciones a las pruebas.',
          }
        ],
        answer: 'b'
      },
      {
        id:706,
        title: '¿Cuál es un riesgo potencial en el uso de herramientas para respaldar las pruebas?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Expectativas poco realistas, esperar que la herramienta haga demasiado.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Dependencia insuficiente de la herramienta, es decir, aún se realizan pruebas manuales cuando se ha comprado una herramienta de ejecución de pruebas.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'La herramienta puede encontrar defectos que no existen.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'La herramienta repetirá exactamente lo mismo que hizo la vez anterior.',
          }
        ],
        answer: 'a'
      },
      {
        id:707,
        title: '¿Cuáles de las siguientes son técnicas avanzadas de secuencias de comandos para herramientas de ejecución de pruebas?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Basado en datos y palabras clave',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Basado en datos y basado en captura',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Impulsado por captura y por ojo de cerradura',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Conducido por la reproducción y por palabra clave',
          }
        ],
        answer: 'a'
      },
      {
        id:708,
        title: '¿Cuál de las siguientes NO se haría como parte de la selección de una herramienta para una organización?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Evaluar la madurez organizacional, fortalezas y debilidades.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Implemente la herramienta para tantos usuarios como sea posible dentro de la organización.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Evalúe las funciones de la herramienta frente a requisitos claros y criterios objetivos.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Identificar los requisitos internos de coaching y mentoring en el uso de la herramienta.',
          }
        ],
        answer: 'b'
      },
      {
        id:709,
        title: '¿Cuál de los siguientes es un objetivo para una prueba de concepto o fase piloto para la evaluación de herramientas?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Decide qué herramienta adquirir.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Decidir los principales objetivos y requisitos de este tipo de herramienta.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Evaluar al proveedor de la herramienta incluyendo capacitación, soporte y aspectos comerciales.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Decida las formas estándar de usar, administrar, almacenar y mantener la herramienta y los activos de prueba.',
          }
        ],
        answer: 'd'
      },
      {
        id:710,
        title: '¿Cuál es una característica clave de las técnicas de prueba basadas en especificaciones?',
        options:[
          {
            id: 0,
            letter: 'a',
            text: 'Las pruebas se derivan de la información sobre cómo se construye el software.',
          },
          {
            id: 1,
            letter: 'b',
            text: 'Las pruebas se derivan de modelos (formales o informales) que especifican el problema a resolver por el software o sus componentes.',
          },
          {
            id: 2,
            letter: 'c',
            text: 'Las pruebas se derivan en función de las habilidades y la experiencia del evaluador.',
          },
          {
            id: 3,
            letter: 'd',
            text: 'Las pruebas se derivan de la extensión de la cobertura de los elementos estructurales del sistema o componentes.',
          }
        ],
        answer: 'b'
      },
    ]
  )
}
