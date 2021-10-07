import React from 'react'
import '../styles/Home.css' 
import PostCard from "../components/PostCard";
import FollowCard from '../components/FollowCard'



function Home() {
    return (
        <div className="home container body">
            <div className="row">
                <div className="col-lg-7 col-md-7 col-xs-12">
                    <div style={{"marginTop" : "8%"}}>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                    </div>
                    
                </div>

                <div className="col-lg-5 col-md-5 col-xs-12">
                    <div className="sidebar fixed" style={{"marginTop" : "3%"}}>
                        <div style={{fontWeight: "bold", fontSize: "15px", marginBottom: "2px"}}>
                           People
                        </div>
                        <FollowCard/>
                        <FollowCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
