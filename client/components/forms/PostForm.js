import {Avatar} from  'antd';
import dynamic from "next/dynamic"
const ReactQuill = dynamic(()=>import('react-quill'), {ssr: false}); //Must use dynamic import for react quill because it doesn't have server side functionality
import {CameraOutlined, LoadingOutlined} from "@ant-design/icons";
import 'react-quill/dist/quill.snow.css'; // ES6

function PostForm({content, setContent, postSubmit, handleImage, loading, image}) {
  return( 
  <div className = "card">
    <div className = "card-body pb-3">
      <form className = "form-group" onSubmit = {postSubmit}>
        <ReactQuill
          theme = "snow"
          value = {content}
          onChange = {(e) => setContent(e)}
          className = "form-control"
          placeholder = ""
        />
      </form>
    </div>
   
    <div className = "card-footer d-flex justify-content-between text-muted">
      <button onClick = {postSubmit} className = "btn btn-primary btn-sm mt-1">Post</button>
      
      <label>
        {image && image.url ? (
          <Avatar size = {30} src = {image.url} className = "mt-1" style = {{cursor: "pointer"}}/>
        ):
          loading ? (
          <LoadingOutlined className = "mt-2"/>
          ):
          (<CameraOutlined className = "mt-2" style = {{cursor: "pointer"}}/>)
        }
        
        <input onChange = {handleImage} type = "file" accept = "images/*" hidden style = {{cursor: "pointer"}}/>
      </label>
    </div>
  </div>
  )
}

export default PostForm;
