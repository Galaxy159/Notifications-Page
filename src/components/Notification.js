import { notificationsList } from "./notificationsList";
export default function Notification({ details, setunread }) {
  function handleNotificationClick() {
    details.unread = false;
    setunread(notificationsList.filter((not) => not.unread === true));
  }

  return (
    <>
      <div
        onClick={handleNotificationClick}
        className={details.unread ? "notification unread-bg" : "notification"}
      >
        <img
          src={details.avatar}
          alt="Avatar"
          className="notification__avatar"
        />
        <div className="notification__content">
          <span className="notification__content--name">{details.name}</span>
          <span className="notification__content--description">
            {details.description}
          </span>
          {details.contentReact && (
            <span className="notification__content--react">
              {details.contentReact}
            </span>
          )}
          {details.contentGroup && (
            <span className="notification__content--group">
              {details.contentGroup}
            </span>
          )}
          <div
            className={
              details.unread
                ? "notification__content--unread show"
                : "notification__content--unread"
            }
          ></div>
        </div>
        <p className="notification__time">{details.time}</p>
        {details.contentMessage && (
          <p className="notification__content--message">
            {details.contentMessage}
          </p>
        )}
        {details.contentPicture && (
          <img
            src={details.contentPicture}
            alt="Chess club"
            className="notification__content--picture"
          />
        )}
      </div>
    </>
  );
}
