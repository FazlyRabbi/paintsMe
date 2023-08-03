import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import { Accordion } from "flowbite-react";

export default function Faq() {
  return (
    <section>
      <Header />
      <div className="faq container  py-6 mx-auto">
        <div className="faq-content">
          <h1
            className="faq-title text-[60px] font-bold mt-[2rem]
         
          "
          >
            Help & FAQ
          </h1>

          <sapn className=" border-b-8 border-[#DDDDDD] mt-[3rem] block w-[10rem]"></sapn>

          <p className="faq-des text-[23px] mt-[4rem] border-l-4 border-primary  pl-3">
            We are here to help you. Find an answer to all your <br /> printing
            questions below. If not, get in touch with us.
          </p>
        </div>

        <div className="faq-accordion mt-[5rem] grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="faq-title font-bold text-[30px] mb-[1rem]">
              General
            </h1>
            <Accordion alwaysOpen="true"  className="mb-2">
              <Accordion.Panel>
                <Accordion.Title className="p-3 font-bold text-black">
                  What is Flowbite?
                </Accordion.Title>
                <Accordion.Content className="p-3 bg-[#EFEFEF]">
                  <p className="mb-2">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion alwaysOpen="true" className="mb-2">
              <Accordion.Panel>
                <Accordion.Title className="p-3 font-bold text-black">
                  What is Flowbite?
                </Accordion.Title>
                <Accordion.Content className="p-3 bg-[#EFEFEF]">
                  <p className="mb-2">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion alwaysOpen="true" className="mb-2">
              <Accordion.Panel>
                <Accordion.Title className="p-3 font-bold text-black">
                  What is Flowbite?
                </Accordion.Title>
                <Accordion.Content className="p-3 bg-[#EFEFEF]">
                  <p className="mb-2">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion alwaysOpen="true" className="mb-2">
              <Accordion.Panel>
                <Accordion.Title className="p-3 font-bold text-black">
                  What is Flowbite?
                </Accordion.Title>
                <Accordion.Content className="p-3 bg-[#EFEFEF]">
                  <p className="mb-2">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <div className="mt-[1.5rem]">
              <h1 className="faq-title font-bold text-[30px] mb-[1rem]">
                Orders
              </h1>
              <Accordion alwaysOpen="true" className="mb-2">
                <Accordion.Panel>
                  <Accordion.Title className="p-3 font-bold text-black">
                    What is Flowbite?
                  </Accordion.Title>
                  <Accordion.Content className="p-3 bg-[#EFEFEF]">
                    <p className="mb-2">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
              <Accordion alwaysOpen="true" className="mb-2">
                <Accordion.Panel>
                  <Accordion.Title className="p-3 font-bold text-black">
                    What is Flowbite?
                  </Accordion.Title>
                  <Accordion.Content className="p-3 bg-[#EFEFEF]">
                    <p className="mb-2">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
              <Accordion alwaysOpen="true" className="mb-2">
                <Accordion.Panel>
                  <Accordion.Title className="p-3 font-bold text-black">
                    What is Flowbite?
                  </Accordion.Title>
                  <Accordion.Content className="p-3 bg-[#EFEFEF]">
                    <p className="mb-2">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
              <Accordion alwaysOpen="true" className="mb-2">
                <Accordion.Panel>
                  <Accordion.Title className="p-3 font-bold text-black">
                    What is Flowbite?
                  </Accordion.Title>
                  <Accordion.Content className="p-3 bg-[#EFEFEF]">
                    <p className="mb-2">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
            <div className="mt-[1.5rem]">
              <h1 className="faq-title font-bold text-[30px] mb-[1rem]">
                Printing
              </h1>
              <Accordion alwaysOpen="true" className="mb-2">
                <Accordion.Panel>
                  <Accordion.Title className="p-3 font-bold text-black">
                    What is Flowbite?
                  </Accordion.Title>
                  <Accordion.Content className="p-3 bg-[#EFEFEF]">
                    <p className="mb-2">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
              <Accordion alwaysOpen="true" className="mb-2">
                <Accordion.Panel>
                  <Accordion.Title className="p-3 font-bold text-black">
                    What is Flowbite?
                  </Accordion.Title>
                  <Accordion.Content className="p-3 bg-[#EFEFEF]">
                    <p className="mb-2">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
              <Accordion alwaysOpen="true" className="mb-2">
                <Accordion.Panel>
                  <Accordion.Title className="p-3 font-bold text-black">
                    What is Flowbite?
                  </Accordion.Title>
                  <Accordion.Content className="p-3 bg-[#EFEFEF]">
                    <p className="mb-2">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
              <Accordion alwaysOpen="true" className="mb-2">
                <Accordion.Panel>
                  <Accordion.Title className="p-3 font-bold text-black">
                    What is Flowbite?
                  </Accordion.Title>
                  <Accordion.Content className="p-3 bg-[#EFEFEF]">
                    <p className="mb-2">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
          <div>
            <h1 className="faq-title font-bold text-[30px] mb-[1rem]">
              File Preparation
            </h1>
            <Accordion alwaysOpen="true" className="mb-2">
              <Accordion.Panel>
                <Accordion.Title className="p-3 font-bold text-black">
                  What is Flowbite?
                </Accordion.Title>
                <Accordion.Content className="p-3 bg-[#EFEFEF]">
                  <p className="mb-2">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion alwaysOpen="true" className="mb-2">
              <Accordion.Panel>
                <Accordion.Title className="p-3 font-bold text-black">
                  What is Flowbite?
                </Accordion.Title>
                <Accordion.Content className="p-3 bg-[#EFEFEF]">
                  <p className="mb-2">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion alwaysOpen="true" className="mb-2">
              <Accordion.Panel>
                <Accordion.Title className="p-3 font-bold text-black">
                  What is Flowbite?
                </Accordion.Title>
                <Accordion.Content className="p-3 bg-[#EFEFEF]">
                  <p className="mb-2">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion alwaysOpen="true" className="mb-2">
              <Accordion.Panel>
                <Accordion.Title className="p-3 font-bold text-black">
                  What is Flowbite?
                </Accordion.Title>
                <Accordion.Content className="p-3 bg-[#EFEFEF]">
                  <p className="mb-2">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion alwaysOpen="true" className="mb-2">
              <Accordion.Panel>
                <Accordion.Title className="p-3 font-bold text-black">
                  What is Flowbite?
                </Accordion.Title>
                <Accordion.Content className="p-3 bg-[#EFEFEF]">
                  <p className="mb-2">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion alwaysOpen="true" className="mb-2">
              <Accordion.Panel>
                <Accordion.Title className="p-3 font-bold text-black">
                  What is Flowbite?
                </Accordion.Title>
                <Accordion.Content className="p-3 bg-[#EFEFEF]">
                  <p className="mb-2">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion alwaysOpen="true" className="mb-2">
              <Accordion.Panel>
                <Accordion.Title className="p-3 font-bold text-black">
                  What is Flowbite?
                </Accordion.Title>
                <Accordion.Content className="p-3 bg-[#EFEFEF]">
                  <p className="mb-2">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div>
      <FooterNew />
    </section>
  );
}
