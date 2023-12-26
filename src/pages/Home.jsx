import { useState } from 'react';
import { quizComponents } from '../utils/quizTypes';

export default function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <>
      <nav aria-label="Breadcrumb" className="flex mb-4">
        <ul className="flex overflow-hidden rounded-lg border border-gray-200 text-xs font-medium">
          {quizComponents.map((type, index) => {
            return (
              <li
                key={type.name}
                className={`flex h-10 items-center gap-1.5 px-4 transition 
              ${
                index === activeTabIndex
                  ? 'bg-gray-100 cursor-default'
                  : 'cursor-pointer hover:bg-gray-50'
              }`}
                onClick={() => setActiveTabIndex(index)}
              >
                <span className="ml-1.5">{type.name}</span>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="ml-2">
        {quizComponents[activeTabIndex].component ?? <p>Coming Soon!</p>}
      </div>
    </>
  );
}
