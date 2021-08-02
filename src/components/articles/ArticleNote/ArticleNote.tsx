import { db } from 'firebase/clientApp'
import { useEffect, useState, VFC } from 'react'

import { ArticleTag } from './ArticleTag'
import type { articleNoteProps, articlePost } from './types'

export const ArticleNote: VFC<articleNoteProps> = ({ article }) => {
  const [articles, setArticles] = useState<articlePost>([])

  useEffect(() => {
    const unsubscribe = db
      .collection('contents')
      .doc(article.roomId)
      .collection(article.roomId)
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        setArticles(snapshot.docs.map((doc) => ({ id: doc.id, question: doc.data().question, name: doc.data().name })))
      })
    return () => unsubscribe()
  }, [])

  return (
    <div>
      <ul>
        {articles.map((item) => (
          <li className="pt-4 text-3xl" key={item.id}>
            <div className="cursor-pointer">
              <ArticleTag id={item.id} name={item.name} roomId={article.roomId}>
                <p>{item.question}</p>
                <p>投稿ID - {item.id}</p>
                <p>roomId - {article.roomId}</p>
              </ArticleTag>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
