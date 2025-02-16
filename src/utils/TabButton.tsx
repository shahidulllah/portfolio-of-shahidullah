import React from "react";


interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}


const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active
    ? "bg-gradient-to-br from-yellow-300 to-red-600 text-transparent bg-clip-text" 
    : "text-[#ADB0BE] dark:text-[#ADB0BE]"; 
  return (
    <button onClick={selectTab} className="relative">
      <p className={`mr-3 font-bold ${buttonClasses}`}>{children}</p>
    </button>
  );
};

export default TabButton;
