import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Githubuser(username) {

    let [user, setUser] = useState({ imgUrl: "", followers: 0, following: 0 })
    
    useEffect(() => {
        async function apiCall() {
            fetch(`https://api.github.com/users/${username}`).then(async (res) => {
                let data = await res.json()
                let { avatar_url, followers, following } = data
                setUser(() => {
                    return {
                        imgUrl: avatar_url,
                        followers: followers,
                        following: following
                    }
                })
           })
        }
        apiCall();
    }, []);


  return (
    <div>
      <figure>
        <img src={user.imgUrl} alt="profile pic" />
        <figcaption>
          <h2>Username :{username}</h2>
          <h3>Followers :{user.followers}</h3>
          <h3>Following :{user.following}</h3>
        </figcaption>
      </figure>
    </div>
  );
}

export default Githubuser