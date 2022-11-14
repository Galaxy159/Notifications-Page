export default function Topbar(props) {
  return (
    <>
      <div className="topbar">
        <div className="topbar__notifications">
          <h1 className="topbar__notifications--headline">Notifications</h1>
          <p className="topbar__notifications--number">{props.unread}</p>
        </div>
        <p className="topbar__mark-read-btn" onClick={props.handler}>
          Mark all as read
        </p>
      </div>
    </>
  );
}
