import { FaMapLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { LuMails } from "react-icons/lu";

const boxData = [
  {
    id: 1,
    link: "https://maps.app.goo.gl/jKPN2oKWiUrcJuuD9",
    icon: <FaMapLocationDot />,
    boxTitle: "Our Location",
    details: "Sinhgadh Road, Pune, Maharashtra",
    target: "_blank",
  },
  {
    id: 2,
    link: "tel:+1234567890",
    icon: <FaPhoneVolume />,
    boxTitle: "Contact Us",
    details: "+91 12345 67890",
  },
  {
    id: 3,
    link: "mailto:pimprikarsarthak@gmail.com",
    icon: <LuMails />,
    boxTitle: "Email Us",
    details: "pimprikarsarthak@gmail.com",
  },
];

export default boxData;
