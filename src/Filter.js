import React, { Fragment } from "react";

const Filter = (props) => {
  const { count, getSort, getSize, size, sort } = props;
  return (
    <Fragment>
      <div className="col-9 d-flex filter">
        <div className="col-4">
          <div className="filer-result">{count} products</div>
        </div>
        <div className="col-4">
          <div className="filter-sort">
            sort
            <select
              name=""
              id=""
              value={sort}
              className=""
              onChange={(e) => getSort(e.target.value)}
            >
              <option value="lastes">lastes</option>
              <option value="lowest">lowest</option>
              <option value="highest">highest</option>
            </select>
          </div>
        </div>
        <div className="col-4">
          <div className="filter-size">
            filter
            <select
              name=""
              id=""
              value={size}
              onChange={(e) => getSize(e.target.value)}
            >
              <option value="" disabled>
                size
              </option>
              <option value="ALL">ALL</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Filter;
