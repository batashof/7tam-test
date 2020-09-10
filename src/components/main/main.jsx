import React, {useEffect} from 'react';
import './main.scss';
import Box from "../box";
import Table from "../table";
import logo from "./../../assets/images/14.png"


const Main = ({getData, data, addToCart}) => {
    const header = ["", "", "Release", "Manufacturer", "Model", "Hash", "Algorithm", "Efficiency", "Profit", "Price"];
    useEffect(() => {
        getData();
    }, [getData]);
    const addItemToCart = (item) => {
        addToCart(item);
    };

    return (
        <>
            <div className="main">
                <div className="main__block_left">
                    <h1 className="title">SORT BY</h1>
                    <Box className="main__box">
                        <span className="text">By Manufacturer</span>
                    </Box>
                    <Box className="main__box">
                        <span className="text">Minimum price</span>
                    </Box>
                    <Box className="main__box">
                        <span className="text">Maximum price</span>
                    </Box>
                </div>
                <div className="main__block_center">
                    <h1 className="title">ON SALE</h1>
                    <Table data={data} header={header}/>
                </div>
                <div className="main__block_right">
                    <h1 className="title">NEWS</h1>
                    <div className="main__banner"/>
                </div>


            </div>
            <div className="main-mobile">
                {data.map((row, id) => (
                    <Box id={id} className="main-mobile__box">
                        <div className="main-mobile__box-container">
                            <div className="text main-mobile__box-header">
                                <div style={{maxWidth: "30%"}}>
                                    {row.manufactured} {row.model} {row.hash}
                                </div>
                                <div onClick={() => addItemToCart(row)}>{row.star}</div>
                            </div>

                            <div className="main-mobile__box-image">
                                <img alt="logo" width="50%" src={logo}/>
                            </div>
                            <div className="title main-mobile__box-price">
                                {row.price}
                            </div>
                        </div>

                    </Box>
                ))

                }
            </div>
        </>
    )
};

export default Main;