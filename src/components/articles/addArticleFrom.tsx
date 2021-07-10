import { Modal } from 'src/components/Modal'
import { useNote } from 'src/hooks/useNote'

export const AddArticleForm = () => {
  const { articleAdd } = useNote()

  const handleSubmit = async (values: { text: string; name: string }) => {
    await articleAdd(values)
  }

  return <Modal handleSubmit={handleSubmit} />
}
