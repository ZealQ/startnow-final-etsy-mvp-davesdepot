import React from "react";
import {Table, UncontrolledAlert} from "reactstrap";
import { CSSTransitionGroup } from 'react-transition-group'
import { getOrderHistory, getSellerItems } from './historyActions';

export default class History extends React.Component{
    constructor(props){
        super(props);
    }
    //When component mounts, go get order history
    componentWillMount() {
        const { dispatch, user } = this.props;
        if(this.props.user !== null && this.props.user.userType === "seller"){
            dispatch(getSellerItems(user));
        } 
        dispatch(getOrderHistory(user));
        
    }

    render(){
        //get orders from props
        const { orders, status, sellerItems, purchaseOrListing } = this.props;
        let listItems;
        if(purchaseOrListing === true){
            listItems = sellerItems;
        } else {
            listItems = orders;
        }
        
        return (
            <div>
            { status === ('loading...' || "Failed") ? <div>{status}</div>
            : !!listItems && listItems.length > 0 ? 
                
                    <Table striped bordered id="dAliceBlue" className="dTextCenter">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Condition</th>
                            </tr>
                        </thead>
                        <tbody>

                            {listItems.map((item,index) => {
                                // console.log("tableItem: ", item)
                                return (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.condition}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>
            :   <UncontrolledAlert color="info" className="h1 dTextCenter">
                    You have no history
                </UncontrolledAlert>
            }
        </div>
        )
    }
}