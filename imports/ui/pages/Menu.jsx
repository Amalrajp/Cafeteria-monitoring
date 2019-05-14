import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Card, List ,Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Items } from '../../api/items.js';


export default class Menu extends React.Component {

	  constructor(props) {

        super(props);
        this.records = Items.find({}).fetch()[0];
        this.images=['/Idli.jpg']
    }

renderItem = (i) => {


        var a = this.records[i]
        const keys = Object.keys(a)
        const values = Object.values(a)
        
        const items = keys.map((key, index) => {

            return {
                key,
                value: values[index]
            }
        })
        return items.map(item => 
        	
        	<Card>
        		<Image src={this.images[0]}/>
                <Card.Content>
                    <Card.Header content={item.key} />
                    <Card.Meta content='' />
                    <Card.Description>
                        
                         Availability:   {item.value}
                        
                    </Card.Description>
                </Card.Content>
			</Card>
	            )

    }
	renderHomeItems = () => {
        var a = this.records
        const categories = Object.keys(a)
        categories.shift()

        return categories.map(x =>
            <div className="category">
            	<h3 className= "card-header">{x}</h3>
            	<br/>
	            <div className="card-items">
	            <Card.Group itemsPerRow={3} >
	                {this.renderItem(x)}
	            </Card.Group>
	           	</div>
	           	<br/>
	        </div>
	                    
        )
    }
    render(){
    	return(
    		<div>
    			<Link to="/"><Button style={{float:"right"}}>Home</Button></Link>	
            <div className="categories">
    			{this.renderHomeItems()}
    		</div>    		
    		</div>
    		)
    }
}
