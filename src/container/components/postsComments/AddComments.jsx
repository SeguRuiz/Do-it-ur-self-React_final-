import { useRef, useState } from "react";
import { useTheContext } from "../../../context/ContextProvider";
import uuid from "react-uuid";
import { PublicPut_Tools } from "../../../utils/Fetchs/classes";

const AddComments = ({id, closeModal}) => {
    const { publicData, userInfo, data, updateData } = useTheContext();

    const inpRef = useRef()

    const [inpValue, setValue] = useState('')

    const changeValue = (x) => {
        setValue(x.target.value)
    }

    const addComment = (o) => {
     o.preventDefault()

     let commentValue = inpRef.current.value.trim()

     if (commentValue != '') {
        let dataCopy = [...publicData]
        let thePost = dataCopy.find( posts => posts.id == id) 
        let id_Comment = uuid()
        console.log(userInfo.info.name);

        let comment = {
        user: [userInfo.info.name, userInfo.id],
        text: commentValue,
        id:  id_Comment
        }
         
        thePost.comments.push(comment)

        let newComment = new PublicPut_Tools(thePost)
        newComment.put_The_Data(thePost.id, newComment.data_For_Puts)

        setTimeout(() => {
            updateData(data + 1)
        }, 200);

        
        setValue('')
     }
    }
  return (
   <>
   <form  onSubmit={addComment} action="">
    <input type="text"  placeholder="add comments" ref={inpRef} value={inpValue} onInput={changeValue}/>
    <button>send</button>
   </form>
   </>
  )
}

export default AddComments