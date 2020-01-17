import React from 'react';
import './index.css'

export default class Months extends React.Component{
    render() {

        const {monthsUsers, namesUsers} = this.props;

        const Months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

        const allMonth = Months.map((item, index) => {

            let colorClass;

            switch (true) {
                case monthsUsers[index] <= 2: colorClass = 'gray';
                    break;
                case monthsUsers[index] <= 6:  colorClass = 'blue';
                    break;
                case monthsUsers[index] <= 10:  colorClass = 'green';
                    break;
                case monthsUsers[index] > 10:  colorClass = 'red';
                    break;
                default:  colorClass =  'default';
            }

            return (
                <li className={`${colorClass} month-number${index}`}
                    key={item}
                    data-item={monthsUsers[index]}
                >
                    <span>{item}</span>
                    <ul className="innerList">
                        <li>{namesUsers[index]}</li>
                    </ul>
                </li>
            )
        });

        return (
          <ul className="list">
              {allMonth}
          </ul>
        );
    }
}