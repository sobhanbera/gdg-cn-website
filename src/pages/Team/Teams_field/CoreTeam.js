import React, {useContext, useEffect, useState} from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'
import PastTeam from './PastTeam'
import '../Team.css'

function CoreTeam() {
    const context = useContext(apiContext)
    const {data, getAllData, getAttribute, getAllTeamData, teams, parameter} =
        context
    // let attribute = "teams"
    const [count, setCount] = useState(teams)

    useEffect(() => {
        getAttribute(null)
        // getAllData();
        getAllTeamData()
        // let newCount = count -1;
        // setCount(newCount)
        // if(count <= 0){
        //     setCount(null)
        // }
        // console.log(count);
    }, [parameter])
    const coreTeam =
        teams &&
        teams.filter(e => {
            return e.designation === 'Core Team'
        })
    return (
        <>
            <div className="card_centered">
                <div className="MemberCard_container">
                    {/* <div className="team-card"> */}
                    {/* <div className="picture"> */}
                    <img
                        className="img-fluid"
                        src="https://xp.io/storage/17KphaNI.jpg"
                    />
                    {/* </div> */}
                    <div className="team-content">
                        <h3 className="name">Stuti Agrawal </h3>
                        <h4 className="title">
                            C/C++ | Python | Java | HTML | CSS
                        </h4>
                    </div>
                    <div className="social">
                        <a
                            href="https://github.com/Stutiagrawal10"
                            className="fa fa-github"
                            aria-hidden="true"
                            target="_blank"></a>

                        <a
                            href="https://www.linkedin.com/in/stuti-agrawal-2417a2238/"
                            className="fa fa-linkedin"
                            aria-hidden="true"
                            target="_blank"></a>
                    </div>
                </div>

                <div className="MemberCard_container">
                    {/* <div className="team-card"> */}
                    {/* <div className="picture"> */}
                    <img
                        className="img-fluid"
                        src="https://xp.io/storage/17JdNHV1.jpg"
                    />
                    {/* </div> */}
                    <div className="team-content">
                        <h3 className="name">Aaliya Ali</h3>
                        <h4 className="title">Learner | Flutter Developer</h4>
                    </div>
                    <div className="social">
                        <a
                            href="https://github.com/Aaliya-Ali"
                            className="fa fa-github"
                            aria-hidden="true"
                            target="_blank"></a>

                        <a
                            href="https://www.linkedin.com/in/aaliyaali"
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
                        src="https://xp.io/storage/17J392RB.jpg"
                    />
                    {/* </div> */}
                    <div className="team-content">
                        <h3 className="name">Mohit Chandak </h3>
                        <h4 className="title">HTML | C++</h4>
                    </div>
                    <div className="social">
                        <a
                            href="https://github.com/mohitchandak"
                            className="fa fa-github"
                            aria-hidden="true"
                            target="_blank"></a>

                        <a
                            href="https://www.linkedin.com/in/chandak-mohit/"
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
                        src="https://xp.io/storage/17IZa6Hg.jpg"
                    />
                    {/* </div> */}
                    <div className="team-content">
                        <h3 className="name">Chandrakant Bobade</h3>
                        <h4 className="title">
                            Full Stack Java Developer | Tech Educator
                        </h4>
                    </div>
                    <div className="social">
                        <a
                            href="https://github.com/chandrakant22"
                            className="fa fa-github"
                            aria-hidden="true"
                            target="_blank"></a>

                        <a
                            href="https://www.linkedin.com/in/chandrakant22/"
                            className="fa fa-linkedin"
                            aria-hidden="true"
                            target="_blank"></a>
                    </div>

                    {/* </div> */}
                </div>
            </div>

            {/* <div id="CoreTeam" className="Field_view">
            {coreTeam &&
                coreTeam.map((teams) => {
                    return <MemberCard
                    key={teams._id}
                     team={teams}
                />
                })
            }
        </div> */}
            {/* <div className="Past-Member">
            <h3>Past Team Members</h3>
                <PastTeam />
            </div> */}
        </>
    )
}

export default CoreTeam
