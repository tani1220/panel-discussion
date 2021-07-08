import { db } from 'firebase/clientApp'

export const getArticleIds = async () => {
  const Data: { id: string }[] = []

  await db
    .collection('articles')
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
        articleId: item.id,
      },
    }
  })
}

export const getArticleData = async (id: string | undefined) => {
  const ref = await db.collection('articles').doc(id).get()
  const ArticleId = id

  return { ref: ref.data(), ArticleId }
}
