import { db } from 'firebase/clientApp'
import { useEffect, useState, VFC } from 'react'

import { ArticleTag } from './ArticleTag'
import type { articleListProps, articlePost } from './types'

export const ArticleNote: VFC<articleListProps> = ({ article }) => {
  const [articles, setArticles] = useState<articlePost>([])

  useEffect(() => {
    const unsubscribe = db
      .collection('contents')
      .doc(article.roomId)
      .collection(article.roomId)
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        setArticles(
          snapshot.docs.map((doc) => ({ roomId: doc.id, question: doc.data().question, name: doc.data().name }))
        )
      })
    return () => unsubscribe()
  }, [])

  return (
    <div>
      <ul>
        {articles.map((item) => (
          <li className="pt-4 text-3xl" key={item.roomId}>
            <div className="cursor-pointer">
              <ArticleTag id={item.roomId} name={item.name}>
                <p>{item.question}</p>
                <p>投稿ID - {item.roomId}</p>
              </ArticleTag>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
