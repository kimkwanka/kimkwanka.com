import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = ({ isLoading }: { isLoading: boolean }) => {
  return isLoading ? <div className={styles.LoadingSpinner} /> : null;
};

export default LoadingSpinner;
