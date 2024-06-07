import "./Filters.css";

function Filters(props) {
  return (
    <div>
      <div className="filtre">
        <h1>filter by</h1>
        <div className="checkbox">
          <input type="checkbox" />
          <p
            ONchange={function () {
              props.setactuAltype("science");
            }}
          ></p>
        </div>

        <div className="checkbox">
          <input type="checkbox" />
          <p>literature</p>
        </div>

        <div className="checkbox">
          <input type="checkbox" />
          <p>computer science</p>
        </div>

        <div className="checkbox">
          <input type="checkbox" />
          <p>science fiction</p>
        </div>
      </div>

      <div className="filtre">
        <h2>sort by order</h2>
        <div className="checkbox">
          <input type="checkbox" />
          <p>ascording</p>
        </div>

        <div className="checkbox">
          <input type="checkbox" />
          <p>descerding</p>
        </div>
      </div>
    </div>
  );
}
export default Filters;
