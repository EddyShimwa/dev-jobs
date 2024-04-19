import React, { useState, useEffect } from "react";
import data from "../../../data.json";
import Button from "../Button";
import { useData } from "../../context/DataContext";
import { useClickAway } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

function Main() {
  const {
    searchTitle,
    detailedSeach,
    setDetailedSearch,
    isFullTime,
    location,
    setLocation,
    setIsFullTime
  } = useData();




  const [pagination, setPagination] = useState(12);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dev-jobs-backend.onrender.com/api/jobs')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  console.log(data);

  const ref = useClickAway(() => {
    setDetailedSearch(false);
  });

  const filteredData = data.filter((item) => {
    return (
      (!isFullTime || item.contract.toLowerCase() === "full time") &&
      (!searchTitle ||
        item.position.toLowerCase().includes(searchTitle.toLowerCase())) &&
      (!location ||
        item.location.toLowerCase().includes(location.toLowerCase()))
    );
  });
  //Pagination
  const paginationData = data.filter((item, idx) => {
    return idx < pagination;
  });

  return (
    <main className="bg-light-grey dark:bg-midnight min-h-screen ">
      <div className=" pb-[56px] md:pb-[104px] relative">
        {/* Cards */}
        <div className="flex flex-col gap-[49px] pt-[97px] px-6 md:flex-wrap md:flex-row md:justify-center md:container md:mx-auto  ">
          {/* Card */}
          {(searchTitle 
          
          // || isFullTime
          // || location
            ? filteredData
            : paginationData
          ).map((card) => (
            <Link
              className="bg-white dark:bg-dark-blue  flex flex-col gap-4 px-8 pb-9  flex-1 max-w-[350px] min-w-[327px] "
              key={card.id}
              to={`${card.id}`}
            >
              <div
                className={`w-[50px] h-[50px] inline-flex justify-center items-center -mt-[25px] rounded-[16px] overflow-hidden `}
                style={{ background: card.logoBackground }}
              >
                <img src={card.logo} alt={`${card.company} logo`} />
              </div>
              <div className="mt-2 flex items-center gap-3">
              <p className="custom-text text-dark-gray">{new Date(card.postedAt).toISOString().split('T')[0]}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#6E8098" />
                </svg>
                <p className="custom-text text-dark-gray">{card.contract}</p>
              </div>
              <h2 className="heading-3">{card.position}</h2>
              <p className="custom-text text-dark-gray">{card.company}</p>
              <h4 className="mt-7 text-violet text-sm  font-bold">
                {card.location}
              </h4>
            </Link>
          ))}
        </div>

        {pagination < 15 && !searchTitle && (
          <div className="w-full flex justify-center mt-14">
            <Button
              variant="primary"
              onClick={() => setPagination(pagination + 5)}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
      {/* Detailed Search */}

      {detailedSeach && (
        <div
          ref={ref}
          className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white w-[327px] rounded-md dark:bg-dark-blue z-50 "
        >
          <div className="flex h-full gap-4 w-full   px-6 pt-6 mb-6">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="24"
                viewBox="0 0 17 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.44772 0C10.6804 0 12.7797 0.870546 14.3585 2.45105C17.2803 5.37556 17.6434 10.8781 15.1348 14.2255L8.44772 23.894L1.75059 14.2119C-0.747974 10.8781 -0.384871 5.37556 2.53695 2.45105C4.11577 0.870546 6.21462 0 8.44772 0ZM5.47359 8.29091C5.47359 9.97484 6.84274 11.3455 8.52487 11.3455C10.207 11.3455 11.5762 9.97484 11.5762 8.29091C11.5762 6.60698 10.207 5.23636 8.52487 5.23636C6.84274 5.23636 5.47359 6.60698 5.47359 8.29091Z"
                  fill="#5964E0"
                />
              </svg>
            </div>
            <input
              type="text"
              className="w-full h-full pl-6  outline-none text-dark-blue text-base font-normal dark:bg-dark-blue dark:text-white dark:placeholder:text-[rgba(255, 255, 255, 0.50)]"
              placeholder="Filter by location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <span className="w-full h-[1px] bg-dark-gray opacity-20 mb-6 "></span>
          <div className="px-6 flex gap-4 mb-6">
            <input id="checkbox2" type="checkbox" value={isFullTime} onChange={() => setIsFullTime(!isFullTime) } />
            <label
              className="text-base font-bold text-dark-blue dark:text-white"
              htmlFor="checkbox2"
            >
              Full Time Only
            </label>
          </div>
          <div className="px-6 pb-6">
            <Button variant="primary" customStyle="w-full " onClick={() => setDetailedSearch(false)}>
              Search
            </Button>
          </div>
        </div>
      )}
      {/* Overlay */}
      {detailedSeach && (
        <div className="fixed left-0 right-0 top-0 bottom-0  bg-black opacity-50 z-40"></div>
      )}
    </main>
  );
}

export default Main;
