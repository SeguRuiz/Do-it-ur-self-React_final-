import  { useRef, useState } from 'react'
import { useTheContext } from '../../../context/ContextProvider'
import { Put_Tools } from '../../../utils/Fetchs/classes'

const AddImg = () => {
const {userInfo, data, updateData} = useTheContext()

const dlgRef = useRef()
const inpRef = useRef()

const [inpValue, setValue] = useState("")

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

    let newUpdate = new Put_Tools(copyUser)
    newUpdate.put_The_Data(copyUser.id, newUpdate.data_For_Puts)
    
    setTimeout(() => {
        updateData(data + 1)
    }, 200);
     setValue('')
    dlgRef.current.close()
    
}
}


  return (
   <>
   <dialog ref={dlgRef}>
    <div>
        <button onClick={close}>close</button>
    </div>
   <form onSubmit={addImg}>
    <input type="text"  ref={inpRef} value={inpValue} onInput={seeValue}/>
    <button>add</button>
   </form>
   </dialog>
   <button onClick={open}>Change img</button>
   </>
  )
}

export default AddImg