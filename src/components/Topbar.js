export default function Topbar({ unread, handler }) {
  return (
    <>
      <div className="topbar">
        <div className="topbar__notifications">
          <h1 className="topbar__notifications--headline">Notifications</h1>
          <p className="topbar__notifications--number">{unread.length}</p>
        </div>
        <p className="topbar__mark-read-btn" onClick={handler}>
          Mark all as read
        </p>
      </div>
    </>
  );
}
