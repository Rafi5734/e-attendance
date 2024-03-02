import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Notice from "../notice/Notice"

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Dashboard = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds + 1) % 60);
      setMinutes((prevMinutes) =>
        Math.floor((prevMinutes + (seconds + 1) / 60) % 60)
      );
      setHours((prevHours) => Math.floor(prevHours + (minutes + 1) / 60));
    }, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [seconds, minutes, hours]);

  // const formatTime = (value) => (value < 10 ? `0${value}` : value);
  return (
    <div className="w-full">
      {/* <div className="flex justify-center items-center">
        <Card className="mt-3 mb-3">
          <CardBody>
            <p>
              Time Start at: {formatTime(hours)}:{formatTime(minutes)}:
              {formatTime(seconds)}
            </p>
          </CardBody>
        </Card>
      </div> */}
      <div className="ms-3 flex items-center">
        <p>Dashboard</p>
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M10 7L15 12L10 17"
              stroke="#418df3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <div className="ms-3 mt-3 me-3 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
        <div>
          <Card>
            <CardBody>
              <div className="flex justify-between">
                <div>
                  <svg
                    fill="#000000"
                    className="mb-3"
                    width="55px"
                    height="55px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M442.458 506.633l526.285 319.386c9.669 5.868 22.265 2.786 28.133-6.883s2.786-22.265-6.883-28.133L463.708 471.617c-9.669-5.868-22.265-2.786-28.133 6.883s-2.786 22.265 6.883 28.133z"></path>
                      <path d="M471.605 496.4c69.645-88.617 219.439-102.62 347.816-28.496 132.967 76.763 194.927 220.077 144.852 325.443-4.855 10.216-.509 22.433 9.706 27.288s22.433.509 27.288-9.706c60.149-126.562-11.322-291.875-161.366-378.497-144.745-83.575-317.1-67.463-400.501 38.659-6.989 8.893-5.446 21.768 3.447 28.757s21.768 5.446 28.757-3.447z"></path>
                      <path d="M684.302 659.986L486.25 992.53c-5.788 9.718-2.602 22.288 7.116 28.075s22.288 2.602 28.075-7.116l198.052-332.544c5.788-9.718 2.602-22.288-7.116-28.075s-22.288-2.602-28.075 7.116zm159.905-278.013l-27.699 47.974c-5.656 9.795-2.3 22.321 7.496 27.976s22.321 2.3 27.976-7.496l27.699-47.974c5.656-9.795 2.3-22.321-7.496-27.976s-22.321-2.3-27.976 7.496zm-518.698-143.64c0-46.166-37.423-83.589-83.589-83.589s-83.589 37.423-83.589 83.589 37.423 83.589 83.589 83.589 83.589-37.423 83.589-83.589zm40.96 0c0 68.788-55.761 124.549-124.549 124.549s-124.549-55.761-124.549-124.549c0-68.788 55.761-124.549 124.549-124.549s124.549 55.761 124.549 124.549zM221.44 20.48h40.96V51.2h-40.96V20.48zM262.4 51.2c0 27.307-40.96 27.307-40.96 0V20.48c0-27.307 40.96-27.307 40.96 0V51.2zm-40.96 381.44h40.96v30.72h-40.96v-30.72zm40.96 30.72c0 27.307-40.96 27.307-40.96 0v-30.72c0-27.307 40.96-27.307 40.96 0v30.72zM70.853 99.817l28.963-28.963 21.729 21.729-28.963 28.963-21.729-21.729zm50.693-7.234c19.309 19.309-9.654 48.272-28.963 28.963L70.854 99.817c-19.309-19.309 9.654-48.272 28.963-28.963l21.729 21.729zm240.748 298.674l28.963-28.963 21.729 21.729-28.963 28.963-21.729-21.729zm50.693-7.234c19.309 19.309-9.654 48.272-28.963 28.963l-21.729-21.729c-19.309-19.309 9.654-48.272 28.963-28.963l21.729 21.729zM20.48 262.4v-40.96H51.2v40.96H20.48zm30.72-40.96c27.307 0 27.307 40.96 0 40.96H20.48c-27.307 0-27.307-40.96 0-40.96H51.2zm412.16 0c27.307 0 27.307 40.96 0 40.96h-30.72c-27.307 0-27.307-40.96 0-40.96h30.72zM92.583 362.294c19.309-19.309 48.272 9.654 28.963 28.963l-21.729 21.729c-19.309 19.309-48.272-9.654-28.963-28.963l21.729-21.729zm291.44-291.441c19.309-19.309 48.272 9.654 28.963 28.963l-21.729 21.729c-19.309 19.309-48.272-9.654-28.963-28.963l21.729-21.729z"></path>
                    </g>
                  </svg>
                  <Link to="/">
                    <span className="mt-4 text-[#F54180] font-bold">
                      5 holidays in this month
                    </span>
                  </Link>
                </div>

                <div>
                  <p>Holiday this year</p>
                  <p className="text-4xl font-medium text-[#f8b657]">10</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card>
            <CardBody>
              <div className="flex justify-between">
                <div>
                  <svg
                    width="55px"
                    height="55px"
                    viewBox="0 0 1024 1024"
                    className="icon mb-3"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M106.666667 810.666667V298.666667h810.666666v512c0 46.933333-38.4 85.333333-85.333333 85.333333H192c-46.933333 0-85.333333-38.4-85.333333-85.333333z"
                        fill="#FFCDD2"
                      ></path>
                      <path
                        d="M917.333333 213.333333v128H106.666667v-128c0-46.933333 38.4-85.333333 85.333333-85.333333h640c46.933333 0 85.333333 38.4 85.333333 85.333333z"
                        fill="#F44336"
                      ></path>
                      <path
                        d="M704 213.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                        fill="#B71C1C"
                      ></path>
                      <path
                        d="M320 213.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                        fill="#B71C1C"
                      ></path>
                      <path
                        d="M704 64c-23.466667 0-42.666667 19.2-42.666667 42.666667v106.666666c0 23.466667 19.2 42.666667 42.666667 42.666667s42.666667-19.2 42.666667-42.666667V106.666667c0-23.466667-19.2-42.666667-42.666667-42.666667zM320 64c-23.466667 0-42.666667 19.2-42.666667 42.666667v106.666666c0 23.466667 19.2 42.666667 42.666667 42.666667s42.666667-19.2 42.666667-42.666667V106.666667c0-23.466667-19.2-42.666667-42.666667-42.666667z"
                        fill="#BDBDBD"
                      ></path>
                      <path
                        d="M473.6 753.066667c0-4.266667 0-10.666667 2.133333-14.933334 2.133333-4.266667 4.266667-8.533333 8.533334-10.666666s6.4-6.4 10.666666-6.4c4.266667-2.133333 10.666667-2.133333 14.933334-2.133334s10.666667 0 14.933333 2.133334l12.8 6.4c4.266667 2.133333 6.4 6.4 8.533333 10.666666 2.133333 4.266667 2.133333 8.533333 2.133334 14.933334 0 4.266667 0 10.666667-2.133334 14.933333-2.133333 4.266667-4.266667 8.533333-8.533333 10.666667-4.266667 2.133333-6.4 6.4-12.8 6.4s-6.4 4.266667-12.8 4.266666-10.666667 0-14.933333-2.133333c-4.266667-2.133333-8.533333-4.266667-10.666667-6.4-4.266667-2.133333-6.4-6.4-8.533333-10.666667-2.133333-6.4-4.266667-10.666667-4.266667-17.066666z m66.133333-91.733334h-55.466666l-8.533334-234.666666h70.4l-6.4 234.666666z"
                        fill="#F44336"
                      ></path>
                    </g>
                  </svg>
                  <Link to="/">
                    <span className="mt-4 text-[#F54180] font-bold">
                      5 leaves granted
                    </span>
                  </Link>
                </div>

                <div>
                  <p>Leave this year</p>
                  <p className="text-4xl font-medium text-[#f8b657]">10</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card>
            <CardBody>
              <div className="flex justify-between">
                <div>
                  <svg
                    width="55px"
                    height="55px"
                    className="mb-2.5"
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#CCCCCC"
                      strokeWidth="0.048"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M3 14.6C3 14.0399 3 13.7599 3.10899 13.546C3.20487 13.3578 3.35785 13.2049 3.54601 13.109C3.75992 13 4.03995 13 4.6 13H5.4C5.96005 13 6.24008 13 6.45399 13.109C6.64215 13.2049 6.79513 13.3578 6.89101 13.546C7 13.7599 7 14.0399 7 14.6V19.4C7 19.9601 7 20.2401 6.89101 20.454C6.79513 20.6422 6.64215 20.7951 6.45399 20.891C6.24008 21 5.96005 21 5.4 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V14.6Z"
                        stroke="#000000"
                        strokeWidth="0.9600000000000002"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M10 4.6C10 4.03995 10 3.75992 10.109 3.54601C10.2049 3.35785 10.3578 3.20487 10.546 3.10899C10.7599 3 11.0399 3 11.6 3H12.4C12.9601 3 13.2401 3 13.454 3.10899C13.6422 3.20487 13.7951 3.35785 13.891 3.54601C14 3.75992 14 4.03995 14 4.6V19.4C14 19.9601 14 20.2401 13.891 20.454C13.7951 20.6422 13.6422 20.7951 13.454 20.891C13.2401 21 12.9601 21 12.4 21H11.6C11.0399 21 10.7599 21 10.546 20.891C10.3578 20.7951 10.2049 20.6422 10.109 20.454C10 20.2401 10 19.9601 10 19.4V4.6Z"
                        stroke="#000000"
                        strokeWidth="0.9600000000000002"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M17 10.6C17 10.0399 17 9.75992 17.109 9.54601C17.2049 9.35785 17.3578 9.20487 17.546 9.10899C17.7599 9 18.0399 9 18.6 9H19.4C19.9601 9 20.2401 9 20.454 9.10899C20.6422 9.20487 20.7951 9.35785 20.891 9.54601C21 9.75992 21 10.0399 21 10.6V19.4C21 19.9601 21 20.2401 20.891 20.454C20.7951 20.6422 20.6422 20.7951 20.454 20.891C20.2401 21 19.9601 21 19.4 21H18.6C18.0399 21 17.7599 21 17.546 20.891C17.3578 20.7951 17.2049 20.6422 17.109 20.454C17 20.2401 17 19.9601 17 19.4V10.6Z"
                        stroke="#000000"
                        strokeWidth="0.9600000000000002"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <Link to="/">
                    <span className="mt-4 text-[#F54180] font-bold">
                      00:00:00 working today
                    </span>
                  </Link>
                </div>

                <div>
                  <p>Last 30 days</p>
                  <p className="text-4xl font-medium text-[#f8b657]">
                    265:22:37
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="ms-3 mt-3 me-3 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
        <div className="">
          <Card className="mt-3 mb-3">
            <CardBody>
              <p className="text-xl font-medium mb-5">Recent Activity</p>
              <div>
                <span className="bg-[#d5f4e0] p-1 text-xs rounded-lg text-[#19a353]">
                  Punch In
                </span>
                <span className="text-xs ms-2">Feb - 29-02-2024; 22:04</span>
              </div>
              <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div>
                <span className="bg-[#fecce0] p-1 text-xs rounded-lg text-[#ee0062]">
                  Punch Out
                </span>
                <span className="text-xs ms-2">Feb - 29-02-2024; 22:04</span>
              </div>
              <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div>
                <span className="bg-[#d5f4e0] p-1 text-xs rounded-lg text-[#19a353]">
                  Punch In
                </span>
                <span className="text-xs ms-2">Feb - 29-02-2024; 22:04</span>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-span-2 mt-3">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={1000}
              data={data}
              margin={{
                top: 5,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
      </div>
      <Notice/>
    </div>
  );
};

export default Dashboard;
