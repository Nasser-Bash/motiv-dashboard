import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
function LineAreaChart() {
    const data = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181
        },
       
        
      ];
  return (
    <div>
     
   
      <AreaChart
         width={600}
         height={300}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        
        <XAxis dataKey="name" />
        <YAxis />
       
        <Area type="monotone" dataKey="pv" stroke="#A162F7" fill="#6e4aa8a3" />
      </AreaChart>
    </div>
  )
}

export default LineAreaChart