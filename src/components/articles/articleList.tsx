import { db } from 'firebase/clientApp'
import { useEffect, useState, VFC } from 'react'
import { TextCard } from 'src/components/share/TextCard'

type articlePost = {
  roomId: string
  question: string
}[]

type articleProps = {
  article: {
    roomId: string
    ref: {
      theme: string
    }
  }
}

export const ArticleList: VFC<articleProps> = ({ article }) => {
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
              <TextCard id={item.question}>
                <a>{item.question}</a>
                <a>{item.roomId}</a>
              </TextCard>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
