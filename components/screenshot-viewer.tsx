"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
export function ScreenshotViewer({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLAnchorElement>(null);
  const [image, setImage] = useState(src);
  const previousOverflow = useRef("");
  const isOpen = useRef(false);
  useEffect(
    () => () => {
      if (isOpen.current)
        document.body.style.overflow = previousOverflow.current;
    },
    [],
  );
  const close = () => dialog.current?.close();
  return (
    <>
      <a
        href={src}
        className="screenshot-open"
        ref={trigger}
        aria-label="Inspect full screen — original development screenshot"
        aria-haspopup="dialog"
        onClick={(event) => {
          event.preventDefault();
          isOpen.current = true;
          setImage(trigger.current?.querySelector("img")?.currentSrc || src);
          previousOverflow.current = document.body.style.overflow;
          document.body.style.overflow = "hidden";
          dialog.current?.showModal();
        }}
      >
        {children}
        <span className="screenshot-affordance">
          Inspect full screen <span aria-hidden="true">↗</span>
        </span>
      </a>
      <dialog
        className="image-dialog"
        ref={dialog}
        aria-label="Original QueueLess development screenshot"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onClose={() => {
          isOpen.current = false;
          document.body.style.overflow = previousOverflow.current;
          trigger.current?.focus();
        }}
      >
        <div className="image-dialog-toolbar">
          <p>Original development screenshot · synthetic data</p>
          <button onClick={close} aria-label="Close full-screen screenshot">
            Close ×
          </button>
        </div>
        <div className="image-dialog-scroll">
          <img src={image} alt={alt} width="1366" height="1198" />
        </div>
      </dialog>
    </>
  );
}
