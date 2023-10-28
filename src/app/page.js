import Image from 'next/image'

import { DocumentStore } from 'ravendb'

export default function Home() {
  return (
    <div>
      Importing DocumentStore breaks with the following error: <br />
      Error: XRegExp is not a function<br />
      Works in next 13.5
    </div>
  )
}
