import Head from 'next/head'
import assert from './../assert'
import greetings from './exercise'

assert(greetings('Link') === 'Hello Link', 'Greetings call')

export default () => (
  <div>
    <h1>Test</h1>
  </div>
)
