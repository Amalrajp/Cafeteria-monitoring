import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Button, Card, List,Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

export default class Predict extends React.Component {

	render(){
		return (
				<div>
    			<Link to="/"><Button style={{float:"right"}}>Home</Button></Link>
    			<Card>
                    <Card.Content>
                        <Card.Header>Predict Menu</Card.Header>
                        <Card.Description>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Field>
                                    <label>Date</label>
                                    <input type="date" placeholder="DD/MM/YY" />
                                </Form.Field>
                                
                                <Button type="submit" >Predict</Button>
                            </Form>
                            <br />
                        </Card.Description>
                    </Card.Content>
                </Card>	
            	</div>

			)
	}
	
}