"use client"

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

// TEMPORARY
const events = [
    {
      id: 1,
      title: "Morning Assembly",
      time: "08:00 AM",
      description: "School assembly with announcements, songs, and important updates.",
    },
    {
      id: 2,
      title: "Math Class",
      time: "09:30 AM",
      description: "Algebra and geometry lessons with practice exercises.",
    },
    {
      id: 3,
      title: "Lunch Break",
      time: "12:00 PM",
      description: "Time to eat lunch and relax with friends in the school cafeteria.",
    },
  ];
  
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
        <Calendar onChange={onChange} value={value} />
    <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
    </div>
    <div className="flex flex-col gap-4">
        {events.map(event=>(
            <div className="p-5 rounded-md border-2 border-gray-200 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple" key={event.id}>
                <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-gray-600">{event.title}</h1>
                    <span className="text-gray-300 text-xs">{event.time}</span>
                </div>
                <p className="mt-2 text-gray-400 text-xs">{event.description}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default EventCalender