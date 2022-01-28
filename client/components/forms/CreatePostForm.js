import {Avatar} from  'antd';
import dynamic from "next/dynamic"
const ReactQuill = dynamic(()=>import('react-quill'), {ssr: false}); //Must use dynamic import for react quill because it doesn't have server side functionality
import 'react-quill/dist/quill.snow.css'; // ES6

function CreatePostForm({content, setContent, postSubmit}) {
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
    <div className = "card-footer">
      <button onClick =  {postSubmit} className = "btn btn-primary btn-sm mt-1">Post</button>
    </div>
  </div>
  )
}

export default CreatePostForm;
