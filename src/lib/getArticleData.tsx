import { db } from 'firebase/clientApp'

export const getArticle = async () => {
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

  return Data
}

export const getArticleIds = async () => {
  const ref = await getArticle()
  const allData: { question: string }[] = []

  ref.map(async (item) => {
    await db
      .collection('contents')
      .doc(item.id)
      .collection(item.id)
      .get()
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          allData.push({
            question: doc.data().question,
          })
        })
      })
  })

  return allData.map((item) => {
    return {
      params: {
        articleId: item.question,
      },
    }
  })
}

export const getArticleData = async (id: string) => {
  const ArticleId = id

  return { ArticleId }
}
