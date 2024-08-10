import css from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.userCard}>
      <div className={css.userInfo}>
        <img src={image} alt={name} className={css.userPhoto} />
        <p className={css.userText}>{name}</p>
        <p className={css.userGrayText}>@{tag}</p>
        <p className={css.userGrayText}>{location}</p>
      </div>
      <ul className={css.userList}>
        <li className={css.userItem}>
          <span>Followers</span>
          <span className={css.userText}>{stats.followers}</span>
        </li>
        <li className={css.userItem}>
          <span>Views</span>
          <span className={css.userText}>{stats.views}</span>
        </li>
        <li className={css.userItem}>
          <span>Likes</span>
          <span className={css.userText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
