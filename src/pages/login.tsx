
export default function login() {

  function handleSubmit(){
    
  }

  return (
    <>
      <div
        className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden">
      </div>
      <div
        className="relative min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl">
        <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md  z-10">
          <div className="self-start hidden lg:flex flex-col text-gray-300">

            <h1 className="my-3 text-white font-bold text-5xl">Sistema TCO</h1>
            <p className="pr-3 text-sm opacity-75">Agora é possível fazer a lavratura de um Termo Circunstanciado de Ocorrência (TCO) de forma fácil e simplificada </p>
          </div>
        </div>
        <div className="flex justify-center self-center z-10 md:mt-0 mt-40">
          <div className="md:p-12 bg-white mx-auto rounded-3xl md:w-96 w-10/12 p-8">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800 hidden lg:block">Fazer Login</h3>
              <h3 className="font-semibold text-2xl text-gray-800 lg:hidden block">Sistema TCO</h3>
            </div>
            <div className="space-y-6">
              <div className="">
                <input className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400" type="" placeholder="CPF" />
              </div>
              <div className="relative" x-data="{ show: true }">
                <input placeholder="Senha" className="text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400" />
                  <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5">
                  </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm ml-auto">
                  <a href="#" className="text-purple-700 hover:text-purple-600">
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
