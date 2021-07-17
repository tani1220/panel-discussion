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
  const allData: { question: string; name: string }[] = []

  ref.map(async (item) => {
    await db
      .collection('contents')
      .doc(item.id)
      .collection(item.id)
      .get()
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          allData.push({
            // id: doc.id,
            question: doc.data().question,
            name: doc.data().name,
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

export const getArticleData = async (id: string | undefined) => {
  const ArticleId = id

  return { ArticleId }
}
