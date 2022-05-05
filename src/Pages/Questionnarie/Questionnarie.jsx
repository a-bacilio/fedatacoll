import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useGetFormQuestionDataQuery } from "../../redux/store/querys/formquestions-query";
import { useForm } from "react-hook-form";
import { usePostRegisterMutation } from "../../redux/store/querys/formquestions-query";
function Questionnarie({}) {
  const { projectid } = useParams();
  const { data, isSuccess } = useGetFormQuestionDataQuery({ projectid });
  console.log(data);
  const [postData, { isSuccess: isSuccessRegister }] =
    usePostRegisterMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (submitData) => {
    postData({ projectid, submitData });
  };
  const [questionNumber, setQuestionNumber] = useState(0);
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-10 border-2 border-white rounded-lg shadow-lg shadow-white">
        <h1 className="w-full mb-5 text-2xl font-bold text-center text-white">
          Bienvenidos al cuestionario: {isSuccess && data.name}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {isSuccess &&
            !isSuccessRegister &&
            data.questions.map((item, index) => (
              <div
                key={`question-${index}`}
                className={`text-xl w-full flex flex-col items-center justify-center font-bold ${
                  questionNumber === index ? "visible" : "hidden"
                }`}
              >
                {item.imgUrl && (
                  <img
                    src={item.imgUrl}
                    className="w-full max-w-sm border-2 shadow-lg shadow-white"
                    alt="question_image"
                  />
                )}
                <label className="flex flex-col items-center justify-center w-full p-2 my-2">
                  {item.labelText}{" "}
                  <input
                    {...register(item.name)}
                    type={item.questionType === "number" ? "number" : "text"}
                    className="px-4 py-2 mt-1 text-black border-2 border-white rounde-sm"
                  />
                </label>
                {questionNumber < data.questions.length - 1 && (
                  <button
                    className="px-2 py-1 my-5 font-bold text-black bg-purple-300 rounded-lg"
                    type="button"
                    onClick={() => {
                      setQuestionNumber(questionNumber + 1);
                    }}
                  >
                    Siguiente pregunta
                  </button>
                )}
                {questionNumber >= data.questions.length - 1 && (
                  <button
                    className="px-2 py-1 my-5 font-bold text-black bg-purple-300 rounded-lg"
                    type="submit"
                  >
                    Finalizar
                  </button>
                )}
              </div>
            ))}
          {isSuccessRegister && (
            <Link to="/">
              <span className="px-2 py-1 my-5 text-2xl font-bold text-black bg-white rounded-lg shadow-lg shadow-white">
                Registro enviado, Muchas gracias :D
              </span>
            </Link>
          )}
        </form>
      </div>
    </div>
  );
}

export default Questionnarie;
