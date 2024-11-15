"use client";

import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor"),
      follower = document.getElementById("aura");
    // links = document.getElementsByTagName("a");

    const moveCursor = (event: MouseEvent) => {
      const mouseX = event.clientX,
        mouseY = event.clientY;

      if (cursor && follower) {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;

        follower.style.left = `${mouseX - 24}px`;
        follower.style.top = `${mouseY - 24}px`;
        cursor.classList.remove("hidden");
        follower.classList.remove("hidden");
      }
    };

    // for (let i = 0; i < links.length; i++) {
    //   links[i].addEventListener("mouseover", () => {
    //     cursor.classList.add("active");
    //     follower.classList.add("active");
    //   });

    //   links[i].addEventListener("mouseout", () => {
    //     cursor.classList.remove("active");
    //     follower.classList.remove("active");
    //   });
    // }

    window.addEventListener("mousemove", moveCursor);

    window.addEventListener("mouseout", () => {
      if (cursor && follower) {
        cursor.classList.add("hidden");
        follower.classList.add("hidden");
      }
    });
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="aura"></div>
    </>
  );
};

export default Cursor;
