import React from "react";
import PropTypes from "prop-types";

const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) => {
  return (
    <tr>
      {isHeader ? (
        textSecondCell === null ? (
          <th colspan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

CourseListRow.PropTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.string
}

export default CourseListRow;
