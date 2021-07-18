import { db } from 'firebase/clientApp'
import type { InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { Container } from 'src/components/share/Container'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <Container>
      <ul>
        {articles.map((item) => (
          <li className="pt-4 text-3xl" key={item.id}>
            <Link href={`/rooms/${item.id}`}>
              <div className="cursor-pointer text-white">
                <a>{item.id}</a>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export const getStaticProps = async () => {
  const articles: { id: string }[] = []

  const ref = await db.collection('contents').get()
  ref.docs.map((doc) => {
    const data = { id: doc.id }
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
