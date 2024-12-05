import ProgressBar from "@ramonak/react-progress-bar";

const Progress = ({ completed, color, height }) => {
  return (
    <ProgressBar
      completed={completed} 
      height={height || "20px"}
      bgcolor={color || "#4A90E2"} 
      isLabelVisible={false} 
      labelAlignment="center" 
      transitionDuration="1s" 
      borderRadius="10px" 
    />
  );
};

export default Progress;
