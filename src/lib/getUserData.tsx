import { db } from 'firebase/clientApp'

export const getUserId = async () => {
  const ids: { id: string }[] = []

  await db
    .collection('users')
    .get()
    .then((snapshot) => {
      snapshot.docs.map((doc) => {
        ids.push({
          id: doc.id,
        })
      })
    })

  return ids.map((item) => {
    return {
      params: {
        userId: item.id,
      },
    }
  })
}

export const getUserData = async (id: string) => {
  const ref = await db.collection('users').doc(id).get()
  const userId = id

  return { ref: ref.data(), userId }
}
