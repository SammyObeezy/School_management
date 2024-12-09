"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 68,
    absent: 56,
  },
  {
    name: 'Tue',
    present: 56,
    absent: 44,
  },
  {
    name: 'Wed',
    present: 45,
    absent: 55,
  },
  {
    name: 'Thur',
    present: 60,
    absent: 80,
  },
  {
    name: 'Fri',
    present: 80,
    absent: 95,
  },
];


const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
        <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Attendance</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20}/>
            </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5dd"}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill: "#d1d5dd"}} tickLine={false} />
          <Tooltip contentStyle={{borderRadius:"10px",borderBlockColor:"lightgray"}} />
          <Legend align='left' verticalAlign='top' 
          wrapperStyle={{paddingTop: "20px", paddingBottom: "40px"}}/>
          <Bar dataKey="present" fill="#FAE27C"
          legendType="circle"
          radius={[10,10,0,0]}/>
          <Bar dataKey="absent" fill="#C3EBFA"
          legendType="circle"
          radius={[10,10,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart