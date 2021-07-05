import { db } from 'firebase/clientApp'

export const useNote = () => {
  const hundleDelete = (id: string) => {
    db.collection('tasks').doc(id).delete()
  }

  return { hundleDelete }
}
