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
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            {d.Script}
            <br />
            <span
              style={{
                fontWeight: "bold",
                color: "dodgerblue",
                fontSize: "18px",
              }}
            >
              {d.Price}
            </span>
          </div>
          <div style={{ textAlign: "left" }}>
            <span style={{ color: "#FBB36B", fontWeight: "bold" }}>
              iShares
            </span>
            <br />
            <span style={{ fontSize: "9px" }}>by BlackDox</span> <br />
            <span style={{ fontWeight: "bold" }}>S&P 500 Index</span>
            <br /> <span style={{ fontSize: "12px" }}>US Equity</span>
          </div>
        </div>
      </div>
      <div className="card">
        <li>
          <div>
            <i class="fa fa-hashtag"></i> &nbsp; Quantity
          </div>{" "}
          <b>{quantity}</b>
        </li>
        <li>
          <div>
            <i style={{ fontWeight: "bold" }} class="fa fa-at"></i> &nbsp; Avg.
            Cost
          </div>{" "}
          <b>{d["Avg. Cost"]}</b>
        </li>
        <li>
          <div>
            <i class="fa fa-money"></i> &nbsp; Invested Amt
          </div>{" "}
          <b>{d["Invested Amount"]}</b>
        </li>
      </div>
      <div className="card">
        <div>
          <li>
            <span style={{ fontWeight: "bold" }}>Market Value:</span>
            <span style={{ fontWeight: "bold" }}>${market_value}</span>
          </li>
          <li>
            <span>% of Portfolio Value:</span>
            <span style={{ fontWeight: "bold" }}>
              {d["% of Portfolio Value"]}
            </span>
          </li>
        </div>
        <br />

        <p className="groove">
          <p
            className="line"
            style={{ width: (portfolio_value * 200) / 100 }}
          ></p>
        </p>
      </div>
      <div className="card">
        <div>
          <li>
            <span style={{ fontWeight: "bold" }}>Unrealized P&L:</span>{" "}
            <span style={{ fontWeight: "bold" }}>
              {d["Unrealized P&L"][1] === "-" ? "0" : d["Unrealized P&L"]}
            </span>
          </li>
          <li>
            <span>% Retun:</span>{" "}
            <span>
              {" "}
              {d["% Return"][0] !== "-" ? (
                <>
                  <i class="fa fa-caret-up" style={{ color: "limegreen" }}></i>{" "}
                  <b>{d["% Return"]}</b>
                </>
              ) : (
                <>
                  <i
                    class="fa fa-caret-down"
                    style={{ color: "orangered" }}
                  ></i>{" "}
                  <b>{d["% Return"].slice(1)}</b>
                </>
              )}
            </span>
          </li>
        </div>
        <div
          style={{
            height: "40px",
            position: "relative",
            left: "10px",
            bottom: "-10px",
          }}
        >
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
                background:
                  d["% Return"][0] === "-" ? "orangered" : "limegreen",
                borderRadius:
                  d["% Return"][0] === "-"
                    ? "8px 0px 0px 8px"
                    : "0px 8px 8px 0px",
                width: (percent_return * 200) / 200,
              }}
            ></p>
          </p>
        </div>
      </div>
    </div>
  );
}
