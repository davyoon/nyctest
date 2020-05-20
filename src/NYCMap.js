import React from "react";
import { select } from "d3";
import * as d3 from "d3-geo";

export default function NYCMap({ mapData }) {
  const rn = React.useRef(null);

  React.useEffect(() => {
    renderMap();
  }, [mapData]);
  console.log(mapData);
  const renderMap = () => {
    const node = rn.current;
    const width = node.width.animVal.value;
    const height = node.height.animVal.value;

    const projection = () => {
      return d3
          // .geoConicConformal()
          .geoEqualEarth()
          .scale(1260)

          // .parallels([33, 45])
          // .rotate([96, -39])
          // .center([0, -39])

          .translate([width/3, height/3]);
    };
    select(node)
        .append("g")
        .classed("NYC", true);
    const nyc = select("g")
        .selectAll("path")
        .data(mapData);

    nyc
        .enter()
        .append("path")
        .classed("city", true)
        .attr("stroke", "blue")
        .attr("strokeWidth", 0.75)
        .each(function(d, i) {
          // select(this).attr("d", d3.geoPath().projection(projection())(d));
          select(this).attr("d", d3.geoPath().projection(projection(d)));
        });
  };

  return <svg width={960} height={720} ref={rn} />;
}

