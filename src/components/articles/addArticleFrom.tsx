import { db } from 'firebase/clientApp'
import { VFC } from 'react'
import { Modal } from 'src/components/Modal'

type Props = {
  id?: string
}

export const AddArticleForm: VFC<Props> = (props) => {
  const id = props.id

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
    } else {
      await db.collection('contents').doc(values.text).set({
        //お題
        theme: values.text,
        //参加者
        participant: '',
        //日時
        time: '',
        //zoomlinkなど
        link: '',
        //詳細
        description: '',
      })
    }
  }

  const handleSubmit = async (values: { text: string; name: string }) => {
    await articleAdd(values)
  }

  return <Modal handleSubmit={handleSubmit} />
}
