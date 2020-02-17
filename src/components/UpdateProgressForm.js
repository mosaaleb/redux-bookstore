import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateBookProgress } from '../actions/bookActions';

const UpdateProgressForm = ({
  id,
  progress,
  updateBookProgress,
  setIsUpdateProgressHidden
}) => {
  const [progressValue, setProgressValue] = useState(progress);
  const handleProgressUpdate = (e) => {
    e.preventDefault();
    updateBookProgress(id, progressValue);
    setIsUpdateProgressHidden(true);
  };

  return (
    <form onSubmit={handleProgressUpdate} className="flex flex-col w-2/3">
      <input
        type="range"
        min="0"
        max="100"
        value={progressValue}
        onChange={(e) => setProgressValue(e.target.value)}
        className="rounded-lg overflow-hidden appearance-none h-3 bg-gray-400 focus:outline-none mb-3"
      />
      <div className="flex justify-between">
        <button
          type="submit"
          className="text-gray-100 p-1 rounded focus:outline-none bg-blue-600"
        >
          Update
        </button>
        <button
          type="submit"
          onClick={() => setIsUpdateProgressHidden(true)}
          className="text-gray-100 p-1 rounded focus:outline-none bg-red-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

UpdateProgressForm.propTypes = {
  id: PropTypes.number.isRequired,
  progress: PropTypes.string.isRequired,
  updateBookProgress: PropTypes.func.isRequired,
  setIsUpdateProgressHidden: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  updateBookProgress: (id, progress) => {
    dispatch(updateBookProgress(id, progress));
  }
});

export default connect(null, mapDispatchToProps)(UpdateProgressForm);
