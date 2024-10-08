import React from "react";
import CreateProvider from "@/context/CreateProvider";

const CreateLayout = ({ children }: { children: React.ReactNode }) => {
    return <CreateProvider>{children}</CreateProvider>;
};

export default CreateLayout;
