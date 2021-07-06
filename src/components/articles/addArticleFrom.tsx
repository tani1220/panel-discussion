import { Modal } from 'src/components/Modal'
import { useDialog } from 'src/hooks/useDialog'
import { useNote } from 'src/hooks/useNote'

export const AddArticleForm = () => {
  const { setValues } = useDialog()
  const { articleAdd } = useNote()

  const handleSubmit = async (values: { text: string; name: string }) => {
    await articleAdd(values)
    setValues({ text: '', name: '匿名さん' })
  }

  return (
    <>
      <Modal handleSubmit={handleSubmit} />
    </>
  )
}
