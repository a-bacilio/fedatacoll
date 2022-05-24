import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetFormQuestionDataQuery } from "../../redux/store/querys/formquestions-query";
import { useForm } from "react-hook-form";
import { usePostRegisterMutation } from "../../redux/store/querys/formquestions-query";
import avatar_img from "../../assets/3dimages/business-3d-friendly-robot-assistant-waving.png";
import MessageItem from "./MessageItem";
import { NavBarWrapper } from "../Shared/Components/NavBar";

function Questionnarie({}) {
  const { projectid } = useParams();
  const { data, isSuccess } = useGetFormQuestionDataQuery({ projectid });
  const [postData, { isSuccess: isSuccessRegister }] =
    usePostRegisterMutation();
  const { register, handleSubmit } = useForm();
  const onSubmit = (submitData) => {
    postData({ projectid, submitData });
  };
  const [questionNumber, setQuestionNumber] = useState(0);
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen mx-auto bg-stone-800 ">
      <NavBarWrapper />
      <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
        <div className="flex flex-col items-center w-full p-10">
          <h1 className="px-2 py-5 text-3xl font-bold text-white">
            Bienvenido al cuestionario del: {isSuccess && data.name}
          </h1>
          <img
            style={{ transform: "scaleX(-1)" }}
            alt=""
            src={avatar_img}
            className="w-6/12"
          />
        </div>
        <div className="w-full p-10">
          <form
            className="items-center justify-start w-full max-w-2xl p-10 mx-auto mt-10 border-2 border-white rounded-lg shadow-lg bg-stone-400 shadow-white"
            onSubmit={handleSubmit(onSubmit)}
          >
            {isSuccess && !isSuccessRegister && (
              <div className="flex flex-col w-full">
                {data.questions.map((item, index) => (
                  <div
                    key={`question-${index}`}
                    className={`text-xl w-full flex flex-col items-center justify-center font-bold ${
                      questionNumber === index ? "visible" : "hidden"
                    }`}
                  >
                    {item.imgUrl && (
                      <img
                        src={item.imgUrl}
                        className="w-full border-2 shadow-lg shadow-white"
                        alt="question_image"
                      />
                    )}
                    <label className="flex flex-col items-center justify-center w-full p-2 my-2">
                      <span className="my-5 text-2xl text-white">
                        {item.labelText}
                      </span>

                      <input
                        placeholder="escribe aqui"
                        {...register(item.name)}
                        type={
                          item.questionType === "number" ? "number" : "text"
                        }
                        className={`w-full px-2 py-1 mt-1 text-black border-2 border-white rounde-sm `}
                      />
                    </label>
                    {questionNumber < data.questions.length - 1 &&
                      questionNumber === index && (
                        <button
                          className="w-full px-2 py-1 my-5 font-bold text-white rounded-lg bg-stone-700"
                          type="button"
                          onClick={() => {
                            setQuestionNumber(questionNumber + 1);
                          }}
                        >
                          Enviar
                        </button>
                      )}
                    {questionNumber >= data.questions.length - 1 &&
                      questionNumber === index && (
                        <button
                          className="px-2 py-1 my-5 font-bold text-white rounded-lg bg-stone-700"
                          type="submit"
                        >
                          Finalizar
                        </button>
                      )}
                  </div>
                ))}
              </div>
            )}
            {isSuccessRegister && (
              <div className="flex flex-col w-full">
                <span className="my-5 text-2xl font-bold text-center text-white">
                  Registro enviado, muchas gracias :D
                </span>

                <Link
                  to="/"
                  className="w-full px-2 py-1 my-5 text-xl font-bold text-center text-white rounded-lg bg-stone-700"
                  type="submit"
                >
                  Salir
                </Link>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Questionnarie;
