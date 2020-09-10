import Table from "./table";

import {connect} from 'react-redux';
import {addToCart} from "../../store/actions";


const mapStateToProps = (store) => ({
    cart: store.data.cart,
    itemsInCartNumber: store.data.itemsInCartNumber

});

const mapDispatchToProps = {
    addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);