import { useRef } from "react"
import { PublicPut_Tools } from "../../../utils/Fetchs/classes"
import ConfirmModal from "../Confirm/confirmModal"
import { useTheContext } from "../../../context/ContextProvider"
const EliminarC = ({post_id, comment_Id,}) => {
    const { publicData, data, updateData} = useTheContext();

    const modalRef = useRef()

    const openModal = () => {
        modalRef.current.showModal()
    }
    const Eliminar = () => {
      let thePost = publicData.find(posts => posts.id == post_id)
      let postCopy = {...thePost}

      let commentsFiltered = postCopy.comments.filter(comment => comment.id != comment_Id)

      postCopy.comments = commentsFiltered

      let newUpdate = new PublicPut_Tools(postCopy)
      newUpdate.put_The_Data(postCopy.id, newUpdate.data_For_Puts)

      setTimeout(() => {
        updateData(data + 1)
      }, 200);

      modalRef.current.close()
    }
  return (
   <>
   <ConfirmModal text={'Quieres eliminar tu comentario?'} acceptFunction={Eliminar} ref={modalRef} />
   <button onClick={openModal}>Eliminar</button>
   </>
  )
}

export default EliminarC