import "../../../Styles/ConfirmStyles/confirm.css"
import { forwardRef } from 'react'

const ConfirmModal = forwardRef(({text, acceptFunction}, ref)=>{
  //Es un modal que reutilizo para las confirmaciones
    const closeModal = () => {
        ref.current.close()
       }
    return(
        <>
        <dialog ref={ref} className='confirmDialog'>
            
            <div className='confirmContent'>
              <div className="titleArea"><h1>{text}</h1></div>
              <div className='btns'>
                <button onClick={acceptFunction} className='btn'>Aceptar</button>
                <button onClick={closeModal} className='btn'>Denegar</button>
              </div>
            </div>

        </dialog>
        </>
    )
})

ConfirmModal.displayName = 'ConfirmModal'
export default ConfirmModal