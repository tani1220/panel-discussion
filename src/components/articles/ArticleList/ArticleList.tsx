import { db } from 'firebase/clientApp'
import { useEffect, useState, VFC } from 'react'

import { Modal } from './Modal'
import type { articleListProps, articlePost } from './types'

export const ArticleList: VFC<articleListProps> = ({ article }) => {
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
          <li key={item.id}>
            <div className="pt-4 text-lg mx-5 sm:mx-10 md:text-2xl xl:text-3xl cursor-pointer">
              <div className="w-auto bg-gray-800 rounded-xl p-4">
                <Modal name={item.name} id={item.id} roomId={article.roomId}>
                  {item.question}
                </Modal>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
