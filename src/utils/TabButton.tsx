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
    ? " border-b-2 border-yellow-500"
    : "text-[#ADB0BE] dark:text-[#ADB0BE] ";

  return (
    <button onClick={selectTab} className="relative">
      <p className={`mr-4 font-bold ${buttonClasses}`}>{children}</p>
    </button>
  );
};

export default TabButton;
