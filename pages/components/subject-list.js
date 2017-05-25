import Head from './../components/head'
import Link from 'next/link'

export default () => (
  <section>
    <Head title="Subject 01"/>
    <ul>
      <li>
        <Link href="/01">
          <a>
            Subject 01
          </a>
        </Link>
      </li>
    </ul>
  </section>
)
