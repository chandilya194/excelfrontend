import { useEffect, useState,useRef } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,PointElement,LineElement,ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar,Line, Pie } from "react-chartjs-2";
import jsPDF from "jspdf";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement,PointElement,LineElement,ArcElement, Title, Tooltip, Legend);

export function ChartComponent({type,labels,counts}) {
//   const x=res.data.data.map(item=>item["First Name"])
//  const y=res.data.data.map(item=>item.age)
//  setLabels(x);
//  setCounts(y);

 
//     axios.get("http://localhost:5000/upload")
//       .then(res => {
        // const users = res.data.map(entry => entry._id);
        // const fileCounts = res.data.map(entry => entry.count);
        // setLabels(users);
        // setCounts(fileCounts);
    //   }).catch(err => {
    //     console.error("Chart data fetch failed", err);
    //   });
    const chartRef = useRef();
const handleDownload = () => {
  const chart = chartRef.current;
  if (!chart) return;

  const url = chart.toBase64Image();
  const link = document.createElement('a');
  link.href = url;
  link.download = 'chart.jpeg';
  link.click();
};
const handleDownloadPDF = () => {
    const chart = chartRef.current;

    if (!chart) return;

    const base64 = chart.toBase64Image();

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [chart.width, chart.height],
    });

    pdf.addImage(base64, 'PNG', 0, 0, chart.width, chart.height);
    pdf.save('chart.pdf');
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Files Uploaded",
        data: counts,
        backgroundColor: "#1f5099",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Files Uploaded by Each User" },
    },
  };

  if (type === "bar") return( <div className="plotwithbut" style={{ width: "800px",marginLeft:"50px"}}>
     <Bar ref={chartRef} data={data}/>
     <div className="buttons">
     <button className="downbut" onClick={handleDownload}>Download Png</button>
     <button className="downbut" onClick={handleDownloadPDF}>Download Pdf</button></div>
    </div>) ;
  if (type === "line") return( <div className="plotwithbut" style={{ width: "800px", marginLeft:"50px" }}>
     <Line ref={chartRef} data={data}/>
     <div className="buttons">
     <button className="downbut" onClick={handleDownload}>Download Png</button>
     <button className="downbut" onClick={handleDownloadPDF}>Download Pdf</button></div>
    </div>) ;
  if (type === "pie") return( <div className="plotwithbut" style={{ width: "400px", margin:"auto"}}>
     <Pie ref={chartRef} data={data}/>
     <div className="buttons">
     <button className="downbut" onClick={handleDownload}>Download Png</button>
     <button className="downbut" onClick={handleDownloadPDF}>Download Pdf</button></div>
    </div>) ;
  return <p>No chart type selected</p>;


  
}
