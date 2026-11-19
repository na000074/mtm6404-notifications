import React from 'react'
import notificationData from './notifications'
import './App.css'

function Notification(props) {
  return (
    <li className="notification">
      <p>Notification #{props.id}</p>
      <h2>{props.name}</h2>
      <p>{props.children}</p>
      <button onClick={props.onClear}>Clear</button>
    </li>
  )
}

function App() {
  const [notifications, setNotifications] = React.useState(notificationData)

  function clearNotification(id) {
    setNotifications(notifications.filter(notification => notification.id !== id))
  }

  function clearAllNotifications() {
    setNotifications([])
  }

  return (
    <main className="App">
      <h1>Notifications</h1>
      <p>Total notifications: {notifications.length}</p>
      <button onClick={clearAllNotifications} disabled={notifications.length === 0}>
        Clear All
      </button>

      {notifications.length === 0 ? (
        <p>No notifications to display.</p>
      ) : (
        <ul className="notifications">
          {notifications.map(notification => (
            <Notification
              key={notification.id}
              id={notification.id}
              name={notification.name}
              onClear={() => clearNotification(notification.id)}
            >
              {notification.message}
            </Notification>
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
