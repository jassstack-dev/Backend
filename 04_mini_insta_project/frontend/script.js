const post  = document.querySelector('.post')

async function getData(){
    const response =await fetch('http://localhost:3000/get-post')
    const data = await response.json()
    console.log(data)
    
const user = data.post
console.log(user)

user.forEach(function(e){
    post.innerHTML += `  <div class="post-header">
    <div class="profile">
      <img
        src="${e.image}"
        alt="profile"
      >

      <div>
        <h4>${e.caption}</h4>
        <span>2 hours ago</span>
      </div>
    </div>

    <button class="more">•••</button>
  </div>


  <!-- Post Image -->
  <div class="post-image">
    <img
      src="${e.image}"
      alt="post"
    >
  </div>


  <!-- Actions -->
  <div class="post-actions">

    <div class="left-actions">
      <button>♡</button>
      <button>💬</button>
      <button>➤</button>
    </div>

    <button>♡</button>

  </div>


  <!-- Content -->
  <div class="post-content">

    <strong>124 likes</strong>

    <p>
      <b>john_doe</b>
      Beautiful day 🌅
    </p>

    <span class="comments">
      View all 12 comments
    </span>

  </div>`

console.log(e.image)
})
}
getData()