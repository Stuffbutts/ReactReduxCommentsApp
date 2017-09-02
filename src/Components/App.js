import React from 'react'

import 'foundation-sites/dist/css/foundation-float.css'

import StoryContainer from '../Containers/StoryContainer'
import CommentFrame from './CommentFrame'

const App = () => (
  <div>
      <StoryContainer/>
      <hr/>
      <CommentFrame />
  </div>
);

export default App