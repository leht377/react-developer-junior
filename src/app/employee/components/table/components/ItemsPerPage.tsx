import React from "react";

interface ItemsPerPageProps {
  options?: number[];
  selected: number;
  onChange: (value: number) => void;
}

const ItemsPerPage: React.FC<ItemsPerPageProps> = ({
  options = [5, 10, 20, 50],
  selected,
  onChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-700">Mostrar:</span>
      <select
        value={selected}
        onChange={(e) => onChange(Number(e.target.value))}
        className="border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="text-gray-700">items</span>
    </div>
  );
};

export default ItemsPerPage;
