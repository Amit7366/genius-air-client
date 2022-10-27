import React, { useEffect } from "react";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://genius-air-school-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h5>All Courses Category : ({courses.length})</h5>
      <ListGroup>
        {
            courses.map(course => <ListGroup.Item key={course.id} className="mb-2"><Link to={`/courses/${course.id}`}>{course.name}</Link></ListGroup.Item>)
        }
        
        
      </ListGroup>
    </div>
  );
};

export default Sidebar;
