/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import './WorkModal.scss';

const WorkModal = ({
  title, answers, img, setIsModalOpen,
}) => (
  <div
    className="work-modal__outside"
    onClick={(e) => {
      e.preventDefault();
      setIsModalOpen(false);
    }}
  >
    <div className="work-modal">
      <div className="work-modal__header">
        <h2 className="work-modal__title gradient--secondary">{title}</h2>
        <img className="work-modal__img" src={img} alt={title} />
        <button
          type="button"
          className="work-modal__close-button"
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(false);
          }}
        >
          X
        </button>
      </div>
      <div className="work-modal__content">
        <h2 className="gradient">
          What was your role for this project and what tasks did you face?
        </h2>
        {answers[0]}
        <h2 className="gradient">
          What decisions did you take and why? What were the consequences?
        </h2>
        {answers[1]}
        <h2 className="gradient">
          If you could, what would you do differently?
        </h2>
        {answers[2]}
        <h2 className="gradient">
          What lessons did you learn during this project?
        </h2>
        {answers[3]}
      </div>
    </div>
  </div>
);

export default React.memo(WorkModal);
