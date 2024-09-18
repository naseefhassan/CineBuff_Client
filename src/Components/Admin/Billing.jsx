import PendingBills from "./PendingBills";
import ApprovedBills from "./ApprovedBills";
import RejectedBills from "./RejectedBills";
import { useState } from "react";

function Billing() {
  const [activeSection, setActiveSection] = useState('pending');

  // Components to show for each section
  const renderContent = () => {
    switch (activeSection) {
      case 'pending':
        return <PendingBills />;
      case 'approved':
        return <ApprovedBills />;
      case 'rejected':
        return <RejectedBills />;
      default:
        return null;
    }
  };
  return (
    <div className=" p-4">
    {/* Header */}
    <div className="flex justify-around bg-gray-200 p-4 rounded-lg shadow-md mb-4">
      <h1
        className={`cursor-pointer ${activeSection === 'pending' ? 'text-blue-500' : 'text-gray-700'}`}
        onClick={() => setActiveSection('pending')}
      >
        Pending
      </h1>
      <h1
        className={`cursor-pointer ${activeSection === 'approved' ? 'text-blue-500' : 'text-gray-700'}`}
        onClick={() => setActiveSection('approved')}
      >
        Approved
      </h1>
      <h1
        className={`cursor-pointer ${activeSection === 'rejected' ? 'text-blue-500' : 'text-gray-700'}`}
        onClick={() => setActiveSection('rejected')}
      >
        Rejected
      </h1>
    </div>

    {/* Content */}
    <div className="p-4 bg-white rounded-lg shadow-md h-[330px] overflow-y-scroll ">
      {renderContent()}
    </div>
  </div>

  );
}

export default Billing;