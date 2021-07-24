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
              <ThemeCard id={item.id} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const articles: { id: string; theme: string }[] = []

  const ref = await db.collection('contents').get()
  ref.docs.map((doc) => {
    const data = { id: doc.id, theme: doc.data().theme }
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
