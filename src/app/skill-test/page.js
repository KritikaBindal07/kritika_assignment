"use client";
import { useState } from "react";
import QuickStats from "./../../components/skilltest_components/QuickStats";
import { SyllabusAnalysis } from "./../../components/skilltest_components/SyllabusAnalysis";
import ComparisonGraph from "@/components/skilltest_components/ComparisonGraph";
import QuestionAnalysis from "@/components/skilltest_components/QuestionAnalysis";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function SkillTest() {
  const [stats, setStats] = useState({
    rank: 1,
    percentile: 30,
    currentScore: 10,
  });

  const [tempStats, setTempStats] = useState({ ...stats });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setTempStats({ ...stats });
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempStats((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setStats({ ...tempStats });
    setOpen(false);
  };

  return (
    <div className="space-y-4 mt-8 w-full">
      <h1 className="text-2xl font-bold">Skill Test</h1>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 w-full lg:w-[65%] space-y-6">
          <div className="border-t-2 border-b-2 rounded-md p-4 py-6 flex lg:flex-row flex-col lg:gap-0 gap-10 lg:items-center space-x-4 bg-white">
            <img src="/html.png" alt="HTML Logo" className="h-16 w-16" />
            <div className="flex-1">
              <h1 className="font-bold text-lg">Hyper Text Markup Language</h1>
              <p className="text-sm font-medium text-gray-600">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </p>
            </div>
            <button
              onClick={handleOpen}
              className="bg-blue-900 text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg transition duration-300"
            >
              Update
            </button>
          </div>

          {open && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
                margin:0
              }}
            >
              <div className="w-[300px] sm:w-[400px]"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  padding: "20px",
                }}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Update Scores</h2>
                  <img src="/html.png" alt="HTML Logo" className="h-8 w-8" />
                </div>
                <div className="flex mt-10 items-center justify-between">
                  <div className="flex gap-2">
                    <div className="text-center w-6 h-6 bg-blue-900 text-white rounded-full">
                      1
                    </div>
                    <label
                      className=" text-lg"
                      style={{ display: "block", marginBottom: "5px" }}
                    >
                      Update your <span className="font-bold">rank</span>
                    </label>
                  </div>

                  <input
                    type="number"
                    name="rank"
                    value={tempStats.rank}
                    onChange={handleChange}
                    className="w-24 h-8 justify-end"
                    style={{
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
                <div
                  style={{ marginBottom: "5px" }}
                  className="flex gap-4 mt-2 items-center justify-between"
                >
                  <div className="flex gap-2">
                    <div className="text-center w-6 h-6 bg-blue-900 text-white rounded-full">
                      2
                    </div>
                    <label
                      className=" text-lg"
                      style={{ display: "block", marginBottom: "5px" }}
                    >
                      Update your <span className="font-bold">Percentile</span>
                    </label>
                  </div>

                  <input
                    type="number"
                    name="percentile"
                    value={tempStats.percentile}
                    onChange={handleChange}
                    className="w-24 h-8 justify-end"
                    style={{
                      padding: "4px px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
                <div
                  style={{ marginBottom: "5px" }}
                  className="flex gap-4 mt-2 items-center justify-between"
                >
                  <div className="flex gap-2">
                    <div className="text-center w-10 h-6 bg-blue-900 text-white rounded-full">
                      3
                    </div>
                    <label
                      className=" text-lg"
                      style={{ display: "block", marginBottom: "5px" }}
                    >
                      Update your{" "}
                      <span className="font-bold">
                        {" "}
                        Current Score (out of 15)
                      </span>
                    </label>
                  </div>

                  <input
                    type="number"
                    name="currentScore"
                    value={tempStats.currentScore}
                    onChange={handleChange}
                    className="w-24 h-8 justify-end"
                    style={{
                      padding: "4px px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button
                    onClick={handleClose}
                    style={{
                      padding: "4px 8px",
                      backgroundColor: "transparent", 
                      color: "#0000ff", 
                      border: "2px solid #00008B", 
                      borderRadius: "5px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    style={{
                      padding: "4px 8px",
                      backgroundColor: "#00008B", 
                      color: "#fff", 
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center", 
                    }}
                  >
                    Save
                    <MdKeyboardArrowRight style={{ marginLeft: "8px" }} />{" "}
                  </button>
                </div>
              </div>
            </div>
          )}

          <QuickStats stats={stats} />
          <ComparisonGraph stats={stats} />
        </div>

        <div className="w-full lg:w-[35%] space-y-6 lg:mt-0 mt-6">
          <SyllabusAnalysis />
          <QuestionAnalysis stats={stats} />
        </div>
      </div>
    </div>
  );
}
