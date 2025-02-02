import Announcements from '@/components/Announcements'
import AttendanceChartContainer from '@/components/AttendanceChartContainer'
import CountChartContainer from '@/components/CountChartContainer'
import EventCalenderContainer from '@/components/EventCalenderContainer'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'
import React from 'react'

const Adminpage = async ({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) => {

  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User Cart*/}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="admin" />
          <UserCard type="teacher" />
          <UserCard type="student" />
          <UserCard type="parent" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">   
            <CountChartContainer /></div>
          {/* ATTENDACE CHART */}
          <div className="w-full lg:2/3 h-[450px]">
            <AttendanceChartContainer/>
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/*RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalenderContainer searchParams={searchParams} />
        <Announcements />
      </div>
    </div>
  )
}

export default Adminpage
