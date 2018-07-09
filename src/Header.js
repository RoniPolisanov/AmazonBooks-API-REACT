import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
    active = {
        backgroundColor: "#212F3D",
        color: "white",
        fontWeight: "bold"
    };

    header = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
    };

    render() {
        return (
            <div style={this.header}>
                <NavLink exact to="/" activeStyle={this.active}>
                    Get All Customers
                </NavLink>
                <NavLink exact to="/getCustomerBooks/" activeStyle={this.active}>
                    Get Csutomer By ID
                </NavLink>
                <NavLink exact to="/getCustomerCanceledBooks/" activeStyle={this.active}>
                    Get Book That Customer Want To Cancel
                </NavLink>
            </div>
        );
    }
}

export default Header;