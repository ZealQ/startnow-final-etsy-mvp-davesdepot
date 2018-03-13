import React from "react";
import { Link } from "react-router-dom";
import { Button, Jumbotron } from 'reactstrap';

import {
    home,
    homeBtn,
    homeCache
} from "./homeActions"

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleHomeBtn = this.handleHomeBtn.bind(this);
    }

    handleChange(e) {
        let input = e.target.value;
        const { dispatch } = this.props;
        dispatch(home(input));
    }

    handleHomeBtn(e) {
        const { dispatch } = this.props;
        dispatch(homeBtn());
    }

    render() {

        return (
            <div>

                <div className="Eresponsive">
                    <div className="Egallery">
                    <Link to="/AddListing" className="btn btn-primary">Add Products</Link>
                        < Link to='/details'>
                            <img className='EhomeImg' src="http://ronedmondson.com/wp-content/uploads/2012/01/easy-street.jpg" width="300" height="200" />
                        </Link>
                        <div className="EimgDesc">You on EASY STREET!!!!</div>
                    </div>
                </div>


                <div className="Eresponsive">
                    <div className="Egallery">
                        < Link to='/details'>
                            <img className='EhomeImg' src="http://ronedmondson.com/wp-content/uploads/2012/01/easy-street.jpg" width="300" height="200" />
                        </Link>
                        <div className="EimgDesc">You on EASY STREET!!!!</div>
                    </div>
                </div>

                <div className="Eresponsive">
                    <div className="Egallery">
                        < Link to='/details'>
                            <img className='EhomeImg' src="http://ronedmondson.com/wp-content/uploads/2012/01/easy-street.jpg" width="300" height="200" />
                        </Link>
                        <div className="EimgDesc">You on EASY STREET!!!!</div>
                    </div>
                </div>

                <div className="Eresponsive">
                    <div className="Egallery">
                        < Link to='/details'>
                            <img className='EhomeImg' src="http://ronedmondson.com/wp-content/uploads/2012/01/easy-street.jpg" width="300" height="200" />
                        </Link>
                        <div className="EimgDesc">You on EASY STREET!!!!</div>
                    </div>
                </div>







            </div>

        )
    }
}

export default Home;