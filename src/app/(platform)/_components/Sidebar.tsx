import {
  ConversationIcon,
  HeartIcon,
  HomeIcon,
  SearchIcon,
} from "@/src/assets/icons";
import Image from "next/image";
const icons = [
  {
    Home: <HomeIcon />,
    Conversation: <ConversationIcon />,
    Search: <SearchIcon />,
    Heart: <HeartIcon />,
  },
];
const Sidebar = () => {
  return (
    <div className="">
      <div className="">
        <nav className="">
          <ul className="">
            {icons.map((i, index) => (
              <li key={index}>{i.Conversation}</li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Logo = () => {
  <figure>
    <Image src="../public/images/logo-light.png" alt="App logo" />
  </figure>;
};
export default Sidebar;
