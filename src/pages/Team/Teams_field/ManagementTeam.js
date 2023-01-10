import React, {useContext, useEffect} from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'

function ManagementTeam() {
    const context = useContext(apiContext)
    const {data, getAllData, getAttribute, getAllTeamData, teams, parameter} =
        context
    let attribute = 'teams'
    useEffect(() => {
        getAttribute(null)
        // getAllData();
        getAllTeamData()
    }, [parameter])

    const managementTeam =
        teams &&
        teams.filter(e => {
            return e.designation === 'Management'
        })
    return (
        <div className="card_centered">
            <div className="MemberCard_container">
                {/* <div className="team-card"> */}
                {/* <div className="picture"> */}
                <img
                    className="img-fluid"
                    src="https://xp.io/storage/17JiIKcE.jpg"
                />
                {/* </div> */}
                <div className="team-content">
                    <h3 className="name">Samiksha Kachore </h3>
                    <h4 className="title">
                        Content Writing | digital creation | leadership | Python
                        | AWS | SQL
                    </h4>
                </div>
                <div className="social">
                    <a
                        href="https://github.com/samikshakachore?tab=stars"
                        className="fa fa-github"
                        aria-hidden="true"
                        target="_blank"></a>

                    <a
                        href="https://www.linkedin.com/in/samiksha-kachore"
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
                    src="https://xp.io/storage/17JaTlZf.jpg"
                />
                {/* </div> */}
                <div className="team-content">
                    <h3 className="name">Shreya Santoshwar </h3>
                    <h4 className="title">-</h4>
                </div>
                <div className="social">
                    <a
                        href="https://github.com/ShreyaSS02"
                        className="fa fa-github"
                        aria-hidden="true"
                        target="_blank"></a>

                    <a
                        href="https://www.linkedin.com/in/shreya-santoshwar-666447197"
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
                    src="https://xp.io/storage/17JkE0dV.png"
                />
                {/* </div> */}
                <div className="team-content">
                    <h3 className="name">Neenad Sahasrabuddhe</h3>
                    <h4 className="title">
                        React.Js | Next.Js | Frontend Development
                    </h4>
                </div>
                <div className="social">
                    <a
                        href="https://github.com/nenu3414"
                        className="fa fa-github"
                        aria-hidden="true"
                        target="_blank"></a>

                    <a
                        href="https://linkedin.com/in/neenad-sahasrabuddhe-1017841a4/"
                        className="fa fa-linkedin"
                        aria-hidden="true"
                        target="_blank"></a>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default ManagementTeam
