import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { useGetFormQuestionDataQuery } from "../../redux/store/querys/formquestions-query";
import { useForm } from "react-hook-form";
function Questionnarie({}) {
  const { projectid } = useParams();
  const { data, isSuccess } = useGetFormQuestionDataQuery({ projectid });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [questionNumber, setQuestionNumber] = useState(0);
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col items-center justify-start w-full min-h-screen border-2 border-white rounded-lg shadow-lg shadow-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          {isSuccess &&
            data.questions.map((item, index) => (
              <div
                key={`question-${index}`}
                className={`text-xl w-full flex flex-col items-center justify-center font-bold ${
                  questionNumber === index ? "visible" : "hidden"
                }`}
              >
                <label className="flex flex-col items-center justify-center w-full p-2">
                  {item.labelText} <input {...register(item.name)} />
                </label>
                {questionNumber < data.questions.length - 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuestionNumber(questionNumber + 1);
                    }}
                  >
                    Siguiente pregunta
                  </button>
                )}
                {questionNumber >= data.questions.length - 1 && (
                  <button type="submit">Finalizar</button>
                )}
              </div>
            ))}
        </form>
      </div>
    </div>
  );
}

export default Questionnarie;
