import { VFC } from 'react'
import { ListDialog } from 'src/components/Dialog'
import { useArticle } from 'src/hooks/useArticle'

import type { ListProps } from './types'

export const ArticleList: VFC<ListProps> = ({ article }) => {
  const { articles } = useArticle(article.roomId)

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
