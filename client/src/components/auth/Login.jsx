import { Input, Button } from "@nextui-org/react";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
        size="lg"
        labelPlacement="outside"
      />
      <Input
        isRequired
        label="Password"
        placeholder="Enter your password"
        type="password"
        size="lg"
        labelPlacement="outside"
      />
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" size="lg">
          Login
        </Button>
      </div>
    </form>
  );
}
