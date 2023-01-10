import React, {useContext, useEffect} from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'

function BlockchainTeam() {
    const context = useContext(apiContext)
    const {data, getAllData, getAttribute, getAllTeamData, teams, parameter} =
        context
    let attribute = 'teams'
    useEffect(() => {
        getAttribute(null)
        // getAllData();
        getAllTeamData()
    }, [parameter])
    const blockChain =
        teams &&
        teams.filter(e => {
            return e.designation === 'BlockChain'
        })
    return (
        <div className="card_centered">
            <div className="MemberCard_container">
                {/* <div className="team-card"> */}
                {/* <div className="picture"> */}
                <img
                    className="img-fluid"
                    src="https://xp.io/storage/19DQlFTi.jpg"
                />
                {/* </div> */}
                <div className="team-content">
                    <h3 className="name">Pratiksha Ekbote </h3>
                    <h4 className="title">
                        Adobe Illustrator | Adobe photoshop | Figma | Canva
                    </h4>{' '}
                </div>
                <div className="social">
                    <a
                        href="https://github.com/Pratikshaekbote"
                        className="fa fa-github"
                        aria-hidden="true"
                        target="_blank"></a>

                    <a
                        href="https://www.linkedin.com/in/pratikshaekbote"
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
                    src="https://xp.io/storage/17JmB9QN.jpg"
                />
                {/* </div> */}
                <div className="team-content">
                    <h3 className="name">Mohammad Faysal Khan </h3>
                    <h4 className="title">
                        Javascript | Data Analyst | Problem-solving
                    </h4>
                </div>
                <div className="social">
                    <a
                        href="https://github.com/fk-mfk"
                        className="fa fa-github"
                        aria-hidden="true"
                        target="_blank"></a>

                    <a
                        href="https://www.linkedin.com/in/faysal-khan-40aa1521b/"
                        className="fa fa-linkedin"
                        aria-hidden="true"
                        target="_blank"></a>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default BlockchainTeam
