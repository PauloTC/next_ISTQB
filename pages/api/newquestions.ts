import type { NextApiRequest, NextApiResponse } from 'next'

type Option = {
  text: string,
  answer: boolean
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
              text: 'Comprender el problema empresarial que resuelve el sistema.',
              answer: true,
            },
            {
              text: 'Comprensión de la tecnología que subyace al sistema.',
              answer: false,
            },
            {
              text: 'Comprender lo esencial de las pruebas de software',
              answer: false,
            },
            {
              text: 'Comprender la política organizacional',
              answer: false,
            }
          ],
          answer: 'a'
        },
    ]
  )}