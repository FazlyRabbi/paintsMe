import { useSession, signIn, signOut } from "next-auth/react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";

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
    <div className=" flex justify-center items-center   mt-[10rem]">
      <Card color="transparent" shadow={false}>
        <Typography variant="h3" color="blue-gray">
          Admin Login
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 flex flex-col gap-6">
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

          <Button className="mt-6" fullWidth type="submit">
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
}
