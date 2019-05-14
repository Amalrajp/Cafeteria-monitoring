import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Button, Card, List,Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

import { Items } from '../../api/items.js';

export default class Bill extends React.Component {

	constructor(props) {
        super(props)
        this.state = {
            category: 'veg',
            options:[]
        }
    }

    handleChange = (e) => {
        this.setState({ category: e.target.value });
    }

    insertItem = (e) => {
        e.preventDefault()
        let category = this.state.category
        let itemName = this.name.value.trim()
        let itemNo = this.itemNo.value.trim()

		if(!itemName){
			return 'Enter a Valid Item'
		}
		else if(this.state.options.indexOf(itemName)>-1){
			return 'The item already entered.'
		}
		else{
			this.setState((prevState) =>({options: prevState.options.concat(itemName)}))
		}    	

        this.itemName.value = ""
        this.itemNo.value = ""
    }

    renderCategories = () => {
        const a = Items.find({}).fetch()[0]
        var arr = Object.keys(a)
        arr.shift()

        return arr.map(a => <option value={a}>{a}</option>)
    }

    handleRemoveOne = (optionToRemove) =>{
		this.setState((prevState) =>(
			{options:prevState.options.filter((option)=> option!==optionToRemove)}
			));
	}
   

    billItems=(e)=>{
    	e.preventDefault()
        let category = this.state.category
        let itemName = this.name.value.trim()
        let remainingNo = this.remaining.value.trim()

        const a = Items.find({}).fetch()
        var x = a[0][category]
        console.log(x)
        x[itemName] = parseInt(remainingNo)
        console.log(x)
        console.log(a[0]._id._str)
        Meteor.call('items.updateItem', a[0]._id, category,x, (err) => {
            alert("Added successfully")
        })

        this.category.value = ""
        this.itemName.value = ""
        this.remainingNo.value = ""

    }

	render(){

		return (
			<div>
				<div>
    			<Link to="/"><Button style={{float:"right"}}>Home</Button></Link>
    			</div>
    			<Card>
                    <Card.Content>
                        <Card.Header>Bill</Card.Header>
                        <Card.Description>
                            <Form onSubmit={this.billItems}>
                                <Form.Field>
                                    <label>Category</label>
                                    <select
                                        value={this.state.category}
                                        onChange={this.handleChange} >
                                        {this.renderCategories()}
                                    </select>
                                </Form.Field>
                                <Form.Field>
                                    <label>Item Name</label>
                                    <input type="text" placeholder="Item name" ref={e => this.name = e} required /><br />
                                </Form.Field>
                                <Form.Field>
                                    <label>Items</label>
                                    <input type="number" placeholder="Items" ref={e => this.itemNo = e} required /><br />
                                </Form.Field>
                                <Button onClick={this.insertItem}>Add</Button>
                                <Button type="submit">Submit</Button>
                            </Form>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <List>
					{this.options && (this.options.map((option)=> (
						<ListItem>
							{option}  
							<Button 
								className="button button-link" 
								onClick={this.handleRemoveOne(option)}
							>Remove</Button>
						</ListItem>)))
											
					}
				</List>
            </div>
    	)
	}
}