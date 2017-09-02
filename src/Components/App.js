import React from 'react'

import 'foundation-sites/dist/css/foundation-float.css'

import Story from './Story'
import CommentFrame from './CommentFrame'

const App = () => (
  <div>
      <Story text="Lorem ipsum"/>
      <hr/>
      <CommentFrame />
  </div>
);

export default App