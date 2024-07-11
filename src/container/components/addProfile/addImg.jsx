import  { useRef, useState } from 'react'
import { useTheContext } from '../../../context/ContextProvider'
import { Put_Tools } from '../../../utils/Fetchs/classes'
import "../tags/tags.css";

const AddImg = () => {
const {userInfo, data, updateData} = useTheContext()

//Referencias de input
const dlgRef = useRef()
const inpRef = useRef()

const [inpValue, setValue] = useState("")


//Funciones para manipularlas
const seeValue = (o) => {
setValue(o.target.value)
}

const open = () => {
    dlgRef.current.showModal()
}

const close = () => {
    dlgRef.current.close()
}


const addImg = (x) => {
x.preventDefault()

let img_Value = inpRef.current.value.trim()
if (img_Value != '') {
    let copyUser = {...userInfo}

    copyUser.info.perfil = img_Value
    
    //Utilizo put tools para actualizar el usuario con su imagen nueva
    let newUpdate = new Put_Tools(copyUser)
    newUpdate.put_The_Data(copyUser.id, newUpdate.data_For_Puts)
    
    //Mando a renderizar
    setTimeout(() => {
        updateData(data + 1)
    }, 200);
     setValue('')
    dlgRef.current.close()
    
}
}


  return (
   <>
    <dialog ref={dlgRef} className="addTagModal">
        <div className="addT_Content">
         <div className="closeTagArea">
         <button onClick={close} className="closeTag">
         <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#979da6"
                className="XiconTags"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
         </button>
         </div>
          <form onSubmit={addImg} className="addTagForm">
            <input
              type="text"
              ref={inpRef}
              value={inpValue}
              onInput={seeValue}
              className="addTagInp"
              placeholder="Url de tu imagen"
            />
            <button className="addTagBtn" type="submit">
              add
            </button>
          </form>
          
        </div>
      </dialog>

   <button onClick={open}>Change img</button>
   </>
  )
}

export default AddImg