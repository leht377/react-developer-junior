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
    <div className="flex items-center space-x-3 bg-gray-100 p-2 rounded-lg shadow-sm">
      <span className="text-sm text-gray-600 font-medium">Mostrar</span>
      <select
        value={selected}
        onChange={(e) => onChange(Number(e.target.value))}
        className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        {options.map((option) => (
          <option key={option} value={option} className="text-gray-700">
            {option}
          </option>
        ))}
      </select>
      <span className="text-sm text-gray-600 font-medium">items</span>
    </div>
  );
};

export default ItemsPerPage;