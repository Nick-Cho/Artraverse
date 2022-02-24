# Artraverse
Artraverse is a social media app that allows artists to more easily grow their platform through an intuitive interface. Artraverse was created out of my personal struggle to grow my art Instagram and Deviantart accounts due to lack of exposure. Through a home page that features the most recent posts made by its users, every artist has the oppurtunity to garner attention.

Artraverse was built using the MERN stack and Next.js
## Info
* Made SEO friendly using Next.js to add "Head" data 
* Created an ExpressJS __RESTful API__ to handle frontend requests
* Live updates to the home page was facilitated through Socket.io to implement websockets.
* Authentication was handled using Bcrypt. Bcrypt encrypted password information to be securely stored in a MongoDB 
* Cloudinary API was used to facilitate image uploads.
* Bootstrap implemented to make webpage responsive

### Live Updates 

![Live Updates](https://github.com/Nick-Cho/social-network-app/blob/master/artraverse.gif) 

### Login Page
<img src="https://github.com/Nick-Cho/social-network-app/blob/master/login.png" width="500">

### Profile Page
<img src="https://github.com/Nick-Cho/social-network-app/blob/master/profile.png" width="500">

## Code Documentation
### API Endpoints
#### Auth Endpoints
`/register` - handles register request from corresponding frontend form\
`/login` - handles login request from corresponding frontend form\
`/current-user` - checks if a user is logged in. Returns object `{ok: true}` if a user is found\
`/forgot-password` - handles forgot password request from corresponding frontend form, requires that the user knows the security question answer created on registration\
`/profile-update` - handles the update profile request from corresponding frontend form\
`/find-people` - returns 10 users that the logged in user is not following to populate the suggest followers sidebar\
`/user-follow` - handles the follow request by adding the requested user to the logged in user's following array and adding the logged in user to the requested user's followers array\
`/user-following` - returns the list of users that the logged in user is following\
`/user-unfollow` - handles the unfollow request by removing the requested user to the logged in user's following array and removing the logged in user to the requested user's followers array\
`/search-user/:query` - handles the search users form in the sidebar of the profile page by filtering the database for users that have a username or name that match the query\
`/user/:username` - returns user object associated with username query without the secret and password to prevent security breach

#### Post Endpoints
`/create-post` - handles create post request from PostForm component. Initializes a new post object and returns it with a populated "postedBy" field\
`/upload-image` - uploads image using Cloudinary API and returns the image's associated cloudinary url and public id\
`/user-posts` - returns 9 newest posts made by the logged in user\
`/user-post/:_id` - returns the updated post associated with the id query\
`/update-post/:_id` - handles edit post request and returns updated post object\
`/delete-post/:_id` - handles delete post request using id query and returns `{ok: true}` object on success\
`/news-feed/:page` - returns newest posts to render in __feed__ page (page that displays posts from the logged in user's following list) in an array. Takes page query to return posts associated with the page the user is currently viewing\
`/profile-feed/:page/:_id` - returns newest posts to render from the user passed in through id query. This endpoint also accounts for pagination\
`/liked-post` - handles like request by adding logged in user to the associated post object's "likes" array. Returns updated post object\
`/unliked-post` - handles unlike request by removing logged in user from the associated post object's "likes" array. Returns updated post object\
`/add-comment` - handles comment request by adding logged in user's comment and user object to the associated post object's "comments" array. Return updated post object\
`/remove-comment` - handles remove comment request by removing comment from post object's "comments" array\
`/total-posts` - returns total number of posts in the database\
`/user-total-posts/:_id` - returns total number of posts made by one user\
`/posts` - returns newest 9 posts in the database in an array\
`/post/:_id` - returns updated post with associated id query 

