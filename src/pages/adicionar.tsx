import { Link } from "react-router-dom";

export default function adicionar() {
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Lista de ocorrências</h3>
              <p className="mt-1 text-sm text-gray-600">
                Informações sobre localidade e dados do TCO.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-2 sm:col-span-3">
                      <label htmlFor="localidade" className="block text-sm font-medium text-gray-700">
                        Jurisdição
                      </label>
                      <select
                        id="localidade"
                        name="localidade"
                        autoComplete="localidade-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>RN / Ceará-Mirim - 8405</option>
                        <option>RN / Pau dos Ferros - 8404</option>
                        <option>RN / Natal - 8400</option>
                        <option>RN / Mossoró - 8401</option>
                        <option>RN / Caicó - 8402</option>
                        <option>RN / Assu - 8403</option>
                        <option>PE / Ouricuri - 8309</option>
                      </select>
                    </div>

                    <div className="col-span-2 sm:col-span-3">
                      <label htmlFor="localidade" className="block text-sm font-medium text-gray-700">
                        Jurisdições
                      </label>
                      <select
                        id="localidade"
                        name="localidade"
                        autoComplete="localidade-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>RN / Ceará-Mirim - 8405</option>
                        <option>RN / Pau dos Ferros - 8404</option>
                        <option>RN / Natal - 8400</option>
                        <option>RN / Mossoró - 8401</option>
                        <option>RN / Caicó - 8402</option>
                        <option>RN / Assu - 8403</option>
                      </select>
                    </div>

                 
                  </div>
                </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

     
      <Link to={`/`}><button className="mt-5 w-full flex justify-center bg-blue-800  hover:bg-blue-600 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
        Voltar
      </button></Link>
    </>
  )
}
