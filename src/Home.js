import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./redux/action";
import Panels from "./Panels";
import "./Home.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.csvData);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (!loading && !error && data.length > 0) {
    let values = data.map((d) =>
      parseFloat(
        d["% of Portfolio Value"].slice(0, d["% of Portfolio Value"].length - 1)
      )
    );

    let MF = values.slice(0, 4).reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    let ETF = values.slice(4).reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    console.log(values);

    const options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Portfolio",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
        },
      },
      series: [
        {
          data: [
            {
              name: "MFs",
              y: MF,
            },
            {
              name: "ETFs",
              y: ETF,
            },
          ],
        },
      ],
    };

    return (
      <div>
        <h1>I Darts</h1>
        <div style={{ display: "flex" }}>
          <div>
            {data &&
              data.map((d) => (
                <>
                  <Panels key={d.Script} d={d} />
                </>
              ))}
          </div>
          <HighchartsReact
            containerProps={{
              style: {
                width: "300px",
                height: "300px",
                marginLeft: "auto",
                marginRight: "auto",
                verticalAlign: "middle",
              },
            }}
            highcharts={Highcharts}
            options={options}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {loading && <p>Loading ...</p>}
      {data.length == 0 && !loading && <p>No data. Sorry!</p>}
      {error && !loading && <p>{error}</p>}
    </>
  );
};

export default Home;
