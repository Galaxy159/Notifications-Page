import mark from "../assets/images/avatar-mark-webber.webp";
import angela from "../assets/images/avatar-angela-gray.webp";
import anna from "../assets/images/avatar-anna-kim.webp";
import jacob from "../assets/images/avatar-jacob-thompson.webp";
import kimberly from "../assets/images/avatar-kimberly-smith.webp";
import nathan from "../assets/images/avatar-nathan-peterson.webp";
import rizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import chess from "../assets/images/image-chess.webp";

export const notificationsList = [
  {
    id: 0,
    unread: true,
    avatar: mark,
    name: "Mark Webber",
    time: "1m ago",
    type: "react",
    description: "reacted to your recent post",
    contentReact: "My first tournament today!",
  },
  {
    id: 1,
    unread: true,
    avatar: angela,
    name: "Angela Gray",
    time: "5m ago",
    type: "follow",
    description: "followed you",
  },
  {
    id: 2,
    unread: true,
    avatar: jacob,
    name: "Jacob Thompson",
    time: "1 day ago",
    type: "join",
    description: "has joined your group",
    contentGroup: "Chess Club",
  },
  {
    id: 3,
    unread: false,
    avatar: rizky,
    name: "Rizky Hasanuddin",
    time: "5 days ago",
    type: "message",
    description: "sent you a private message",
    contentMessage: `Hello, thanks for setting up the Chess
    Club. I've been a member for a few weeks now and I'm already having lots of
    fun and improving my game.`,
  },
  {
    id: 4,
    unread: false,
    avatar: kimberly,
    name: "Kimberly Smith",
    time: "1 week ago",
    type: "comment",
    description: "commented on your picture",
    contentPicture: chess,
  },
  {
    id: 5,
    unread: false,
    avatar: nathan,
    name: "Nathan Peterson ",
    time: "2 weeks ago",
    type: "react",
    description: "reacted to your recent post",
    contentReact: `5 end-game strategies to increase your win
    rate`,
  },
  {
    id: 6,
    unread: false,
    avatar: anna,
    name: "Anna Kim",
    time: "2 weeks ago",
    type: "leave group",
    description: "left the group",
    contentGroup: "Chess Club",
  },
];
