import Textbox from './Texbox';
import PieChart from './PieChart';
import BarGraph from './BarGraph';
import LineChart from './LineChart';

const GraphDisplay = () => {
  return (
    <div>
      <h1>GraphDisplay</h1>
      <Textbox />
      <PieChart />
      <BarGraph />
      <LineChart />
    </div>
  );
};

export default GraphDisplay;
