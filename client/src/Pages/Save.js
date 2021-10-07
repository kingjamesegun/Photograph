import React from 'react'
import ProfileCard from '../components/ProfileCard'
import GalleryPics from '../components/GalleryPicsCard'


function Save() {
    return (
        <div className="save">
            <div className="body " style={{paddingTop: "2%"}}>
                <ProfileCard/>
                <div className="pt-2 font-mono text-lg">
                    34 saved
                </div>
                <div className="row">
                        <GalleryPics/>
                </div>
            </div>
            
        </div>
    )
}

export default Save
