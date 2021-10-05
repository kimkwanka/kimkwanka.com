/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import styles from './WorkModal.module.scss';

const WorkModal = ({
  title, answers, img, setIsModalOpen, isModalOpen,
}) => (
  <div
    className={
      isModalOpen
        ? `${styles.WorkModal__container} ${styles['WorkModal__container--visible']}`
        : `${styles.WorkModal__container}`
    }
    onClick={(e) => {
      e.preventDefault();
      if (e.target === e.currentTarget) {
        setIsModalOpen(false);
      }
    }}
  >
    <div className={`${styles.WorkModal}`}>
      <div className={`${styles.WorkModal__header}`}>
        <h2 className={`${styles.WorkModal__title} gradient--secondary`}>{title}</h2>
        <img className={`${styles.WorkModal__img}`} src={img} alt={title} />
        <button
          type="button"
          className={`${styles['WorkModal__close-button']}`}
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(false);
          }}
        >
          X
        </button>
      </div>
      <div className={`${styles.WorkModal__content}`}>
        <h2 className="gradient">
          What decisions did you take and why? What were the consequences?
        </h2>
        {answers && answers[0]}
        <h2 className="gradient">
          If you could, what would you do differently?
        </h2>
        {answers && answers[1]}
        <h2 className="gradient">
          What lessons did you learn during this project?
        </h2>
        {answers && answers[2]}
      </div>
    </div>
  </div>
);

export default React.memo(WorkModal);
