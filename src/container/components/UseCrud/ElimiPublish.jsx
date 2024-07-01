import { useTheContext } from "../../../context/ContextProvider";
import { Put_Tools } from "../../../utils/Fetchs/classes";

const ElimiPublish = ({ id }) => {
  const { user_Products, userInfo, data, updateData } = useTheContext();

  const eliminate = async () => {
    if (userInfo != "") {
      let productsCopy = [...user_Products];
      let userCopy = { ...userInfo };

      let products_Filtered = productsCopy.filter(
        (products) => products.id != id
      );

      userCopy.products = products_Filtered;

      let newUpdate = new Put_Tools(userCopy);

      newUpdate.put_The_Data(userCopy.id, newUpdate.data_For_Puts);

      setTimeout(()=>{
        updateData(data + 1)
      }, 200)
    }
  };

  const publish = () => {
    console.log(id);
  };
  return (
    <div className="Elim_Pub_Container">
      <div>
        <button onClick={publish}>Publish</button>
      </div>
      <div>
        <button onClick={eliminate}>Eliminate</button>
      </div>
    </div>
  );
};

export default ElimiPublish;
