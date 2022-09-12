import React, { useContext, useEffect,useState } from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'
import PastTeam from './PastTeam'
import '../Team.css';

function CoreTeam() {
    const context = useContext(apiContext)
    const { data, getAllData, getAttribute,getAllTeamData,teams,parameter} = context
   // let attribute = "teams"
    const [count , setCount] = useState(teams);
  
    useEffect(() => {
        getAttribute(null)
        // getAllData();
        getAllTeamData();
        // let newCount = count -1;
        // setCount(newCount)
        // if(count <= 0){
        //     setCount(null)
        // }
        // console.log(count);
    }, [ parameter ])
    const coreTeam = teams && teams.filter((e) => {
        return e.designation === 'Core Team';
    })
    return (
        <>

<div className="MemberCard_container">
			{/* <div className="team-card"> */}
			{/* <div className="picture"> */}
			<img className="img-fluid" src="ww." />
			{/* </div> */}
			<div className="team-content">
				<h3 className="name">Name</h3>
				<h4 className="title">designation</h4>
			</div>
			<div className="social">
				<a href='facebook.com' className="fa fa-facebook" aria-hidden="true" target="_blank"></a>

				<a href='github.com' className="fa" aria-hidden="true" target="_blank">
					{" "}
					{/* <Github className="fa" /> */}
				</a>

				<a href='linkdin.com' className="fa fa-linkedin" aria-hidden="true" target="_blank"></a>
			</div>         
			{/* </div> */}
			{/* {admin && (
				<div className="buttonsAdmin">
					<Button
						onClick={handleClick}
						className="btn"
						size="small"
						variant="contained"
						disableElevation
						style={{
							backgroundColor: "#EA4235",
							borderColor: "#EA4235",
							border: "1.5px solid #EA4235",
							fontWeight: "600",
							fontFamily: "Open Sans,sans-serif",
						}}
					>
						Delete
					</Button>

					<Link
						onClick={() => previousCardData(team)}
						to="../team/edit_member"
						style={{ textDecoration: "none" }}
					>
						<Button
							className="btn"
							size="small"
							variant="outlined"
							disableElevation
							style={{
								color: "#0F9D58",
								borderColor: "#0F9D58",
								border: "1.5px solid",
								fontWeight: "600",
								fontFamily: "Open Sans,sans-serif",
							}}
						>
							Edit
						</Button>
					</Link>
				</div>
			)} */}
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
    )}

export default CoreTeam

