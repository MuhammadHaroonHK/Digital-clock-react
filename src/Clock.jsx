import { useEffect, useState } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());



    useEffect(() => {
        const clockTime = setInterval(() => {

            setTime(new Date());
            return () => {
                clearInterval(clockTime);
            }

        }, 1000)
    }, [])

    const clockFormat = () => {
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();
        let ampm = hour <= 12 ? "AM" : "PM";

        hour = hour % 12 || 12;

        return `${hour =
            hour > 9 ? hour : "0" + hour}:${minute =
            minute > 9 ? minute : "0" + minute}:${second =
            second > 9 ? second : "0" + second} 
                ${ampm}`;
    }

    return (
        <div className="clock-container">
            <span>{clockFormat()}</span>
        </div>
    );
}

export default Clock;