
import { addreaction } from "../globstore/slice"
import { useDispatch } from "react-redux";

const Reaction = (props) => {
    // console.log(props.data.reactions);
    const myReaction = {
        coffee: '☕',
        dislike: '👎',
        heart: '❤️',
        rocket: '🚀',
        tumbsup: '👍',
        wow: '😮',

    }
    const dispatch = useDispatch()
    const renderReactions =
        Object.entries(myReaction).map(([key, value]) => {
            // console.log(key);
            return (
                <button key={key} className="buttonWithFontSize" onClick = {
                     ()=>{dispatch(addreaction({ myId: props.data.Id, reaction: key }))}}>
                    {value}{props.data.reactions[key]}
                </button>
            )
        })



    return (
        
        <div>{renderReactions}</div>
    )
}
export default Reaction