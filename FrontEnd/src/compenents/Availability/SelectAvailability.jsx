import React, { useState } from 'react';
import EditDialog from './EditDialog';

const SelectAvailability = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeRange, setSelectedTimeRange] = useState({
    startTime: '',
    endTime: '',
  });
  const [tableData, setTableData] = useState([]);
  const [editDialogVisible, setEditDialogVisible] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleTimeRangeSelection = (field, value) => {
    setSelectedTimeRange((prevRange) => ({
      ...prevRange,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Validate if date and time are selected
    if (selectedDate && selectedTimeRange.startTime && selectedTimeRange.endTime) {
      const newTableRow = {
        date: selectedDate,
        startTime: selectedTimeRange.startTime,
        endTime: selectedTimeRange.endTime,
      };

      // Update the table data
      setTableData((prevData) => [...prevData, newTableRow]);

      // Reset form fields
      setSelectedDate('');
      setSelectedTimeRange({ startTime: '', endTime: '' });
    } else {
      // Handle validation error or show a message
      console.error('Please select date and time.');
    }
  };

  const handleCancel = () => {
    setSelectedDate('');
    setSelectedTimeRange({ startTime: '', endTime: '' });
  };
  const handleEdit = (rowData) => {
    setEditingRow(rowData);
    setEditDialogVisible(true);
  };

  const handleUpdate = (updatedData) => {
    const updatedTableData = [...tableData];
    const rowIndex = tableData.findIndex((row) => row === editingRow);
    updatedTableData[rowIndex] = updatedData;
    setTableData(updatedTableData);
    setEditDialogVisible(false);
  };
  const handleDelete = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };
  return (
    <div className="selectavailability-container white-box">
      <div className="title text-center">
        <p>Select Availability</p>
      </div>
      <div className="content selectavailability-content">
        <div className="form-container">
          <div className="form-group">
            <label>Select Date:</label>
            <input type="date" value={selectedDate} onChange={(e) => handleDateSelection(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Available From:</label>
            <input type="time" value={selectedTimeRange.startTime} onChange={(e) => handleTimeRangeSelection('startTime', e.target.value)} />
          </div>
          <div className="form-group">
            <label>Available To:</label>
            <input type="time" value={selectedTimeRange.endTime} onChange={(e) => handleTimeRangeSelection('endTime', e.target.value)} />
          </div>
          <div className="button-container">
            <button className="btn-primary" onClick={handleSubmit}>Submit</button>
            <button className="btn-primary" onClick={handleCancel}> Cancel</button>
          </div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Available From</th>
                <th>Available To</th>
                <th>Edit Availability</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.date}</td>
                  <td>{row.startTime}</td>
                  <td>{row.endTime}</td>
                  <td>
                  <button className="btn-primary" onClick={() => handleEdit(row)}>Edit</button>
                  <span className="button-space" />
                  <button className="btn-primary" onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Edit Dialog */}
        <EditDialog
          className="edit-dialog"
          isOpen={editDialogVisible}
          rowData={editingRow}
          onClose={() => setEditDialogVisible(false)}
          onUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};

export default SelectAvailability;