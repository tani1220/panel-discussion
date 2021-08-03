import { db } from 'firebase/clientApp'

export const useNote = () => {
  const articleAdd = async (values: { text: string; name: string }) => {
    await db.collection('articles').add({
      question: values.text,
      name: values.name,
      createdAt: JSON.stringify(new Date()),
    })
  }

  return { articleAdd }
}
