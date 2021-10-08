import './LoadingSpinner.scss';

const LoadingSpinner = ({ isLoading }) => (isLoading ? <div className="loading-spinner" /> : null);

export default LoadingSpinner;
