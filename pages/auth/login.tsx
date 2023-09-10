import { Button, Image, TextInput } from "@mantine/core";
import Router from "next/router";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          src="/logo512.png"
          alt="logo"
          className="mix-blend-multiply"
          width={196}
          height={196}
        />
      </div>
      <div className="px-8">
        <TextInput label="Login" placeholder="my_nickname" />
        <TextInput
          label="Parola"
          type="password"
          placeholder="********"
          className="mt-4"
        />
        <div className="flex justify-end mt-4">
          <Button
            className="bg-[#333]"
            onClick={() => {
              localStorage.setItem("isLogged", "true");
              Router.push("/");
            }}
          >
            Logheaza-te
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
