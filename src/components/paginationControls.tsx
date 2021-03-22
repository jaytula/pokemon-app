import React from "react";

interface Props {
  onPrevHandler: React.MouseEventHandler<HTMLButtonElement>;
  onNextHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const paginationControls: React.FC<Props> = ({
  onNextHandler,
  onPrevHandler,
}) => {
  return (
    <div>
      <button onClick={onPrevHandler}>Prev</button>
      <button onClick={onNextHandler}>Next</button>
    </div>
  );
};

export default paginationControls;
