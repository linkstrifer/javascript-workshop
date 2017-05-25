import Head from 'next/head'

export default (opts) => (
  <div>
    <Head>
      <title>{ opts.title ?
          `${opts.title} - Javascript Workshop` :
          'Javascript Workshop' }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
  </div>
)
