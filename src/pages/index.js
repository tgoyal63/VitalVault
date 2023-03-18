import LandingNavbar from "@/components/LandingNavbar";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <LandingNavbar />
        <div className="flex min-h-screen items-center justify-center">
          <div className="py-12 text-black-600 text-5xl font-bold text-center">
            VITAL VAULT
            <div className="text-black-500 text-4xl font-bold self-center">
              Your Identity, Your Health, Your Control
            </div>
            <div>
              <button class="bg-black hover:bg-slate-700 text-white font-thin  px-4 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="text-black-400 text-4xl font-bold">
          ABOUT US
        </div>
        <div className="text-left-2/4  ">
          <div className="text-black-200 text-2xl ">
            <div className="text-left-2/4  ">Vital Vault simplifies the management of health records providing a single, interoperable platform for managing digital identity and health records.this reduces the risk of errors and omissions in health records, making it easier for healthcare providers to provide accurate and timely care. it also gives indivisuals greater control and privacy over their personal data, making it easier for them to manage their health and wellness
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
