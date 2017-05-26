import Head from 'next/head'

const HTMLHead = (opts) => (
  <div>
    <Head>
      <title>{ opts.title ?
          `${opts.title} - Javascript Workshop` :
          'Javascript Workshop' }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <link rel="stylesheet" href="/static/bulma.css"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Head>
  </div>
)

export default HTMLHead
