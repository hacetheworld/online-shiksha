import React from "react";
import "./Sidebar.style.scss";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { connect } from "react-redux";
import { playCurrentVideo } from "../../../redux/actions/course.action";

function Sidebar(props) {
  const course = props.current_course;
  const { playCurrentVideo } = props;
  return (
    <div className="sidebar">
      <ProSidebar width={"70%"} className="sidebar-prosidebar">
        <Menu iconShape="square">
          <MenuItem
            className="bold"
            style={{ fontSize: "18px", fontWeight: 700 }}
          >
            {course.courseName}
          </MenuItem>
          {course.content.map((course_content, id) => {
            return (
              <SubMenu key={id} title={course_content.sectionName}>
                {course_content.videosContent.map((course_video, new_key) => {
                  return (
                    <MenuItem
                      key={new_key}
                      onClick={() => {
                        playCurrentVideo({
                          title: course_video.title,
                          url: course_video.videoUrl,
                        });
                      }}
                    >
                      <i className="fa fa-play-circle-o"></i>{" "}
                      {course_video.title}
                    </MenuItem>
                  );
                })}
              </SubMenu>
            );
          })}
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default connect(null, { playCurrentVideo })(Sidebar);
