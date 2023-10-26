import React from "react";
import Profile from "../../assets/profile.png";
import Phone from "../../assets/phone.png";
import Email from "../../assets/email.png";
const AccountDetails = () => {
    const TutorDetails = {
        name: "Robert Woodland",
        phone: "+61 404 352 443",
        email: "104309387@student.swin.edu.au",
        subject: "Physics",
    }
    return (
        <div className="academic-information-container white-box">
            <div className="title">
                <p>Account (Tutor)</p>
            </div>
            <div className="content">
                <div className="flex-container">
                    <div className="profile-picture">
                        <img src={Profile} className="circle" />
                    </div>
                    <div className="information">
                        <ul className="list-unstyled">
                            <li className="name">{TutorDetails.name}</li>
                            <li className="course">{TutorDetails.subject}</li>
                            
                        </ul>
                    </div>

                </div>
                <div className="additional-information">
                    <ul className="list-unstyled">
                        <li className="phone"><span><img src={Phone} /></span>{TutorDetails.phone}</li>
                        <li className="email"><span><img src={Email} /></span>{TutorDetails.email}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AccountDetails