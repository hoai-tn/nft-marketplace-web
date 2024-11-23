import React, { useState } from "react";
import { Button } from "./button";

interface TimeFilterProps {
  times: string[];
}

const TimeFilter = ({ times }: TimeFilterProps) => {
  const [currentTime, setCurrentTime] = useState(times[0]);
  return (
    <div className="flex rounded-lg border">
      {times.map((time: string) => (
        // <button
        //   key={time}
        //   className={`border-r px-4 py-2 transition-all duration-200 last:border-r-0 hover:bg-accent hover:font-bold hover:text-foreground ${currentTime === time ? "bg-secondary font-bold text-foreground" : "font-normal text-muted-foreground"}`}
        //   onClick={() => setCurrentTime(time)}
        // >
        //   {time}
        // </button>
        <Button
          key={time}
          className={`-0 rounded-none border-r px-4 py-2 last:border-0 ${
            currentTime === time
              ? "font-bold"
              : "font-normal text-muted-foreground"
          }`}
          variant={currentTime === time ? "secondary" : "ghost"}
          onClick={() => setCurrentTime(time)}
        >
          {time}
        </Button>
      ))}
    </div>
  );
};

export default TimeFilter;
