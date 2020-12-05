import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton } from 'react-mdl'

class ProjectScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className = "projects-grid">
                {/* project 1*/}
                <Card shadow={5} style = {{minWidth: '450', magin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png) center / cover'}} > React Project #1</CardTitle>
                    <CardText>
                        HELLO
                    </CardText>
                    <CardActions border>
                        <Button colored> Github </Button>
                        <Button colored> Github </Button>
                    </CardActions>
                    <CardMenu style = {{color:'#fff'}}> 
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style = {{minWidth: '450', magin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png) center / cover'}} > React Project #1</CardTitle>
                <CardText>
                    HELLO
                </CardText>
                <CardActions border>
                    <Button colored> Github </Button>
                    <Button colored> Github </Button>
                </CardActions>
                <CardMenu style = {{color:'#fff'}}> 
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={5} style = {{minWidth: '450', magin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png) center / cover'}} > React Project #1</CardTitle>
                <CardText>
                    HELLO
                </CardText>
                <CardActions border>
                    <Button colored> Github </Button>
                    <Button colored> Github </Button>
                </CardActions>
                <CardMenu style = {{color:'#fff'}}> 
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1>
                        tab 2
                    </h1>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1>
                        tab 3
                    </h1>
                </div>
            )
        }
    }


    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab> React </Tab>
                    <Tab> VueJS </Tab>
                    <Tab> Python </Tab>
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

export default ProjectScreen