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
        answer: 'c'
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
