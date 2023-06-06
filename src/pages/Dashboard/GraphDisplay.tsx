import Textbox from './Texbox';
import PieChart from './PieChart';
import BarGraph from './BarGraph';
import LineChart from './LineChart';

const GraphDisplay = () => {
  return (
    <div>
      <Textbox />
      <PieChart />
      <BarGraph />
      <LineChart />
    </div>
  );
};

export default GraphDisplay;
