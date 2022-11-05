import Head from 'next/head'
import Image from 'next/image'

import logoImg from './../assets/logo.svg'
import usersAvatarImg from './../assets/users-avatar-example.png'
import iconCheckImg from './../assets/icon-check.svg'
import appPreviewImg from './../assets/app-nlw-copa-preview.png'
// import { api } from '../services/api'

// type HomeProps = {
//   count: number
// }

export default function Home () {
  return (
    <>
      <Head>
        <title>World Cup Sweepstakes</title>
      </Head>
      <div className="grid grid-cols-2 gap-28 items-center mx-auto h-screen max-w-[1124px]">
        <main>
          <Image
            src={logoImg}
            alt="NLW Copa"
          />
          <h1 className="text-5xl font-bold text-white leading-tight mt-14">
            Crie seu próprio bolão da copa e compartilhe entre amigos
          </h1>
          <div className="flex items-center gap-2 mt-10">
            <Image
              src={usersAvatarImg}
              alt="Varias fotos, uma do lado da outra"
              width={118}
            />
            <strong className="text-xl text-gray-100">
              <span className="text-ignite-500">+12.592 </span>
              pessoas já estão usando
            </strong>
          </div>

          <form className="flex gap-2 mt-10">
            <input
              type="text"
              placeholder="Qual é o nome do seu bolão?"
              className="flex-1 text-sm px-6 py-4 bg-gray-800 border border-gray-600 rounded"
            />
            <button
              type="submit"
              className="text-sm text-gray-900 font-bold px-6 py-4 bg-yellow-500 rounded hover:bg-yellow-700"
            >
              CRIAR MEU BOLÃO
            </button>
          </form>

          <p className="text-sm text-gray-300 leading-relaxed mt-4">
            Após criar seu bolão, você receberá um código único
            que poderá usar para convidar outras pessoas 🚀
          </p>

          <div className="flex items-center justify-between text-gray-100 mt-6 pt-6 boder-t border-gray-600">
            <div className="flex items-center gap-6">
              <Image
                src={iconCheckImg}
                alt="Circulo verde com um v no meio"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">+2.034</span>
                <span>Bolões criados</span>
              </div>
            </div>

            <div className="h-16 w-px bg-gray-200" />

            <div className="flex items-center gap-6">
              <Image
                src={iconCheckImg}
                alt="Circulo verde com um v no meio"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">+192.847</span>
                <span>Palpites enviados</span>
              </div>
            </div>
          </div>
        </main>
        <Image
          src={appPreviewImg}
          alt="Dois smartphones exibindo uma prévia de um app da Copa do Mundo"
          quality={100}
        />
      </div>
    </>
  )
}

// export const getServerSideProps = async () => {
//   const { data } = await api.get('/pools/count')

//   return {
//     props: {
//       count: data.count
//     }
//   }
// }
