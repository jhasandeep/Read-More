// Write your code here
import {useState} from 'react'

import {Background, Image, Paragraph, Header} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const sliceText = reactHooksDescription.slice(0, 170)

  const readMoreText = reactHooksDescription.slice(0, 500)

  const [state, updateState] = useState(false)

  const Read = state ? 'Read Less' : 'Read More'

  const Heading = state ? readMoreText : sliceText

  const click = () => {
    updateState(prevState => !prevState)
  }

  return (
    <Background>
      <div>
        <Header>React Hooks</Header>
        <p>Hooks are a new addition to React</p>
        <div>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
            alt="react hooks"
          />

          <Paragraph>{Heading}</Paragraph>
        </div>

        <button type="button" onClick={click}>
          {Read}
        </button>
      </div>
    </Background>
  )
}

export default ReadMore
