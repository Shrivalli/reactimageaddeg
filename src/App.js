import React,{Component,useState} from 'react';
import axios from 'axios';

export const App=()=>{
  const [file,setFile]=useState();
  const [fileName,setFileName]=useState();

  const saveFile=(e)=>{
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile=async(e)=>{
    console.log(file);
    const formData=new FormData();
    formData.append("formFile",file);
    formData.append("fileName",fileName);
    try
    {
      const res=await axios.post("https://localhost:7040/api/File",formData);
      console.log(res);
    }
    catch(ex)
    {
      console.log(ex);
    }
  };


   
  return(
    <div>
    <input type="file" onChange={saveFile}/>
    <input type="button" value="Upload" onClick={uploadFile}/>
    </div>
  );
  }


export default App;