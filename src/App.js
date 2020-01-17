import React from 'react';
import logo from './logo.svg';
import './App.css';
import Months from './components/months'
import UsersFetch from './services/users_fetch'

export default class App extends React.Component {

    Users = new UsersFetch();

    state = {
        monthsUsers: [],
        namesUsers: []
    };

    updateMonths(){
        this.Users
            .getMonths()
            .then( (res) => {
                const newObj = {};
                for ( let i in res ) {
                    ( newObj.hasOwnProperty(res[i]))
                        ? newObj[res[i]] = newObj[res[i]] + 1
                        : newObj[res[i]] = 1;
                }

                this.setState({
                    monthsUsers: newObj
                });
                console.log(newObj);
            })
            .catch(console.log.bind(console));
    };

    updateNames(){
        this.Users
            .getNames()
            .then( (res) => {
                const newObj = {};
                for ( let i in res ) {
                    ( newObj.hasOwnProperty(res[i][0]))
                        ? newObj[res[i][0]] = [...newObj[res[i][0]], res[i][1]]
                        : newObj[res[i][0]] = [ res[i][1] ];
                }

                this.setState({
                    namesUsers: newObj
                });
                console.log(newObj);
            })
            .catch(console.log.bind(console));
    };

    constructor() {
        super();
        this.updateMonths();
        this.updateNames();
    }

    render() {

        const {monthsUsers, namesUsers} = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <section>
                    <div id="month-block">
                        <Months monthsUsers={monthsUsers} namesUsers={namesUsers} />
                    </div>
                </section>
            </div>
        );
    }
};
