import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({
  friend: { avatar, name, isOnline },
}) {
  const containerClsx = 
    isOnline ? css.isOnline : css.isOfline;

  return (
    <div className={css.FriendsItem}>
      <img src={avatar} alt={name} width="48"/>
      <p>{name}</p>
      <p className={containerClsx}>{isOnline ? "Online" : "Ofline"}</p>
    </div>
  );
}