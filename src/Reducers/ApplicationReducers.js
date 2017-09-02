import { combineReducers } from 'redux'
import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  REQUEST_STORY,
  RECEIVE_STORY
} from '../Actions/Actions'


const initialState = {
  stories: [
    {
      id: 0,
      dateTimeIndex: Date.now(),
      isFetching: false,
      text: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Id enim natura desiderat. <code>Duo Reges: constructio interrete.</code> Erat enim Polemonis. </p>

        <p>Fortemne possumus dicere eundem illum Torquatum? Immo videri fortasse. </p>

        <pre>
        Eorum erat iste mos qui tum sophistae nominabantur, quorum e
        numero primus est ausus Leontinus Gorgias in conventu
        poscere quaestionem, id est iubere dicere, qua de re quis
        vellet audire.

        Deinde disputat, quod cuiusque generis animantium statui
        deceat extremum.
        </pre>


        <p>Quid autem habent admirationis, cum prope accesseris? Ut pulsi recurrant? </p>
      `,
      source: "https://loripsum.net/api/3/short/link/code"
    }
  ],
  comments: [
    {
      id: 0,
      text: "First!",
      dateTimeIndex: Date.now()
    }
  ]
};

function comments(state = initialState.comments, action){
  switch(action.type){
    case ADD_COMMENT:
      return [
        ...state,
        {
          id: state.length > 0 ? state[state.length - 1].id + 1 : 0,
          text: action.text,
          dateTimeIndex: action.dateTimeIndex
        }
      ]
    case REMOVE_COMMENT:
      if (typeof state === undefined){
        return state
      }
      return [
        ...state.slice(0,action.index)
      ]      
    default:
      return state
      
  }
}

function stories(
  state = {
    isFetching: false,
    text: '',
    source: ''
  },
  action
){
  switch (action.type){
    case REQUEST_STORY:
      return Object.assign({}, state, {
        isFetching: true,
        source: action.source
      })
    case RECEIVE_STORY:
      return Object.assign({}, state, {
        isFetching: false,
        text: action.text,
        dateTimeIndex: action.dateTimeIndex
      })
    default:
      return state
  }
}

// function commentApp(state = initialState, action){

//   return state;
// }

const commentAppReducer = combineReducers({
  comments,
  stories
})

export default commentAppReducer
