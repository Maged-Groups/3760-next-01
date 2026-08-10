import { IoMdStar } from "react-icons/io";
import { IoHomeOutline, IoAdd, IoExpand } from "react-icons/io5";
import { RiShoppingBag2Line } from "react-icons/ri";

export default function Icon({ name, size, color, className }) {
  switch (name) {
    case "home":
      return <IoHomeOutline size={size} color={color} className={className} />;

    case "add":
      return <IoAdd size={size} color={color} className={className} />;

    case "shop":
      return (
        <RiShoppingBag2Line size={size} color={color} className={className} />
      );

    case "star-full":
      return <IoMdStar size={size} color={color} className={className} />;

    default:
      return <IoExpand size={size} color={color} className={className} />;
  }
}
