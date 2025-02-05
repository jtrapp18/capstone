import React, { useEffect } from "react";
import Plot from "react-plotly.js";
import { useResizeDetector } from 'react-resize-detector'
import { PlotContainer } from "../MiscStyling";
import Loading from '../pages/Loading'

const PieChart = ({ title, label, valueData, selectedSlice, setSelectedSlice }) => {

  if (!label.data || !valueData) {
    return <PlotContainer><p>Loading...</p></PlotContainer>;
  }

  const { width, height, ref } = useResizeDetector({});

  // Function to handle clicks outside the pie chart
  const handleOutsideClick = (event) => {
    if (ref.current && ref.current.contains(event.target)) {
      setSelectedSlice(null); // Reset the selection when clicking outside
    }
  };

  useEffect(() => {
    // Add event listener for detecting clicks outside the chart
    document.addEventListener('click', handleOutsideClick);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [ref]);

  const handleClick = (eventData) => {
    const selected = eventData.points[0];

    setSelectedSlice({
      labelCol: label.label,
      labelFilter: selected.label
    });
  };

  const trace = {
    labels: label.data,
    values: valueData,
    type: 'pie',
    textinfo: 'label+percent',
    hoverinfo: 'label+percent+value',
  };

  const layout = {
    title: {
      text: title,
      font: { color: 'black' }
    },
    showlegend: true,
    legend: {
        x: 1,
        y: 0.5,
        xanchor: 'left',
        yanchor: 'middle',
        title: {
            text: label.label,
            font: { color: 'black' }
        }
    }
  };

  return (
    <PlotContainer ref={ref}>
      <Plot
        key={JSON.stringify(label.data)} // Ensures re-render when data updates
        data={[trace]}
        config={{ responsive: true }}
        onClick={handleClick}
        style={{ width: '100%', height: '100%' }}
        layout={{
          ...layout, 
          ...{
            width: width, 
            height: height
          }
        }}
      />
    </PlotContainer>
  );
};

export default PieChart;
