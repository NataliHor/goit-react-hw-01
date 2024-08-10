import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendsList({ friends }) {
  return (
    <ul className={css.FriendsList}>
      {friends.map(item => {
        return (
          <li key={item.id} >
            <FriendListItem friend={item} />
          </li>
        );
      })}
    </ul>
  );
}