import { useEffect , useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Resumes = ()=>{
  const [resumes,setResumes] = useState([]);
  const [showForm , setShowForm] = useState(false);
  const [resumeName , setResumeName] = useState("");
  const [loading , setLoading] = useState(false);

  const backendurl = import.meta.env.VITE_BACKEND_URL;

  const getResumes = async ()=>{
    try{
      const {data} = await axios.get(
        `${backendurl}/api/resumes`
      );

      if(data.success){
        setResumes(data.resumes);
      }
    }catch(error){
      console.error(error);
      toast.error("faild to load resumes");
    }
  }


const createResume = async (e) =>{
  e.preventDefault();

  if(!resumeName.trim()){
    toast.error("enter resume name");
    return;
  }

  try{
    setLoading(true);

    const {data} = await axios.post(
      `${backendUrl}/api/resumes`,
      {
        name:resumeName,
      }
    );
    if(data.success){
      toast.success("resume created");

      setResume((prev)=>[data.resume, ...prev]);
      setResumeName("");
      setShowForm(false);
    }

  } catch(error){
    console.error(error);
    toast.error("failse to create resume");
  }finally{
    setLoading(false);
  }
};

useEffect(()=>{
  getResumes();
},[]);


return (
  <div>
    <div>
      <div>
        <div>
          <h1>
            My resumes
          </h1>

          <p>create and manage your resumes</p>
        </div>
        <button onClick={()=>setShowForm(true)}>+ create resume</button>
      </div>

      {showForm && (
        <div>
          <h2>create new resume</h2>

          <form onSubmit={createResume}>
            <input type="text" placeholder="enter resume name" value={resumeName}  onChange={(e)=>setResumeName(e.target.value)}/>
            <div>
              <button type="submit" disabled={loading}>{loading ? "creating..." : "create resume"}</button>
              <button type="button" onClick={()=>{
                setShowForm(false)
                setResumeName("");
              }}>cancle</button>
            </div>
          </form>
          </div>
      )}

      {resumes.length==0 ? (
      <div>
        <h2>No resume Yet</h2>
        <p>create your first resume</p>
      </div>
      ):(
        <div>
          {resumes.map((resume)=>(
            <div key={resume._id}>
              <h2>{resume.name}</h2>
              <p>created{" "}
                {new DataTransfer(resume.createdAt).toLocaleDataString()}
              </p>
            </div>
          ))}
        </div>
      )}

    </div>
  </div>
);
};
export default Resumes ;