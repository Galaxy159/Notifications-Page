export default function Notification(props) {
  const { details } = props;

  return (
    <>
      <div
        className={details.unread ? "notification unread-bg" : "notification"}
      >
        <img
          src={details.avatar}
          alt="Avatar"
          className="notification__avatar"
        />
        <div className="notification__content">
          <a href="#" className="notification__content--name">
            {details.name}
          </a>
          <span className="notification__content--description">
            {details.description}
          </span>
          {details.contentReact && (
            <a href="#" className="notification__content--react">
              {details.contentReact}
            </a>
          )}
          {details.contentGroup && (
            <a href="#" className="notification__content--group">
              {details.contentGroup}
            </a>
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
            alt="Picture"
            className="notification__content--picture"
          />
        )}
      </div>
    </>
  );
}
