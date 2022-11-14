export default function Topbar(props) {
  return (
    <>
      <div className="topbar">
        <div className="topbar__notifications">
          <p className="topbar__notifications--headline">Notifications</p>
          <p className="topbar__notifications--number">{props.unread}</p>
        </div>
        <p className="topbar__mark-read-btn" onClick={props.handler}>
          Mark all as read
        </p>
      </div>
    </>
  );
}
