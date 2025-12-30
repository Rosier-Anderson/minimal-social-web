import {
  HomeIcon,
  ConversationIcon,
  PlusIcon,
  HeartIcon,
  ProfileIcon,
} from "../assets/icons";
export const linksTab = [
  { id: 1, name: "Feed", href: "feed" },
  { id: 2, name: "Following", href: "/following" },
  { id: 3, name: "Like", href: "/like" },
] as const;

export const sideNavTabs = [
  { id: 1, name: "Home", href: "/", icon: HomeIcon },
  {
    id: 2,
    name: "Conversation",
    href: "/conversation",
    icon: ConversationIcon,
  },
  { id: 3, name: "Plus", href: "/search", icon: PlusIcon },
  { id: 4, name: "Like", href: "/like", icon: HeartIcon },
  { id: 5, name: "Profile", href: "/profile", icon: ProfileIcon },
] as const;

export const linksProfileTabs = [
  { id: 1, name: "Post", href: "/profile/posts" },
  { id: 2, name: "Liked post", href: "/profile/likedpost" },
  { id: 3, name: "Repost", href: "/profile/repost" },
] as const;
