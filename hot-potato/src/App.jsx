import "./App.css";

function Faq_card({ question, answer, colour }) {
  return (
    <div
      className="relative w-96 h-88 rounded-2xl shadow-xl border-4 border-white/30 overflow-hidden p-4 transform hover:scale-105 transition"
      style={{
        backgroundColor: colour,
        color: "#fff",
        filter: "saturate(50%)",
      }}
    >
      <h3 className="text-3xl font-bold p-4">{question}</h3>
      <hr></hr>
      <p className="text-xl p-4">{answer}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <div className="min-h-screen bg-[#fff3e6] text-[#2b1e1e] flex flex-col items-center justify-center relative overflow-hidden">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#e8caa4_2px,_transparent_2px)] [background-size:20px_20px] opacity-50" />

        <div className="absolute top-10 w-64 h-48 z-0">
          <img src="/Top.PNG" alt="Hot Potato" />
        </div>

        <div className="absolute bottom-128 left-0 w-64 h-48 z-0">
          <img src="/Orph-throw.PNG" alt="" />
        </div>

        <div className="absolute bottom-120 right-0 w-64 h-48 z-0">
          <img src="/Heidi-catch.PNG" alt="" />
        </div>

        <div className="absolute bottom-0 left-0 w-full flex justify-center z-0 pointer-events-none select-none opacity-50">
          <img src="/Bottom.PNG" alt="" />
        </div>

        <div className="relative z-10 text-center">
          <div className="relative">
            <h1 className="text-5xl font-bold mb-2">H _ t Potato</h1>
            <img
              src="/fire.gif"
              alt="I made a fiery animation woohoo!!"
              className="absolute -left-9 -top-28 w-64 pointer-events-none"
            />
          </div>

          <p className="text-xl italic mb-8">
            Make it. Pass it. Don't Drop it.
          </p>

          <div className="flex flex-col items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email..."
              className="px-5 py-3 rounded-xl border-4 border-[#d88c4a] bg-white w-72 focus:outline-none shadow-md"
            />

            <button className="bg-[#d88c4a] hover:bg-[#c67634] text-white px-6 py-3 rounded-xl font-semibold shadow-md text-shadow-[1px_1px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000] transition">
              Get Started
            </button>
          </div>

          <div className="mt-6 text-sm text-[#1a1a1a]">
            <p>Ages 13-18. Dates out soon!</p>
            <p>
              19 or older? Get the same prizes by{" "}
              <a href="#" className="underline text-[#d88c4a]">
                referring teens
              </a>
              .
            </p>
          </div>
        </div>

        <div className="absolute bottom-5 inset-x-0 flex justify-center animate-bounce z-10 opacity-70">
          <div className="p-3 w-128">
            <img src="/Arrow.PNG" alt="" />
          </div>
        </div>
      </div>

      <section className="relative min-h-screen bg-[#edcfad] py-20 px-6 text-center overflow-hidden">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#fff4e8_4px,_transparent_4px)] [background-size:25px_25px] opacity-30" />

        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-16 text-[#2b1e1e]">
            How It Works?
          </h1>

          <p className="text-sm text-[#5a4747]">
            Every 3 Days, you are assigned a new game + a handoff note from the
            previous developer. You have 3 days to work on that game and pass it
            on!
          </p>
          <img src="/How.PNG" alt="how-it-all-works image!!" className="w-[90%] mt-6" />

          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-lg text-[#5a4747]">
              After 3 weeks, all the projects will be shipped publicly with an
              itch.io link and a Github repo!
            </p>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen bg-[#F6E3CC] py-20 px-6 text-center overflow-hidden">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#fff3e6_4px,_transparent_4px)] [background-size:15px_15px] opacity-40" />

        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-16 text-[#2b1e1e]">FAQ</h1>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Faq_card
              question="Who is eligible?"
              answer="Hot Potato is for highschoolers! You need to be 13-18 years old to participate."
              colour="#ff6b6b"
            />
            <Faq_card
              question="How much does it cost?"
              answer="100% free - all the prizes are donated to us or paid for by us!"
              colour="#4ecdc4"
            />
            <Faq_card
              question="What types of projects count?"
              answer="Any Godot Project as long as it's open source!"
              colour="#ffd93d"
            />
            <Faq_card
              question="Is this legit?"
              answer={
                <>
                  It absolutely is! Don't take my word for it? Checkout{" "}
                  <a
                    href="https://ysws.hackclub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold hover:text-black transition"
                  >
                    Other YSWS's
                  </a>
                </>
              }
              colour="#00bbf9"
            />
            <Faq_card
              question="Have more questions?"
              answer="You can email us at abhaygupta.hsj@gmail.com! We'll try and respond to everything within 24 hours :)"
              colour="#6c5ce7"
            />
          </div>
        </div>
      </section>

      <footer className="relative bg-[#fff3e6] text-[#2b1e1e] overflow-hidden">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#e8caa4_1px,_transparent_1px)] [background-size:25px_25px] opacity-20" />

        <p className="relative z-10 text-center p-4 text-xl">
          Made with &#10083; by Abhay
        </p>
      </footer>
    </div>
  );
}

export default App;
