import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions} from '../../../redux/orderRedux';
import {setOrderOption} from '../../../redux/orderRedux';


const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = (dispatch) => ({
  setOrderOption: payload => dispatch(setOrderOption(payload)),
});




export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);