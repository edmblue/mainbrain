'use client';
import { QA } from '@/constants';
import Image from 'next/image';
import { useState } from 'react';

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <section className=" flex-col max-container padding-container ">
      <h2 className="text-xl uppercase font-semibold">Preguntas Frecuentes</h2>
      <div className="w-full lg:w-1/2 py-4">
        <ul className="flex flex-col gap-2">
          {QA.map((question, index) => (
            <li
              key={question.question}
              className="flex flex-col gap-3 bg-white p-3 shadow-sm rounded-sm"
            >
              <div className="flex justify-between gap-8 w-full">
                <p className="text-md font-semibold text-gray-600">
                  {question.question}
                </p>
                <Image
                  className={`cursor-pointer ${
                    openIndex === index && 'rotate-180 transition-all'
                  }`}
                  src="/img/arrowdown.svg"
                  width={14}
                  height={9}
                  alt="arrow"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              </div>
              <p
                className={`text-[12px] transition-all duration-500 ${
                  openIndex === index ? 'inline-block' : 'hidden'
                }`}
              >
                {question.response}{' '}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Questions;
