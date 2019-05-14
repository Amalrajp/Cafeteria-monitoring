import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Button, Card, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import Chart from 'chart.js';

import { People } from '../../api/people.js';
import { Items } from '../../api/items.js';



export default class Home extends React.Component {

    constructor(props) {

        super(props);
        this.records = Items.find({}).fetch()[0];
    }

    inside = () => {

        var a = People.find({}, { limit: 1, sort: { createdAt: -1 } }).fetch();
        console.log(a);
        a = a.map(function (elem) {
            return elem.No_of_people;
        });

        var n = a[0];

        if (n > 2000) {
            return 0;
        }
        else if (n < 0) {
            return 2000;
        }
        else {
            return 2000 - n;
        }

    }
    /*chartMaker=()=>{
        

        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        
    }
*/
    render() {

        return (
            <div>
                <div className="home-buttons">
                    <div>
                        <Link to='/menu'>
                            <Button style={{ float: "right" }}>Menu</Button>
                        </Link>  
                    </div>
                         
                    {!Meteor.userId() ?
                        <Link to='/login'>
                            <Button style={{ float: "right" }}>Login</Button>
                        </Link>
                        :
                        <div>
                            <Link to='/user'>
                                <Button style={{ float: "right" }}>Edit Menu</Button>
                            </Link>
                            <Link to='/predict'>
                                <Button style={{ float: "right" }}>Predict Menu</Button>
                            </Link>
                            <Link to='/bill'>
                                <Button style={{ float: "right" }}>Bill</Button>
                            </Link>
                        
                        </div>
                    }
                </div>
                <div className="all"><br />
                    
                        <Card>
                            <Card.Content>
                                <Card.Header>Seats Remaining</Card.Header>

                                <Card.Description>
                                    <span id="count" className="number">{this.inside()}</span>
                                    <hr className="hrline" />
                                    <span id="count-total" className="number">2000</span>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        /*<canvas id="myChart" width="400" height="400"></canvas>
                        */
                </div>
            </div>
        )
    }
}
