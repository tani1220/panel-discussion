import { db } from 'firebase/clientApp'
import { useEffect, useState, VFC } from 'react'
import { TextCard } from 'src/components/TextCard'
import type { TaskPost } from 'src/types/types'

type Props = {
  newTasks: TaskPost
}

export const Article: VFC<Props> = (props) => {
  const [articles, setArticles] = useState(props.newTasks)

  useEffect(() => {
    const unsubscribe = db
      .collection('tasks')
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        setArticles(snapshot.docs.map((doc) => ({ id: doc.id, question: doc.data().question, name: doc.data().name })))
      })
    return () => unsubscribe()
  }, [])

  return (
    <div>
      <ul>
        {articles.map((task) => (
          <li className="pt-4 text-3xl" key={task.id}>
            <div className="cursor-pointer">
              <TextCard id={task.id}>
                <a>{task.question}</a>
              </TextCard>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
