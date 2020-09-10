import Header from "./header";

import {connect} from 'react-redux';


const mapStateToProps = (store) => ({
    itemsInCartNumber: store.data.itemsInCartNumber

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);