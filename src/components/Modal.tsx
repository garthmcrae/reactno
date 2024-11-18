import { CSSProperties, ReactNode, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import { Close } from "./Close";
import { FocusTrap } from "./FocusTrap";
import { border, animationFadeInUp, padding } from "../constants/styles";
import { useOnKeydown } from "../hooks/useOnKeydown";

const close: CSSProperties = {
  position: "absolute",
  right: 16,
  top: 16,
};
const content: CSSProperties = {
  backgroundColor: "var(--background-color)",
  ...border,
  ...padding,
  transform: `translateY(0)`,
  transition: "background-color 100ms ease-in-out",
  zIndex: 2,
};
const modal: CSSProperties = {
  backgroundColor: "transparent",
  bottom: 0,
  left: 0,
  overflowY: "auto",
  padding: 32,
  position: "fixed",
  right: 0,
  top: 0,
  zIndex: 2,
};

export const Modal = ({
  children,
  name,
  nested,
}: {
  children: ReactNode;
  name: string;
  nested?: boolean;
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    if (!nested) document.body.style.overflow = "hidden";
    setShowModal(true);
  };
  const handleHideModal = () => {
    if (!nested) document.body.style.overflow = "unset";
    setShowModal(false);
    if (ref.current) {
      ref.current.focus();
    }
  };
  useOnKeydown("Escape", handleHideModal);
  return (
    <>
      <Button aria-label="show modal" ref={ref} onClick={handleShowModal}>
        {name}
      </Button>
      {showModal &&
        createPortal(
          <div style={modal}>
            <FocusTrap>
              <div style={animationFadeInUp}>
                <div style={content}>
                  {children}
                  <div style={close}>
                    <Close aria-label="dismiss" onClick={handleHideModal} />
                  </div>
                </div>
              </div>
            </FocusTrap>
          </div>,
          document.body
        )}
    </>
  );
};
