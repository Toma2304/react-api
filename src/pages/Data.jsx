import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Data(props) {
  let cont = "";
  const [constructorData, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://raw.githubusercontent.com/GeoPostcodes/technical-test/main/front-end/data/countries.json"
        );
        const constructors = result.data;
        setData(constructors);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="data">
      <div className="first">
        <div className="set">
          <div className="link-part">
            <h1 className="title">Data Explorer</h1>
            <p className="text">
              Index <span>of Countries</span>
            </p>
          </div>
          <div className="countries">
            {constructorData.map((constructor, index) => {
              if (cont !== constructor.continentCode) {
                cont = constructor.continentCode;
                return (
                  <div className="continent-box" key={index}>
                    <p className="continent">{constructor.continent}</p>
                    <div className="line"></div>
                    <div className="list">
                      {constructorData.map((country, index) => {
                        if (country.continentCode === cont) {
                          return (
                            <Link to={`/Data/${country.url}`}>
                              <p key={index} className="country">
                                {country.name}
                              </p>
                            </Link>
                          );
                        }
                      })}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="facts">
          <input
            type="text"
            placeholder="Search by podcast, locality or region"
          />
          <ul className="list">
            <li className="set">
              <span>Dataset</span> content
            </li>
            <li className="item">
              <p className="text">Countries</p>
              <p className="text">193</p>
            </li>
            <li className="item">
              <p className="text">Administrative regions</p>
              <p className="text">284 628</p>
            </li>
            <li className="item">
              <p className="text">Streets</p>
              <p className="text">34 404 491</p>
            </li>
            <li className="item">
              <p className="text">Businesses & admin</p>
              <p className="text">1 721 216</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="second"></div>
    </section>
  );
}
