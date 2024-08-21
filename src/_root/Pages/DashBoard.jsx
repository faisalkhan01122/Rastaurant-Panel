import { RiMoneyDollarBoxLine } from "react-icons/ri";
import {
  FaRegCheckCircle,
  FaRegClipboard,
  FaShoppingCart,
  FaUtensils,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { IoCheckmarkCircleSharp, IoCloseOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdLocalCarWash } from "react-icons/md";
import RstCardBox from "../../components/RstCards/RstCardBox";
import RstStatusCard from "../../components/RstCards/RstStatusCard";
import RstStatisticGraph from "../../components/RstCards/RstStatisticGraph";
import RstRecentOrder from "../../components/RstCards/RstRecentOrder";
import { Link } from "react-router-dom";

const DashBoard = () => {
  //CardBox-----------------------
  const cardData = [
    {
      title: "Total Earnings",
      value: "$0",
      link: "/earning",
      icon: (
        <RiMoneyDollarBoxLine
          size={40}
          className="text-white bg-primary-900 p-1 font-bold rounded"
        />
      ),
    },

    {
      title: "Total Orders",
      value: "0",
      link: "/orders",
      icon: (
        <FaShoppingCart
          size={40}
          className="text-white bg-primary-900 p-1 font-bold rounded"
        />
      ),
    },
    {
      title: "Total Foods",
      value: "0",
      link: "/food",
      icon: (
        <FaUtensils
          size={40}
          className="text-white bg-primary-900 p-1 font-bold rounded"
        />
      ),
    },
  ];
  //StatusCard---------------------------
  const cardData2 = [
    {
      title: "Order Placed",
      value: "56",
      icon: <FaComputer size={24} className="text-primary-900" />,
      link: "orders",
    },
    {
      title: "Order Confirmed",
      value: "8",
      icon: <IoCheckmarkCircleSharp size={24} className="text-primary-900" />,
      link: "orders",
    },
    {
      title: "Order Shipped",
      value: "2",
      icon: <FaRegClipboard size={24} className="text-primary-900" />,
      link: "orders",
    },
    {
      title: "Order Completed",
      value: "18",
      icon: <FaRegCheckCircle size={24} className="text-primary-900" />,
      link: "orders",
    },
    {
      title: "Order Canceled",
      value: "3",
      icon: <IoCloseOutline size={24} className="text-primary-900" />,
      link: "orders",
    },
    {
      title: "Delivery Failed",
      value: "0",
      icon: (
        <AiOutlineExclamationCircle size={24} className="text-primary-900" />
      ),
      link: "orders",
    },
    {
      title: "Waiting for driver",
      value: "2",
      icon: <MdLocalCarWash size={24} className="text-primary-900" />,
      link: "orders",
    },
  ];
  return (
    <div className="mx-3">
      {" "}
      <div className="px-5  bg-white shadow-md hover:shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold pt-5">Business Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mt-5">
          {cardData.map((card, index) => (
            <>
              <Link to={card.link}>
                <RstCardBox
                  key={index}
                  title={card.title}
                  value={card.value}
                  icon={card.icon}
                />
              </Link>
            </>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  py-8 ">
          {cardData2.map((card, index) => (
            <>
              <Link to={card.link}>
                <RstStatusCard
                  key={index}
                  title={card.title}
                  value={card.value}
                  icon={card.icon}
                />
              </Link>
            </>
          ))}
        </div>
      </div>
      <RstStatisticGraph />
      <RstRecentOrder />
    </div>
  );
};

export default DashBoard;
