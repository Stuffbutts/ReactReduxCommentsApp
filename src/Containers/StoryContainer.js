import { connect } from 'react-redux'
import Story from '../Components/Story'

const getStory = (story) => (
    story.text
);

const mapStateToProps = state => {
    return {
        text: getStory(state.story)
    }
};

const StoryContainer = connect(mapStateToProps)(Story);

export default StoryContainer