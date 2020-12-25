import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl'
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
                    <div className="resume-div" style={{ marginBottom: "200px" }}>
                        <embed src={myResume} width="100%" height="1500px" />
                        <div className="resume-desc" style={{ paddingTop: "50px" }}>
                            <p>
                                Information valid as of December 25th, 2020. Please send me an email for a more updated resume (if available).
                            </p>
                            <p>
                                References and Cover Letter are also available upon request.
                            </p>
                            <small>
                                Resume created with Vue.js
                            </small>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <div className="resume-div" style={{ marginBottom: "200px" }}>
                        <embed src={traditionalResume} width="100%" height="1500px" />
                        <div className="resume-desc" style={{ paddingTop: "50px" }}>
                            <p>
                                Information valid as of December 25th, 2020. Please send me an email for a more updated resume (if available).
                            </p>
                            <p>
                                References and Cover Letter are also available upon request.
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab> Modern </Tab>
                    <Tab> Traditional </Tab>
                </Tabs>

                <Grid >
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>



        )
    }
}

export default ResumeScreen