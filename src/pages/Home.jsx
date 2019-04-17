import React, { Component } from "react";
import Loading from "../components/Loading/Loading";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000);
    }
    render() {
        return (
            <div className='content'>
                {!this.state.loading ? (
                    <div>
                        <h1>Home</h1>
                        <h3>Tunes for your morning...</h3>
                    </div>
                ) : (
                    <Loading />
                )}
            </div>
        );
    }
}

export default Home;
