import { useSession, signIn, signOut } from "next-auth/react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import Link from "next/link";

export default function index() {
  const init = {
    Email: "",
    Password: "",
  };
  const [admin, setAdmin] = useState(init);

  // const { data: session, status } = useSession();
  // if (status === "authenticated") {
  //   console.log(session);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      ...admin,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <section className=" h-[100vh] w-full   bg1login  items-center  flex justify-center ">
      <div className=" p-10 shadow-md  w-[30rem] h-[25rem] bg-white rounded-[15px] ">
        <div>
          <h1 className="  text-[1.5rem]    font-extrabold tracking-tight text-[#323E48] ">
            Admin Login 
          </h1>

          <div className="mt-5">
            <h3 className="  mb-4 font-bold text-[#5f6c77] ">Email</h3>

            <form className=" mb-2 " onSubmit={handleSubmit}>
              <div>
                <Input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="!border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 focus:!border-blue-500 focus:!border-t-blue-500 focus:ring-blue-500/20"
                  labelProps={{
                    className: "hidden",
                  }}
                  value={admin.Email}
                  onChange={(e) => {
                    setAdmin({ ...admin, Email: e.target.value });
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                />
              </div>
              <div className="mt-5">
                <div className="flex justify-between ">
                  <div>
                    <h3 className=" mb-4 font-bold text-[#5f6c77]">Password</h3>
                  </div>
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="password"
                    className="!border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 focus:!border-blue-500 focus:!border-t-blue-500 focus:ring-blue-500/20"
                    required
                    labelProps={{
                      className: "hidden",
                    }}
                    value={admin.Password}
                    onChange={(e) => {
                      setAdmin({ ...admin, Password: e.target.value });
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>
                <div className="mt-5">
                  <div className="mt-5">
                    <Button className="mt-6" fullWidth type="submit">
                      Login
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
