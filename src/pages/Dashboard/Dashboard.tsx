import { useEffect, useState } from 'react';
import MainDisplay from './MainDisplay';
import Sidebar from './Sidebar';
import {
  PeriodContext,
  TextboxContext,
  BarGraphContext,
  LineChartContext,
  PieChartContext,
} from './Contexts';

interface LineDataItem {
  name: string;
  client: number;
  server: number;
  internal: number;
}

interface BarDataItem {
  name: string;
  duration: number;
}

interface PieDataItem {
  name: string;
  value: number;
}

const Dashboard = () => {
  const [period, setPeriod] = useState('24 hours');
  const [barData, setBarData] = useState<BarDataItem[] | undefined>(undefined);
  const [lineData, setLineData] = useState<LineDataItem[] | undefined>(
    undefined,
  );
  const [pieData, setPieData] = useState<PieDataItem[] | undefined>(undefined);
  const [textboxData, setTextboxData] = useState<[] | null>(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch(<route>);
    //   const data = await response.json();
    //   // Process the fetched data
    // };

    // const fetchData = () => {

    //   let interval:number;
    //   let unit:string;

    //   switch(period){
    //     case '1 hour' :
    //       interval = 1;
    //       unit = 'h';
    //       break;
    //     case '3 hours' :
    //       interval = 3;
    //       unit = 'h';
    //       break;
    //     case '6 hours' :
    //       interval = 6;
    //       unit = 'h';
    //       break;
    //     case '12 hours' :
    //       interval = 12;
    //       unit = 'h';
    //       break;
    //     case '24 hours' :
    //       interval = 24;
    //       unit = 'h';
    //       break;
    //     case '3 days' :
    //       interval = 3;
    //       unit = 'd';
    //       break;
    //     case '7 days' :
    //       interval = 7;
    //       unit = 'd';
    //       break;
    //     case '30 days' :
    //       interval = 30;
    //       unit = 'd';
    //       break;
    //     default:
    //       interval = 24;
    //       unit = 'h';
    //   }

    //   // fetch(/apps/{process.env.API_KEY}/data?interval=${interval}&unit=${unit})
    //   fetch(`/apps/5cc036aa-e9fb-43a0-9ed7-8cafb2feb93d/data?interval=${interval}&unit=${unit}`)
    //   .then(res => res.json())
    //   .then(data => {
    //       console.log('data', data);
    //       // setData(data);
    //   })
    //   .catch(error => console.log('Data fetching failed', error));
    // }

    const lineChartSampleData = [
      {
        name: '00:00',
        client: 4000,
        server: 2400,
        internal: 3000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '01:00',
        client: 3000,
        server: 1398,
        internal: 5000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '02:00',
        client: 2000,
        server: 9800,
        internal: 1000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '03:00',
        client: 2780,
        server: 3908,
        internal: 4000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '04:00',
        client: 1890,
        server: 4800,
        internal: 3000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '05:00',
        client: 2390,
        server: 3800,
        internal: 1000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '06:00',
        client: 3490,
        server: 4300,
        internal: 3000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '07:00',
        client: 4000,
        server: 2400,
        internal: 6000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '08:00',
        client: 3000,
        server: 1398,
        internal: 7000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '09:00',
        client: 2000,
        server: 9800,
        internal: 3000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '10:00',
        client: 2780,
        server: 3908,
        internal: 3000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '11:00',
        client: 1890,
        server: 4800,
        internal: 5000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '12:00',
        client: 2390,
        server: 3800,
        internal: 3000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '13:00',
        client: 3490,
        server: 4300,
        internal: 3000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '14:00',
        client: 4000,
        server: 2400,
        internal: 1000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '15:00',
        client: 3000,
        server: 1398,
        internal: 3000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '16:00',
        client: 2000,
        server: 9800,
        internal: 2000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '17:00',
        client: 2780,
        server: 3908,
        internal: 3000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '18:00',
        client: 1890,
        server: 4800,
        internal: 5000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '19:00',
        client: 2390,
        server: 3800,
        internal: 4000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '20:00',
        client: 3490,
        server: 4300,
        internal: 3000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '21:00',
        client: 3490,
        server: 4300,
        internal: 3000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '22:00',
        client: 3490,
        server: 4300,
        internal: 8000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '23:00',
        client: 3490,
        server: 4300,
        internal: 3000,
        consumer: 0,
        producer: 0,
      },
      {
        name: '24:00',
        client: 3490,
        server: 4300,
        internal: 3000,
        consumer: 0,
        producer: 0,
      },
    ];

    const barGraphSampleData = [
      {
        name: 'Page A',
        duration: 4000,
      },
      {
        name: 'Page B',
        duration: 3000,
      },
      {
        name: 'Page C',
        duration: 2780,
      },
      {
        name: 'Page D',
        duration: 2000,
      },
      {
        name: 'Page E',
        duration: 1890,
      },
    ];

    const pieChartSampleData = [
      { name: 'Server', value: 200 },
      { name: 'Internal', value: 200 },
      { name: 'Client', value: 200 },
    ];

    setLineData(lineChartSampleData);
    setBarData(barGraphSampleData);
    setPieData(pieChartSampleData);
  }, []);

  return (
    <PeriodContext.Provider value={period}>
      <BarGraphContext.Provider value={barData}>
        <LineChartContext.Provider value={lineData}>
          <PieChartContext.Provider value={pieData}>
            <div className='flex h-screen w-screen flex-row bg-neutral-200'>
              <Sidebar />
              <div className='flex-1'>
                <MainDisplay />
              </div>
            </div>
          </PieChartContext.Provider>
        </LineChartContext.Provider>
      </BarGraphContext.Provider>
    </PeriodContext.Provider>
  );
};

export default Dashboard;
