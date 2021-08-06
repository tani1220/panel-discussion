import { db } from 'firebase/clientApp'
import { VFC } from 'react'

import { UserModal } from './UserModal'

type addArticleProps = {
  roomId?: string
}

export const UserForm: VFC<addArticleProps> = (props) => {
  const id = props.roomId

  const articleAdd = async (values: { text: string; name: string }) => {
    if (id) {
      await db
        .collection('contents')
        .doc(id)
        .collection(id)
        .add({
          question: values.text,
          name: values.name,
          createdAt: JSON.stringify(new Date()),
        })
    }
  }

  const handleSubmit = async (values: { text: string; name: string }) => {
    await articleAdd(values)
  }

  return <UserModal handleSubmit={handleSubmit} />
}
