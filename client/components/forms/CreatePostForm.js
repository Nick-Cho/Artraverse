import {Avatar} from  'antd';

function CreatePostForm({content, setContent, postSubmit}) {
  return( 
  <div className = "card">
    <div className = "card-body pb-3">
      <form className = "form-group" onSubmit = {postSubmit}>
        <textarea
          value = {content}
          onChange = {(e) => setContent(e.target.value)}
          className = "form-control"
          placeholder = ""
          >
        </textarea>
      </form>
    </div>
    <div className = "card-footer">
      <button onClick =  {postSubmit} className = "btn btn-primary btn-sm mt-1">Post</button>
    </div>
  </div>
  )
}

export default CreatePostForm;
