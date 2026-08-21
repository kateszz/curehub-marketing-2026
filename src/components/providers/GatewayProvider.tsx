"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type GatewayContextValue = {
  gatewayIsActive: boolean;
  setGatewayIsActive: (active: boolean) => void;
};

const GatewayContext = createContext<GatewayContextValue | null>(null);

export function useGateway() {
  const ctx = useContext(GatewayContext);
  if (!ctx) {
    throw new Error("useGateway must be used inside <GatewayProvider>.");
  }
  return ctx;
}

export function GatewayProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // The gateway only exists on the home page — every other route in this
  // layout starts (and stays) uncovered.
  const [gatewayIsActive, setGatewayIsActive] = useState(pathname === "/");

  useEffect(() => {
    setGatewayIsActive(pathname === "/");
  }, [pathname]);

  // Lock the page while the gateway covers it. `scrollbar-gutter: stable` in
  // globals.css keeps this from shifting the layout underneath.
  useEffect(() => {
    if (!gatewayIsActive) return;
    const root = document.documentElement;
    // Re-entering the gateway should hand the page back from the top.
    window.scrollTo(0, 0);
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = "";
    };
  }, [gatewayIsActive]);

  return (
    <GatewayContext.Provider value={{ gatewayIsActive, setGatewayIsActive }}>
      {children}
    </GatewayContext.Provider>
  );
}
