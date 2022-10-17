import PlusCircleIcon from "@heroicons/react/24/outline/PlusCircleIcon";
import { Link } from "react-router-dom";
import Card from "../components/card";

export default function inicio() {
  return (
    <div>
      <div className="p-4 flex flex-row justify-between">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Lista de ocorrências</h3>
        <Link to={`/adicionar`}><PlusCircleIcon className="h-6 w-6" aria-hidden="true"></PlusCircleIcon></Link>
      </div>

      <div className="px-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
