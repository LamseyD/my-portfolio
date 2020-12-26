import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Button } from 'react-mdl'
import myResume from '../assets/Lam-Dec-24.pdf'
import traditionalResume from '../assets/Lam-alt.pdf'

class ResumeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <div className="resume-div" >
                        {/* <embed src={myResume} width="100%" height="1500px" /> */}



                        <div className="resume-desc" style={{ paddingTop: "50px" }}>


                            <p>
                                Information valid as of December 25th, 2020. Please send me an email for a more updated resume (if available).
                            </p>
                            <p>
                                References and Cover Letter and Transcript are also available upon request.
                            </p>
                            <small>
                                Made with Vue.js
                            </small>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <div className="resume-div" style={{ marginBottom: "200px" }}>
                        <a href={traditionalResume}> Click Here to View :) </a>
                        <div className="resume-desc" style={{ paddingTop: "50px" }}>
                            <p>
                                Information valid as of December 25th, 2020. Please send me an email for a more updated resume (if available).
                            </p>
                            <p>
                                References and Cover Letter and Transcript are also available upon request.
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div style = {{height:'100%'}} >

                <div className="resume-desc" style={{ paddingTop: "50px" }}>
                    <h4>
                        Information valid as of December 25th, 2020. Please send me an email for a more updated resume (if available).
                    </h4>
                    <i >
                        References and Cover Letter and Transcript are also available upon request.
                    </i>
                </div>

                <div className="resume" style = {{display: 'flex', height: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <div className="divider">
                    </div>
                    <div className="modern-resume">
                        <a href={myResume} style={{ color: "#1c1c1e" }} rel="noopener noreferrer" target="_blank"> 
                            <Button raised ripple style = {{height: '100px', width: '200px'}}>
                                Modern
                            </Button>
                        </a>

                    </div>

                    <div className="traditional-resume">
                        <a href={traditionalResume} style={{ color: "#1c1c1e" }} rel="noopener noreferrer" target="_blank"> 
                            <Button raised ripple style = {{height: '100px', width: '200px'}}>
                                Classic
                            </Button>
                        </a>
                    </div>
                </div>



            </div>



        )
    }
}

export default ResumeScreen