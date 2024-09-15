"use client";

import { useState, useContext, useEffect, createContext } from "react";

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
    const [session, setSession] = useState<null>(null);
};
