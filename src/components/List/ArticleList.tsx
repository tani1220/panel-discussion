import { db } from 'firebase/clientApp'
import { useEffect, useState, VFC } from 'react'
import { ListDialog } from 'src/components/Dialog'

import type { articlePost, ListProps } from './types'

export const ArticleList: VFC<ListProps> = ({ article }) => {
  const [articles, setArticles] = useState<articlePost>([])

  //質問データ取得
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
          <li key={item.id}>
            <div className="pt-4 text-lg mx-5 sm:mx-10 md:text-xl xl:text-2xl cursor-pointer">
              <div className="w-auto bg-white bg-opacity-10 rounded p-6">
                <ListDialog name={item.name} id={item.id} roomId={article.roomId}>
                  {item.question}
                </ListDialog>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
