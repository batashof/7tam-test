import React from 'react';
import './table.scss';


const Table = (props) => {
    const {header, data = [], className, width = "100%", heightTh = "33px", heightTd = "43px", addToCart} = props;

    const addItemToCart = (item) => {
        addToCart(item);
    };
    return (
        <table className={`table ${className}`}>
            {header ? <thead>
            <tr style={{width: width, height: heightTh}} className="table__head-row">
                {header.map((item, id) => (
                    <th id={id} className="text">{item}</th>
                ))}
            </tr>
            </thead> : null}

            <tbody>
            {data.map((row, id) => (
                    <tr id={id} onClick={() => addItemToCart(row)} style={{width: width, height: heightTd}}
                        className="table__body-row">
                        {(typeof row) === "object" ? Object.values(row).map((item, id) => (
                            <td id={id} className="text">{item}</td>
                        )) : <td className="text">{row}</td>}
                    </tr>
                )
            )}
            </tbody>


        </table>
    )
};


export default Table;