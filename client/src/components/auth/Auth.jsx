import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import LoginForm from "./Login";
import SignUpForm from "./Signup";
import PropTypes from "prop-types";

export default function Auth({ initialTab }) {
  const [selected, setSelected] = React.useState(initialTab);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${selected}`);
  }, [navigate, selected]);

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <Card className="max-w-full w-[340px] min-h-[440px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="lg"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
            color="primary"
            variant="solid"
            classNames={{
              cursor: "w-full bg-primary",
              tab: "min-w-fit h-16",
              tabContent:
                "group-data-[selected=true]:text-[white] font-extrabold font-app",
            }}
          >
            <Tab key="login" title="Login">
              <LoginForm />
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <SignUpForm />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}

Auth.propTypes = {
  initialTab: PropTypes.string.isRequired,
};
