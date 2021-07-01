import { db } from 'firebase/clientApp'

export const getTaskIds = async () => {
  const tasks: { id: string }[] = []
  await db
    .collection('tasks')
    .get()
    .then((snapshot) => {
      snapshot.docs.map((doc) => {
        tasks.push({
          id: doc.id,
        })
      })
    })
  return tasks.map((item) => {
    return {
      params: {
        id: item.id,
      },
    }
  })
}

export const getTaskData = async (id: string | undefined) => {
  const ref = await db.collection('tasks').doc(id).get()

  return ref.data()
}
