"use client";

import { doLogout } from "@/app/action";
import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/models/ProductModel";

interface User {
    email: string;
    id: string;
    image?: string;
    name: string;
    products: [];
}

interface SessionData {
    user: User;
    handleLogout: () => void;
}

interface Session {
    id: string;
    username: string;
    image?: string;
    email: string;
    products: [];
}

const IntitialValues: SessionContextType = {
    session: null,
    handleLogout: async () => {},
    products: null,
};

interface SessionContextType {
    session: Session | null;
    handleLogout: () => Promise<void>;
    products: Product[] | null;
}

export const SessionContext = createContext<SessionContextType>(IntitialValues);

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    const [session, setSession] = useState<Session | null>(null);
    const [products, setProducts] = useState<Product[] | null>(null);

    const fetchSession = async (): Promise<void> => {
        try {
            const response = await fetch("/api/session");
            if (!response.ok) {
                throw new Error("Network Response was not ok");
            }
            const sessionData: SessionData = await response.json();

            if (sessionData.user) {
                const session: Session = {
                    username: sessionData.user.name,
                    image: sessionData.user.image || undefined,
                    id: sessionData.user.id,
                    email: sessionData.user.email,
                    products: sessionData.user.products,
                };
                setSession(session);
            } else {
                console.warn("No user found in session data");
                setSession(null);
            }
        } catch (error) {
            console.log("Error fetching session data:", error);
            setSession(null);
        }
    };

    const fetchProducts = async (): Promise<void> => {
        try {
            const res = await fetch("/api/product", {
                method: "GET",
            });
            if (res.status === 200) {
                const data = await res.json();
                setProducts(data.products);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = async (): Promise<void> => {
        await doLogout();
        setSession(null);
        router.push("/");
    };

    useEffect(() => {
        fetchSession();
        fetchProducts();
    }, []);

    return <SessionContext.Provider value={{ products, session, handleLogout }}>{children}</SessionContext.Provider>;
};

export default SessionProvider;
