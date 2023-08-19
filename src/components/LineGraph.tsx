import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useQuery } from "react-query";
import { fetchCaseData } from "../API/api";

const LineGraph: React.FC = () => {
  const { data } = useQuery("caseData", fetchCaseData);

  if (!data) {
    return <div className="flex justify-center items-center mt-10 text-4xl font-semibold">Loading...</div>;
  }

  const chartData = [
    { name: "Cases", value: data.cases },
    { name: "Deaths", value: data.deaths },
    { name: "Recovered", value: data.recovered },
    { name: "Active", value: data.active },
    { name: "Critical", value: data.critical },
  ];

  return (
    <div className="py-4 flex justify-center">
      <div>
        <h2 className="text-lg font-semibold mb-4 text-center">
          Line graph showing the cases fluctuations
        </h2>
        <LineChart width={800} height={400} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default LineGraph;
