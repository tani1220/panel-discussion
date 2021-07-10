import { db } from 'firebase/clientApp'
import { useEffect, useState, VFC } from 'react'
import { TextCard } from 'src/components/share/TextCard'
import type { articlePost } from 'src/types/types'

type Props = {
  articles: articlePost
}

export const Article: VFC<Props> = (props) => {
  const [articles, setArticles] = useState(props.articles)

  useEffect(() => {
    const unsubscribe = db
      .collection('articles')
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        setArticles(snapshot.docs.map((doc) => ({ id: doc.id, question: doc.data().question })))
      })
    return () => unsubscribe()
  }, [])

  return (
    <ul>
      {articles.map((item) => (
        <li className="pt-4 text-3xl" key={item.id}>
          <div className="cursor-pointer">
            <TextCard id={item.id}>
              <a>{item.question}</a>
            </TextCard>
          </div>
        </li>
      ))}
    </ul>
  )
}
