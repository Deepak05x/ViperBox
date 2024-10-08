import React from "react";
import CreateProvider from "@/context/CreateProvider";

interface Props {
    children: React.ReactNode;
}

const CreateLayout: React.FC<Props> = ({ children }) => {
    return <CreateProvider>{children}</CreateProvider>;
};

export default CreateLayout;
