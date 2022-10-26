import React, { useEffect } from "react";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h2>All Courses : ({courses.length})</h2>
      <ListGroup>
        {
            courses.map(course => <ListGroup.Item key={course.id} className="mb-2"><Link>{course.name}</Link></ListGroup.Item>)
        }
        
        
      </ListGroup>
    </div>
  );
};

export default Sidebar;
