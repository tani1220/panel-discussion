import { db } from 'firebase/clientApp'
import { useEffect, useState, VFC } from 'react'
import { ArticleTag } from 'src/components/articles/ArticleNote/ArticleTag'

type articlePost = {
  roomId: string
  question: string
}[]

type articleListProps = {
  article: {
    roomId: string
    ref: {
      theme: string
    }
  }
}

export const ArticleNote: VFC<articleListProps> = ({ article }) => {
  const [articles, setArticles] = useState<articlePost>([])

  useEffect(() => {
    const unsubscribe = db
      .collection('contents')
      .doc(article.roomId)
      .collection(article.roomId)
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        setArticles(snapshot.docs.map((doc) => ({ roomId: doc.id, question: doc.data().question })))
      })
    return () => unsubscribe()
  }, [])

  return (
    <div>
      <ul>
        {articles.map((item) => (
          <li className="pt-4 text-3xl" key={item.roomId}>
            <div className="cursor-pointer">
              <ArticleTag id={item.question}>
                <a>{item.question}</a>
                <a>{item.roomId}</a>
              </ArticleTag>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
