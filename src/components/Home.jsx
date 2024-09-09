import React from 'react'
import vg from "../assets/2.webp"
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai"

function Home() {
  return (
    <>
      <div className="home" id='home'>
        <main>
          <h1>XYZEE</h1>
          <p>Solution to every problems</p>
        </main>
      </div>


      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim vero ratione ut cumque Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptate! </p>
        </div>
      </div>

      <div className="home3" id='about'>
      <div>
        <h1>who we are</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, saepe dicta! Necessitatibus aspernatur officiis dolores accusantium est excepturi adipisci animi. Repudiandae perferendis sint similique? Ipsum sapiente officia magnam itaque repellendus molestias, voluptatem assumenda dicta unde ipsam tenetur ullam cupiditate commodi aliquam nisi, dolor eligendi atque consequatur aperiam eaque fugit odio, quo dolorem dolores? Vero quidem rerum eos maiores doloribus temporibus exercitationem accusantium vel quasi sit? Ad, doloribus. Ipsa obcaecati sint repellat sequi doloribus vitae dolores ex expedita at hic? Accusamus molestiae tempore ut, tempora rem saepe? Ratione nulla laudantium vitae nesciunt veritatis reiciendis doloremque? Officiis voluptates facere aspernatur fugiat ab</p>
      </div>
      </div>


      <div className="home4" id='brands'>
    <div>
      <h1>Brands</h1>
      <article>
        <div style={{
          animationDelay: "0.3s"
        }}>
      <AiFillGoogleCircle/>
      <p>Google</p>
        </div>
        <div style={{
          animationDelay: "0.5s"
        }}>
      <AiFillAmazonCircle/>
      <p>Amazon</p>
        </div>
        <div style={{
          animationDelay: "0.7s"
        }}>
      <AiFillYoutube/>
      <p>YouTube</p>
        </div>
        <div style={{
          animationDelay: "1s"
        }}>
      <AiFillInstagram/>
      <p>Instagram</p>
        </div>
      </article>
    </div>
      </div>
    </>
  )
}

export default Home