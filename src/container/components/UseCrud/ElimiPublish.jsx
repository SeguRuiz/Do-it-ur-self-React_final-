import { useTheContext } from "../../../context/ContextProvider";
import { Put_Tools, Products_Posts_Tools } from "../../../utils/Fetchs/classes";

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

      setTimeout(() => {
        updateData(data + 1);
      }, 200);
    }
  };

  const publish = () => {
    if (userInfo != "") {
      let productsCopy = [...user_Products];

      productsCopy.forEach((e) => {
        if (e.id == id) {
          e.State = "Public";
        }
      });

      let theProduct = productsCopy.find((products) => products.id == id);

      let newUpdate = new Products_Posts_Tools(theProduct);

      newUpdate.post_The_Data(newUpdate.data_For_Posts);

      setTimeout(() => {
        updateData(data + 1);
      }, 200);
    }
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
