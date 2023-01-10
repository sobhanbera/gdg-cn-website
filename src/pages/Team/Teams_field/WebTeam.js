import React, {useContext, useEffect} from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'

function WebTeam() {
    const context = useContext(apiContext)
    const {data, getAllData, getAttribute, getAllTeamData, teams, parameter} =
        context
    let attribute = 'teams'
    useEffect(() => {
        getAttribute(null)
        // getAllData();
        getAllTeamData()
    }, [parameter])

    const webTeam =
        teams &&
        teams.filter(e => {
            return e.designation === 'Web'
        })

    return (
        <div className="card_centered">
            <div className="MemberCard_container">
                {/* <div className="team-card"> */}
                {/* <div className="picture"> */}
                <img
                    className="img-fluid"
                    src="https://xp.io/storage/17MHbXD5.jpg"
                />
                {/* </div> */}
                <div className="team-content">
                    <h3 className="name">Ayush Shete</h3>
                    <h4 className="title">
                        Smart India Hackathon Winner 🏆 | Full Stack Developer |
                        Machine Learning Enthusiast
                    </h4>
                </div>
                <div className="social">
                    <a
                        href="https://github.com/ayushete02"
                        className="fa fa-github"
                        aria-hidden="true"
                        target="_blank"></a>

                    <a
                        href="https://www.linkedin.com/in/ayushete02/"
                        className="fa fa-linkedin"
                        aria-hidden="true"
                        target="_blank"></a>
                </div>

                {/* </div> */}
            </div>
            <div className="MemberCard_container">
                {/* <div className="team-card"> */}
                {/* <div className="picture"> */}
                <img
                    className="img-fluid"
                    src="https://xp.io/storage/17Mz7Q8k.jpg"
                />
                {/* </div> */}
                <div className="team-content">
                    <h3 className="name">Atharva Pandhare</h3>
                    <h4 className="title">
                        Tech Enthusiast | Full Stack Developer
                    </h4>
                </div>
                <div className="social">
                    <a
                        href="github.com"
                        className="fa fa-github"
                        aria-hidden="true"
                        target="_blank"></a>

                    <a
                        href="https://www.linkedin.com/in/atharva-pandhare/"
                        className="fa fa-linkedin"
                        aria-hidden="true"
                        target="_blank"></a>
                </div>

                {/* </div> */}
            </div>
        </div>
    )
}

export default WebTeam
