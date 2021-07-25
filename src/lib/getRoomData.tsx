import { db } from 'firebase/clientApp'

export const getRoomIds = async () => {
  const Data: { id: string }[] = []

  await db
    .collection('contents')
    .get()
    .then((snapshot) => {
      snapshot.docs.map((doc) => {
        Data.push({
          id: doc.id,
        })
      })
    })

  return Data.map((item) => {
    return {
      params: {
        roomId: item.id,
      },
    }
  })
}

export const getRoomData = async (id: string | undefined) => {
  const ref = await db.collection('contents').doc(id).get()
  const roomId = id

  return { ref: ref.data(), roomId }
}
