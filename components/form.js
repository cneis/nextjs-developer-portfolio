import Image from "next/image";
import Link from "next/link";


export default function Form() {
    return (
        <header className='px-6 py-14'>
            <div className='max-w-4xl mx-auto flex gap-14 items-center flex-col-reverse md:flex-row drop-shadow-md '>
         

    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Persönliche Info und Skills</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Wer bin ich und was kann ich für Dich tun?.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Christopher Neis</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Freelancer / Teilzeit-Anstellung für</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Frontend / Backend / Fullstack Developer</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Ausbildung</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Diplom-Wirtschafts-Informatiker</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email Adresse</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">mail at christopherneis.de</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Ich wohne auf Mallorca und bin offen für Projekte als Freelancer oder eine Teilzeit-Anstellung, 100% remote.
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Skills</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                Meine Vorlieben sind Frontend-Development in html / css oder in react / next und Backend-Development mit node.js. <br />
                Datenanbindungen aus sql- / nosql-Datenbanken, aus headless cms oder api sind kein Problem. <br />
                Ich mache auch ein wenig Design und Animationen mit css / js. <br />
                In alles Andere kann ich mich einarbeiten.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  

               
            </div>
        </header>
    )
}
