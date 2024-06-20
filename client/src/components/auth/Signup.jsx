import { Input, Button } from "@nextui-org/react";

export default function SignUpForm() {
  return (
    <form className="flex flex-col gap-4 h-[300px]">
      <Input
        isRequired
        label="Name"
        placeholder="Enter your name"
        type="text"
        size="lg"
        labelPlacement="outside"
      />
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
      <div className="flex gap-4 justify-end">
        <Button fullWidth color="primary" size="lg">
          Sign up
        </Button>
      </div>
    </form>
  );
}
