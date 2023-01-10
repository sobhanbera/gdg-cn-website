import React from 'react'
import {Link} from 'react-router-dom'
import {Typography} from '@material-ui/core'
import Headings from '../../Components/Page_headings'
import HeadingButton from '../../Components/Heading_button'
import EventCards from '../../Components/EventCard/index.js'
import event_illustration from '../../Assets/Events_page_illustration.svg'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import LeaderBoard from '../../Components/LeaderBoard/LeaderBoard'
import CarouselComponent from './Events'
import styles from './EventPage.module.css'
import EventCards2 from '../../Components/EventCard/index copy'
import FormBtnBg from '../../Assets/Form_btns_bg.png'
import Card from '@mui/material/Card'
import {ReactComponent as RSVPsvg} from '../../Assets/svg_link.svg'
import {ReactComponent as Calendar} from '../../Assets/calendar.svg'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import {Button, CardActionArea} from '@mui/material'
import moment from 'moment'

function Events() {
    function shorten(str, separator = ' ') {
        if (str) {
            if (str.length <= 150) return str
            return `${str.substr(0, str.lastIndexOf(separator, 150))}...`
        }
    }

    return (
        <section
            className="Events_section"
            style={{
                // width: "100vw",
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                // alignItems: "center",
                paddingBottom: '6vh',
                // paddingTop: "9vh",
            }}>
            <CarouselComponent />
            <Headings
                LargeHeading="Events"
                SmallHeading="Whats happening..."
                Text="GDG Cloud Nagpur also provides with Events, Workshops, Seminars. May it be Android Study Jams or Google Cloud Month we have it all..."
                PageIllustration={event_illustration}
            />
            <div className="heading_plusBtn">
                <h2
                    style={{
                        fontWeight: '600',
                        fontFamily: 'Open Sans,Poppins,sans-serif',
                        color: '#1b2733',
                    }}
                    className="heading">
                    Upcoming Events
                </h2>
                {/* <Fab color="primary" aria-label="add">
					<Link
						to="../events/new_event"
						style={{
							color: "white",
							height: "100%",
							width: "100%",
							margin: "0",
							display: "grid",
							placeItems: "center",
						}}
					>
						<AddIcon />
					</Link>
				</Fab> */}
            </div>
            <div className={styles.heading_plusBtn}>
                <h2
                    style={{
                        fontSize: '23px',
                        fontWeight: '400',
                        fontFamily: 'Open Sans,Poppins,sans-serif',
                        color: '#484848',
                        marginTop: '0vh',
                    }}
                    className={styles.heading_upcoming}>
                    There are no upcoming events at the moment. Please check
                    again soon.
                </h2>
            </div>
            <EventCards upcoming={true} />
            <div className="heading_plusBtn">
                <h2
                    style={{
                        fontWeight: '600',
                        fontFamily: 'Open Sans,Poppins,sans-serif',
                        color: '#1b2733',
                    }}
                    className="heading">
                    Past Events
                </h2>
                {/* <Fab color="primary" aria-label="add">
					<Link
						to="../events/new_event"
						style={{
							color: "white",
							height: "100%",
							width: "100%",
							margin: "0",
							display: "grid",
							placeItems: "center",
						}}
					>
						<AddIcon />
					</Link>
				</Fab> */}
            </div>
            {/* <EventCards2 upcoming={false} /> */}

            <div className="card_centered">
                <div className="MemberCard_container">
                    {/* <div className="team-card"> */}
                    {/* <div className="picture"> */}
                    <img
                        className="img-fluid"
                        src="https://xp.io/storage/17KFJXaf.png"
                    />
                    {/* </div> */}
                    AUG 6,2022
                    <div className="team-content">
                        <h3 className="name">Co-Host / External Ticketing</h3>
                        <h4 className="title">
                            ML on Cloud Series: Transfer Learning
                        </h4>
                    </div>
                    <button
                        style={{
                            color: 'white',
                            background: '#0f9d58',
                            width: '90%',
                            padding: '0.5rem',
                            margin: '0.7rem',
                            fontsize: '14px',
                            fontweight: '600',
                        }}>
                        VIEW EVENT
                    </button>
                    {/* <div className="social">
            <a
              href="facebook.com"
              className="fa fa-facebook"
              aria-hidden="true"
              target="_blank"
            ></a>

            

            <a
              href="linkdin.com"
              className="fa fa-linkedin"
              aria-hidden="true"
              target="_blank"
            ></a>
          </div> */}
                </div>

                <div className="MemberCard_container">
                    {/* <div className="team-card"> */}
                    {/* <div className="picture"> */}
                    <img
                        className="img-fluid"
                        src="https://xp.io/storage/17KV8Gwt.png"
                    />
                    {/* </div> */}
                    JUL 23,2023
                    <div className="team-content">
                        <h3 className="name">Workshop/Study Group</h3>
                        <h4 className="title">
                            Android Study Jam GDG Cloud Nagpur
                        </h4>
                    </div>
                    <button
                        style={{
                            color: 'white',
                            background: '#0f9d58',
                            width: '90%',
                            padding: '0.5rem',
                            margin: '0.7rem',
                            fontsize: '14px',
                            fontweight: '600',
                        }}>
                        VIEW EVENT
                    </button>
                    {/* <div className="social">
            <a
              href="facebook.com"
              className="fa fa-facebook"
              aria-hidden="true"
              target="_blank"
            ></a>

            <a
              href="github.com"
              className="fa"
              aria-hidden="true"
              target="_blank"
            >
              {" "}
             
            </a>

            <a
              href="linkdin.com"
              className="fa fa-linkedin"
              aria-hidden="true"
              target="_blank"
            ></a>
          </div> */}
                </div>
            </div>
            <br />
            <br />
            <HeadingButton
                LargeHeading="Interested in being a Speaker at one of our events?"
                SmallHeading="Just drop us your Proposal."
                bg={FormBtnBg}
                btnText="Get in Touch"
                formLink="https://gdg.community.dev/gdg-cloud-nagpur/"
            />
        </section>
    )
}

export default Events
