import { db } from 'firebase/clientApp'
import type { InferGetStaticPropsType, NextPage } from 'next'
import { Container } from 'src/components/share/Container'
import { ThemeCard } from 'src/components/ThemeCard'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Container left="title" right="before">
        <ul>
          {articles.map((item) => (
            <li className="" key={item.id}>
              <ThemeCard id={item.id} theme={item.theme} name={item.name} date={item.date} time={item.time} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const articles: { id: string; theme: string; name: string; date: string; time: string }[] = []

  const ref = await db.collection('contents').get()
  ref.docs.map((doc) => {
    const data = {
      id: doc.id,
      theme: doc.data().theme,
      name: doc.data().name,
      date: doc.data().date,
      time: doc.data().time,
    }
    articles.push(data)
  })

  return {
    props: {
      articles,
    },
    revalidate: 60,
  }
}

export default Home
