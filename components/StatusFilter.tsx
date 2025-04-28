interface StatusFilterProps {
    selectedStatus: string;
    onStatusChange: (status: string) => void;
}

export default function StatusFilter({ selectedStatus, onStatusChange }: StatusFilterProps) {
    return (
        <div className="flex justify-between items-center w-full text-gray-800">
            <label htmlFor="status" className="font-medium">Фільтр за статусом:</label>
            <select
                id="status"
                value={selectedStatus}
                onChange={(e) => onStatusChange(e.target.value)}
                className="border border-gray-800 px-4 py-2 rounded-md"
            >
                <option value="">Усі</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
    );
}
  