export default function card() {
  return (
    <div className="mb-4">
      <div className="bg-gradient-to-r from-gray-900 via-gray-900 to-blue-900 shadow-2xl rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-white font-bold text-xl mb-2">Maria da Penha</div>
          <p className="text-white text-base">22/22/22</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-white leading-none">Passo da Pátria</p>
            <p className="text-white">Natal/RN</p>
          </div>
        </div>
      </div>
    </div>
  )
}