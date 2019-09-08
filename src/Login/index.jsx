import React from "react";
import { FlexWrapper, Panel, Button } from "../Components";
import { Redirect } from "react-router-dom";
import { withAuth } from "../Auth";

export default withAuth(({ isAuthorized, authorize }) =>
  isAuthorized ? (
    <Redirect to="/" />
  ) : (
    <FlexWrapper>
      <Panel>
        <h1>Ви не авторизовані</h1>
        <Button onClick={authorize}>Авторизуватись</Button>
      </Panel>
    </FlexWrapper>
  )
);
