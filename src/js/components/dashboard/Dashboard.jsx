import React from "react";
import { Link } from "react-router-dom";
import { Alert, Button } from "reactstrap";
import History from "../history";

import {
    setUserType
} from "../login/loginActions";

import {
    updatePostedFalse
} from "../addListing/addListingActions";

class Seller extends React.Component {
    constructor(props) {
        super(props);

        this.handleUpdatePostedFalse = this.handleUpdatePostedFalse.bind(this);
    }

    handleUpdatePostedFalse(){
        const { dispatch } = this.props;
        dispatch(updatePostedFalse());
    }

    render() {
        if(this.props.user === null) {
            return (
                <div className="dTopMargin">
                    <h1 className="dTextCenter">Please login to view your profile</h1>
                </div>
            )
        }

        return (
            <div className="dTopMargin">
                {this.props.user != null && this.props.user.userType === "seller" &&
                    <div>
                        <h3 className="dTextCenter">Your Listings</h3>
                        <History purchaseOrListing={true}/>
                        <Link to="/AddListing" onClick={this.handleUpdatePostedFalse} className="btn btn-primary">Add Products</Link>
                    </div>  
                }
                <h3 className="dTextCenter">Your Purchase History</h3>
                <History purchaseOrListing={false}/>
            </div>
        )
    }
}

export default Seller;