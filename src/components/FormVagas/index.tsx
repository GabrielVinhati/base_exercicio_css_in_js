import { FormEvent, useState } from 'react'
import { Form, SearchButton, Field } from './FormVagas.module'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Field
        placeholder="Desenvolvedor Web, UI/UX, Marketing Digital"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <SearchButton type="submit">Buscar Oportunidades</SearchButton>
    </Form>
  )
}
export default FormVagas
