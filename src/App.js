import { useState } from "react";
import "./styles/App.css";
import Notification from "./components/Notification";
import Topbar from "./components/Topbar";
import { notificationsList } from "./components/notificationsList";
// import Footer from "./components/Footer";

function App() {
  const [unread, setUnread] = useState(
    notificationsList.filter((not) => not.unread === true)
  );

  function handleMarkReadClick() {
    notificationsList.forEach((not) => (not.unread = false));
    setUnread(notificationsList.filter((not) => not.unread === true));
  }

  return (
    <>
      <div className="container">
        <main className="main">
          <Topbar unread={unread.length} handler={handleMarkReadClick} />
          <div className="notifications">
            {notificationsList.map((not) => (
              <Notification key={not.id} details={not} />
            ))}
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
