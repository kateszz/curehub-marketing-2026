"use client";

import { useEffect, useState } from "react";

/**
 * True only on devices driven by a real cursor.
 *
 * Starts `false` — which is both the server-rendered answer and the safe one,
 * since a touch device that briefly thinks it has a mouse is the failure we
 * care about, not the other way round.
 */
export function useFinePointer() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return fine;
}
