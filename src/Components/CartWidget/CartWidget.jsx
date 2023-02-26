import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidget = ({ numero }) => {
  return (
    <div>
      <span>{numero}</span>
      <BsFillCartCheckFill color="white" size={30} />
    </div>
  );
};

export default CartWidget;
