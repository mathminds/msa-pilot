import React from 'react';

const DataPage = ({ people }) => {
    return (
        <ul className="p-6 divide-y divide-slate-200">
            {people.map((person) => (
                <li className="flex py-4 first:pt-0 last:pb-0" key={person.id}>
                    <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                    <div className="ml-3 overflow-hidden">
                        <p className="text-sm font-medium text-slate-900">{person.name}</p>
                        <p className="text-sm text-slate-500 truncate">{person.email}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default DataPage;
