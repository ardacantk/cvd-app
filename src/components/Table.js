import React from 'react';
import { useSelector } from "react-redux"

function Table() {
  const items = useSelector(state => state.covid.items)

  console.log(items);
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-5 p-5">
        <div class="col">
          <div className="card text-bg-primary mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header"><strong>Infected</strong></div>
            <div className="card-body">
              <strong>0</strong>
              <h3>Last Updated at:</h3>
              <p>Fri Sep 17 2021</p>
              <p>Number of active cases of COVID-19</p>
              <h3>US</h3>
            </div>
          </div>
        </div>

        <div class="col">
          <div className="card text-bg-success mb-3" style={{ maxWidth: "18rem" }}>

            <div className="card-header"><strong>Recovered</strong></div>
            <div className="card-body">
              <strong>0</strong>
              <h3>Last Updated at:</h3>
              <p>Fri Sep 17 2021</p>
              <p>Number of active cases of COVID-19</p>
              <h3>US</h3>
            </div>
          </div>
        </div>

        <div class="col">
          <div className="card text-bg-danger mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header"><strong>Deaths</strong></div>
            <div className="card-body">
              <strong>0</strong>
              <h3>Last Updated at:</h3>
              <p>Fri Sep 17 2021</p>
              <p>Number of active cases of COVID-19</p>
              <h3>US</h3>
            </div>
          </div>
        </div>

        <div class="col">
          <div className="card text-bg-warning mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header"><strong>Active</strong></div>
            <div className="card-body">
              <strong>0</strong>
              <h3>Last Updated at:</h3>
              <p>Fri Sep 17 2021</p>
              <p>Number of active cases of COVID-19</p>
              <h3>US</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
