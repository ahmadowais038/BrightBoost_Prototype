import React, { useState, useEffect } from 'react';

const EditDialog = ({ rowData, isOpen, onClose, onUpdate }) => {
  const [editDate, setEditDate] = useState('');
  const [editStartTime, setEditStartTime] = useState('');
  const [editEndTime, setEditEndTime] = useState('');

  useEffect(() => {
    if (rowData) {
      setEditDate(rowData.date);
      setEditStartTime(rowData.startTime);
      setEditEndTime(rowData.endTime);
    }
  }, [rowData]);

  const handleUpdate = () => {
    if (editDate && editStartTime && editEndTime) {
      onUpdate({ date: editDate, startTime: editStartTime, endTime: editEndTime });
      onClose();
    } else {
      console.error('Please select date and time.');
    }
  };

  return (
    <div className="edit-dialog" style={{ display: isOpen ? 'block' : 'none' }}>
    <h3 className="edit-dialog-header">Edit Availability</h3>
      <div className="form-group">
        <label>Select Date:</label>
        <input type="date" value={editDate} onChange={(e) => setEditDate(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Available From:</label>
        <input type="time" value={editStartTime} onChange={(e) => setEditStartTime(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Available To:</label>
        <input type="time" value={editEndTime} onChange={(e) => setEditEndTime(e.target.value)} />
      </div>
      <div className="button-container">
        <button className="btn-primary" onClick={handleUpdate}>Update</button>
        <button className="btn-primary" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditDialog;