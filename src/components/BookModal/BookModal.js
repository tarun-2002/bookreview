import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'antd';

const BookModal = () => {

  const [isNewProjectModalOpen, setNewProjectModalOpen] = useState(false);
  const showNewProjectModal = () => {
    setNewProjectModalOpen(true);
  };
  return (
    <>
      <Modal
        title="Start a new project"
        open={isNewProjectModalOpen}
        onOk={createNewProject}
        onCancel={handleNewProjectModalCancel}
        width={600}
      >
        <div className="form-field">
          <Input
            placeholder="Enter the name of a project"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Description</label>
          <TextArea
            rows={4}
            placeholder="More details about this project"
            value={projectDescription}
            maxLength={6}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </div>
        {/* <div className="form-field">
          <label>Team (owning the project)</label>
          <Select
          // onChange={handleChange}
          // options={[
          //   { value: 'jack', label: 'Jack' },
          //   { value: 'lucy', label: 'Lucy' },
          //   { value: 'Yiminghe', label: 'yiminghe' },
          //   { value: 'disabled', label: 'Disabled', disabled: true },
          // ]}
          />
        </div> */}
        <div className="form-field">
          <label>Tags</label>
          <Select
            mode="tags"
            // onChange={handleChange}
            tokenSeparators={[","]}
            // options={options}
          />
        </div>
      </Modal>
    </>
  );
};

export default BookModal;
