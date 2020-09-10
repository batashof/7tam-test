import Main from "./main";
import {getData} from "../../api/data";
import {connect} from 'react-redux';
import {addToCart} from "../../store/actions";


const mapStateToProps = (store) => ({
    data: store.data.data,

});

const mapDispatchToProps = {
    getData,
    addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);