import React, { useState, useEffect } from "react";
import {
  Alert,
  Button,
  Col,
  Input,
  Modal,
  Row,
  Select,
  Table,
  Tag,
  Typography,
  Tabs,
  Upload
} from "antd";
import {
UploadOutlined
} from "@ant-design/icons";
import "./Categories.css"
const { TextArea } = Input;
const Categories = () => {
  const [isNewProjectModalOpen, setNewProjectModalOpen] = useState(false);
  const showNewProjectModal = () => {
    setNewProjectModalOpen(true);
  };

  const [projectTitle, setProjectTitle] = useState("");
  const [projectAuthor, setProjectAuthor] = useState("");
  const [projectBookId, setProjectBookId] = useState("");
  const [projectYear, setProjectYear] = useState("");
  const [projectCourse, setProjectCourse] = useState("");
  const [projectCollegeYear, setProjectCollegeYear] = useState("");
  const [projectSubject, setProjectSubject] = useState("");
  const [projectLanguage, setProjectLanguage] = useState("");
  const [projectPublisher, setProjectPublisher] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const handleNewProjectModalCancel = () => {
    setNewProjectModalOpen(false);
  };
  return (
    <>
    <div className='card-wrapper'>
      <div class="container-card">
        <img style={{width:"10vw",paddingBottom:"15px"}} src="./images/book.svg"></img>
    <h2 class="title">Add a Book</h2>
    <p class="description">You can add a new Book to the Database but only with admin access.</p>
    <a class="subscribe-button" onClick={showNewProjectModal}>ADD</a>
  </div>
  <div class="container-card">
        <img style={{width:"10vw",paddingBottom:"15px"}} src="./images/commitee.svg"></img>
    <h2 class="title">Reviewer</h2>
    <p class="description">Reviewers can review books but one book is only allowed to be reviewed thrice.</p>
    <a class="subscribe-button" href="/user-review">REVIEW</a>
  </div>
  <div class="container-card">
        <img style={{width:"10vw",paddingBottom:"15px"}} src="./images/comittee-review.svg"></img>
    <h2 class="title">Committee</h2>
    <p class="description">Platform where Committee will review books as per thier Assessment Scale.</p>
    <a class="subscribe-button" href="/committee-review">REVIEW</a>
  </div>
  <div class="container-card">
        <img style={{width:"10vw",paddingBottom:"15px"}} src="./images/view-book.svg"></img>
    <h2 class="title">View Books</h2>
    <p class="description">Enter to visit a world Books. Books are categorized according to the subjects.</p>
    <a class="subscribe-button" href="/view-book">View</a>
  </div>
  </div>
  <Modal
        title="Book Details"
        open={isNewProjectModalOpen}
        onCancel={handleNewProjectModalCancel}
        width={600}
      >
        <div className="form-field">
          <Input style={{marginBottom:"10px"}}
            placeholder="Enter the name of a Book"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
          />
                    <Input style={{marginBottom:"10px"}}
            placeholder="Author"
            value={projectAuthor}
            onChange={(e) => setProjectAuthor(e.target.value)}
          />
                              <Input style={{marginBottom:"10px"}}
            placeholder="Publisher"
            value={projectPublisher}
            onChange={(e) => setProjectPublisher(e.target.value)}
          />
          <Input style={{marginBottom:"10px"}}
            placeholder="Book ID"
            value={projectBookId}
            onChange={(e) => setProjectBookId(e.target.value)}
          />
                    <Input style={{marginBottom:"10px"}}
            placeholder="Year of Publishing"
            value={projectYear}
            onChange={(e) => setProjectYear(e.target.value)}
          />
          <Input style={{marginBottom:"10px"}}
            placeholder="Course"
            value={projectCourse}
            onChange={(e) => setProjectCourse(e.target.value)}
          />
          <Input style={{marginBottom:"10px"}}
            placeholder="Enter the Year for which the book is for. (Eg:- 1st,2nd,3rd)"
            value={projectCollegeYear}
            onChange={(e) => setProjectCollegeYear(e.target.value)}
          />
                    <Input style={{marginBottom:"10px"}}
            placeholder="Subject"
            value={projectSubject}
            onChange={(e) => setProjectSubject(e.target.value)}
          />
                              <Input style={{marginBottom:"10px"}}
            placeholder="Language"
            value={projectLanguage}
            onChange={(e) => setProjectLanguage(e.target.value)}
          />
          <label>Upload the Cover Photo of the Book.</label>
                  <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
        </div>
        <div className="form-field">

        </div>
      </Modal>
    </>
  )
}

export default Categories
