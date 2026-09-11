
import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';


const sampleData = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
    'Indian Fig',
    'Jackfruit',
    'Strawberry',
    'Orange',
    'Blueberry',
    'Kiwi',
    'Lemon',
    'Mango',
    'Nectarine',
    'Papaya',
]

function DebounceSearchDemo() {
    const [searchTerm, setSearchTerm] = useState('');
    const [delay, setDelay] = useState(500); // Default debounce delay in milliseconds


    // Use the custom useDebounce hook
    const { debouncedValue } = useDebounce({ value: searchTerm, delay });
    
    // Filter the sample data based on the debounced search term
    const filteredData = sampleData.filter(item =>
        item.toLowerCase().includes(debouncedValue.toLowerCase())
    );

    const isPending = searchTerm !== debouncedValue;

    return (
        <div className="my-8 p-4 sm:p-8 max-w-xl mx-auto bg-purple-50/60 backdrop-blur-md rounded-3xl shadow-lg border border-purple-100 space-y-5 font-sans">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-700 text-center tracking-wide">
                Debounce Search Demo
            </h1>

            {/* Input Field and Delay Control */}
            <div className="space-y-3 bg-white/80 p-4 rounded-2xl shadow-sm border border-indigo-50">
                <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                        Search Input:
                    </label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Type to search..."
                        className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-purple-300 focus:bg-white transition-all"
                    />
                </div>

                <div className="flex items-center justify-between pt-1">
                    <label className="text-xs font-medium text-slate-500">
                        Delay: <span className="font-semibold text-purple-600">{delay}ms</span>
                    </label>
                    <input
                        type="range"
                        min="100"
                        max="2000"
                        step="100"
                        value={delay}
                        onChange={(e) => setDelay(Number(e.target.value))}
                        className="accent-purple-400 cursor-pointer"
                    />
                </div>
            </div>

            {/* Status Indicators */}
            <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white/90 p-3 rounded-2xl border border-pink-100 shadow-sm">
                    <span className="block text-slate-400 mb-0.5">Instant Value:</span>
                    <span className="font-semibold text-slate-700 break-all">
                        {searchTerm || <i className="text-slate-300">Empty</i>}
                    </span>
                </div>

                <div className="bg-white/90 p-3 rounded-2xl border border-purple-100 shadow-sm relative">
                    <span className="block text-slate-400 mb-0.5">Debounced Value:</span>
                    <span className="font-semibold text-purple-600 break-all">
                        {debouncedValue || <i className="text-slate-300">Empty</i>}
                    </span>
                    {isPending && (
                        <span className="absolute top-2 right-2 text-[10px] bg-amber-100 text-amber-600 font-medium px-2 py-0.5 rounded-full animate-pulse">
                        Waiting...
                        </span>
                    )}
                </div>
            </div>

            {/* Search Results */}
            <div className="bg-white/80 p-4 rounded-2xl shadow-sm border border-purple-50 space-y-2">
                <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Results ({filteredData.length})
                </h2>
                <ul className="divide-y divide-slate-100 max-h-40 overflow-y-auto">
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                        <li key={item} className="py-2 text-sm text-slate-600 font-medium px-1">
                            {item}
                        </li>
                        ))
                    ) : (
                        <li className="py-2 text-xs text-slate-400 italic">No matches found</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default DebounceSearchDemo;