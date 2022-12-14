import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BreakTime from "../BreakTime/BreakTime";
import Person from "../Person/Person";

const Sidebar = ({ toDoList }) => {
  const [breakTime, setBreakTime] = useState(0);

  let totalTime = 0;
  for (const element of toDoList) {
    totalTime += element.time;
  }

  const handleBreakTime = (breakTime) => {
    setBreakTime(breakTime);
    localStorage.setItem("break-time", JSON.stringify(breakTime));
  };

  useEffect(() => {
    const savedBreakTime = localStorage.getItem("break-time");
    if (savedBreakTime) {
      setBreakTime(savedBreakTime);
    }
  }, []);

  const notify = () =>
    toast.success("Congratulation!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="w-4/5 mx-auto mt-5 sticky top-0">
      <div className="mb-5">
        <Person></Person>
      </div>
      <div className="mb-10">
        <BreakTime handleBreakTime={handleBreakTime}></BreakTime>
      </div>
      <h5 className="mb-3 font-medium">Exercise Details</h5>
      <p className="bg-white p-3 rounded-md mb-3">
        Exercise Time: <span className="ml-2">{totalTime} seconds</span>{" "}
      </p>
      <p className="bg-white p-3 rounded-md">
        Break Time: <span className="ml-2">{breakTime} seconds</span>{" "}
      </p>
      <button
        onClick={notify}
        className="bg-lime-500 w-full p-2 rounded-md mt-8"
      >
        Activity Completed
      </button>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
    </div>
  );
};

export default Sidebar;
