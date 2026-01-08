import { BiRepost } from "react-icons/bi";
import { CiAt } from "react-icons/ci";
import { FaComment, FaRegComment } from "react-icons/fa";
import {
  GoHeart,
  GoHeartFill,
  GoHome,
  GoHomeFill,
  GoPlus,
} from "react-icons/go";
import { LiaSearchSolid } from "react-icons/lia";
import { RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";

export const headerLinksTab = [
  { id: 1, name: "For you", href: "/" },
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
    name: "Notification",
    href: "/notification",
    icon: GoHeart,
    activeIcon: GoHeartFill,
  },
] as const;

export const profileLinksTabs = [
  { id: 1, name: "Post", href: "/profile" },
  { id: 2, name: "Liked post", href: "/profile/likedpost" },
  { id: 3, name: "Repost", href: "/profile/repost" },
] as const;

export const notificationLinksTabs = [
  {
    id: 1,
    name: "All",
    href: "/notification",
    icon: null,
    activeIcon: null,
  },
  {
    id: 2,
    name: "Like",
    href: "/notification/like",
    icon: GoHeart,
    activeIcon: GoHeartFill,
  },
  {
    id: 3,
    name: "Follow",
    href: "/notification/follow",
    icon: RiUserFollowLine,
    activeIcon: RiUserFollowFill,
  },
  {
    id: 4,
    name: "Comment",
    href: "/notification/comment",
    icon: FaRegComment,
    activeIcon: FaComment,
  },
  {
    id: 5,
    name: "Mention",
    href: "/notification/mention",
    icon: CiAt,
    activeIcon: CiAt,
  },
  {
    id: 6,
    name: "Repost",
    href: "/notification/repost",
    icon: BiRepost,
    activeIcon: BiRepost,
  },
] as const;
