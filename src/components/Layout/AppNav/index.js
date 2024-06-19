import React from "react";
import { connect } from "react-redux";
import MetisMenu from "react-metismenu";
import { setEnableMobileMenu } from "../../../redux/reducers/ThemeOptions";
import {
  AdminNav, CSRNav
} from "./NavItems";
import withRouter from "../../../hooks/withRouter";

function Nav(props) {
  const { enableMobileMenu, setEnableMobileMenu } = props;

  const toggleMobileSidebar = () => {
    setEnableMobileMenu(!enableMobileMenu);
  };

  return (
    <>
      {/* <h5 className="app-sidebar__heading"></h5> */}
      <MetisMenu
        content={AdminNav}
        onSelected={toggleMobileSidebar}
        activeLinkFromLocation
        className="vertical-nav-menu"
        iconNamePrefix=""
        classNameStateIcon="pe-7s-angle-down"
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));