import { useState ,useEffect} from "react";
import axios from "axios";
import { ChartComponent } from "../components/chartview";
import { Table } from "../components/table";
import StaticMenu from "../components/StaticMenu";
import { useSearchParams } from "react-router-dom";


export function Check() {
  // const [file, setFile] = useState();
  const [charttype,SetCharttype]=useState("bar");
  // const [chartdata,SetChartData]=useState([]);
    const [labels, setLabels] = useState(["hai"]);
  const [counts, setCounts] = useState([]);
  const [ExcelData, SetExceldata] = useState([]);
  const [keys, SetKeys] = useState([]);
  const [xaxis, SetXaxis] = useState("First Name");
  const [yaxis, SetYaxis] = useState("Age");
  const [fac, SetFac] = useState(0);
  const [filename,SetFilename] = useState("");
  const[uploadcond,SetUploadcond]=useState(0);
  const [buttonss,SetButtons]=useState(["bar","line","pie"]);
  const [toggle,Settoggle]=useState("bar");
  const [params] = useSearchParams();
  const mode=params.get("mode");
  const id = params.get("id")
  // const keys = Object.keys(ExcelData[0])
  
  useEffect(()=>{
    if(mode==='analyze'){
      const token= localStorage.getItem("token")

      axios.get("http://localhost:5000/upload",{headers:{Authorization:`Bearer ${token}`}})
      .then((res)=>{
              const thatfile= res.data.upload.find(s=>s._id===id)
                SetExceldata(thatfile.jsonData);
                 SetKeys(Object.keys(thatfile.jsonData[0]))
                 SetFilename(thatfile.fileName)
      })
    }
 const x=ExcelData.map(item=>item[xaxis])
          const y=ExcelData.map(item=>item[yaxis])
          console.log(xaxis)
            setLabels(x);
         setCounts(y);
  },[fac])
  

  const handleUpload = async(e) => {
    
    // setFile(e.target.files[0])
    SetUploadcond(1)
    const tempfile = e.target.files[0]
    // console.log(file);
    const formData = new FormData();
    formData.append("file", tempfile);
const token= localStorage.getItem("token")
     await axios.post("http://localhost:5000/upload", formData,{headers:{Authorization:`Bearer ${token}`}})
      .then((res) => {
        console.log(res.data.data);
        //SetChartData([{g:'djbsb',h:'ksjsj',i:'sksjs'},{k:'cvff',l:'fvvfv','vfvv'}])
        // SetChartData(res.data.data)
        // console.log("then",chartdata);
        SetExceldata(res.data.data);
                 SetKeys(Object.keys(res.data.data[0]))
                 console.log(res.data.name)
                 SetFilename(res.data.name)
                
      //  console.log("new",ExcelData)
          // const x=res.data.data.map(item=>item[xaxis])
          // const y=res.data.data.map(item=>item[yaxis])
          // console.log(xaxis)
          // console.log(x)
          // console.log(y)
        //  setLabels(x);
        //  setCounts(y);
      }).catch((err) => {
        console.log("Uplofailed:", err.response?.data.error || err.message);
      });
  };

  const togglebut=(item)=>{
SetCharttype(item)
Settoggle(item)
  }
  return (
    <>
    <StaticMenu/>
    <div className="uploadcont">
  {mode==="analyze"?<>
  <div className="currentfile" style={{marginTop:"50px",borderRadius:"10px"}}>
  <h3 style={{fontWeight:500}}> {filename}</h3><label className="uploadfileinside" htmlFor="fileup">Upload different file</label>
  <input  id="fileup" type="file" accept=".xlsx,.xls" onChange={handleUpload} />
</div>
      <div id="tableout">
        <h1 className="datatablehead">Data in table</h1>
      {/* <button onClick={handleUpload}>Upload Excel</button> */}
      <div id="tablecont">
      <Table data={ExcelData}/>
      </div>
      </div> 

      <div id="visualize">
        <h1 className="vishead">Visualization</h1>
      <div id="setaxis">
        
      <select name="xaxis" onChange={(e)=>SetXaxis(e.target.value)}>
        <option disabled selected >Select x axis</option>
{       keys.map((item,index)=>{return <option key={index} value={item}>{item}</option>})
}      </select>
      <select onChange={(e)=>SetYaxis(e.target.value)}>
                <option disabled selected>Select y axis</option>

{       keys.map((item,index)=>{return <option key={index} value={item}>{item}</option>})
}      </select>
     <button className="visbutton" onClick={()=>SetFac(fac+1)}>Visualize</button>
</div>
<div id="chart">
<div id="charttype">
     {/* <button id="typebut" onClick={()=>SetCharttype("bar")}>bar</button>
      <button id="typebut" onClick={()=>SetCharttype("line")}>line</button>
      <button id="typebut" onClick={()=>SetCharttype("pie")}>pie</button>
      <span>{charttype}</span> */}
{      buttonss.map((item,index)=>{return <button key={index} id="typebut" onClick={()=>{togglebut(item)}} style={{backgroundColor:toggle===item?"#1f5099":"white",color:toggle===item?"white":"black"}}>{item}</button>})
}      </div>
      <div id="plot">
      <ChartComponent type={charttype} labels={labels} counts={counts}/>
      </div>
      </div>
      </div>
  </>:<>
  {/* upload mode */}
     {uploadcond===0?<>
     <div id="buttonhold">
    <label className="bg-[var(--myblue)] uploadlabel" htmlFor="fileup">Upload file</label>
      <input  id="fileup" type="file" accept=".xlsx,.xls" onChange={handleUpload} />
      </div>
</>:<>
<div className="currentfile" style={{marginTop:"50px",borderRadius:"10px"}}>
  <h3 style={{fontWeight:500}}> {filename}</h3><label className="uploadfileinside" htmlFor="fileup">Upload different file</label>
  <input  id="fileup" type="file" accept=".xlsx,.xls" onChange={handleUpload} />
</div>
      <div id="tableout">
        <h1 className="datatablehead">Data in table</h1>
      {/* <button onClick={handleUpload}>Upload Excel</button> */}
      <div id="tablecont">
      <Table data={ExcelData}/>
      </div>
      </div> 

      <div id="visualize">
        <h1 className="vishead">Visualization</h1>
      <div id="setaxis">
        
      <select name="xaxis" onChange={(e)=>SetXaxis(e.target.value)}>
        <option disabled selected >Select x axis</option>
{       keys.map((item,index)=>{return <option key={index} value={item}>{item}</option>})
}      </select>
      <select onChange={(e)=>SetYaxis(e.target.value)}>
                <option disabled selected>Select y axis</option>

{       keys.map((item,index)=>{return <option key={index} value={item}>{item}</option>})
}      </select>
     <button className="visbutton" onClick={()=>SetFac(fac+1)}>Visualize</button>
</div>
<div id="chart">
<div id="charttype">
     {/* <button id="typebut" onClick={()=>SetCharttype("bar")}>bar</button>
      <button id="typebut" onClick={()=>SetCharttype("line")}>line</button>
      <button id="typebut" onClick={()=>SetCharttype("pie")}>pie</button>
      <span>{charttype}</span> */}
{      buttonss.map((item,index)=>{return <button key={index} id="typebut" onClick={()=>{togglebut(item)}} style={{backgroundColor:toggle===item?"#1f5099":"white",color:toggle===item?"white":"black"}}>{item}</button>})
}      </div>
      <div id="plot">
      <ChartComponent type={charttype} labels={labels} counts={counts}/>
      </div>
      </div>
      </div>
      </>}
</>
}
      </div>
    </>
  );
}
