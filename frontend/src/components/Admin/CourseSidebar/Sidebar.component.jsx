import React from "react";
import "./Sidebar.style.scss";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

// import { Link } from "react-router-dom";
// import {
//   UncontrolledCollapse,
//   NavbarBrand,
//   Navbar,
//   NavItem,
//   NavLink,
//   Nav,
//   Container,
//   Row,
//   Col,
// } from "reactstrap";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ProSidebar width={"70%"} className="sidebar-prosidebar">
        <Menu iconShape="square">
          <MenuItem
            className="bold"
            style={{ fontSize: "18px", fontWeight: 700 }}
          >
            Course Title Here
          </MenuItem>
          <SubMenu title="Data Structure Basics">
            <MenuItem>
              <i className="fa fa-play-circle-o"></i> Video One{" "}
            </MenuItem>
            <MenuItem>
              <i className="fa fa-play-circle-o"></i> Video Two{" "}
            </MenuItem>{" "}
          </SubMenu>
          <SubMenu title="Data Structure Medium">
            <MenuItem>
              <i className="fa fa-play-circle-o"></i> Video One{" "}
            </MenuItem>
            <MenuItem>
              <i className="fa fa-play-circle-o"></i> Video Two{" "}
            </MenuItem>{" "}
          </SubMenu>
          <SubMenu title="Data Structure Advanced">
            <MenuItem>
              <i className="fa fa-play-circle-o"></i> Video One{" "}
            </MenuItem>
            <MenuItem>
              <i className="fa fa-play-circle-o"></i> Video Two{" "}
            </MenuItem>{" "}
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
}
