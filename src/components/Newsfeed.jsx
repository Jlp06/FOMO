import { useState } from "react";
import NewsfeedHeader from "./subcomponents/NewsfeedHeader";
import PhotoPost from "./subcomponents/PhotoPost";
import VideoPost from "./subcomponents/VideoPost";

export default function Newsfeed(){
    const kodeGo = "Start your tech career with KodeGo!<br></br>Take it from John Michael Baldonado, a KodeGo graduate who landed his dream job in the tech industry even without a college degree.<br></br>Here's what John Michael liked most about our bootcamp:<br></br>✅ Teamwork when accomplishing tasks<br>✅ Hands-on training & beginner-friendly lessons<br>✅ Endorsement to various companies after the bootcamp<br></br>Pursue your dream career. Sign up at KodeGo today."
    const newJeans = "<i className='fa-solid fa-headphones'></i> 'Attention' - NewJeans"
    const portfolio = "@robindc | Portfolio<br></br>🚀 Techstacks I use recently : HTML, CSS, JavaScript, React, Vite, Tailwind, Materialize, Bootstrap, Mocha and Chai, Postman, Npm.<br></br>I create stuffs for fun, transforming your ideas into reality.<br></br>Link : <a className='portfolio' href='https://robindc.vercel.app/' target='_blank'>https://robindc.vercel.app/</a>"

    const [newPost, setNewPost] = useState([])

    function setPost(post){
        setNewPost(prevPost => [...prevPost, post])
    }
    return (
        <main className="flex-column main">
            <NewsfeedHeader setPost={setPost}/>

            <div className="newsfeed post-container">
                {newPost.map(post => <PhotoPost dp={"images/salonisomani.jpg"} name={"Saloni Somani"} ago={`${Math.floor(Math.random() *10)}s`} desc={post} post={""} likes={Math.floor(Math.random() *10)} comments={Math.floor(Math.random() *10)} reactType={"images/react2.png"} key={Math.floor(Math.random() *9999)} newPost={true}/>)}
            </div>

            <PhotoPost dp={"images/salonisomani.jpg"} name={"Saloni Somani"} ago={"1d"} desc={""} post={"images/scene1.jpeg"} likes={56} comments={87} reactType={"images/react2.png"}/>

            <VideoPost dp={"images/koreanology.jpg"} name={"Divya Goyal"} ago={"Sep 29"} desc={newJeans} post={"images/attention.mp4"} likes={"3K"} comments={45} reactType={"images/react2.png"} border={false} html={true}/>

            <PhotoPost dp={"images/jennie-dp.jpg"} name={"Labanti"} ago={"35m"} desc={"Like you too.."} post={"images/scene2.jpeg"} likes={"4.6K"} comments={5} reactType={"images/react.png"}/>

            <VideoPost dp={"images/kodego-dp.png"} name={"Diya Malik"} ago={"Sponsored"} desc={kodeGo} post={"images/kodego.mp4"} likes={"2.5K"} comments={9} reactType={"images/react2.png"} border={false} html={true}/>

            <PhotoPost dp={"images/salonisomani.jpg"} name={"Saloni Somani"} ago={"1d"} desc={portfolio} post={"images/scene3.jpeg"} likes={567} comments={39} reactType={"images/react2.png"} border={false} html={true}/>

            <PhotoPost dp={"https://i.pinimg.com/736x/4c/d0/41/4cd041f49b56d42467e6f8c1bdd79bed.jpg"} name={"GIF"} ago={"1h"} desc={""} post={"https://i.pinimg.com/originals/dd/2f/5d/dd2f5dcfc74590aa113bbbaed6ee8a57.gif"} likes={"1.1K"} comments={9} reactType={"images/react.png"} border={true}/>
        </main>

    )
}
