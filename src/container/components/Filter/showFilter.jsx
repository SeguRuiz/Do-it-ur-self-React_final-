import { useTheContext } from "../../../context/ContextProvider"

const ShowFilter = () => {
    const {tags} = useTheContext()

    console.log(tags);
  return (
    <>
    <select name="" id="">
   {tags.map((tags, i) => (
    <option value={tags.tagName} key={tags.id}>{tags.tagName}</option>
   ))}
   </select>
   </>
  )
}

export default ShowFilter