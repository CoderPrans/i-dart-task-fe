import "./Home.css";

export default function Panels({ d }) {
  let price = parseInt(d.Price.slice(1));
  let quantity = parseInt(d.Quantity);
  let market_value = price * quantity;

  let portfolio_value = parseFloat(
    d["% of Portfolio Value"].slice(0, d["% of Portfolio Value"].length - 1)
  );
  let percent_return = Math.abs(
    parseInt(d["% Return"].slice(0, d["% Return"].length - 1))
  );

  return (
    <div className="list">
      <div className="card">
        {d.Script}
        <br />
        {d.Price}
      </div>
      <div className="card">
        <li>
          <div>Quantity</div> <div>{quantity}</div>
        </li>
        <li>
          <div>Avg. Cost</div> <div>{d["Avg. Cost"]}</div>
        </li>
        <li>
          <div>Invested Amt</div> <div>{d["Invested Amount"]}</div>
        </li>
      </div>
      <div className="card">
        <li>
          <span>Market Value:</span> <span>{market_value}</span>
        </li>
        <li>
          <span>% of Portfolio Value:</span>
          <span>{d["% of Portfolio Value"]}</span>
        </li>
        <br />

        <p className="groove">
          <p
            className="line"
            style={{ width: (portfolio_value * 200) / 100 }}
          ></p>
        </p>
      </div>
      <div className="card">
        <li>
          <span>Unrealized P&L:</span>{" "}
          <span>
            {d["Unrealized P&L"][1] === "-" ? "0" : d["Unrealized P&L"]}
          </span>
        </li>
        <li>
          <span>% Retun:</span> <span>{d["% Return"]}</span>
        </li>

        <p className="groove return" style={{ position: "absolute" }}>
          <p
            className="line"
            style={{
              position: "relative",
              top: "50%",
              left: "50%",
              transform:
                d["% Return"][0] === "-"
                  ? "translate(-100%, -50%)"
                  : "translate(0%, -50%)",
              background: d["% Return"][0] === "-" ? "orangered" : "limegreen",
              width: (percent_return * 200) / 200,
            }}
          ></p>
        </p>
      </div>
    </div>
  );
}
