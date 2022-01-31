import renderHTML from 'react-render-html';
import moment from 'moment';
import {Avatar} from 'antd';
import PostImage from '../images/PostImage'
function PostList({posts}) {
  return(
    <> {posts && posts.map((post) => (
        <div key = {post._id} className = "card mb-5">
        <div className = "card-header">
          <div>
            <Avatar size = {40} classsName="mb-2">{post.postedBy.first_name[0]}</Avatar>{" "}       
            <span className="pt-2 ml-3" style = {{marginLeft: "0.5rem"}}>{post.postedBy.first_name}</span>
            <span className="pt-2 ml-3" style = {{marginLeft: "0.5rem"}}>{moment(post.createdAt).fromNow()}</span>
          </div>
        </div>
        <div className = "card-body">
          {renderHTML(post.content)}
        </div>
        <div className = "card-footer">
          <PostImage url = {post.image.url}/>
          <div className = "pt-3"></div>
        </div>  
      </div>
      ))
    }   
    </>
  )
}

export default PostList;
