import React from "react";
import { useState } from "react";
import { ServicesContainer } from "./QuestionElements";
import hoodie from '../../images/logo192.png';

const Cards = () => {

    const [flag, setFlag] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(flag == 'FSociety')
        {
            console.log('FLAG - shankarShaker69')
            alert("Yeahh! Right answer. Flag is in the console.")
        }
        else
        {
            alert("Are you komedy me !!")
        }
    }


  return (
    <ServicesContainer>

      <div class="card grid grid-cols-1 lg:grid-cols-3 lg:gap-8 justify-items-center mx-auto my-auto font-montserrat">


        <div class="py-10 hover:bg-white transition duration-300 ease-in hover:text-black font-montserrat text-white">
          <div class="rounded overflow-hidden shadow-lg shadow-green-400 hover:shadow-none w-96 h-96">
            <div class="flex flex-row justify-items-center">
              <h1 class="text-xl w-full text-center">Flag 1 </h1>
              <img src="flagJodc.png" class="h-14" alt="" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">5 Points</div>
              <p>
                I really wanted to talk to her but all she talked was gibberish.{" "}
                <a
                  href="https://drive.google.com/uc?export=download&id=1vVHpIbYfZV3SisfIGR5LVAx-rIPXEjGw"
                  class="text-orange-500 hover:text-blue-700"
                  target="_blank"
                >
                  [Click Here!]
                </a>
              </p>

              <h3 className=" text-red-900 mt-7">Hint-</h3>
              <p>1. Computers cannot talk to us directly.</p>
            </div>
          </div>
        </div>



        <div class="py-10 hover:bg-white transition font-montserrat duration-300 ease-in hover:text-black text-white">
          <div class="rounded overflow-hidden shadow-lg max-w-xl hover:shadow-none shadow-green-400 w-96 h-96">
            <div class="flex flex-row justify-items-center">
              <h1 class="text-xl w-full text-center">Flag 2 </h1>
              <img src="flagJodc.png" class="h-14" alt="" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">5 Points</div>
              <p>
                This code gave my brain a hard time.{" "}
                <a
                  href="https://drive.google.com/uc?export=download&id=1k9-GjH0r-Ujan9Yo5rzCMB4kHqXp5kzw"
                  class="text-orange-500 hover:text-blue-700"
                  target="_blank"
                >
                  [Click Here!]
                </a>
              </p>
            </div>
          </div>
        </div>



        <div class="py-10 hover:bg-white transition duration-300 ease-in hover:text-black text-white">
          <div class="rounded overflow-hidden shadow-lg max-w-xl hover:shadow-none shadow-green-400 w-96 h-96 ">
            <div class="flex flex-row justify-items-center">
              <h1 class="text-xl w-full text-center">Flag 3 </h1>
              <img src="flagJodc.png" class="h-14" alt="" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">5 Points</div>
              <img src={hoodie} class="h-40 ml-24" alt="" />
              <h3 className=" text-red-900">Hint-</h3>
              <h3>Hoodie is the cape of coders. It hides their alter ego.</h3>
            </div>
          </div>
        </div>



        <div class="py-10 hover:bg-white transition duration-300 ease-in hover:text-black text-white ">
          <div class="rounded overflow-hidden shadow-lg max-w-xl hover:shadow-none shadow-green-400 w-96 h-96 ">
            <div class="flex flex-row justify-items-center">
              <h1 class="text-xl w-full text-center">Flag 4 </h1>
              <img src="flagJodc.png" class="h-14" alt="" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">5 Points</div>
              <img
                src="https://media.giphy.com/media/xT5LMYaKVH7iTYzwju/giphy.gif"
                class="h-40 ml-6"
                alt=""
              />

              <p className=" mt-3">Here's a fun interactive piece of code.</p>
              <h3>
                <a
                  href="https://drive.google.com/uc?export=download&id=1GUn3LW1lDPw88N4gBhckRcmTiJclQeTG"
                  class="text-orange-500 hover:text-blue-700"
                  target="_blank"
                >
                  [Click Here!]
                </a>
              </h3>
            </div>
          </div>
        </div>



        
        <div class="py-10 hover:bg-white transition duration-300 ease-in hover:text-black text-white">
          <div class="rounded overflow-hidden shadow-lg shadow-green-400 hover:shadow-none w-96 h-96">
            <div class="flex flex-row justify-items-center">
              <h1 class="text-xl w-full text-center">Flag 5 </h1>
              <img src="flagJodc.png" class="h-14" alt="" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">10 Points</div>
              <p> Find the 
              <a class="text-orange-500 hover:text-blue-700 mx-auto mt-3 ml-2" href="https://github.com/pradyotRanjan/findTheFlag">
                   Flag here
              </a>
              </p>

              <p><span className=" text-red-900">Hint</span>-<a className="ml-2 hover:text-blue-700" href="https://youtu.be/dQw4w9WgXcQ">Video Tutorial</a></p>

            </div>
          </div>
        </div>




        <div class="py-10 hover:bg-white transition duration-300 ease-in hover:text-black text-white ">
          <div class="rounded overflow-hidden shadow-lg max-w-xl hover:shadow-none shadow-green-400 w-96 h-96 ">
            <div class="flex flex-row justify-items-center">
              <h1 class="text-xl w-full text-center">Flag 6 </h1>
              <img src="flagJodc.png" class="h-14" alt="" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">15 Points</div>
              <label>Enter your command</label>
              <input class=" mt-2 rounded-lg my-3 bg-gray-300 text-black" onChange={(e) => setFlag(e.target.value)} />
              <button
                type="submit"
                id="myButton"
                class="bg-orange-700 rounded-lg px-2"
                onClick={handleSubmit}
              >
                Submit
              </button>

              <p>
                Can you decipher{" "}
                <a
                  href="https://drive.google.com/uc?export=download&id=1vIyFcSj6rNzR2j2U4BoZ3mCIOHmMjDQi"
                  class="text-orange-500 hover:text-blue-700"
                  target="_blank"
                >
                  this file
                </a>
                ?{" "}
                <a
                  href="https://drive.google.com/uc?export=download&id=1p546L8cayOwSzZDalJpq3uHJf_n-mk08"
                  class="text-orange-500 hover:text-blue-700"
                  target="_blank"
                >
                  {" "}
                  This script
                </a>{" "}
                might help. Ohh!! wait but what this Submit box is doing here?
                Here's a{" "}
                <a
                  href="https://drive.google.com/uc?export=download&id=1QR7MH81EFEufcBMIh_aYCSXoJ-mFsiu8"
                  class="text-orange-500 hover:text-blue-700"
                  target="_blank"
                >
                  {" "}
                  Password{" "}
                </a>
                you might need.
              </p>

              <h3 className=" mt-2">
                <span className=" text-red-900">Hint</span> - If you can not find the flag, try to console yourself.
              </h3>
            </div>
          </div>
        </div>



        <div class="py-10 hover:bg-white transition duration-300 ease-in hover:text-black text-white">
          <div class="rounded overflow-hidden shadow-lg shadow-green-400 hover:shadow-none w-96 h-96">
            <div class="flex flex-row justify-items-center">
              <h1 class="text-xl w-full text-center">Flag 7 </h1>
              <img src="flagJodc.png" class="h-14" alt="" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">15 Points</div>
              <p>
                POV: You were too busy playing games that you forgot to inspect your life.
              </p>

              <a
                  href="https://simon-game-for-osdc.vercel.app/"
                  class="text-orange-500 hover:text-blue-700 mx-auto mt-3"
                  target="_blank"
                >
                    Play Here.
                </a>

              <h3 className=" mt-9 text-red-900">Hint-</h3>
              <p>Game distracts.</p>
            </div>
          </div>
        </div>






        <div class="py-10 hover:bg-white transition duration-300 ease-in hover:text-black text-white ">
          <div class="rounded overflow-hidden shadow-lg max-w-xl hover:shadow-none shadow-green-400 w-96 h-96 ">
            <div class="flex flex-row justify-items-center">
              <h1 class="text-xl w-full text-center">Flag 8 </h1>
              <img src="flagJodc.png" class="h-14" alt="" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">25 Points</div>
              <p>
                Eliot was suspicious about unusual login activity in his team so
                he decided to phish the login website and analyse the traffic
                flow of one of the team member. Help Eliot retrieve sensitive
                info. Hint: http requests have a major security flaw.
              </p>

              <p>
                <a
                  href=" https://drive.google.com/uc?export=download&id=1nEQyfEi4XbbrOPW96sBHzgPoo19tlV1f"
                  class="text-orange-500 hover:text-blue-700"
                  target="_blank"
                >
                  [Click Me!]
                </a>
              </p>
            </div>
          </div>
        </div>



        <div class="py-10 font-montserrat hover:bg-white transition duration-300 ease-in hover:text-black text-white">
          <div class="rounded overflow-hidden shadow-lg shadow-green-400 hover:shadow-none w-96 h-96">
            <div class="flex flex-row justify-items-center">
              <h1 class="text-xl w-full text-center">Flag 9 </h1>
              <img src="flagJodc.png" class="h-14" alt="" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">30 Points</div>
              <p>
                Want some real world challenge ? Scan into the servers of JIIT and find out what version and OS they are using.
              </p>

              <h3 className=" mt-7 text-red-900">Hint-</h3>
              <p className=" mt-2">Use Nmap( a powerful open source pentesting tool).</p>
            </div>
          </div>
        </div>
        



      </div>
    </ServicesContainer>
  );
};

export default Cards;
