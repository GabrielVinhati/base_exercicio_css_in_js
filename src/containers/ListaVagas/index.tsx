import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import { VagasList } from './ListaVagas.module'

type VagasType = {
  id: string | number
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const vagas: VagasType[] = [
  {
    id: 1,
    titulo: 'Desenvolvedor Web',
    localizacao: 'Remoto',
    nivel: 'Júnior',
    modalidade: 'CLT',
    salarioMin: 3500,
    salarioMax: 4800,
    requisitos: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Criatividade']
  },
  {
    id: 2,
    titulo: 'Arquitetor Digital (Back-End)',
    localizacao: 'Remoto',
    nivel: 'Senior',
    modalidade: 'pj',
    salarioMin: 9000,
    salarioMax: 10500,
    requisitos: ['NodeJS', 'MongoDB', 'Express', 'API Restful']
  },
  {
    id: 3,
    titulo: 'Web Designer',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 5000,
    salarioMax: 5500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 4,
    titulo: 'Designer Gráfico',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'clt',
    salarioMin: 6000,
    salarioMax: 7000,
    requisitos: ['Photoshop', 'Illustrator', 'CorelDRAW', 'Criatividade']
  },
  {
    id: 5,
    titulo: 'Designer Gráfico',
    localizacao: 'remoto',
    nivel: 'Senior',
    modalidade: 'clt',
    salarioMin: 9000,
    salarioMax: 10000,
    requisitos: ['Photoshop', 'Illustrator', 'CorelDRAW', 'Criatividade']
  },
  {
    id: 6,
    titulo: 'Editor de Vídeo (Júnior)',
    localizacao: 'remoto',
    nivel: 'Júnior',
    modalidade: 'pj',
    salarioMin: 3000,
    salarioMax: 4000,
    requisitos: ['Adobe Premiere Pro', 'Final Cut Pro', 'Adobe After Effects']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter(
    (x) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
  )

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <VagasList>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </VagasList>
    </div>
  )
}

export default ListaVagas
