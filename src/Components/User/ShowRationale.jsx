import editIcon from "../../assets/Images/edit.png";
import trashIcon from "../../assets/Images/trash.png";
import swipeIcon from "../../assets/Images/left-arrow.png";
import axiosInstance from "../../Api/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ShowRationale() {
  const [rationaleData, setRationaleData] = useState([]);
  const [expandedStates, setExpandedStates] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const response = await axiosInstance.get(
          `/showRationale?page=${page}&limit=${limit}`
        );
        setRationaleData(response.data.rationaleData);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(currentPage);
  }, [currentPage]);

  // Toggle the expanded state for a specific item
  const toggleParagraph = (index) => {
    setExpandedStates((prevStates) => ({
      ...prevStates,
      [index]: !prevStates[index],
    }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handledDelete = async (delId) => {
    try {
      await axiosInstance.delete(`/deleteRationale/${delId}`);
      setRationaleData(rationaleData.filter((item) => item._id !== delId));
    } catch (error) {
      console.error(error);
    }
  };

  if (!rationaleData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-center font-bold text-[3vw] sm:text-xl">
        Show Rationale
      </h1>

      {rationaleData.map((item, index) => (
        <div key={item._id} className="bg-white rounded-md p-3 my-3">
          <div className="flex justify-end gap-3">
            <Link to={`/user/edit-rationale/${item._id}`}>
              <img
                className="w-4 h-4 cursor-pointer"
                src={editIcon}
                alt="edit icon"
              />
            </Link>
            <img
              className="w-4 h-4 cursor-pointer"
              onClick={() => handledDelete(item._id)}
              src={trashIcon}
              alt="edit icon"
            />
          </div>
          <div className="sm:flex justify-between gap-5">
            <div className="sm:border-r-2">
              <div className="">
                <h1 className="font-semibold">Module</h1>
                <h1>{item.Module}</h1>
              </div>
              <div className="">
                <h1 className="font-semibold">Rationale summary</h1>
                <h1 className="flex flex-wrap">{item.RationaleSummary}</h1>
              </div>
              <div className="">
                <h1 className="font-semibold">Rationale Text</h1>
                <h1
                  className={`transition-all duration-300 ${
                    expandedStates[index] ? "" : "line-clamp-3"
                  }`}
                >
                  {item.RationaleText}
                </h1>
                {item.RationaleText && item.RationaleText.length > 100 && (
                  <button
                    onClick={() => toggleParagraph(index)}
                    className="flex justify-end w-full font-semibold p-1 text-xs"
                  >
                    {expandedStates[index] ? "Show Less" : "Show More..."}
                  </button>
                )}
              </div>
            </div>
            <div className="">
              <div className="">
                <h1 className="font-semibold">Enable</h1>
                <h1>{item.Enable == 0 ? "Not Active" : "Active"}</h1>
              </div>
              <div className="">
                <h1 className="font-semibold">Rationale ID</h1>
                <h1>{item.RationaleID}</h1>
              </div>
              <div className="">
                <h1 className="font-semibold">Group ID</h1>
                <h1>{item.GroupID}</h1>
              </div>
              <div className="">
                <h1 className="font-semibold">Sequence</h1>
                <h1>{item.Sequence}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className=" py-2 mx-1  text-white rounded"
        >
          <img className="w-6 h-6" src={swipeIcon} alt="left icon" />
        </button>
        <span className="px-4 py-2 mx-1">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className=" py-2 mx-1  text-white rounded"
        >
          <img
            className="w-6 h-6 rotate-180"
            src={swipeIcon}
            alt="right icon"
          />
        </button>
      </div>
    </div>
  );
}

export default ShowRationale;
