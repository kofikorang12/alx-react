import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';
import './App.css';


const Notification = () => {
    const consoleDisplay = () => {
        return console.log('Close button has been clicked')
    }

    return (
        <div className='Notifications'>
            <p style={{ marginBottom: "20px", fontWeight: "bold"}}>
                Here is the list of Notifications
            </p>
            <button 
                style={{ position: "absolute", top: "7px", right: "7px", border: "none", background: "none", padding: "0" }}
                    aria-label='Close'
                    onClick={consoleDisplay}
                >
                    <img 
                        className='close-img' 
                        style={{ display: "inline", marginTop: "5px", marginRight: "5px",padding: "0", width: "15px", cursor: "pointer" }} 
                        src={closeIcon} 
                        alt="close"


                        />
            </button>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li
                    data='urgent'
                    dangerouslySetInnerHTML={{ __html: getLatestNotification()}}
                ></li>
            </ul>
        </div>
    )
}

export default Notification