import React from 'react'

import 'foundation-sites/dist/css/foundation-float.css'

import 'font-awesome/css/font-awesome.css'
import 'font-awesome/fonts/fontawesome-webfont.ttf'
import 'font-awesome/fonts/fontawesome-webfont.woff'


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