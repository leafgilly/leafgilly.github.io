import { Outlet, Link } from "react-router-dom";

import {connect} from 'react-redux';

const DocList = (props) => {

  return (
    <>
    <div class='document'>
    <ul>
      <li>
      <Link to={props.AmandaVisited===1 && props.MorganVisited===1 && props.RitaVisited===1 && props.SallyVisited===1 ? "/theAgent" : "#"} class={props.AmandaVisited===1 && props.MorganVisited===1 && props.RitaVisited===1 && props.SallyVisited===1 ? 'main-link-b' : 'disabled-link'}>Agent Paperback Writer</Link>
      </li>
      <li>
      <Link to={props.AmandaVisited===0 ? "/Amanda" : "#"} class={props.AmandaVisited===0 ? 'main-link-a' : 'disabled-link'}>{props.AmandaName}</Link>
      </li>
      <li>
      <Link to={props.MorganVisited===0 ? "/Morgan" : "#"} class={props.MorganVisited===0 ? 'main-link-m' : 'disabled-link'}>{props.MorganName}</Link>
      </li>
      <li>
      <Link to={props.RitaVisited===0 ? "/Rita" : "#"} class={props.RitaVisited===0 ? 'main-link-r' : 'disabled-link'}>{props.RitaName}</Link>
      </li>
      <li>
      <Link to={props.SallyVisited===0 ? "/Sally" : "#"} class={props.SallyVisited===0 ? 'main-link-s' : 'disabled-link'}>{props.SallyName}</Link>
      </li>
      <li>
        <Link to="/misc">Misc</Link>
      </li>
      <li>
      <Link to={"/theAgent"}>"Brienne Test"</Link>
      </li>
    </ul>
      <Outlet />
      </div>
    </>
  )
};

export default connect(function mapStateToProps(state){
  return {
      MorganVisited: state.MorganVisited,
      AmandaVisited: state.AmandaVisited,
      RitaVisited: state.RitaVisited,
      SallyVisited: state.SallyVisited,
      MorganName: state.MorganName,
      AmandaName: state.AmandaName,
      RitaName: state.RitaName,
      SallyName: state.SallyName,
  };
})(DocList)
