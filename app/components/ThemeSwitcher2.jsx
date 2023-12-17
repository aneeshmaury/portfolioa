"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import "@/app/components/themestyle.css";
function ThemeSwitcher2() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="segmented-control">
      <input type="radio" name="radio2" value="3" id="tab-1" />
      <label
        for="tab-1"
        className="segmented-control__1"
        onClick={() => setTheme("light")}
      >
        <p>Light</p>
      </label>

      <input type="radio" name="radio2" value="4" id="tab-2" />
      <label
        for="tab-2"
        className="segmented-control__2"
        onClick={() => setTheme("dark")}
      >
        <p>Dark</p>
      </label>

      <input type="radio" name="radio2" value="5" id="tab-3" />
      <label
        for="tab-3"
        className="segmented-control__3"
        onClick={() => setTheme("modern")}
      >
        <p>Modern</p>
      </label>

      <div className="segmented-control__color"></div>
    </div>
  );
}

export default ThemeSwitcher2;
