import React, { useState } from "react";
import Chart from "react-apexcharts";

function GraphFirst() {
  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV" , "DEC"],
      },
    },
    series: [
      {
        name: "People Born",
        data: [930, 740, 400, 500, 490, 260, 600, 450,650, 800, 900, 1000],
      },
    ],
  });
  return (
    <div className="w-full mt-2">
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full flex items-center justify-center md:w-1/2">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="620"
            className="bg-white p-4 rounded-md"
          />
        </div>
        <div className="w-full flex items-center justify-center md:w-1/2">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="620"
            className="bg-white p-4 rounded-md"
          />
        </div>
        
      </div>
    </div>
  );
}

export default GraphFirst;