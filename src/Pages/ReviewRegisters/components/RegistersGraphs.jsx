import React from "react";
import { useGetAllGraphsQuery } from "../../../redux/store/querys/formquestions-query";
import { ResponsiveBar } from "@nivo/bar";
function RegistersGraphs({ projectid }) {
  const { data, isSuccess } = useGetAllGraphsQuery({
    projectid,
  });
  return (
    <div className="w-full">
      {isSuccess
        ? data.map((dataitem, index) => {
            return (
              <div key={`graph-${index}`} className="w-full h-60">
                <ResponsiveBar
                  data={dataitem["data"][0]}
                  keys={["count"]}
                  indexBy="value"
                  margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={{ scheme: "nivo" }}
                  borderColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                  }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: dataitem["name"],
                    legendPosition: "middle",
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Cantidad",
                    legendPosition: "middle",
                    legendOffset: -40,
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                  }}
                  role="application"
                />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default RegistersGraphs;
