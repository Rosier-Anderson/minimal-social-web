import {
  GoHeart,
  GoHeartFill,
  GoHome,
  GoHomeFill,
  GoPlus,
} from "react-icons/go";
import { LiaSearchSolid } from "react-icons/lia";

export const linksTab = [
  { id: 1, name: "Feed", href: "/" },
  { id: 2, name: "Following", href: "/following" },
  { id: 3, name: "Like", href: "/like" },
] as const;
export const sideNavTabs = [
  { id: 1, name: "Home", href: "/", icon: GoHome, activeIcon: GoHomeFill },
  {
    id: 2,
    name: "CreateThread",
    href: "/create_thread",
    icon: GoPlus,
    activeIcon: GoPlus,
  },
  {
    id: 3,
    name: "search",
    href: "/search",
    icon: LiaSearchSolid,
    activeIcon: LiaSearchSolid,
  },
  {
    id: 4,
    name: "Like",
    href: "/like",
    icon: GoHeart,
    activeIcon: GoHeartFill,
  },
] as const;

export const linksProfileTabs = [
  { id: 1, name: "Post", href: "/profile" },
  { id: 2, name: "Liked post", href: "/profile/likedpost" },
  { id: 3, name: "Repost", href: "/profile/repost" },
] as const;
