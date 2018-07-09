import React from "react";
import { Route } from "react-router-dom";
import CustomersList from "../Components/CustomersList";
import CustomerBooks from "../Components/CustomerBooks";
import CanceledBooks from "../Components/CanceledBooks";
import Header from "../Header";

const ReactRouter = () =>{
    return (
        <React.Fragment>
            <Header> </Header>
            <Route exact path="/" component={CustomersList} />
            <Route exact path="/getCustomerBooks/" component={CustomerBooks} />
            <Route exact path="/getCustomerCanceledBooks/" component={CanceledBooks} />
        </React.Fragment>
    );}

export default ReactRouter;
