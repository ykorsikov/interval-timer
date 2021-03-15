import React from "react";
import Timer from "../Timer/Timer";

class Dashboard extends React.Component {
    render() {
        return(
            <section className="dashboard">
                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron">
                            <Timer/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Dashboard;