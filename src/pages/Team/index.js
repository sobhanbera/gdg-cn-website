import React, {useState} from 'react'
import Headings from '../../Components/Page_headings/index'
import team_illustration from '../../Assets/Teams_page_illustration.svg'
import CoreTeam from './Teams_field/CoreTeam'
import WebTeam from './Teams_field/WebTeam'
import BlockchainTeam from './Teams_field/Blockchain'
import ManagementTeam from './Teams_field/ManagementTeam'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './carousel.css'
import TeamSpecialCard from '../../Components/TeamSpecialCard/TeamSpecialCard'
import './Team.css'

const TeamMembers = [
    {
        id: 'developer',
        name: 'Developers',
        Comp: WebTeam,
    },
    {
        id: 'coreteam',
        name: 'Community Manager',
        Comp: CoreTeam,
    },
    {
        id: 'graphics',
        name: 'Graphics Designer',
        Comp: BlockchainTeam,
    },
    {
        id: 'content',
        name: 'Content Writer',
        Comp: ManagementTeam,
    },
]

function Team() {
    // this state tell what kind of team is selected
    // by default it is web team
    const [memberTypeToShow, showMemberTypeToShow] = useState('developer')

    const updateMemberTypeToShow = tag => {
        showMemberTypeToShow(tag)
    }

    return (
        <div>
            <section className="team-container">
                <Headings
                    LargeHeading="Our Team"
                    SmallHeading="The ones, who are making it happen..."
                    Text="Learning goes hand-in-hand with building new and cool stuff.
                     With our incredible team we aim to solve numerous problems in day-to-day life, and explore new heights in Technology!"
                    PageIllustration={team_illustration}
                />
                {/**
					<Fab
						style={{alignSelf: 'flex-end', marginRight: '7vw'}}
						color="primary"
						aria-label="add">
						<Link
							to="../team/new_member"
							style={{
								color: 'white',
								height: '100%',
								width: '100%',
								margin: '0',
								display: 'grid',
								placeItems: 'center',
							}}>
							<AddIcon />
						</Link>
					</Fab>
				*/}

                <div>
                    <TeamSpecialCard />
                </div>

                <div className="member-type-container">
                    <ul className="member-type-wrapper">
                        {TeamMembers.map((memberType, index) => {
                            return (
                                <li
                                    key={index}
                                    className={`member-type ${
                                        memberType.id === memberTypeToShow
                                            ? 'selected-member-type'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        updateMemberTypeToShow(memberType.id)
                                    }>
                                    <p className="member-type-text">
                                        {memberType.name}
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="member-card-container">
                    {TeamMembers.map(MemberType => {
                        if (MemberType.id === memberTypeToShow) {
                            return <MemberType.Comp key={MemberType.id} />
                        }
                        return null
                    })}
                </div>
            </section>
        </div>
    )
}

export default Team
