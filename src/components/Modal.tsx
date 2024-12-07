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
  transition: "background-color 100ms ease-in-out, color 100ms ease-in-out",
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
  button,
  nested,
}: {
  children: ReactNode;
  button: string;
  nested?: boolean;
}) => {
  const refButton = useRef<HTMLButtonElement>(null);
  const refModal = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    if (!nested) document.body.style.overflow = "hidden";
    setShowModal(true);
  };
  const handleHideModal = () => {
    if (!nested) document.body.style.overflow = "unset";
    setShowModal(false);
    if (refButton.current) {
      refButton.current.focus();
    }
  };
  const containsFocus = () =>
    refModal.current
      ? refModal.current && refModal.current.contains(document.activeElement)
      : false;
  useOnKeydown("Escape", handleHideModal, containsFocus);
  return (
    <>
      <Button aria-label="show modal" ref={refButton} onClick={handleShowModal}>
        {button}
      </Button>
      {showModal &&
        createPortal(
          <div style={modal} ref={refModal}>
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
