import { Link } from "react-router-dom";

export default function inicio() {
  return (
    <>
      <h1 className="my-3 text-white font-bold text-5xl">Inicio!</h1>
      <Link to={`/`}><button className="mt-5 w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
        Voltar
      </button></Link>
    </>
  )
}
